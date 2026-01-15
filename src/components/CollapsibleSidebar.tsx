'use client';

import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Database } from 'lucide-react';

export default function CollapsibleSidebar({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex shrink-0">
            {/* Toggle Button Column */}
            <div className={`flex flex-col border-l border-slate-200 dark:border-white/10 bg-white dark:bg-[#0C0C0C] ${isOpen ? '' : 'h-screen border-r-0'}`}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 mt-4 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-400 hover:text-blue-600 transition-colors rounded-l-lg z-50 sticky top-4"
                    title={isOpen ? "Collapse Evidence" : "Expand Evidence"}
                >
                    {isOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>

                {!isOpen && (
                    <div className="mt-4 flex flex-col items-center gap-4 text-slate-500">
                        <Database size={20} />
                        <span className="text-[10px] font-mono [writing-mode:vertical-rl] tracking-widest uppercase">Source Evidence</span>
                    </div>
                )}
            </div>

            {/* Collapsible Content Area */}
            <aside
                className={`
                    border-l border-slate-200 dark:border-white/10 
                    transition-all duration-300 ease-in-out overflow-hidden
                    bg-white dark:bg-[#0C0C0C]
                    ${isOpen ? 'w-80 opacity-100 translate-x-0' : 'w-0 opacity-0 translate-x-20'}
                `}
            >
                <div className="w-80 min-h-screen p-4 sticky top-0 h-screen overflow-y-auto">
                    {children}
                </div>
            </aside>
        </div>
    );
}
