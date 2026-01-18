import { ScraperAgent } from '../lib/agents/ScraperAgent';
import { supabase } from '../lib/supabaseClient';
import fs from 'fs';
import path from 'path';

// Force node env for config
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

// Strict Sub-Category Definitions (Must Match Frontend)
const SUB_CATEGORIES: Record<string, string[]> = {
    'gaming': ["Hardware Leaks", "Industry Business", "Review Bombing", "Esports Economy", "Indie Breakouts"],
    'twitch-drama': ["Platform Policy", "Ban Intelligence", "Contract Leaks", "Meta Shift", "Platform Ops"], // Mapped from 'twitch'
    'twitch': ["Platform Policy", "Ban Intelligence", "Contract Leaks", "Meta Shift", "Platform Ops"], // Legacy key support
    'anime': ["Production Pipe", "Studio Leaks", "Merch Markets", "Seiyuu Industry", "Licensing Wars"],
    'science': ["Breaking Research", "Space & Physics", "Bio-Medical", "AI & Computation", "Environment"],
    'geo_politics': ["Strategic Friction", "Diplomatic Cables", "Resource Wars", "Cyber Statecraft", "Election Watch"],
    'entertainment': ["Hollywood Trades", "Indian Cinema", "East Asian Hub", "Box Office Mojo", "Streaming Strategy", "Award Analytics"]
};

async function main() {
    console.log('🚀 Starting Eikyuu News Ingestion Engine...');
    const scraper = new ScraperAgent();

    // Load config
    const configPath = path.join(process.cwd(), 'src/lib/config/ingestion-config.json');
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

    try {
        const categories = config.ingestion_targets;

        for (const [key, target] of Object.entries(categories)) {
            const categoryName = key.toLowerCase(); // Normalized 
            // Handle Twitch-Drama key mapping if config uses 'twitch'
            const subCatKey = categoryName === 'twitch' ? 'twitch-drama' : categoryName;
            const validSubs = SUB_CATEGORIES[subCatKey] || [];

            console.log(`\n📡 Processing Category: ${categoryName.toUpperCase()} (Targeting subs: ${validSubs.length})`);

            const sources = (target as any).sources || [];
            let articlesCount = 0;

            for (const source of sources) {
                console.log(`   - Scanning source: ${source}`);

                // DYNAMIC url based on category for meaningful data
                let targetUrl = '';
                if (key === 'gaming') targetUrl = 'https://www.ign.com/news';
                else if (key === 'twitch') targetUrl = 'https://www.dexerto.com/entertainment/';
                else if (key === 'anime') targetUrl = 'https://www.animenewsnetwork.com/news';
                else if (key === 'science') targetUrl = 'https://www.sciencedaily.com/news/top/science';
                else if (key === 'geo_politics' || key === 'geo-politics') targetUrl = 'https://www.reuters.com/world';
                else if (key === 'entertainment') targetUrl = 'https://variety.com';
                else continue;

                try {
                    // 1. Scrape with Strict Sub-Categories
                    const result = await scraper.scrape(targetUrl, categoryName, validSubs);

                    // 2. Parse Legitimacy (Handle JSON string or default)
                    let legitScore = 75;
                    let legitAnalysis = "Pending Analysis";
                    try {
                        if (result.legitimacyAnalysis) {
                            const parsed = JSON.parse(result.legitimacyAnalysis);
                            legitScore = parsed.score || 75;
                            legitAnalysis = parsed.analysis || result.legitimacyAnalysis;
                        }
                    } catch (e) {
                        // raw string fallback
                        legitAnalysis = result.legitimacyAnalysis || "Raw Analysis";
                    }

                    // 3. Upsert to DB
                    console.log(`     Data: ${result.title?.slice(0, 30)}... | Sub: ${result.subCategory}`);

                    const { error } = await supabase.from('articles').upsert({
                        url: result.url,
                        title: result.title || `News from ${source}`,
                        summary: result.content?.slice(0, 250) || "No summary available",
                        content: result.content,
                        category: categoryName,
                        sub_category: result.subCategory,
                        image_url: result.imageUrl,
                        image_prompt: result.imagePrompt,
                        source: source,
                        published_at: result.timestamp,
                        legitimacy_score: legitScore,
                        legitimacy_analysis: legitAnalysis
                    }, { onConflict: 'url' });

                    if (error) {
                        console.error('     ❌ DB Error:', error.message);
                    } else {
                        console.log('     ✅ Saved/Updated');
                        articlesCount++;
                    }

                } catch (e: any) {
                    console.error(`     ⚠️ Failed: ${e.message}`);
                }
            }

            // Log Run
            await supabase.from('ingestion_logs').insert({
                category: categoryName,
                status: 'success',
                articles_count: articlesCount,
                completed_at: new Date().toISOString()
            });
        }

    } catch (error) {
        console.error('🔥 Fatal Ingestion Error:', error);
    } finally {
        await scraper.close();
        console.log('\n🏁 Ingestion Complete.');
        process.exit(0);
    }
}

main();
