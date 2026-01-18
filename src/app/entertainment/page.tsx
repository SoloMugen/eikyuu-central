import { createClient } from '@/lib/supabase/client';
import CategoryLayout from '@/components/CategoryLayout';

export const revalidate = 0;

export default async function EntertainmentPage() {
    const supabase = createClient();

    // Fetch Entertainment Articles
    const { data: articles } = await supabase
        .from('articles')
        .select('*')
        .eq('category', 'entertainment')
        .order('published_at', { ascending: false })
        .limit(20);

    const hasData = articles && articles.length > 0;
    const ACCENT_FUCHSIA = '#D946EF';

    // Sub-Categories
    const subCategories = [
        { id: "Hollywood Trades", label: "Hollywood Trades" },
        { id: "Indian Cinema", label: "Indian Cinema" },
        { id: "East Asian Hub", label: "East Asian Hub" },
        { id: "Box Office Mojo", label: "Box Office Mojo" },
        { id: "Streaming Strategy", label: "Streaming Strategy" },
        { id: "Award Analytics", label: "Award Analytics" }
    ];

    // Static Data Fallback
    const staticData = {
        hero: {
            title: "The Sci-Fi Epic Returns: Final Casting Sheets Leaked.",
            content: "Internal agency memos confirm a surprise return of the original 1994 lead for the 2027 production cycle.",
            image_url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2000",
            category: "Global Exclusive",
            source: "S-Tier"
        },
        items: [
            {
                title: "Voter Sentiment Shift.",
                content: "Anonymized polling of 200 academy members reveals a significant swing away from studio-backed blockbusters.",
                image_url: "https://images.unsplash.com/photo-1598897349489-44769b7b51ce?auto=format&fit=crop&q=80&w=1200",
                sub_category: "Award Analytics",
                source: "VOTING_LOG_01",
                legitimacy_score: 98
            },
            {
                title: "Idol Contract Reform.",
                content: "Direct translation of filings confirms a 25% increase in creative autonomy for trainees.",
                image_url: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=800",
                sub_category: "East Asian Hub",
                source: "Seoul_Legal"
            },
            {
                title: "Subscriber Churn Analysis.",
                content: "Quarterly earnings leaks suggest a plateau in premium user growth across Tier 1 platforms.",
                image_url: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=800",
                sub_category: "Streaming Strategy",
                source: "Wall_St_Leak"
            },
            {
                title: "Cannes 2026 Selection.",
                content: "Internal festival committee emails confirm 4 major experimental titles for the main competition.",
                image_url: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800",
                sub_category: "Hollywood Trades",
                source: "Festival_Insider"
            },
            {
                title: "Bollywood Indie Surge.",
                content: "Independent financing models in Mumbai are outpacing studio projects by 40% this quarter.",
                image_url: "https://images.unsplash.com/photo-1583244248882-7d22f87289ba?auto=format&fit=crop&q=80&w=600",
                sub_category: "Indian Cinema"
            }
        ]
    };

    const hero = hasData && articles[0] ? articles[0] : staticData.hero;
    const dbItems = hasData ? articles.slice(1) : [];
    const gridItems = [...dbItems, ...staticData.items].slice(0, 10);

    return (
        <CategoryLayout
            title="Entertainment"
            accentColor={ACCENT_FUCHSIA}
            categorySlug="entertainment"
            subCategories={subCategories}
            heroData={hero}
            gridItems={gridItems}
            navTitle="Hollywood Node // Status: Monitoring"
            navSubtitle="SAT_LINK: ESTABLISHED<br />UPLINK: ENCRYPTED"
        />
    );
}
