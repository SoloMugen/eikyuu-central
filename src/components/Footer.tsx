'use client';

import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };



    return (
        <footer className="w-full bg-slate-950 text-white py-12 border-t-2 border-blue-600/30 mt-20">
            <div className="max-w-[1700px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">

                {/* Brand & Copyright */}
                <div className="text-center md:text-left">
                    <h5 className="font-display text-2xl tracking-tighter mb-2 opacity-80">EIKYUU CENTRAL</h5>
                    <p className="text-xs text-slate-500 font-mono tracking-wide">COPYRIGHT © 2026. SECURE NODE.</p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-8 text-[11px] font-black uppercase tracking-widest text-slate-400">
                    <button className="hover:text-blue-500 transition-colors">Contact Node</button>
                    <button className="hover:text-blue-500 transition-colors">Privacy Protocol</button>
                    <button className="hover:text-blue-500 transition-colors">System Status</button>
                    <button className="hover:text-blue-500 transition-colors">Corporate Archives</button>
                </div>

                {/* Scroll Controls */}
                <div className="flex gap-4">
                    <button
                        onClick={scrollToTop}
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all group"
                        title="Scroll to Top"
                    >
                        <ArrowUp size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                    </button>

                </div>
            </div>
        </footer>
    );
}
