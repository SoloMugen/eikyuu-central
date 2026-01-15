import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SciencePage() {
    return (
        <main className="min-h-screen p-4 md:p-8 bg-[#F8FAF9] dark:bg-[#0C0C0C] transition-colors duration-500 lab-grid-bg text-[#1E293B] dark:text-[#E2E8F0]">

            {/* Science Header */}
            <nav className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b-2 border-[#10B981] pb-8 relative">
                <div className="flex flex-col gap-4">
                    {/* Navigation & Title Row */}
                    <div className="flex items-center gap-6">
                        <Link href="/" className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 hover:text-[#10B981] transition-colors group whitespace-nowrap">
                            <svg className="w-3 h-3 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                            Return to global hub
                        </Link>

                        <h1 className="text-5xl md:text-7xl font-display text-slate-950 dark:text-white uppercase tracking-tighter">
                            Science<span className="text-[#10B981]">.</span>Intel
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="flex h-3 w-3 rounded-full bg-[#10B981] pulse-emerald"></span>
                        <span className="text-[10px] uppercase font-black tracking-[0.3em] text-[#059669] dark:text-[#10B981]">Empirical Verification Node // Status: Analytical</span>
                    </div>
                </div>

                <div className="mt-6 md:mt-0 flex flex-col items-end">
                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mb-4 uppercase text-right">
                        SCAN_MODE: PEER_REVIEW_DEEP<br />
                        SOURCES: ArXiv / PubMed / Nature
                    </div>
                    <div className="flex gap-2">
                        <button className="px-6 py-2 rounded-full bg-slate-950 dark:bg-white text-white dark:text-black text-[10px] font-black tracking-widest hover:bg-[#10B981] dark:hover:bg-[#10B981] transition uppercase shadow-lg">Data Archives</button>
                    </div>
                </div>
            </nav>

            {/* Science Field Navigation */}
            <div className="w-full mb-10 overflow-x-auto no-scrollbar py-2">
                <div className="flex items-center gap-4 min-w-max">
                    <button className="px-8 py-3 rounded-xl bg-[#10B981] text-white text-[10px] font-black uppercase tracking-widest shadow-xl shadow-emerald-200 dark:shadow-none">Breaking Research</button>
                    <button className="px-8 py-3 rounded-xl bg-white dark:bg-[#161616] border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:border-[#10B981] hover:text-[#10B981] dark:hover:text-[#10B981] transition shadow-sm">Space & Physics</button>
                    <button className="px-8 py-3 rounded-xl bg-white dark:bg-[#161616] border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:border-[#10B981] hover:text-[#10B981] dark:hover:text-[#10B981] transition shadow-sm">Bio-Medical</button>
                    <button className="px-8 py-3 rounded-xl bg-white dark:bg-[#161616] border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:border-[#10B981] hover:text-[#10B981] dark:hover:text-[#10B981] transition shadow-sm">AI & Computation</button>
                    <button className="px-8 py-3 rounded-xl bg-white dark:bg-[#161616] border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:border-[#10B981] hover:text-[#10B981] dark:hover:text-[#10B981] transition shadow-sm">Environment</button>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

                {/* Feature Science Card */}
                <div className="xl:col-span-8 science-card group h-[600px] relative">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=2000"
                            className="object-cover opacity-10 transition-all duration-700 group-hover:opacity-20"
                            alt="Laboratory"
                            fill
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#F1F7F5] dark:from-[#111a16] via-transparent to-[#F1F7F5] dark:to-[#111a16]"></div>
                    </div>

                    <div className="relative z-10 p-12 h-full flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-8">
                            <span className="px-4 py-1.5 bg-[#10B981] text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-200 dark:shadow-emerald-900/20">Peer-Reviewed Milestone</span>
                            <span className="px-4 py-1.5 bg-white dark:bg-black border border-slate-100 dark:border-white/10 text-[#059669] dark:text-[#10B981] rounded-full text-[10px] font-black uppercase tracking-widest">L-Score: 99% Verified</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-display text-slate-900 dark:text-white leading-[1.05] mb-8 max-w-4xl">Quantum Entanglement Breakthrough: MIT Researchers Verify Long-Distance Semantic Stability.</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-l-4 border-[#10B981] pl-8 mb-10">
                            <div>
                                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Methodology</span>
                                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-1">Cross-platform validation using secondary ion monitoring.</p>
                            </div>
                            <div>
                                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Replication</span>
                                <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mt-1">Confirmed by 3 external labs.</p>
                            </div>
                            <div>
                                <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Source</span>
                                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 mt-1 underline">Nature Communications [2026.01.12]</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-slate-950 dark:bg-white text-white dark:text-black rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#10B981] dark:hover:bg-[#10B981] transition shadow-2xl">Access Full Manuscript</button>
                            <button className="px-8 py-4 bg-white/80 dark:bg-black/40 border border-slate-200 dark:border-white/10 text-slate-950 dark:text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:border-[#10B981] transition">Examine raw Data</button>
                        </div>
                    </div>
                </div>

                {/* Sidebar: Replication Tracker */}
                <div className="xl:col-span-4 science-card science-card-alt p-10 h-[600px] flex flex-col">
                    <div className="flex justify-between items-center mb-10 pb-4 border-b border-slate-300 dark:border-white/10">
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#059669] dark:text-[#10B981]">Replication Tracker</h3>
                        <span className="text-[9px] font-mono text-slate-400">PULSE: ACTIVE</span>
                    </div>

                    <div className="space-y-8 overflow-y-auto pr-2 no-scrollbar">
                        <div className="group cursor-pointer">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest">LK-99 Redux (Copper)</span>
                                <span className="text-[9px] font-bold text-red-500">FAILED</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-red-500 w-[100%]"></div>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2">Zero replication across 12 independent labs. Claim flagged as speculative error.</p>
                        </div>

                        <div className="group cursor-pointer">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest">Fusion Alpha-Beta 1</span>
                                <span className="text-[9px] font-bold text-[#059669] dark:text-[#10B981]">SUCCESS</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-300 dark:bg-slate-700 rounded-full overflow-hidden">
                                <div className="h-full bg-[#10B981] w-[85%]"></div>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-medium">Secondary facility in France confirms energy gain of 1.2Q.</p>
                        </div>

                        <div className="pt-4 space-y-4 border-t border-slate-300 dark:border-white/10 mt-4">
                            <h4 className="text-[9px] font-black uppercase text-slate-400 tracking-widest">Upcoming Peer Reviews</h4>
                            <div className="text-[11px] font-mono border-l-2 border-[#10B981] pl-4 py-1 bg-white/40 dark:bg-black/20">
                                <span className="text-slate-500 dark:text-slate-400 font-bold">[ArXiv:26.421]</span> Neural-Synapse Interface stability report.
                            </div>
                            <div className="text-[11px] font-mono border-l-2 border-[#10B981] pl-4 py-1 opacity-60">
                                <span className="text-slate-500 dark:text-slate-400">[ArXiv:26.419]</span> Deep-Sea ecosystem carbon capture efficiency.
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-8">
                        <button className="w-full py-4 bg-white/60 dark:bg-black/20 border border-slate-300 dark:border-white/10 rounded-2xl text-[9px] font-black text-[#059669] dark:text-[#10B981] hover:bg-[#10B981] hover:text-white transition uppercase tracking-widest">View Full Claim Table</button>
                    </div>
                </div>

                {/* Thumbnail Data Cards */}
                <div className="xl:col-span-4 science-card group">
                    <div className="h-52 overflow-hidden relative">
                        <Image
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            alt="Space"
                            fill
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-[#10B981] text-white rounded-full text-[8px] font-black uppercase tracking-widest">Astrophysics</span>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[9px] font-bold text-[#059669] dark:text-[#10B981] bg-white/50 dark:bg-black/50 px-2 py-0.5 rounded uppercase tracking-tighter italic border border-emerald-100 dark:border-emerald-900/30">Peer-Reviewed</span>
                            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">James_Webb_Data</span>
                        </div>
                        <h4 className="text-2xl font-display leading-tight mb-4 text-slate-900 dark:text-white group-hover:text-[#10B981] transition">Early Galaxy Formation: New Spectroscopy Data Challenges Existing Lambda-CDM Models.</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">L-Score: 96%. Cross-referenced with ESA and NASA primary data logs. Synthesis confirms significant deviation from standard growth curves.</p>
                        <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/10 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            <span>NASA_JPL (Verified)</span>
                            <span className="text-slate-900 dark:text-white group-hover:translate-x-1 transition text-[#10B981]">Deep Dive &rarr;</span>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-4 science-card group">
                    <div className="h-52 overflow-hidden relative">
                        <Image
                            src="https://images.unsplash.com/photo-1579154235602-3c2ae9284240?auto=format&fit=crop&q=80&w=800"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            alt="Biology"
                            fill
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-[#10B981] text-white rounded-full text-[8px] font-black uppercase tracking-widest">Cellular Biology</span>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[9px] font-bold text-[#059669] dark:text-[#10B981] bg-white/50 dark:bg-black/50 px-2 py-0.5 rounded uppercase tracking-tighter italic border border-emerald-100 dark:border-emerald-900/30">Pre-Print Archive</span>
                            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">PUBMED_NODE_7</span>
                        </div>
                        <h4 className="text-2xl font-display leading-tight mb-4 text-slate-900 dark:text-white group-hover:text-[#10B981] transition">CRISPR-Cas9 Evolution: New "Target-Lock" Mechanism Identified for High-Accuracy Editing.</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">L-Score: 82%. Awaiting further peer review. Initial data suggests a 200% reduction in off-target genetic mutations.</p>
                        <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/10 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            <span>ArXiv (Archived)</span>
                            <span className="text-slate-900 dark:text-white group-hover:translate-x-1 transition text-[#10B981]">Examine Code &rarr;</span>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-4 science-card group">
                    <div className="h-52 overflow-hidden relative">
                        <Image
                            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            alt="AI"
                            fill
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-[#10B981] text-white rounded-full text-[8px] font-black uppercase tracking-widest">Computational Intelligence</span>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[9px] font-bold text-[#059669] dark:text-[#10B981] bg-white/50 dark:bg-black/50 px-2 py-0.5 rounded uppercase tracking-tighter italic border border-emerald-100 dark:border-emerald-900/30">Conference Verified</span>
                            <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">NEURIPS_2025</span>
                        </div>
                        <h4 className="text-2xl font-display leading-tight mb-4 text-slate-900 dark:text-white group-hover:text-[#10B981] transition">Next-Gen Transformers: Linear Complexity Attention Mechanisms Verified in Large-Scale Testing.</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">L-Score: 98%. Benchmarks confirmed across 4 independent hardware clusters. Significant reduction in inference cost identified.</p>
                        <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/10 flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            <span>Google_Research (Verified)</span>
                            <span className="text-slate-900 dark:text-white group-hover:translate-x-1 transition text-[#10B981]">Analyze Stats &rarr;</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Thematic Loop for Science */}
            <div className="mt-20 border-t-4 border-[#10B981] pt-12 pb-24">
                <h5 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#059669] dark:text-[#10B981] mb-10">Cross-Entity Intelligence Loop</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="science-card p-8 shadow-sm hover:border-[#10B981] transition cursor-pointer group">
                        <div className="w-full h-32 rounded-2xl overflow-hidden mb-6 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600"
                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                alt="Geo-Politics"
                                fill
                            />
                        </div>
                        <span className="text-[9px] font-black text-[#059669] dark:text-[#10B981] uppercase tracking-widest mb-4 block">Link: Science -{'>'} Geo-Politics</span>
                        <p className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#10B981] transition leading-tight uppercase tracking-tighter">Energy Autonomy: How Nuclear Fusion Success Reshapes Global Power Alliances.</p>
                    </div>
                    <div className="science-card p-8 shadow-sm hover:border-[#10B981] transition cursor-pointer group">
                        <div className="w-full h-32 rounded-2xl overflow-hidden mb-6 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600"
                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                alt="Gaming"
                                fill
                            />
                        </div>
                        <span className="text-[9px] font-black text-[#059669] dark:text-[#10B981] uppercase tracking-widest mb-4 block">Link: Science -{'>'} Gaming</span>
                        <p className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#10B981] transition leading-tight uppercase tracking-tighter">Bio-Feedback Loops: The Intersection of Neuroscience and Immersive Haptics.</p>
                    </div>
                    <div className="science-card p-8 shadow-sm hover:border-[#10B981] transition cursor-pointer group">
                        <div className="w-full h-32 rounded-2xl overflow-hidden mb-6 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600"
                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                alt="Entertainment"
                                fill
                            />
                        </div>
                        <span className="text-[9px] font-black text-[#059669] dark:text-[#10B981] uppercase tracking-widest mb-4 block">Link: Science -{'>'} Entertainment</span>
                        <p className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#10B981] transition leading-tight uppercase tracking-tighter">Simulated Realism: The Physics of CGI and the Evolution of Modern Cinema.</p>
                    </div>
                </div>
            </div>

        </main>
    );
}
