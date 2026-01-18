import { createClient } from '@/lib/supabase/client';
import CategoryLayout from '@/components/CategoryLayout';

export const revalidate = 0;

export default async function GamingPage() {
    const supabase = createClient();

    // Fetch Gaming Articles
    const { data: articles } = await supabase
        .from('articles')
        .select('*')
        .eq('category', 'gaming')
        .order('published_at', { ascending: false })
        .limit(20); // Increased limit for potential filtering

    const hasData = articles && articles.length > 0;
    const ACCENT_ORANGE = '#FF5F00';

    // Sub-Categories Configuration
    const subCategories = [
        { id: "Hardware Leaks", label: "Hardware Leaks" },
        { id: "Industry Business", label: "Industry Business" },
        { id: "Studio Intel", label: "Studio Intel" },
        { id: "Dev Builds", label: "Dev Builds" },
        { id: "Meta/Patch Analysis", label: "Meta/Patch Analysis" },
        { id: "eSports Ops", label: "eSports Ops" }
    ];

    // Static Data Fallback
    const staticData = {
        hero: {
            title: "The 2nm Revolution: Chipset Leak.",
            content: "Supply chain logs confirm tape-out for unannounced console hardware targets. Yield logs confirm 4nm architecture with dedicated neural upscaling nodes.",
            image_url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
            category: "Hardware Leaks",
            source: "S-Tier"
        },
        items: [
            {
                title: "VR Sense-Link Patent.",
                content: "Sony files new haptic feedback logic for unannounced headset.",
                image_url: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800",
                sub_category: "Hardware Leaks",
                source: "USPTO_LOG",
                legitimacy_score: 95
            },
            {
                title: "FPS Frame-Gen Hack.",
                content: "Modders unlock 120fps on locked console firmware via memory injection.",
                image_url: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800",
                sub_category: "Dev Builds",
                source: "Verified"
            },
            {
                title: "Indie Market Crash.",
                content: "Data suggest 40% revenue drop for non-subscription titles.",
                image_url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
                sub_category: "Industry Business"
            },
            {
                title: "Studio Monitor: Rockstar North.",
                content: "New patent for foliage simulation verified.",
                image_url: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?auto=format&fit=crop&q=80&w=800",
                sub_category: "Studio Intel"
            },
            {
                title: "eSports Salary Cap Leak.",
                content: "League operations discussing hard cap for 2026 season.",
                image_url: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
                sub_category: "eSports Ops"
            },
            {
                title: "Ranked Meta Shift.",
                content: "Tank meta dominance ends with patch 14.2.",
                image_url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800",
                sub_category: "Meta/Patch Analysis"
            }
        ]
    };

    const hero = hasData && articles[0] ? articles[0] : staticData.hero;
    // Prefer database items, but if we don't have enough, append static ones to fill the grid for demo
    const dbItems = hasData ? articles.slice(1) : [];
    const gridItems = [...dbItems, ...staticData.items].slice(0, 10); // Ensure we have enough items to demo filtering

    return (
        <CategoryLayout
            title="Gaming"
            accentColor={ACCENT_ORANGE}
            categorySlug="gaming"
            subCategories={subCategories}
            heroData={hero}
            gridItems={gridItems}
            navTitle="Nexus Core Node // Status: On-Line"
            navSubtitle="SENTIMENT: VOLATILE<br />ANALYSIS: VERIFIED_CORE"
        />
    );
}
