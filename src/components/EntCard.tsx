"use client";

import Image from 'next/image';

interface Article {
    url: string;
    image_url?: string | null;
    title: string;
    sub_category?: string;
    source?: string;
    content?: string;
    legitimacy_score?: number;
}

interface EntCardProps {
    article: Article;
    size: 'large' | 'tall' | 'square';
    accentColor?: string; // e.g. #D946EF (Magenta) or #EAB308 (Gold) or #FF4500 (Orange)
}

export default function EntCard({ article, size, accentColor = '#D946EF' }: EntCardProps) {
    const colSpan = size === 'large' ? 'col-span-12 lg:col-span-8' :
        size === 'tall' ? 'col-span-12 lg:col-span-4' :
            'col-span-12 md:col-span-6 lg:col-span-4';

    // Adjust logic if size large needs different height on mobile
    const heightClass = size === 'large' ? 'h-80 md:h-[450px]' :
        size === 'tall' ? 'h-64' : 'h-56';

    return (
        <a href={article.url} target="_blank" className={`${colSpan} ent-card group block`}>
            <div className={`${heightClass} overflow-hidden relative w-full`}>
                <Image
                    src={article.image_url || '/placeholder.jpg'}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
            </div>
            <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-6">
                    <span
                        className="text-[10px] font-black uppercase tracking-widest"
                        style={{ color: accentColor }}
                    >
                        {article.sub_category || 'Intel'}
                    </span>
                    <span className="text-[10px] font-mono text-muted">REF: {article.source || 'Unknown'}</span>
                </div>
                <h3 className={`font-display uppercase tracking-tighter leading-tight mb-6 ${size === 'large' ? 'text-3xl md:text-5xl' : 'text-xl md:text-2xl'}`}>
                    {article.title}
                </h3>
                <p className="text-muted leading-relaxed mb-8 text-sm md:text-lg italic line-clamp-3">
                    {article.content?.slice(0, 150)}...
                </p>
                <div className="mt-auto pt-8 border-t section-line flex justify-between items-center">
                    <span
                        className="text-[11px] font-black uppercase tracking-widest"
                        style={{ color: accentColor }}
                    >
                        Legit-Score: {article.legitimacy_score || 85}%
                    </span>
                    <span className="font-black text-[11px] uppercase group-hover:translate-x-2 transition-transform">&rarr;</span>
                </div>
            </div>
        </a>
    );
}
