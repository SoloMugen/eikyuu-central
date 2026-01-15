import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AnimePage() {
    return (
        <main className="min-h-screen p-4 md:p-8 bg-[#0A0A0C] text-[#E2E8F0] transition-colors duration-500">

            {/* Anime Header */}
            <nav className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b-2 border-[#FFB800] pb-8 relative">
                <div className="flex flex-col gap-4">
                    {/* Integrated Navigation & Title */}
                    <div className="flex items-center gap-6">
                        <Link href="/" className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-[#FFB800] transition-colors group whitespace-nowrap">
                            <svg className="w-3 h-3 transform group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                            </svg>
                            Return to global hub
                        </Link>

                        <h1 className="text-5xl md:text-7xl font-display text-white uppercase tracking-tighter">
                            Anime<span className="text-[#FFB800]">.</span>Nexus
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="flex h-3 w-3 rounded-full bg-[#FFB800] anime-pulse"></span>
                        <span className="text-[10px] uppercase font-black tracking-[0.3em] text-[#FFB800]">Seasonal Tracking Hub // Node: Tokyo_Direct</span>
                    </div>
                </div>

                <div className="mt-6 md:mt-0 flex flex-col items-end">
                    <div className="text-[10px] font-mono text-slate-500 mb-4 uppercase text-right leading-relaxed">
                        Source: Oricon / Natalie.mu<br />
                        Translation: Native AI Verified
                    </div>
                    <div className="flex gap-2">
                        <button className="px-6 py-2 rounded-full bg-white text-black text-[10px] font-black tracking-widest hover:bg-[#FFB800] transition uppercase glow-orange">Seasonal Chart</button>
                    </div>
                </div>
            </nav>

            {/* Genre Quick Nav */}
            <div className="w-full mb-10 overflow-x-auto no-scrollbar py-2">
                <div className="flex items-center gap-4 min-w-max">
                    <button className="px-8 py-3 rounded-xl bg-[#FFB800] text-black text-[10px] font-black uppercase tracking-widest shadow-xl">Latest Updates</button>
                    <button className="px-8 py-3 rounded-xl bg-[#141417] border border-[#1F1F23] text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:border-[#FFB800] hover:text-white transition shadow-sm">Action</button>
                    <button className="px-8 py-3 rounded-xl bg-[#141417] border border-[#1F1F23] text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:border-[#FFB800] hover:text-white transition shadow-sm">Romance</button>
                    <button className="px-8 py-3 rounded-xl bg-[#141417] border border-[#1F1F23] text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:border-[#FFB800] hover:text-white transition shadow-sm">Sci-Fi</button>
                    <button className="px-8 py-3 rounded-xl bg-[#141417] border border-[#1F1F23] text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:border-[#FFB800] hover:text-white transition shadow-sm">Movie</button>
                    <button className="px-8 py-3 rounded-xl bg-[#141417] border border-[#1F1F23] text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:border-[#FFB800] hover:text-white transition shadow-sm">Upcoming</button>
                </div>
            </div>

            {/* Main Panoramic Layout */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

                {/* Big Feature (Poster Style) */}
                <div className="xl:col-span-8 anime-card group h-[600px] relative border-none">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&q=80&w=2000"
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            alt="Anime Poster"
                            fill
                        />
                        <div className="absolute inset-0 poster-overlay"></div>
                    </div>

                    <div className="relative z-10 mt-auto p-12">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-4 py-1.5 bg-[#FFB800] text-black rounded-full text-[10px] font-black uppercase tracking-widest">Industry Milestone</span>
                            <span className="px-4 py-1.5 bg-black/80 backdrop-blur text-green-400 rounded-full text-[10px] font-black border border-green-900/50 uppercase tracking-widest">98% Verified Legitimacy</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-display text-white leading-[1] mb-6 tracking-tighter">STUDIO GHIBLI'S NEXT MASTERPIECE: PRODUCTION TIMELINE VERIFIED.</h2>
                        <p className="text-slate-300 text-lg border-l-4 border-[#FFB800] pl-6 leading-relaxed max-w-3xl">Our native translation team analyzed the original interview with the production head at Natalie.mu. Key takeaways: Traditional hand-drawn animation prioritized, 2027 release window confirmed.</p>

                        <div className="mt-8 flex gap-6 items-center">
                            <button className="px-8 py-4 bg-white text-black rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-[#FFB800] transition">READ FULL ANALYSIS</button>
                        </div>
                    </div>
                </div>

                {/* Sidebar: Production Watchlist */}
                <div className="xl:col-span-4 anime-card p-10 h-[600px] flex flex-col bg-[#0A0A0C] border-[#1F1F23]">
                    <div className="flex justify-between items-center mb-10 pb-4 border-b border-[#1F1F23]">
                        <h3 className="text-xs font-black uppercase tracking-widest text-[#FFB800]">Production Tracking</h3>
                        <span className="text-[9px] font-mono text-slate-500">PULSE: LIVE</span>
                    </div>

                    <div className="space-y-8 overflow-y-auto pr-2 no-scrollbar">
                        <div className="flex gap-4 group cursor-pointer">
                            <div className="w-20 h-28 bg-slate-800 rounded-xl overflow-hidden flex-shrink-0 border border-slate-700 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&q=80&w=200"
                                    className="object-cover group-hover:scale-110 transition"
                                    alt="Mini poster"
                                    fill
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[9px] font-black text-[#FFB800] uppercase">Mappa Studio</span>
                                    <span className="text-[9px] font-bold text-green-500">CORROBORATED</span>
                                </div>
                                <h4 className="text-sm font-bold text-white group-hover:text-[#FFB800] transition">Chainsaw Man: Reze Arc Production Phase confirmed.</h4>
                                <p className="text-[11px] text-slate-500 mt-1">L-Score: 92% based on animator schedule leaks.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 group cursor-pointer">
                            <div className="w-20 h-28 bg-slate-800 rounded-xl overflow-hidden flex-shrink-0 border border-slate-700 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?auto=format&fit=crop&q=80&w=200"
                                    className="object-cover group-hover:scale-110 transition"
                                    alt="Mini poster"
                                    fill
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[9px] font-black text-[#FFB800] uppercase">Ufotable</span>
                                    <span className="text-[9px] font-bold text-slate-500 uppercase">Scanning</span>
                                </div>
                                <h4 className="text-sm font-bold text-white group-hover:text-[#FFB800] transition">Infinity Castle Movie Trilogy: New SFX Pipeline Analysis.</h4>
                                <p className="text-[11px] text-slate-500 mt-1">System is parsing trailer frame-data for rendering artifacts.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 group cursor-pointer">
                            <div className="w-20 h-28 bg-slate-800 rounded-xl overflow-hidden flex-shrink-0 border border-slate-700 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80&w=200"
                                    className="object-cover group-hover:scale-110 transition"
                                    alt="Mini poster"
                                    fill
                                />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[9px] font-black text-[#FFB800] uppercase">Weekly Shonen</span>
                                    <span className="text-[9px] font-bold text-orange-500 uppercase tracking-tighter">Low Corrob</span>
                                </div>
                                <h4 className="text-sm font-bold text-white group-hover:text-[#FFB800] transition">Hunter x Hunter: Next Batch of Chapters completed?</h4>
                                <p className="text-[11px] text-slate-500 mt-1">Rumors from Weibo being verified via native Japanese sources.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto pt-8">
                        <button className="w-full py-4 bg-[#141417] border border-[#1F1F23] rounded-2xl text-[9px] font-black text-slate-500 hover:text-[#FFB800] transition uppercase tracking-widest">Open Leak Archive</button>
                    </div>
                </div>

                {/* Vertical Poster Grid (Gogoanime Style Density) */}
                <div className="col-span-full mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

                    {/* Poster Card 1 */}
                    <div className="anime-card group">
                        <div className="relative h-[250px] overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1607604276483-4efdd6d4adbb?auto=format&fit=crop&q=80&w=400"
                                className="object-cover group-hover:scale-110 transition duration-500"
                                alt="Anime Poster"
                                fill
                            />
                            <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                                <span className="px-2 py-0.5 bg-[#FFB800] text-black text-[8px] font-black rounded uppercase">Sub / Hub</span>
                                <span className="px-2 py-0.5 bg-black/80 text-white text-[8px] font-black rounded uppercase">Ver. 94%</span>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <h4 className="text-sm font-bold text-white group-hover:text-[#FFB800] transition line-clamp-2">The Apothecary Diaries: Season 2 Script Verified.</h4>
                            <span className="mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">TOHO Animation</span>
                        </div>
                    </div>

                    {/* Poster Card 2 */}
                    <div className="anime-card group">
                        <div className="relative h-[250px] overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1614583225154-5feaba071595?auto=format&fit=crop&q=80&w=400"
                                className="object-cover group-hover:scale-110 transition duration-500"
                                alt="Anime Poster"
                                fill
                            />
                            <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                                <span className="px-2 py-0.5 bg-[#FFB800] text-black text-[8px] font-black rounded uppercase">Source Ver.</span>
                                <span className="px-2 py-0.5 bg-black/80 text-white text-[8px] font-black rounded uppercase">Ver. 88%</span>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <h4 className="text-sm font-bold text-white group-hover:text-[#FFB800] transition line-clamp-2">Solo Leveling: Production Logs confirm Cour 2 status.</h4>
                            <span className="mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">A-1 Pictures</span>
                        </div>
                    </div>

                    {/* Poster Card 3 */}
                    <div className="anime-card group">
                        <div className="relative h-[250px] overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1627337194440-4966601f074d?auto=format&fit=crop&q=80&w=400"
                                className="object-cover group-hover:scale-110 transition duration-500"
                                alt="Anime Poster"
                                fill
                            />
                            <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                                <span className="px-2 py-0.5 bg-[#FFB800] text-black text-[8px] font-black rounded uppercase">Movie Intel</span>
                                <span className="px-2 py-0.5 bg-black/80 text-white text-[8px] font-black rounded uppercase">Ver. 99%</span>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <h4 className="text-sm font-bold text-white group-hover:text-[#FFB800] transition line-clamp-2">Spy x Family: Code White - Global Box Office Data Verified.</h4>
                            <span className="mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Wit Studio</span>
                        </div>
                    </div>

                    {/* Poster Card 4 */}
                    <div className="anime-card group">
                        <div className="relative h-[250px] overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?auto=format&fit=crop&q=80&w=400"
                                className="object-cover group-hover:scale-110 transition duration-500"
                                alt="Anime Poster"
                                fill
                            />
                            <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                                <span className="px-2 py-0.5 bg-[#FFB800] text-black text-[8px] font-black rounded uppercase">Studio Leak</span>
                                <span className="px-2 py-0.5 bg-black/80 text-white text-[8px] font-black rounded uppercase">Ver. 72%</span>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <h4 className="text-sm font-bold text-white group-hover:text-[#FFB800] transition line-clamp-2">One Punch Man Season 3: Internal Animation Frames?</h4>
                            <span className="mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">J.C.Staff</span>
                        </div>
                    </div>

                    {/* Poster Card 5 */}
                    <div className="anime-card group">
                        <div className="relative h-[250px] overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=400"
                                className="object-cover group-hover:scale-110 transition duration-500"
                                alt="Anime Poster"
                                fill
                            />
                            <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                                <span className="px-2 py-0.5 bg-[#FFB800] text-black text-[8px] font-black rounded uppercase">Confirmed</span>
                                <span className="px-2 py-0.5 bg-black/80 text-white text-[8px] font-black rounded uppercase">Ver. 96%</span>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <h4 className="text-sm font-bold text-white group-hover:text-[#FFB800] transition line-clamp-2">Mushoku Tensei: Season 2 Part 2 Final Episode Script.</h4>
                            <span className="mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Studio Bind</span>
                        </div>
                    </div>

                    {/* Poster Card 6 */}
                    <div className="anime-card group">
                        <div className="relative h-[250px] overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&q=80&w=400"
                                className="object-cover group-hover:scale-110 transition duration-500"
                                alt="Anime Poster"
                                fill
                            />
                            <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                                <span className="px-2 py-0.5 bg-[#FFB800] text-black text-[8px] font-black rounded uppercase">Original Intel</span>
                                <span className="px-2 py-0.5 bg-black/80 text-white text-[8px] font-black rounded uppercase">Ver. 90%</span>
                            </div>
                        </div>
                        <div className="p-4 flex flex-col flex-grow">
                            <h4 className="text-sm font-bold text-white group-hover:text-[#FFB800] transition line-clamp-2">Kaiju No. 8: Production Committee Budget Reports analyzed.</h4>
                            <span className="mt-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Production I.G</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* Thematic Discovery Loop for Anime */}
            <div className="mt-20 border-t-4 border-[#FFB800] pt-12 pb-24">
                <h5 className="text-[11px] font-black uppercase tracking-[0.5em] text-[#FFB800] mb-10">Cross-Entity Intelligence Loop</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="anime-card p-8 shadow-sm hover:border-[#FFB800] transition cursor-pointer group">
                        <div className="w-full h-32 rounded-2xl overflow-hidden mb-6 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?auto=format&fit=crop&q=80&w=600"
                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                alt="Japan culture"
                                fill
                            />
                        </div>
                        <span className="text-[9px] font-black text-[#FFB800] uppercase tracking-widest mb-4 block">Link: Anime -{'>'} Japan Culture</span>
                        <p className="text-lg font-bold text-white group-hover:text-[#FFB800] transition leading-tight uppercase tracking-tighter">Tourism Trends: How "Anime Pilgrimages" are boosting regional Japanese economies.</p>
                    </div>
                    <div className="anime-card p-8 shadow-sm hover:border-[#FFB800] transition cursor-pointer group">
                        <div className="w-full h-32 rounded-2xl overflow-hidden mb-6 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600"
                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                alt="Gaming"
                                fill
                            />
                        </div>
                        <span className="text-[9px] font-black text-[#FFB800] uppercase tracking-widest mb-4 block">Link: Anime -{'>'} Gaming</span>
                        <p className="text-lg font-bold text-white group-hover:text-[#FFB800] transition leading-tight uppercase tracking-tighter">IP Synergy: The Financial Impact of Anime-to-Game adaptation strategies.</p>
                    </div>
                    <div className="anime-card p-8 shadow-sm hover:border-[#FFB800] transition cursor-pointer group">
                        <div className="w-full h-32 rounded-2xl overflow-hidden mb-6 relative">
                            <Image
                                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600"
                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                                alt="Technology"
                                fill
                            />
                        </div>
                        <span className="text-[9px] font-black text-[#FFB800] uppercase tracking-widest mb-4 block">Link: Anime -{'>'} Tech</span>
                        <p className="text-lg font-bold text-white group-hover:text-[#FFB800] transition leading-tight uppercase tracking-tighter">Neural Interpolation: How AI-driven Frame generation is changing modern production pipelines.</p>
                    </div>
                </div>
            </div>

        </main>
    );
}
