import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export default function GlobalNav() {
    const navItems = [
        { name: 'GLOBAL', href: '/', active: true },
        { name: 'GAMING', href: '/gaming' },
        { name: 'SCIENCE', href: '/science' },
        { name: 'ENTERTAINMENT', href: '/entertainment' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-glass-border bg-white/80 dark:bg-midnight/90 backdrop-blur-xl h-16 transition-colors duration-500">
            <div className="max-w-[1600px] mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent-orange rounded-sm animate-pulse" />
                    <h1 className="font-display font-bold text-2xl tracking-tighter text-foreground">
                        EIKYUU<span className="text-accent-lime">.CENTRAL</span>
                    </h1>
                </div>

                {/* Main Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`
                                relative px-6 py-2 font-mono text-sm tracking-widest transition-all duration-300
                                hover:text-accent-lime overflow-hidden group
                                ${item.active ? 'text-accent-lime' : 'text-slate-500 dark:text-gray-400'}
                            `}
                        >
                            <span className="relative z-10">{item.name}</span>
                            {/* Hover highlight background */}
                            <span className={`
                                absolute inset-0 bg-accent-lime/5 transform skew-x-12 
                                transition-transform duration-300 origin-left
                                ${item.active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                            `} />
                        </Link>
                    ))}
                </div>

                {/* Utility / Status */}
                <div className="flex items-center gap-4 font-mono text-xs text-gray-500">
                    <div className="hidden lg:flex flex-col items-end leading-none">
                        <span className="text-accent-lime">SYSTEM_ONLINE</span>
                        <span>V.0.1.0_BETA</span>
                    </div>
                    <ThemeToggle />
                    <button className="px-4 py-1.5 border border-glass-border hover:border-accent-orange hover:text-accent-orange transition-colors rounded hover:bg-accent-orange/10">
                        LOGIN
                    </button>
                </div>
            </div>
        </nav>
    );
}
