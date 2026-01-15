'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function GamingPage() {
    const [currentBg, setCurrentBg] = useState(0);

    // Background images with "The Last of Us" / Atmospheric Gaming vibes
    const backgrounds = [
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2000", // Cyber/Tech
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000", // Ruins/Nature (TLOU vibe)
        "https://images.unsplash.com/photo-1533234458044-95c0d5a452d0?auto=format&fit=crop&q=80&w=2000", // Dark/Atmospheric
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=2000"  // Neo-Tokyo
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        }, 8000); // Change every 8 seconds
        return () => clearInterval(timer);
    }, [backgrounds.length]);

    return (
        <main className="min-h-screen p-4 md:p-8 gaming-slate-bg nexus-grid-bg font-sans relative overflow-x-hidden">

            {/* Dynamic Background Overlay */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[#050505]/80 mix-blend-multiply z-10"></div>
                {backgrounds.map((bg, index) => (
                    <Image
                        key={index}
                        src={bg}
                        alt="Background Texture"
                        fill
                        className={`object-cover transition-opacity duration-[2000ms] ${index === currentBg ? 'opacity-30' : 'opacity-0'}`}
                        priority={index === 0}
                    />
                ))}
                <div className="scanlines"></div>
            </div>

            <div className="relative z-10">
                {/* Gaming Header */}
                <nav className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b border-[#FF5F00]/30 pb-10">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-8">
                            <Link href="/" className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-slate-300 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:text-[#FF5F00] hover:border-[#FF5F00] transition-all group">
                                <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                                </svg>
                                Hub Exit
                            </Link>

                            <h1 className="text-6xl md:text-9xl font-display text-white uppercase tracking-tighter italic leading-none">
                                Gaming<span className="text-[#FF5F00]">.</span>Nexus
                            </h1>
                        </div>

                        <div className="flex items-center gap-5">
                            <span className="flex h-4 w-4 rounded-full bg-[#FF5F00] neon-pulse"></span>
                            <span className="text-[12px] uppercase font-black tracking-[0.5em] text-[#FF5F00] bg-[#FF5F00]/10 px-4 py-1 rounded">Telemetry Live // Industrial Feed</span>
                        </div>
                    </div>

                    <div className="mt-8 md:mt-0 flex flex-col items-end">
                        <div className="font-mono text-[11px] text-slate-400 mb-6 uppercase text-right leading-relaxed tracking-widest bg-black/40 p-4 rounded-xl border border-white/5">
                            SAT_LINK: 4.8 TB/S<br />
                            VERIFICATION: 256-BIT CRYPTO
                        </div>
                        <button className="px-10 py-3 rounded-xl bg-[#FF5F00] text-black text-[11px] font-black tracking-widest hover:bg-white transition shadow-[0_0_30px_rgba(255,95,0,0.4)] uppercase">System Diagnostics</button>
                    </div>
                </nav>

                {/* Gaming Category Bar */}
                <div className="w-full mb-12 overflow-x-auto no-scrollbar py-2">
                    <div className="flex items-center gap-5 min-w-max">
                        <button className="px-12 py-4 rounded-2xl bg-[#FF5F00] text-black text-[12px] font-black uppercase tracking-widest shadow-[0_10px_30px_rgba(255,95,0,0.3)]">All Intel</button>
                        <button className="px-10 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-[#FF5F00] hover:text-black transition backdrop-blur-md">Hardware Leaks</button>
                        <button className="px-10 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-[#FF5F00] hover:text-black transition backdrop-blur-md">Dev Builds</button>
                        <button className="px-10 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-[#FF5F00] hover:text-black transition backdrop-blur-md">eSports Feed</button>
                        <button className="px-10 py-4 rounded-2xl bg-white/5 border border-white/10 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-[#FF5F00] hover:text-black transition backdrop-blur-md">Firmware</button>
                    </div>
                </div>

                {/* Main Panoramic Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">

                    {/* Big Feature Card */}
                    <div className="xl:col-span-8 gaming-card group h-[700px] relative border-none !bg-[#111111]">
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2000"
                                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-40 group-hover:opacity-60"
                                alt="Feature Game"
                                fill
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/50"></div>
                        </div>

                        <div className="relative z-10 mt-auto p-12">
                            <div className="flex items-center gap-5 mb-8">
                                <span className="px-6 py-2.5 bg-[#FF5F00] text-black rounded-xl text-[11px] font-black uppercase tracking-widest shadow-2xl">Hardware Breakthrough</span>
                                <span className="px-6 py-2.5 bg-black/40 backdrop-blur text-green-400 rounded-xl text-[11px] font-black border border-green-500/20 uppercase tracking-widest">Verif-Grade: S-Tier</span>
                            </div>
                            <h2 className="text-6xl md:text-8xl font-display text-white leading-[0.9] mb-8 max-w-5xl uppercase italic tracking-tighter">The 2nm Revolution: Next-Gen Console Architecture Leaked.</h2>
                            <p className="text-slate-200 text-2xl border-l-[10px] border-[#FF5F00] pl-10 leading-relaxed max-w-4xl font-medium italic opacity-90">Supply chain logs from TSMC confirm initial tape-out for a bespoke gaming SOC. Projected 200% TFLOPS increase with localized AI upscaling nodes.</p>

                            <div className="mt-12 flex gap-8 items-center">
                                <button className="px-12 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FF5F00] transition shadow-2xl">Access Data Files</button>
                                <div className="flex items-center gap-4 text-[#FF5F00] font-mono text-[12px] font-black uppercase tracking-tighter bg-black/30 px-6 py-2 rounded-lg border border-[#FF5F00]/20">
                                    <span className="animate-pulse">●</span> DATABASE_ENTRY_42
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Telemetry Sidebar */}
                    <div className="xl:col-span-4 gaming-card p-10 h-[700px] flex flex-col border-white/10 !bg-[#111111]">
                        <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/10">
                            <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#FF5F00]">Live Node Status</h3>
                            <span className="text-[10px] font-mono text-slate-500">MONITOR_STABLE</span>
                        </div>

                        <div className="space-y-6 overflow-y-auto pr-2 no-scrollbar">
                            <div className="group cursor-pointer p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-[#FF5F00]/40 transition-all">
                                <div className="flex items-center gap-5 mb-4">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-2xl text-[#FF5F00]">40</div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Compute Unit</span>
                                        <span className="text-lg font-bold text-white tracking-tighter">ULTRA_EFFICIENCY</span>
                                    </div>
                                </div>
                                <p className="text-[14px] leading-relaxed text-slate-400">Cyberpunk 2077 patch 2.2 benchmarks show 15% efficiency gain on Lovelace architecture.</p>
                                <span className="text-[10px] font-black text-green-500 mt-4 block uppercase tracking-[0.2em]">Verified Hub 01</span>
                            </div>

                            <div className="group cursor-pointer p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-[#FF5F00]/40 transition-all">
                                <div className="flex items-center gap-5 mb-4">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center font-bold text-2xl text-[#FF5F00]">U5</div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Engine Load</span>
                                        <span className="text-lg font-bold text-white tracking-tighter">UE_5.5_LUMEN</span>
                                    </div>
                                </div>
                                <p className="text-[14px] leading-relaxed text-slate-400">Nanite displacement maps leak from internal studio documentation. Target budget verified.</p>
                                <span className="text-[10px] font-black text-[#FF5F00] mt-4 block uppercase tracking-[0.2em]">Primary Leak</span>
                            </div>
                        </div>

                        <div className="mt-auto pt-8">
                            <button className="w-full py-5 bg-white text-black rounded-2xl text-[11px] font-black hover:bg-[#FF5F00] hover:text-white transition uppercase tracking-widest">Full Hardware Matrix</button>
                        </div>
                    </div>

                    {/* Grid Cards */}
                    <div className="xl:col-span-4 gaming-card group min-h-[500px] !bg-[#111111]">
                        <div className="h-64 overflow-hidden relative">
                            <Image
                                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800"
                                className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                                alt="Hardware"
                                fill
                            />
                            <div className="absolute top-8 left-8">
                                <span className="px-5 py-2 bg-[#FF5F00] text-black rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">Market Update</span>
                            </div>
                        </div>
                        <div className="p-10 flex flex-col flex-grow">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-[11px] font-bold text-green-400 bg-green-900/10 border border-green-500/40 px-4 py-1.5 rounded-lg uppercase tracking-widest">94% Legit</span>
                                <span className="text-[11px] font-mono text-slate-500 italic">Financial Hub</span>
                            </div>
                            <h4 className="text-3xl font-display leading-[0.95] mb-6 text-white group-hover:text-[#FF5F00] transition uppercase italic tracking-tighter">Semiconductor Flux: Price drops expected in Q3 as yield improves.</h4>
                            <p className="text-slate-400 text-base leading-relaxed mb-8">Verification engine synthesized 14 supply chain reports. 12 confirmed a surplus in memory modules.</p>
                            <div className="mt-auto pt-8 border-t border-white/10 flex justify-between items-center">
                                <span className="text-[11px] font-black uppercase text-white group-hover:translate-x-3 transition text-[#FF5F00] tracking-[0.3em]">Examine Stats &rarr;</span>
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-4 gaming-card group min-h-[500px] !bg-[#111111]">
                        <div className="h-64 overflow-hidden relative">
                            <Image
                                src="https://images.unsplash.com/photo-1580234810491-b3e39f0685e9?auto=format&fit=crop&q=80&w=800"
                                className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                                alt="eSports"
                                fill
                            />
                            <div className="absolute top-8 left-8">
                                <span className="px-5 py-2 bg-[#FF5F00] text-black rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">Pro Intel</span>
                            </div>
                        </div>
                        <div className="p-10 flex flex-col flex-grow">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-[11px] font-bold text-[#FF5F00] bg-[#FF5F00]/10 border border-[#FF5F00]/40 px-4 py-1.5 rounded-lg uppercase tracking-widest">Confirmed</span>
                                <span className="text-[11px] font-mono text-slate-500 italic">Circuit Node</span>
                            </div>
                            <h4 className="text-3xl font-display leading-[0.95] mb-6 text-white group-hover:text-[#FF5F00] transition uppercase italic tracking-tighter">Anti-Cheat Evolution: New kernel-level telemetry verified for Pro-Play.</h4>
                            <p className="text-slate-400 text-base leading-relaxed mb-8">Protocol analysis confirms 0.001% false-positive rate. Integration scheduled for Master's circuit.</p>
                            <div className="mt-auto pt-8 border-t border-white/10 flex justify-between items-center">
                                <span className="text-[11px] font-black uppercase text-white group-hover:translate-x-3 transition text-[#FF5F00] tracking-[0.3em]">View Logs &rarr;</span>
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-4 gaming-card group min-h-[500px] !bg-[#111111]">
                        <div className="h-64 overflow-hidden relative">
                            <Image
                                src="https://images.unsplash.com/photo-1533234458044-95c0d5a452d0?auto=format&fit=crop&q=80&w=800"
                                className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                                alt="Metadata"
                                fill
                            />
                            <div className="absolute top-8 left-8">
                                <span className="px-5 py-2 bg-[#FF5F00] text-black rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl">Source Leak</span>
                            </div>
                        </div>
                        <div className="p-10 flex flex-col flex-grow">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-[11px] font-bold text-orange-400 bg-orange-900/20 border border-orange-500/40 px-4 py-1.5 rounded-lg uppercase tracking-widest">Scanning...</span>
                                <span className="text-[11px] font-mono text-slate-500 italic">Github Node</span>
                            </div>
                            <h4 className="text-3xl font-display leading-[0.95] mb-6 text-white group-hover:text-[#FF5F00] transition uppercase italic tracking-tighter">Internal Commit Logs: Next-Gen Ray-Reconstruction targets low-spec.</h4>
                            <p className="text-slate-400 text-base leading-relaxed mb-8">L-Score: 72%. Single-source validation. We are tracking a 40% increase in reflection stability on mid-range hardware.</p>
                            <div className="mt-auto pt-8 border-t border-white/10 flex justify-between items-center">
                                <span className="text-[11px] font-black uppercase text-white group-hover:translate-x-3 transition text-[#FF5F00] tracking-[0.3em]">Track Build &rarr;</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Discovery Footer */}
                <div className="mt-20 border-t-8 border-[#FF5F00] pt-16 pb-32 relative z-10">
                    <h5 className="text-[14px] font-black uppercase tracking-[0.8em] text-[#FF5F00] mb-16 italic opacity-50 text-center">Cross-Node Intelligence Loop</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="gaming-card p-12 group cursor-pointer hover:bg-white/5 border-white/5 !bg-[#111111]">
                            <span className="text-[11px] font-black text-[#FF5F00] uppercase tracking-[0.3em] mb-6 block">Gaming -{'>'} Geo-Politics</span>
                            <p className="text-2xl font-bold text-white group-hover:text-[#FF5F00] transition leading-[0.9] uppercase italic tracking-tighter">Silicon Wars: The geopolitical impact of high-end GPU manufacturing bans.</p>
                        </div>
                        <div className="gaming-card p-12 group cursor-pointer hover:bg-white/5 border-white/5 !bg-[#111111]">
                            <span className="text-[11px] font-black text-[#FF5F00] uppercase tracking-[0.3em] mb-6 block">Gaming -{'>'} Science</span>
                            <p className="text-2xl font-bold text-white group-hover:text-[#FF5F00] transition leading-[0.9] uppercase italic tracking-tighter">Neural Latency: How gaming reflexes are teaching us about brain plasticity.</p>
                        </div>
                        <div className="gaming-card p-12 group cursor-pointer hover:bg-white/5 border-white/5 !bg-[#111111]">
                            <span className="text-[11px] font-black text-[#FF5F00] uppercase tracking-[0.3em] mb-6 block">Gaming -{'>'} Business</span>
                            <p className="text-2xl font-bold text-white group-hover:text-[#FF5F00] transition leading-[0.9] uppercase italic tracking-tighter">IPO Watch: Gaming Conglomerates shift toward AI-centric tools.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
