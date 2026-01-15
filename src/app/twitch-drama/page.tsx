import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TwitchDramaPage() {
    return (
        <main className="min-h-screen p-4 md:p-8 bg-[#0e0e10] text-[#efeff1] twitch-grid-bg font-sans">

            {/* Twitch Header */}
            <nav className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b-2 border-[#9146ff] pb-8 relative z-10">
                <div className="flex flex-col gap-4">
                    {/* Integrated Navigation & Title Row */}
                    <div className="flex items-center gap-6">
                        <Link href="/" className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-[#9146ff] transition-colors group whitespace-nowrap">
                            <svg className="w-3 h-3 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                            Return to Hub
                        </Link>

                        <h1 className="text-5xl md:text-7xl font-display text-[#efeff1] uppercase tracking-tighter italic">
                            Twitch<span className="text-[#9146ff]">.</span>Monitor
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="flex h-3 w-3 rounded-full bg-[#9146ff] heat-pulse"></span>
                        <span className="text-[10px] uppercase font-black tracking-[0.3em] text-[#9146ff]">Social Intelligence Node // Status: Live</span>
                    </div>
                </div>

                <div className="mt-6 md:mt-0 flex flex-col items-end">
                    <div className="text-[10px] font-mono text-secondary mb-4 uppercase text-right leading-relaxed tracking-tighter">
                        SENTIMENT: VOLATILE<br />
                        ANALYSIS: VERIFIED_CORE
                    </div>
                    <div className="flex gap-2">
                        <button className="px-6 py-2 rounded-full bg-[#9146ff] text-white text-[10px] font-black tracking-widest hover:bg-[#a970ff] transition shadow-lg uppercase">Evidence Vault</button>
                    </div>
                </div>
            </nav>

            {/* Twitch Category Quick Nav */}
            <div className="w-full mb-10 overflow-x-auto no-scrollbar py-2 z-10 relative">
                <div className="flex items-center gap-4 min-w-max">
                    <button className="px-8 py-3 rounded-xl bg-[#9146ff] text-white text-[10px] font-black uppercase tracking-widest shadow-xl">Heatmap</button>
                    <button className="px-8 py-3 rounded-xl bg-[#18181b] border border-[#26262c] text-[#adadb8] text-[10px] font-bold uppercase tracking-widest hover:border-[#9146ff] hover:text-[#efeff1] transition shadow-sm">Ban Tracker</button>
                    <button className="px-8 py-3 rounded-xl bg-[#18181b] border border-[#26262c] text-[#adadb8] text-[10px] font-bold uppercase tracking-widest hover:border-[#9146ff] hover:text-[#efeff1] transition shadow-sm">Contract Leaks</button>
                    <button className="px-8 py-3 rounded-xl bg-[#18181b] border border-[#26262c] text-[#adadb8] text-[10px] font-bold uppercase tracking-widest hover:border-[#9146ff] hover:text-[#efeff1] transition shadow-sm">Meta Shift</button>
                    <button className="px-8 py-3 rounded-xl bg-[#18181b] border border-[#26262c] text-[#adadb8] text-[10px] font-bold uppercase tracking-widest hover:border-[#9146ff] hover:text-[#efeff1] transition shadow-sm">Platform Ops</button>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 z-10 relative">

                {/* Big Feature Card */}
                <div className="xl:col-span-8 drama-card group h-[600px] relative border-none">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1560253023-3ee5d6446bd4?auto=format&fit=crop&q=80&w=2000"
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            alt="Streaming Set"
                            fill
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent"></div>
                    </div>

                    <div className="relative z-10 mt-auto p-12">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-4 py-1.5 bg-[#9146ff] text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">Critical Conflict</span>
                            <span className="px-4 py-1.5 bg-[#0e0e10]/80 backdrop-blur text-green-400 rounded-full text-[10px] font-black border border-green-900/50 uppercase tracking-widest">L-Score: 84% Verified</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-display text-[#efeff1] leading-[1.05] mb-6 max-w-4xl tracking-tighter italic uppercase">TOP CREATOR INDEFINITELY BANNED: SYNTHESIS OF LEAKED MODERATION LOGS.</h2>
                        <p className="text-[#adadb8] text-lg border-l-4 border-[#9146ff] pl-6 leading-relaxed max-w-2xl italic">Internal logs suggest the ban stems from repeated violations of platform safety protocols. We have cross-referenced three independent corroborating sources within the moderation hub.</p>

                        <div className="mt-8 flex gap-6 items-center">
                            <button className="px-8 py-4 bg-[#efeff1] text-[#0e0e10] rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#9146ff] hover:text-white transition shadow-2xl">Examine Evidence Thread</button>
                            <div className="flex items-center gap-2 text-[#9146ff] font-mono text-[10px] font-black uppercase">
                                <span className="animate-pulse">●</span> LIVE_CLIP_ATTACHED
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar: Sentiment Heatmap */}
                <div className="xl:col-span-4 drama-card p-10 h-[600px] flex flex-col border-[#26262c]">
                    <div className="flex justify-between items-center mb-10 pb-4 border-b border-[#26262c]">
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#9146ff]">Sentiment Heatmap</h3>
                        <span className="text-[9px] font-mono text-secondary uppercase">Node: 0-Alpha</span>
                    </div>

                    <div className="space-y-8 overflow-y-auto pr-2 no-scrollbar">
                        <div className="group cursor-pointer">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[10px] font-black text-[#efeff1] uppercase tracking-widest">Global Chat Pulse</span>
                                <span className="text-[9px] font-bold text-[#9146ff]">72% TOXIC</span>
                            </div>
                            <div className="w-full h-1.5 bg-[#0e0e10] rounded-full overflow-hidden">
                                <div className="h-full bg-[#9146ff] w-[72%]"></div>
                            </div>
                            <p className="text-[11px] text-[#adadb8] mt-3 font-medium">Spikes detected in keywords: &quot;unfair&quot;, &quot;bias&quot;, &quot;monopoly&quot; following the ban event.</p>
                        </div>

                        {/* Live Signal Feed */}
                        <div className="pt-6 space-y-4 border-t border-[#26262c]">
                            <h4 className="text-[9px] font-black uppercase text-secondary tracking-widest">Live Signal Feed</h4>
                            <div className="text-[11px] font-mono border-l-2 border-[#9146ff] pl-4 py-2 bg-[#0e0e10]/50 rounded-r-lg">
                                <span className="text-[#9146ff] font-bold">[02:14:12]</span> <span className="text-[#efeff1]">Detected automated ban-wave for third-party extensions.</span>
                            </div>
                            <div className="text-[11px] font-mono border-l-2 border-[#9146ff]/30 pl-4 py-2 opacity-60">
                                <span className="text-[#9146ff]">[02:12:45]</span> <span className="text-[#adadb8]">Creator &quot;User_Alpha&quot; archived all recent VODs.</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-8">
                        <button className="w-full py-4 bg-[#0e0e10] border border-[#26262c] rounded-2xl text-[9px] font-black text-[#9146ff] hover:bg-[#9146ff] hover:text-white transition uppercase tracking-widest">Export Sentiment Data</button>
                    </div>
                </div>

                {/* Density Post Grid */}
                <div className="xl:col-span-4 drama-card group min-h-[450px]">
                    <div className="h-48 overflow-hidden relative">
                        <Image
                            src="https://images.unsplash.com/photo-1541167760496-1628856ab752?auto=format&fit=crop&q=80&w=800"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            alt="Chat Log"
                            fill
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-[#9146ff] text-white rounded-full text-[8px] font-black uppercase tracking-widest">Conflict</span>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[9px] font-bold text-green-400 bg-green-900/20 border border-green-900/50 px-2 py-0.5 rounded uppercase tracking-tighter">Verified Logs</span>
                            <span className="text-[9px] font-mono text-secondary uppercase tracking-widest">SEC_01</span>
                        </div>
                        <h4 className="text-2xl font-display leading-tight mb-4 text-[#efeff1] group-hover:text-[#9146ff] transition tracking-tighter italic uppercase">EXPOSED: DISCORD LEAKS REVEAL COORDINATION BEHIND RECENT RAID.</h4>
                        <p className="text-[#adadb8] text-sm leading-relaxed mb-6">Semantic analysis of leaked moderator logs confirms a 98% probability of organized platform disruption.</p>
                        <div className="mt-auto pt-6 border-t border-[#26262c] flex justify-between items-center">
                            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest text-[9px]">Source: Discord_Archives</span>
                            <span className="text-[#efeff1] group-hover:translate-x-1 transition text-[#9146ff] font-black uppercase text-[10px]">Investigate &rarr;</span>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-4 drama-card group min-h-[450px]">
                    <div className="h-48 overflow-hidden relative">
                        <Image
                            src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=800"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            alt="Contract"
                            fill
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-[#9146ff] text-white rounded-full text-[8px] font-black uppercase tracking-widest">Contract</span>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[9px] font-bold text-[#9146ff] bg-[#9146ff]/10 border border-[#9146ff]/30 px-2 py-0.5 rounded uppercase tracking-tighter">High Heat</span>
                            <span className="text-[9px] font-mono text-secondary uppercase tracking-widest">HUB_X</span>
                        </div>
                        <h4 className="text-2xl font-display leading-tight mb-4 text-[#efeff1] group-hover:text-[#9146ff] transition tracking-tighter italic uppercase">PLATFORM MIGRATION: COMPARING THE LEAKED REVENUE CLAUSES.</h4>
                        <p className="text-[#adadb8] text-sm leading-relaxed mb-6">Financial synthesis of three leaked contracts confirms a significant shift in base payout structures for 2026.</p>
                        <div className="mt-auto pt-6 border-t border-[#26262c] flex justify-between items-center">
                            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest text-[9px]">Source: Portal_X</span>
                            <span className="text-[#efeff1] group-hover:translate-x-1 transition text-[#9146ff] font-black uppercase text-[10px]">Investigate &rarr;</span>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-4 drama-card group min-h-[450px]">
                    <div className="h-48 overflow-hidden relative">
                        <Image
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            alt="Meta"
                            fill
                        />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-[#9146ff] text-white rounded-full text-[8px] font-black uppercase tracking-widest">Meta</span>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[9px] font-bold text-orange-400 bg-orange-900/20 border border-orange-900/50 px-2 py-0.5 rounded uppercase tracking-tighter">Scanning...</span>
                            <span className="text-[9px] font-mono text-secondary uppercase tracking-widest">DEV_LOG</span>
                        </div>
                        <h4 className="text-2xl font-display leading-tight mb-4 text-[#efeff1] group-hover:text-[#9146ff] transition tracking-tighter italic uppercase">UPCOMING UI OVERHAUL: EARLY SCREENSHOTS SUGGEST AD-CENTRIC DESIGN.</h4>
                        <p className="text-[#adadb8] text-sm leading-relaxed mb-6">L-Score: 62%. System is currently tracking secondary corroboration from internal design Slack leaks.</p>
                        <div className="mt-auto pt-6 border-t border-[#26262c] flex justify-between items-center">
                            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest text-[9px]">Status: Tracking</span>
                            <span className="text-[#efeff1] group-hover:translate-x-1 transition text-[#9146ff] font-black uppercase text-[10px]">Examine &rarr;</span>
                        </div>
                    </div>
                </div>

            </div>

            {/* Discovery Footer */}
            <div className="mt-20 border-t-4 border-[#9146ff] pt-12 pb-24 relative z-10">
                <h5 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#9146ff] mb-10 text-center opacity-50">Cross-Entity Intelligence Loop</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="drama-card p-10 group cursor-pointer border-[#26262c] hover:bg-[#18181b]">
                        <span className="text-[9px] font-black text-[#9146ff] uppercase tracking-widest mb-4 block">Twitch -{'>'} Business</span>
                        <p className="text-lg font-bold text-[#efeff1] group-hover:text-[#9146ff] transition leading-tight uppercase tracking-tighter italic">Streamer Economics: How Platform Wars Affect Venture Capital in Tech.</p>
                    </div>
                    <div className="drama-card p-10 group cursor-pointer border-[#26262c] hover:bg-[#18181b]">
                        <span className="text-[9px] font-black text-[#9146ff] uppercase tracking-widest mb-4 block">Twitch -{'>'} Psychology</span>
                        <p className="text-lg font-bold text-[#efeff1] group-hover:text-[#9146ff] transition leading-tight uppercase tracking-tighter italic">Parasocial Boundaries: The Psychological Impact of High-Velocity Drama.</p>
                    </div>
                    <div className="drama-card p-10 group cursor-pointer border-[#26262c] hover:bg-[#18181b]">
                        <span className="text-[9px] font-black text-[#9146ff] uppercase tracking-widest mb-4 block">Twitch -{'>'} Gaming</span>
                        <p className="text-lg font-bold text-[#efeff1] group-hover:text-[#9146ff] transition leading-tight uppercase tracking-tighter italic">Marketing Metas: Correlation between Streamer Sponsorships and Game Success.</p>
                    </div>
                </div>
            </div>

        </main>
    );
}
