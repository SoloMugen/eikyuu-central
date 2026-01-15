import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function GeoPoliticsPage() {
    return (
        <main className="min-h-screen p-4 md:p-8 bg-[#F8F9FB] dark:bg-[#0C0C0C] transition-colors duration-500">

            {/* Intelligence Header */}
            <nav className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b-2 border-slate-900 dark:border-white/20 pb-8 relative">
                <div className="flex flex-col gap-4">
                    {/* Combined Navigation & Title Row */}
                    <div className="flex items-center gap-6">
                        {/* Back to Main Hub Button (Integrated) */}
                        <Link href="/" className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors group whitespace-nowrap">
                            <svg className="w-3 h-3 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                            Return to global hub
                        </Link>

                        <h1 className="text-5xl md:text-7xl font-display text-slate-950 dark:text-white uppercase tracking-tighter">
                            Geo-Politics<span className="text-blue-700">.</span>Intel
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="flex h-3 w-3 rounded-full bg-blue-600 status-pulse"></span>
                        <span className="text-[10px] uppercase font-black tracking-[0.3em] text-blue-700 dark:text-blue-400">Global Strategic Monitor // Node: Active</span>
                    </div>
                </div>

                <div className="mt-6 md:mt-0 flex flex-col items-end">
                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mb-4 uppercase text-right">
                        Satellite Uplink: Established<br />
                        Verification Protocol: L-Score Alpha
                    </div>
                    <div className="flex gap-2">
                        <button className="px-6 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black text-[10px] font-black tracking-widest hover:bg-blue-700 dark:hover:bg-blue-400 transition">SITUATION ROOM</button>
                    </div>
                </div>
            </nav>

            {/* Regional Selection Bar */}
            <div className="w-full mb-10 overflow-x-auto no-scrollbar py-2">
                <div className="flex items-center gap-4 min-w-max">
                    <button className="px-8 py-3 rounded-xl bg-blue-700 text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-200 dark:shadow-none">Global Overview</button>
                    <button className="px-8 py-3 rounded-xl bg-white dark:bg-[#161616] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase tracking-widest hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-400 transition shadow-sm">Indo-Pacific</button>
                    <button className="px-8 py-3 rounded-xl bg-white dark:bg-[#161616] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase tracking-widest hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-400 transition shadow-sm">Eurozone</button>
                    <button className="px-8 py-3 rounded-xl bg-white dark:bg-[#161616] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase tracking-widest hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-400 transition shadow-sm">Middle East</button>
                    <button className="px-8 py-3 rounded-xl bg-white dark:bg-[#161616] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase tracking-widest hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-400 transition shadow-sm">Americas</button>
                    <button className="px-8 py-3 rounded-xl bg-white dark:bg-[#161616] border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase tracking-widest hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-400 transition shadow-sm">Global South</button>
                </div>
            </div>

            {/* Main Intelligence Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

                {/* Strategic Map Visualization (Hero) */}
                <div className="xl:col-span-8 bg-white dark:bg-[#161616] border border-slate-200 dark:border-white/10 rounded-[3rem] overflow-hidden flex flex-col h-[600px] shadow-sm group relative">
                    {/* Strategic Image/Map Mix */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"
                            className="object-cover opacity-20 grayscale transition-all duration-700 group-hover:opacity-30 group-hover:scale-105"
                            alt="Geopolitical Map"
                            fill
                        />
                        <div className="absolute inset-0 map-bg opacity-30"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-[#161616] via-transparent to-white dark:to-[#161616]"></div>
                    </div>

                    <div className="h-full p-12 relative flex items-center justify-center z-10">
                        {/* Abstract Map Graphics Overlay */}
                        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                            <svg viewBox="0 0 800 400" className="w-full h-full text-blue-900 dark:text-blue-500 fill-current">
                                <path d="M100,150 Q150,100 200,150 T300,150 T450,150 T600,150" fill="none" stroke="currentColor" strokeWidth="2" />
                                <circle cx="200" cy="150" r="40" className="animate-pulse" opacity="0.5" />
                                <circle cx="450" cy="180" r="30" className="animate-pulse" opacity="0.3" />
                            </svg>
                        </div>

                        <div className="text-center max-w-2xl">
                            <span className="text-[10px] font-black text-blue-700 dark:text-blue-400 uppercase tracking-[0.4em] block mb-4">Strategic Hotspot detected</span>
                            <h2 className="text-4xl md:text-5xl font-display mb-6 leading-[1.1] text-slate-950 dark:text-white">Indo-Pacific Naval Drills: Primary Source Verification in Progress.</h2>
                            <div className="flex justify-center gap-4">
                                <div className="bg-white/90 dark:bg-black/80 backdrop-blur px-6 py-3 rounded-2xl border border-slate-100 dark:border-white/10 flex items-center gap-3 shadow-sm">
                                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Conflict Risk</span>
                                    <span className="text-xl font-bold text-orange-500">Elevated</span>
                                </div>
                                <div className="bg-white/90 dark:bg-black/80 backdrop-blur px-6 py-3 rounded-2xl border border-slate-100 dark:border-white/10 flex items-center gap-3 shadow-sm">
                                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">L-Score</span>
                                    <span className="text-xl font-bold text-green-600">92%</span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-8 left-8 flex gap-2">
                            <span className="px-3 py-1 bg-slate-900 dark:bg-white text-white dark:text-black text-[9px] font-bold rounded">LIVE_CAM: NODE_14</span>
                            <span className="px-3 py-1 bg-white dark:bg-black border border-slate-200 dark:border-white/20 text-[9px] font-bold rounded text-slate-700 dark:text-slate-300">THERMAL: ACTIVE</span>
                        </div>
                    </div>
                </div>

                {/* Right: Diplomatic Cables Feed */}
                <div className="xl:col-span-4 geo-card p-10 flex flex-col h-[600px]">
                    <div className="flex justify-between items-center mb-10 pb-4 border-b border-slate-100 dark:border-white/5">
                        <h3 className="text-xs font-black uppercase tracking-widest text-blue-700 dark:text-blue-400">Diplomatic Cables</h3>
                        <span className="text-[9px] font-mono text-slate-400">UPDATING REAL-TIME</span>
                    </div>
                    <div className="space-y-8 overflow-y-auto pr-2 no-scrollbar">
                        <div className="group cursor-pointer">
                            <div className="flex justify-between mb-2">
                                <span className="text-[9px] font-black text-blue-600 dark:text-blue-400 uppercase">UN_GENEVA</span>
                                <span className="text-[9px] font-bold text-slate-400">12M AGO</span>
                            </div>
                            <p className="text-sm font-bold leading-snug group-hover:text-blue-700 dark:group-hover:text-blue-400 transition text-slate-900 dark:text-slate-200">Humanitarian Corridors established in Northern regions following primary agreement.</p>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="flex justify-between mb-2">
                                <span className="text-[9px] font-black text-blue-600 dark:text-blue-400 uppercase">EU_BRUSSELS</span>
                                <span className="text-[9px] font-bold text-slate-400">45M AGO</span>
                            </div>
                            <p className="text-sm font-bold leading-snug group-hover:text-blue-700 dark:group-hover:text-blue-400 transition text-slate-900 dark:text-slate-200">New Economic Sanctions Package: Verified draft leaks from commission headquarters.</p>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="flex justify-between mb-2">
                                <span className="text-[9px] font-black text-blue-600 dark:text-blue-400 uppercase">G7_SUMMIT</span>
                                <span className="text-[9px] font-bold text-slate-400">2H AGO</span>
                            </div>
                            <p className="text-sm font-bold leading-snug group-hover:text-blue-700 dark:group-hover:text-blue-400 transition text-slate-900 dark:text-slate-200">Joint Statement on AI Governance: Cross-referencing 7 primary translated drafts.</p>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="flex justify-between mb-2">
                                <span className="text-[9px] font-black text-blue-600 dark:text-blue-400 uppercase">NATO_NODE</span>
                                <span className="text-[9px] font-bold text-slate-400">5H AGO</span>
                            </div>
                            <p className="text-sm font-bold leading-snug group-hover:text-blue-700 dark:group-hover:text-blue-400 transition text-slate-900 dark:text-slate-200">Cyber-Defense Protocols activated in Baltic sectors; source logs verified.</p>
                        </div>
                    </div>
                    <div className="mt-auto pt-8">
                        <button className="w-full py-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl text-[9px] font-black text-slate-500 hover:bg-blue-700 hover:text-white transition uppercase tracking-widest">Access Full Archive</button>
                    </div>
                </div>

                {/* Bottom Row: Multi-Source Intelligence with Thumbnails */}
                <div className="xl:col-span-4 geo-card group">
                    <div className="h-48 overflow-hidden relative">
                        <Image
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            alt="Submarine"
                            fill
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-blue-700/80 backdrop-blur text-white rounded-full text-[8px] font-black uppercase tracking-widest">Conflict Watch</span>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex justify-between mb-4 items-center">
                            <span className="text-[9px] font-bold text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded uppercase tracking-tighter">98.4% Legit</span>
                            <span className="text-[9px] font-mono text-slate-400 uppercase">Arctic_Sector</span>
                        </div>
                        <h4 className="text-2xl font-display leading-tight mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition text-slate-950 dark:text-white">Submarine Activity in Arctic Waters: Official Logs Synthesis.</h4>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">Verified through deep-sea sensory nodes and official naval PR portals. No speculative outliers found.</p>
                        <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-white/5">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Reuters_API</span>
                            <span className="text-[10px] font-black uppercase text-slate-900 dark:text-slate-200 group-hover:translate-x-1 transition">Investigate →</span>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-4 geo-card group">
                    <div className="h-48 overflow-hidden relative">
                        <Image
                            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            alt="Trade"
                            fill
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-blue-700/80 backdrop-blur text-white rounded-full text-[8px] font-black uppercase tracking-widest">Trade Intelligence</span>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex justify-between mb-4 items-center">
                            <span className="text-[9px] font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-0.5 rounded uppercase tracking-tighter">Verified Cable</span>
                            <span className="text-[9px] font-mono text-slate-400 uppercase">Tokyo_Hub</span>
                        </div>
                        <h4 className="text-2xl font-display leading-tight mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition text-slate-950 dark:text-white">Semiconductor Trade Pact: Final Negotiated Text Analysis.</h4>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">Comparison of the original English and Japanese drafts reveals 100% semantic alignment on key clauses.</p>
                        <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-white/5">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Nikkei_Japan</span>
                            <span className="text-[10px] font-black uppercase text-slate-900 dark:text-slate-200 group-hover:translate-x-1 transition">Investigate →</span>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-4 geo-card group">
                    <div className="h-48 overflow-hidden relative">
                        <Image
                            src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            alt="Mining"
                            fill
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-blue-700/80 backdrop-blur text-white rounded-full text-[8px] font-black uppercase tracking-widest">Resource War</span>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex justify-between mb-4 items-center">
                            <span className="text-[9px] font-bold text-orange-600 bg-orange-50 dark:bg-orange-900/30 dark:text-orange-400 px-2 py-0.5 rounded uppercase tracking-tighter">Corroboration Required</span>
                            <span className="text-[9px] font-mono text-slate-400 uppercase">Border_Monitor</span>
                        </div>
                        <h4 className="text-2xl font-display leading-tight mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition text-slate-950 dark:text-white">Rare Earth Mining Rights: Unverified Reports from Frontier.</h4>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">L-Score pending. System is scanning for second-tier corroboration from regional government portals.</p>
                        <div className="flex justify-between items-center pt-6 border-t border-slate-100 dark:border-white/5">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Wait_Status</span>
                            <span className="text-[10px] font-black uppercase text-slate-900 dark:text-slate-200 group-hover:translate-x-1 transition">Track Story →</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Geo-Politics Recommendation Loop */}
            <div className="mt-20 border-t-4 border-slate-900 dark:border-white/20 pt-12 pb-24">
                <h5 className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 mb-10">Cross-Entity Intelligence Loop</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-[#161616] border border-slate-100 dark:border-white/10 p-8 rounded-3xl shadow-sm hover:border-blue-600 transition cursor-pointer group">
                        <div className="w-full h-32 rounded-2xl overflow-hidden mb-6 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600"
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                alt="Science"
                                fill
                            />
                        </div>
                        <span className="text-[9px] font-black text-blue-700 dark:text-blue-400 uppercase tracking-widest mb-4 block">Link: Geo-Politics -{'>'} Science</span>
                        <p className="text-lg font-bold group-hover:text-blue-700 dark:group-hover:text-blue-400 transition leading-tight text-slate-900 dark:text-white">Quantum Encryption: The Geopolitical Race for Dominance.</p>
                    </div>
                    <div className="bg-white dark:bg-[#161616] border border-slate-100 dark:border-white/10 p-8 rounded-3xl shadow-sm hover:border-blue-600 transition cursor-pointer group">
                        <div className="w-full h-32 rounded-2xl overflow-hidden mb-6 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600"
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                alt="Gaming"
                                fill
                            />
                        </div>
                        <span className="text-[9px] font-black text-blue-700 dark:text-blue-400 uppercase tracking-widest mb-4 block">Link: Geo-Politics -{'>'} Gaming</span>
                        <p className="text-lg font-bold group-hover:text-blue-700 dark:group-hover:text-blue-400 transition leading-tight text-slate-900 dark:text-white">Virtual Propaganda: How Narratives Reflect Sanctions.</p>
                    </div>
                    <div className="bg-white dark:bg-[#161616] border border-slate-100 dark:border-white/10 p-8 rounded-3xl shadow-sm hover:border-blue-600 transition cursor-pointer group">
                        <div className="w-full h-32 rounded-2xl overflow-hidden mb-6 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1611974714851-48206138473c?auto=format&fit=crop&q=80&w=600"
                                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                alt="Finance"
                                fill
                            />
                        </div>
                        <span className="text-[9px] font-black text-blue-700 dark:text-blue-400 uppercase tracking-widest mb-4 block">Link: Geo-Politics -{'>'} Finance</span>
                        <p className="text-lg font-bold group-hover:text-blue-700 dark:group-hover:text-blue-400 transition leading-tight text-slate-900 dark:text-white">Currency Digitalization: The Impact of CBDC Rollouts.</p>
                    </div>
                </div>
            </div>

        </main>
    );
}
