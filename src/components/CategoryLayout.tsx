'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import EntCard from '@/components/EntCard';
import { Article } from '@/lib/api/articles';
import { ChevronRight } from 'lucide-react';

interface SubCategory {
    id: string; // The value to filter by (e.g., "Hardware Leaks")
    label: string; // The display label
}

interface PageData {
    hero: any;
    items: any[];
}

interface CategoryLayoutProps {
    title: string;
    accentColor: string;
    categorySlug: string; // e.g., 'gaming', 'anime'
    subCategories: SubCategory[];
    heroData: any;
    gridItems: any[];
    navTitle: string;
    navSubtitle: string;
    themeColorClass?: string; // Optional Tailwind class for text colors if needed
}

export default function CategoryLayout({
    title,
    accentColor,
    categorySlug,
    subCategories,
    heroData,
    gridItems,
    navTitle,
    navSubtitle,
}: CategoryLayoutProps) {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    // Filter Logic
    const filteredItems = activeCategory === 'All'
        ? gridItems
        : gridItems.filter(item =>
            item.sub_category === activeCategory ||
            item.category === activeCategory // Fallback to main category if sub-category matches
        );

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-500 font-sans">

            {/* Header */}
            <nav
                className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b-2 pb-8 relative p-4 md:p-8"
                style={{ borderColor: accentColor }}
            >
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-foreground transition-colors group whitespace-nowrap">
                            <ChevronRight className="w-3 h-3 transform rotate-180 group-hover:-translate-x-0.5 transition-transform" />
                            Return to Hub
                        </Link>

                        <h1 className="text-5xl md:text-7xl font-display uppercase tracking-tighter italic">
                            {title}<span style={{ color: accentColor }}>.</span>Intel
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <span
                            className="flex h-3 w-3 rounded-full animate-pulse"
                            style={{ backgroundColor: accentColor, boxShadow: `0 0 10px ${accentColor}` }}
                        ></span>
                        <span
                            className="text-[10px] uppercase font-black tracking-[0.3em]"
                            style={{ color: accentColor }}
                        >
                            {navTitle}
                        </span>
                    </div>
                </div>

                <div className="mt-6 md:mt-0 flex flex-col items-end gap-4">
                    {/* Static Scan Mode Text */}
                    <div className="text-[10px] font-mono text-muted-foreground mb-1 uppercase text-right leading-relaxed tracking-tighter">
                        <div dangerouslySetInnerHTML={{ __html: navSubtitle }} />
                    </div>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <button
                            className="px-6 py-2 rounded-full text-white text-[10px] font-black tracking-widest hover:brightness-110 transition shadow-lg uppercase"
                            style={{ backgroundColor: accentColor }}
                        >
                            Evidence Vault
                        </button>
                    </div>
                </div>
            </nav>

            {/* Sub-Category Navigation */}
            <div className="w-full mb-10 overflow-x-auto no-scrollbar py-2 px-4 md:px-8 z-10 relative">
                <div className="flex items-center gap-4 min-w-max">
                    <button
                        onClick={() => setActiveCategory('All')}
                        className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition shadow-sm border ${activeCategory === 'All'
                                ? 'text-white shadow-xl border-transparent'
                                : 'bg-card border-border text-muted-foreground hover:text-foreground hover:border-foreground'
                            }`}
                        style={activeCategory === 'All' ? { backgroundColor: accentColor } : {}}
                    >
                        All Intel
                    </button>

                    {subCategories.map((sub) => (
                        <button
                            key={sub.id}
                            onClick={() => setActiveCategory(sub.id)}
                            className={`px-8 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition shadow-sm border ${activeCategory === sub.id
                                    ? 'text-white shadow-xl border-transparent'
                                    : 'bg-card border-border text-muted-foreground hover:text-foreground hover:border-foreground'
                                }`}
                            style={activeCategory === sub.id ? { backgroundColor: accentColor } : {}}
                        >
                            {sub.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-full space-y-12 p-4 md:p-8">

                {/* HERO SECTION - Always Visible (or conditionally filtered if desired) */}
                {/* Logic: If 'All' is selected OR the hero matches the category, show it. Otherwise, hide/collapse? 
            For now, let's keep hero always visible as "Featured". */}
                <section className="w-full h-[500px] md:h-[700px] relative rounded-[3rem] overflow-hidden group">
                    {heroData.image_url && (
                        <Image
                            src={heroData.image_url}
                            alt={heroData.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90"></div>
                    <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16">
                        <div className="flex items-center gap-4 mb-6">
                            <span
                                className="px-4 py-1.5 text-white rounded-lg text-[10px] font-black uppercase tracking-widest"
                                style={{ backgroundColor: accentColor }}
                            >
                                {heroData.category || 'Featured'}
                            </span>
                            <span className="text-green-400 text-[10px] font-bold uppercase tracking-widest italic">
                                Verification: {heroData.source || 'S-Tier'}
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-display uppercase tracking-tighter italic leading-none mb-8 max-w-5xl text-foreground">
                            {heroData.title}
                        </h2>
                        <p
                            className="text-lg md:text-2xl text-muted-foreground max-w-3xl border-l-8 pl-8 italic"
                            style={{ borderColor: accentColor }}
                        >
                            {heroData.content?.slice(0, 200)}...
                        </p>
                    </div>
                </section>

                {/* ITEMS COLLAGE - Filtered */}
                <section className="collage-container transition-all duration-500 min-h-[500px]">
                    {filteredItems.length === 0 ? (
                        <div className="col-span-full py-20 text-center text-muted-foreground font-mono uppercase tracking-widest">
                            Target Intel Not Found within filtered parameters.
                        </div>
                    ) : (
                        filteredItems.map((article: any, index: number) => {
                            const size = index === 0 ? 'large' : index === 1 ? 'tall' : 'square';
                            return (
                                <div key={article.id || index} className="animate-in fade-in zoom-in duration-500" data-category={article.sub_category}>
                                    <EntCard
                                        article={article}
                                        size={size}
                                        accentColor={accentColor}
                                    />
                                </div>
                            );
                        })
                    )}
                </section>

            </div>
        </div>
    );
}
