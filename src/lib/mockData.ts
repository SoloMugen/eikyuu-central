export interface Article {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
    legitimacyScore: number;
    summary: string;
    size: 'hero' | 'feature' | 'standard' | 'compact';
    timestamp: string;
    url?: string;
}

export const MOCK_ARTICLES: Article[] = [
    {
        id: 1,
        title: "Tensions Rise in the South China Sea: A Primary Source Analysis",
        category: "GEO-POLITICS",
        imageUrl: "https://images.unsplash.com/photo-1554522415-585d8d356c38?q=80&w=2070&auto=format&fit=crop",
        legitimacyScore: 94,
        summary: "Satellite imagery confirms new dredging operations. Analysis of intercepted maritime comms suggests increased patrol frequency, not imminent blockade.",
        size: 'hero',
        timestamp: "5 MINS AGO",
        url: "/articles/south-china-sea"
    },
    {
        id: 2,
        title: "Next-Gen Console Leak: Fact-Checking the Hardware Specs",
        category: "GAMING",
        imageUrl: "https://images.unsplash.com/photo-1486401899868-0e4eb5ce9507?q=80&w=2072&auto=format&fit=crop",
        legitimacyScore: 82,
        summary: "Leaked manufacturing schematics match patent filings from 2024. Teraflop counts appear inflated by marketing materials, but ray-tracing core count is legitimate.",
        size: 'standard',
        timestamp: "24 MINS AGO",
        url: "/articles/next-gen-console-leak"
    },
    {
        id: 3,
        title: "New Studio Ghibli Project Confirmed: Direct Translator Insights",
        category: "ANIME/KR",
        imageUrl: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop",
        legitimacyScore: 98,
        summary: "Interview with lead animator confirms 'The Boy and the Heron' spiritual successor. Production timeline set for 3 years. No CGI involved.",
        size: 'standard',
        timestamp: "1 HOUR AGO"
    },
    {
        id: 4,
        title: "Fusion Energy Breakthrough: Net Gain Replicated in 3 Labs",
        category: "SCIENCE",
        imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
        legitimacyScore: 91,
        summary: "Peer-reviewed data from LLNL, JET, and KSTAR confirm Q>1.5 achieved consistently. Commercial viability horizon shortened by estimated 5 years.",
        size: 'standard',
        timestamp: "3 HOURS AGO"
    },
    {
        id: 5,
        title: "Global Supply Chain Alert: Semiconductor Yields Drop 15%",
        category: "ECONOMY",
        imageUrl: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=2070&auto=format&fit=crop",
        legitimacyScore: 89,
        summary: "Taiwan earthquake aftershocks impacting wafer stability. Major GPU manufacturers revising Q3 shipment forecasts downward.",
        size: 'standard',
        timestamp: "4 HOURS AGO"
    },
    {
        id: 6,
        title: "SpaceX Starship Orbital Refueling Test Successful",
        category: "SPACE",
        imageUrl: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop",
        legitimacyScore: 96,
        summary: "Cryogenic fluid transfer completed in microgravity. Artemis III timeline viability significantly increased.",
        size: 'feature',
        timestamp: "6 HOURS AGO"
    },
    {
        id: 7,
        title: "FDA Approves First CRISPR Therapy for Sickle Cell",
        category: "MEDICINE",
        imageUrl: "https://images.unsplash.com/photo-1584328896134-8b1239929eec?q=80&w=2070&auto=format&fit=crop",
        legitimacyScore: 99,
        summary: "Landmark regulatory decision paves way for genetic cures. Treatment cost remains high, sparking insurance debate.",
        size: 'standard',
        timestamp: "8 HOURS AGO"
    },
    {
        id: 8,
        title: "Unreal Engine 6 Tech Demo: Real-time Path Tracing Revolution",
        category: "TECH",
        imageUrl: "https://images.unsplash.com/photo-1612287230217-127133edec99?q=80&w=2070&auto=format&fit=crop",
        legitimacyScore: 85,
        summary: "Epic Games showcases new lighting engine. Performance overhead remarkably low on current gen hardware. Developers skeptical of 'nanite' claims.",
        size: 'standard',
        timestamp: "9 HOURS AGO"
    }
];
