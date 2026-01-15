import React from 'react';
import Image from 'next/image';
import LegitimacyBadge from './LegitimacyBadge';

interface ArticleCardProps {
    title: string;
    category: string;
    imageUrl?: string;
    legitimacyScore: number;
    summary: string;
    size?: 'hero' | 'feature' | 'standard' | 'compact';
    timestamp: string;
}

export default function ArticleCard({
    title,
    category,
    imageUrl,
    legitimacyScore,
    summary,
    size = 'standard',
    timestamp,
}: ArticleCardProps) {
    const isHero = size === 'hero';
    const isCompact = size === 'compact';

    // Category-specific color mapping for a welcoming feel
    const getCategoryStyles = (cat: string) => {
        const lowerCat = cat.toLowerCase();
        if (lowerCat.includes('geo')) return { text: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', accent: 'border-blue-500' };
        if (lowerCat.includes('gaming')) return { text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100', accent: 'border-purple-500' };
        if (lowerCat.includes('science')) return { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100', accent: 'border-emerald-500' };
        if (lowerCat.includes('anime') || lowerCat.includes('kr')) return { text: 'text-rose-500', bg: 'bg-rose-50', border: 'border-rose-100', accent: 'border-rose-500' };
        return { text: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-100', accent: 'border-slate-500' };
    };

    const styles = getCategoryStyles(category);

    return (
        <div className={`
            group relative overflow-hidden rounded-[2rem] border bg-white dark:bg-[#161616] dark:border-white/10
            transition-all duration-500 ease-out
            hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1
            flex flex-col h-full ${styles.border}
        `}>
            {/* Image Layer */}
            {imageUrl && (
                <div className={`relative w-full overflow-hidden ${isHero ? 'h-[400px]' : (isCompact ? 'h-32' : 'h-52')}`}>
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Soft Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
            )}

            {/* Content Layer */}
            <div className={`relative z-10 flex flex-col flex-grow ${isCompact ? 'p-4' : 'p-8'}`}>
                {/* Meta Header */}
                <div className="flex justify-between items-center mb-4">
                    <span className={`text-[11px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full ${styles.bg} ${styles.text}`}>
                        {category}
                    </span>
                    <LegitimacyBadge score={legitimacyScore} size="sm" />
                </div>

                {/* Title */}
                <h3 className={`
                    font-display font-black text-slate-900 dark:text-slate-100 leading-[1.1] mb-4 tracking-tight
                    ${isHero ? 'text-4xl md:text-5xl' : 'text-xl'}
                    group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300
                `}>
                    {title}
                </h3>

                {/* The 10-Second Truth (High Retention) */}
                <div className={`
                    overflow-hidden transition-all duration-500
                    ${isHero ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100'}
                `}>
                    <p className={`text-base text-slate-600 border-l-4 ${styles.accent} pl-5 py-1 mt-2 leading-relaxed`}>
                        {summary}
                    </p>
                </div>

                {/* Footer */}
                <div className="mt-auto pt-6 flex justify-between items-center text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>{timestamp}</span>
                    <span className="flex items-center gap-2 text-slate-900 group-hover:text-blue-600 transition-colors">
                        READ FULL ANALYSIS
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </span>
                </div>
            </div>
        </div>
    );
}