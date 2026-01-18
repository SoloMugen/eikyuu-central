import { createClient } from '@/lib/supabase/client';
import CategoryLayout from '@/components/CategoryLayout';

export const revalidate = 0;

export default async function TwitchDramaPage() {
    const supabase = createClient();

    // Fetch Twitch Articles (matching 'twitch' category in DB)
    const { data: articles } = await supabase
        .from('articles')
        .select('*')
        .eq('category', 'twitch')
        .order('published_at', { ascending: false })
        .limit(20);

    const hasData = articles && articles.length > 0;
    const ACCENT_PURPLE = '#9146FF';

    // Sub-Categories
    const subCategories = [
        { id: "Platform Policy", label: "Platform Policy" },
        { id: "Ban Intelligence", label: "Ban Intelligence" },
        { id: "Contract Leaks", label: "Contract Leaks" },
        { id: "Market Volatility", label: "Market Volatility" },
        { id: "Streamer Economics", label: "Streamer Economics" },
        { id: "Technical Ops", label: "Technical Ops" }
    ];

    // Static Data Fallback
    const staticData = {
        hero: {
            title: "Top Creator Indefinitely Banned: Synthesis of Leaked Moderation Logs.",
            content: "Internal logs suggest the ban stems from repeated violations of platform safety protocols. We have cross-referenced three independent corroborating sources.",
            image_url: "https://images.unsplash.com/photo-1560253023-3ee5d6446bd4?auto=format&fit=crop&q=80&w=2000",
            category: "Critical Conflict",
            source: "L-Score: 84% Verified"
        },
        items: [
            {
                title: "Exposed: Discord Leaks Reveal Raid Coordination.",
                content: "Semantic analysis of leaked moderator logs confirms a 98% probability of organized platform disruption.",
                image_url: "https://images.unsplash.com/photo-1541167760496-1628856ab752?auto=format&fit=crop&q=80&w=800",
                sub_category: "Ban Intelligence",
                source: "Discord_Archives",
                legitimacy_score: 98
            },
            {
                title: "Platform Migration: Leaked Revenue Clauses.",
                content: "Financial synthesis of three leaked contracts confirms a significant shift in base payout structures for 2026.",
                image_url: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=800",
                sub_category: "Contract Leaks",
                source: "Portal_X"
            },
            {
                title: "Upcoming UI Overhaul: Ad-Centric Design.",
                content: "Early screenshots suggest ad-centric design shifts. System tracking secondary corroboration.",
                image_url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
                sub_category: "Technical Ops",
                source: "DEV_LOG"
            },
            {
                title: "Streamer Economics: VC Impact.",
                content: "How Platform Wars Affect Venture Capital in Tech.",
                image_url: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800",
                sub_category: "Streamer Economics",
                source: "VC_INSIDER"
            },
            {
                title: "New Hate Speech Policy Draft.",
                content: "Leaked internal memo outlines stricter penalties for grey-area conduct.",
                image_url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=600",
                sub_category: "Platform Policy"
            },
            {
                title: "Sub Count Inflation.",
                content: "Market volatility detected as prime sub numbers fluctuate wildly.",
                image_url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
                sub_category: "Market Volatility"
            }
        ]
    };

    const hero = hasData && articles[0] ? articles[0] : staticData.hero;
    const dbItems = hasData ? articles.slice(1) : [];
    const gridItems = [...dbItems, ...staticData.items].slice(0, 10);

    return (
        <CategoryLayout
            title="Twitch"
            accentColor={ACCENT_PURPLE}
            categorySlug="twitch"
            subCategories={subCategories}
            heroData={hero}
            gridItems={gridItems}
            navTitle="Social Intelligence Node // Status: Live"
            navSubtitle="SENTIMENT: VOLATILE<br />ANALYSIS: VERIFIED_CORE"
        />
    );
}
