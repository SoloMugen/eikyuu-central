import { createClient } from '@/lib/supabase/client';
import CategoryLayout from '@/components/CategoryLayout';

export const revalidate = 0;

export default async function SciencePage() {
    const supabase = createClient();

    // Fetch Science Articles
    const { data: articles } = await supabase
        .from('articles')
        .select('*')
        .eq('category', 'science')
        .order('published_at', { ascending: false })
        .limit(20);

    const hasData = articles && articles.length > 0;
    const ACCENT_EMERALD = '#10B981';

    // Sub-Categories
    const subCategories = [
        { id: "Peer-Review Deep", label: "Peer-Review Deep" },
        { id: "Space & Physics", label: "Space & Physics" },
        { id: "Genomic Eng", label: "Genomic Eng" },
        { id: "AI Research", label: "AI Research" },
        { id: "Energy/Fusion", label: "Energy/Fusion" },
        { id: "Empirical Data", label: "Empirical Data" }
    ];

    // Static Data Fallback
    const staticData = {
        hero: {
            title: "Quantum Entanglement Breakthrough: Semantic Stability Verified.",
            content: "MIT Researchers verify long-distance semantic stability using new cross-platform validation. Confirmed by 3 external labs.",
            image_url: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2000",
            category: "Peer-Reviewed Milestone",
            source: "S-Tier"
        },
        items: [
            {
                title: "Early Galaxy Formation Data.",
                content: "New spectroscopy data challenges existing Lambda-CDM service models. L-Score: 96%.",
                image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
                sub_category: "Space & Physics",
                source: "NASA_JPL",
                legitimacy_score: 96
            },
            {
                title: "CRISPR-Cas9 Evolution.",
                content: "New 'Target-Lock' mechanism identified for high-accuracy editing. 200% reduction in off-target mutations.",
                image_url: "https://images.unsplash.com/photo-1579154235602-3c2ae9284240?auto=format&fit=crop&q=80&w=800",
                sub_category: "Genomic Eng",
                source: "PUBMED_NODE_7"
            },
            {
                title: "Next-Gen Transformers.",
                content: "Linear complexity attention mechanisms verified in large-scale testing.",
                image_url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
                sub_category: "AI Research",
                source: "NEURIPS_2025"
            },
            {
                title: "Fusion Alpha-Beta 1 Success.",
                content: "Secondary facility in France confirms energy gain of 1.2Q.",
                image_url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
                sub_category: "Energy/Fusion",
                source: "ITER_LOG"
            },
            {
                title: "LK-99 Redux: Failed Replication.",
                content: "Zero replication across 12 independent labs. Claim flagged as speculative error.",
                image_url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
                sub_category: "Empirical Data"
            }
        ]
    };

    const hero = hasData && articles[0] ? articles[0] : staticData.hero;
    const dbItems = hasData ? articles.slice(1) : [];
    const gridItems = [...dbItems, ...staticData.items].slice(0, 10);

    return (
        <CategoryLayout
            title="Science"
            accentColor={ACCENT_EMERALD}
            categorySlug="science"
            subCategories={subCategories}
            heroData={hero}
            gridItems={gridItems}
            navTitle="Empirical Verification Node // Status: Analytical"
            navSubtitle="SCAN_MODE: PEER_REVIEW_DEEP<br />SOURCES: ArXiv / PubMed / Nature"
        />
    );
}
