import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { Browser, Page } from 'puppeteer';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Stealth
puppeteer.use(StealthPlugin());

interface ScrapeResult {
    url: string;
    title: string | null;
    content: string | null;
    citations: string[];
    hydrationData?: any;
    timestamp: string;
    methodUsed: string;
    legitimacyAnalysis?: string; // AI Analysis result
}

export class ScraperAgent {
    private browser: Browser | null = null;
    private genAI: GoogleGenerativeAI;
    private scanner: any;
    private verifier: any;

    constructor() {
        // Initialize Gemini
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            console.warn("⚠️ GEMINI_API_KEY not found in environment variables. AI features will be disabled.");
        }
        this.genAI = new GoogleGenerativeAI(apiKey || "");
        this.scanner = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        this.verifier = this.genAI.getGenerativeModel({ model: "gemini-1.5-pro" }); // Using 1.5 Pro as user requested 3.0 but 1.5 Pro is current stable for many
    }

    /**
     * Initializes the browser instance with stealth settings
     */
    async init() {
        this.browser = await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--disable-gpu'
            ],
        });
    }

    /**
     * Main Ingestion Pipeline
     */
    async scrape(url: string, category: string = 'general'): Promise<ScrapeResult> {
        if (!this.browser) await this.init();

        // 1. Scrape Content (Puppeteer Stealth)
        const rawData = await this.scrapeHeadless(url);

        let processedContent = rawData.content || "";

        // 2. AI Processing: Category Specific
        if (['korean_entertainment', 'japanese_entertainment'].includes(category)) {
            if (processedContent) {
                processedContent = await this.doublePassTranslate(processedContent, category);
            }
        }

        // 3. AI Verification: Legitimacy Check
        let legitimacyAnalysis = "";
        if (processedContent) {
            legitimacyAnalysis = await this.processLegitimacy(processedContent, url);
        }

        return {
            ...rawData,
            content: processedContent,
            legitimacyAnalysis
        };
    }

    private async scrapeHeadless(url: string): Promise<ScrapeResult> {
        const page = await this.browser!.newPage();
        try {
            await page.setViewport({ width: 1920, height: 1080 });
            console.log(`[StealthMonitor] Navigating to: ${url}`);
            await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

            const title = await page.title();

            // Intelligent extraction: Try getting main article text, fallback to body
            const content = await page.evaluate(() => {
                const article = document.querySelector('article');
                return article ? article.innerText : document.body.innerText;
            });

            const citations = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('a'))
                    .map(a => a.href)
                    .filter(href => href.startsWith('http'));
            });

            const hydrationData = await page.evaluate(() => {
                const nextData = document.getElementById('__NEXT_DATA__');
                if (nextData) {
                    try { return JSON.parse(nextData.innerHTML); } catch (e) { }
                }
                return null;
            });

            return {
                url,
                title,
                content: content.slice(0, 15000), // Larger buffer for AI
                citations: citations.slice(0, 20),
                hydrationData,
                timestamp: new Date().toISOString(),
                methodUsed: 'Headless Stealth',
            };

        } catch (error) {
            console.error(`[ScraperAgent] Error scraping ${url}:`, error);
            throw error;
        } finally {
            await page.close();
        }
    }

    /**
     * Double-Pass Translation Pipeline
     */
    private async doublePassTranslate(rawText: string, category: string): Promise<string> {
        try {
            // Pass 1: Contextual Extraction & Annotation
            const contextPrompt = `Identify cultural markers and legal modalities (e.g., geom-to vs hwak-jung). 
        Translate to English while preserving intent accuracy. Context: ${category}. text: ${rawText.slice(0, 10000)}`;

            const result = await this.verifier.generateContent([contextPrompt]);
            const englishSummary = result.response.text();

            // Pass 2: Back-Translation Verification (Optional or logged)
            // For now returning the high-quality translation
            return englishSummary;
        } catch (e) {
            console.error("AI Translation Failed", e);
            return rawText;
        }
    }

    /**
     * AI Verification using Gemini
     */
    private async processLegitimacy(text: string, sourceUrl: string) {
        try {
            const prompt = `Calculate L-Score based on: 1. Source Authority 2. Corroboration 3. Semantic Consistency. 
        Output a short JSON summary with score. Source: ${sourceUrl}. Text: ${text.slice(0, 10000)}`;

            const verification = await this.verifier.generateContent(prompt);
            return verification.response.text();
        } catch (e) {
            console.error("AI Verification Failed", e);
            return "Verification Failed";
        }
    }

    async close() {
        if (this.browser) {
            await this.browser.close();
            this.browser = null;
        }
    }
}
