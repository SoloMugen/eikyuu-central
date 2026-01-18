import { createClient } from '@/lib/supabase/client';
import CategoryLayout from '@/components/CategoryLayout';

export const revalidate = 0;

export default async function GeoPoliticsPage() {
    const supabase = createClient();

    // Fetch Geo-Politics Articles
    const { data: articles } = await supabase
        .from('articles')
        .select('*')
        .eq('category', 'geopolitics')
        .order('published_at', { ascending: false })
        .limit(20);

    const hasData = articles && articles.length > 0;
    const ACCENT_BLUE = '#2563EB';

    // Sub-Categories
    const subCategories = [
        { id: "Strategic Friction", label: "Strategic Friction" },
        { id: "Diplomatic Cables", label: "Diplomatic Cables" },
        { id: "Resource Wars", label: "Resource Wars" },
        { id: "Trade Intel", label: "Trade Intel" },
        { id: "Security Protocols", label: "Security Protocols" },
        { id: "Regional Nodes", label: "Regional Nodes" }
    ];

    // Static Data Fallback
    const staticData = {
        hero: {
            title: "Indo-Pacific Naval Drills: Primary Source Verification.",
            content: "Satellite thermal imaging confirms unannounced repositioning in neutral sectors. Conflict risk elevated.",
            image_url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000",
            category: "Strategic Hotspot",
            source: "L-Score: 92%"
        },
        items: [
            {
                title: "Arctic Submarine Activity.",
                content: "Official logs synthesis. Verified through deep-sea sensory nodes and official naval PR portals.",
                image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
                sub_category: "Strategic Friction",
                source: "Arctic_Sector",
                legitimacy_score: 98
            },
            {
                title: "Semiconductor Trade Pact.",
                content: "Comparison of the original English and Japanese drafts reveals 100% semantic alignment on key clauses.",
                image_url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
                sub_category: "Trade Intel",
                source: "Tokyo_Hub"
            },
            {
                title: "Rare Earth Mining Rights.",
                content: "Unverified reports from frontier. L-Score pending. System is scanning for second-tier corroboration.",
                image_url: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800",
                sub_category: "Resource Wars",
                source: "Border_Monitor"
            },
            {
                title: "Humanitarian Corridors.",
                content: "Established in Northern regions following primary agreement.",
                image_url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
                sub_category: "Diplomatic Cables",
                source: "UN_GENEVA"
            },
            {
                title: "Cyber-Defense Protocols.",
                content: "Activated in Baltic sectors; source logs verified.",
                image_url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
                sub_category: "Security Protocols"
            }
        ]
    };

    const hero = hasData && articles[0] ? articles[0] : staticData.hero;
    const dbItems = hasData ? articles.slice(1) : [];
    const gridItems = [...dbItems, ...staticData.items].slice(0, 10);

    return (
        <CategoryLayout
            title="Geo-Politics"
            accentColor={ACCENT_BLUE}
            categorySlug="geopolitics"
            subCategories={subCategories}
            heroData={hero}
            gridItems={gridItems}
            navTitle="Global Strategic Monitor // Node: Active"
            navSubtitle="Satellite Uplink: Established<br />Verification Protocol: L-Score Alpha"
        />
    );
}
