import { createClient } from '@/lib/supabase/client';
import CategoryLayout from '@/components/CategoryLayout';

export const revalidate = 0;

export default async function AnimePage() {
    const supabase = createClient();

    // Fetch Anime Articles
    const { data: articles } = await supabase
        .from('articles')
        .select('*')
        .eq('category', 'anime')
        .order('published_at', { ascending: false })
        .limit(20);

    const hasData = articles && articles.length > 0;
    const ACCENT_GOLD = '#FFB800';

    // Sub-Categories
    const subCategories = [
        { id: "Production Pipe", label: "Production Pipe" },
        { id: "Studio Leaks", label: "Studio Leaks" },
        { id: "Movie Intelligence", label: "Movie Intelligence" },
        { id: "Seasonal Tracker", label: "Seasonal Tracker" },
        { id: "Translation Hub", label: "Translation Hub" },
        { id: "Legacy IP", label: "Legacy IP" }
    ];

    // Static Data Fallback
    const staticData = {
        hero: {
            title: "Miyazaki's Final Slate Verified.",
            content: "Studio Ghibli internal timeline confirms one last production cycle before restructuring.",
            image_url: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80&w=1200",
            category: "Production Pipe",
            source: "S-Tier"
        },
        items: [
            {
                title: "Solo Leveling: Cour 2 Internal phase.",
                content: "Production timeline accelerated to meet Q3 release window.",
                image_url: "https://images.unsplash.com/photo-1614583225154-5feaba071595?auto=format&fit=crop&q=80&w=600",
                sub_category: "Production Pipe",
                source: "Seoul_Node",
                legitimacy_score: 92
            },
            {
                title: "OPM Season 3: Frame analysis.",
                content: "Leaked keyframes suggest substantial budget increase for fight choreography.",
                image_url: "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?auto=format&fit=crop&q=80&w=600",
                sub_category: "Studio Leaks",
                source: "Verified"
            },
            {
                title: "Spy x Family: Box Office Synthesis.",
                content: "Global revenue projections exceed theatrical targets by 200%.",
                image_url: "https://images.unsplash.com/photo-1627337194440-4966601f074d?auto=format&fit=crop&q=80&w=600",
                sub_category: "Movie Intelligence"
            },
            {
                title: "Dragon Ball Daima: Script details.",
                content: "Canonical timelines clarified in new writer interview.",
                image_url: "https://images.unsplash.com/photo-1607604276483-4efdd6d4adbb?auto=format&fit=crop&q=80&w=600",
                sub_category: "Legacy IP"
            },
            {
                title: "One Piece: Elbaf Arc.",
                content: "Oda's editor hints at 2026 completion date in leaked interview.",
                image_url: "https://images.unsplash.com/photo-1614583225154-5feaba071595?auto=format&fit=crop&q=80&w=600",
                sub_category: "Legacy IP"
            },
            {
                title: "Crunchyroll Subs Glitch.",
                content: "Translation errors in latest hit spark community outrage.",
                image_url: "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?auto=format&fit=crop&q=80&w=600",
                sub_category: "Translation Hub"
            }
        ]
    };

    const hero = hasData && articles[0] ? articles[0] : staticData.hero;
    const dbItems = hasData ? articles.slice(1) : [];
    const gridItems = [...dbItems, ...staticData.items].slice(0, 10);

    return (
        <CategoryLayout
            title="Anime"
            accentColor={ACCENT_GOLD}
            categorySlug="anime"
            subCategories={subCategories}
            heroData={hero}
            gridItems={gridItems}
            navTitle="Akihabara Link Node // Status: Active"
            navSubtitle="SENTIMENT: VOLATILE<br />ANALYSIS: VERIFIED_CORE"
        />
    );
}
