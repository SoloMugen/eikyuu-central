import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      {/* Fluid Header */}
      <nav className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-slate-200 dark:border-white/10 pb-8">
        <div className="space-y-2">
          <h1 className="text-6xl md:text-8xl font-display text-slate-950 dark:text-white uppercase">
            Eikyuu<span className="text-blue-600">.</span>Central
          </h1>
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 font-medium tracking-wide">
            <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
            <span className="text-xs uppercase font-bold tracking-widest">System Status: Verified Primary Feed</span>
          </div>
        </div>
        <div className="mt-6 md:mt-0 flex flex-col items-end gap-2">
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-full bg-white dark:bg-black border border-slate-200 dark:border-white/10 text-xs font-bold hover:bg-slate-50 dark:hover:bg-zinc-900 transition text-black dark:text-white">LOGIN</button>
            <button className="px-4 py-2 rounded-full bg-slate-950 dark:bg-white text-white dark:text-black text-xs font-bold hover:bg-blue-600 dark:hover:bg-blue-400 transition shadow-xl">SUBSCRIBE</button>
          </div>
          <div className="text-[10px] font-mono text-slate-400">
            LATENCY: 14MS // TOKYO_NODE_01
          </div>
        </div>
      </nav>

      {/* Full Width Bento Grid */}
      <div className="bento-grid">

        {/* MAIN FEATURE (Spans 3 Wide, 2 High) */}
        <div className="col-span-full xl:col-span-3 xl:row-span-2 glass-card rounded-[3rem] overflow-hidden flex flex-col h-[650px]">
          <div className="h-2/3 bg-slate-200 dark:bg-slate-800 relative">
            <Image
              src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200"
              className="object-cover"
              alt="Gaming News"
              fill
            />
            <div className="absolute top-8 right-8 bg-black/40 backdrop-blur-md border border-white/20 text-white px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase">
              98% Verified Legitimacy
            </div>
          </div>
          <div className="p-10 flex-grow flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest cat-gaming">Gaming News</span>
              <span className="text-xs text-slate-400 font-bold">4 MINS AGO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display mb-6 leading-none text-slate-950 dark:text-white">The Future of Console Hardware: Leaked Specs from Primary Developers.</h2>
            <p className="text-slate-600 dark:text-slate-300 text-lg border-l-4 border-purple-500 pl-6 leading-relaxed">Our synthesis of internal developer blogs and supply chain patent filings confirms a 40% jump in ray-tracing efficiency for the next iteration of performance hardware.</p>
          </div>
        </div>

        {/* WORLD INTELLIGENCE (Spans 2 Wide, 1 High) */}
        <div className="col-span-full md:col-span-2 xl:col-span-2 glass-card rounded-[3rem] p-10 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest cat-geo">Geo-Politics</span>
              <span className="text-[10px] font-bold text-blue-600">88% LEGIT</span>
            </div>
            <h3 className="text-2xl font-display leading-tight mb-4 text-slate-950 dark:text-white">Strategic Shifts in East-Asian Defense Protocols: New Treaties Verified.</h3>
            <p className="text-slate-500 text-sm">Cross-referenced with official ministerial portals in Tokyo and Seoul.</p>
          </div>
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-white/5 flex justify-between text-[10px] font-bold text-slate-400">
            <span>REUTERS_PRIMARY</span>
            <span className="text-slate-900 dark:text-slate-200 group-hover:text-blue-600 cursor-pointer">READ_FULL →</span>
          </div>
        </div>

        {/* TRENDING STACK (Spans 1 Wide, 2 High) */}
        <div className="col-span-full md:col-span-1 xl:col-span-1 glass-card rounded-[3rem] p-8 flex flex-col">
          <h4 className="text-[11px] font-black uppercase tracking-widest text-blue-600 mb-8 pb-4 border-b border-slate-100 dark:border-white/5">Trending Pulse</h4>
          <div className="space-y-10">
            <div className="group cursor-pointer">
              <span className="text-[9px] font-black uppercase text-rose-500 block mb-1">Twitch Drama</span>
              <p className="text-sm font-bold leading-snug group-hover:text-blue-600 transition text-slate-900 dark:text-white">Creator Contract Disputes: The Primary Documents Revealed.</p>
            </div>
            <div className="group cursor-pointer">
              <span className="text-[9px] font-black uppercase text-emerald-500 block mb-1">Science</span>
              <p className="text-sm font-bold leading-snug group-hover:text-blue-600 transition text-slate-900 dark:text-white">Room Temp Superconductors: Peer Review Disproves Recent Viral Claims.</p>
            </div>
            <div className="group cursor-pointer">
              <span className="text-[9px] font-black uppercase text-purple-500 block mb-1">Anime News</span>
              <p className="text-sm font-bold leading-snug group-hover:text-blue-600 transition text-slate-900 dark:text-white">Studio MAPPA Production Schedule: Internal Studio Memo Analysis.</p>
            </div>
          </div>
          <div className="mt-auto pt-8">
            <button className="w-full py-4 bg-slate-50 dark:bg-white/5 rounded-2xl text-[10px] font-bold text-slate-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 transition uppercase tracking-widest">View Network Hub</button>
          </div>
        </div>

        {/* SCIENCE BREAKTHROUGH (Spans 2 Wide, 1 High) */}
        <div className="col-span-full md:col-span-3 xl:col-span-3 glass-card rounded-[3rem] p-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 h-48 rounded-2xl overflow-hidden shadow-lg relative">
            <Image
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
              className="w-full h-full object-cover"
              alt="Science News"
              fill
            />
          </div>
          <div className="w-full md:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest cat-science">Science</span>
              <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">99.1% LEGIT</span>
            </div>
            <h3 className="text-2xl font-display leading-tight mb-4 text-slate-950 dark:text-white">New Quantum Computing Milestone Achieved by MIT-Led Consortium.</h3>
            <p className="text-slate-500 text-sm">Synthesized from peer-reviewed journals and institutional press releases. No speculative hype detected.</p>
          </div>
        </div>

        {/* ANIME / ENTERTAINMENT (Spans 2 Wide, 1 High) */}
        <div className="col-span-full md:col-span-3 xl:col-span-3 glass-card rounded-[3rem] p-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/3 h-48 rounded-2xl overflow-hidden shadow-lg relative">
            <Image
              src="https://images.unsplash.com/photo-1541562232579-512a21360020?auto=format&fit=crop&q=80&w=800"
              className="w-full h-full object-cover"
              alt="Anime News"
              fill
            />
          </div>
          <div className="w-full md:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest cat-anime">Japanese Ent.</span>
              <span className="text-[10px] font-black text-rose-500 bg-rose-50 px-2 py-0.5 rounded">96% LEGIT</span>
            </div>
            <h3 className="text-2xl font-display leading-tight mb-4 text-slate-950 dark:text-white">Production Ghibli CEO Interview: Future Slate and Directorial Changes.</h3>
            <p className="text-slate-500 text-sm">Full translation of the original Natalie.mu interview with context markers preserved.</p>
          </div>
        </div>

      </div>

      {/* Thematic Loop Recommendation Bar */}
      <div className="mt-20 border-t border-slate-200 dark:border-white/10 pt-12 pb-24">
        <h5 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-8 text-center">Thematic Discovery Loop</h5>
        <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar">
          <div className="min-w-[300px] bg-white dark:bg-black border border-slate-100 dark:border-white/10 p-6 rounded-3xl shadow-sm hover:border-blue-500 transition cursor-pointer">
            <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest mb-2 block">Link: Gaming -{'>'} Business</span>
            <p className="text-sm font-bold text-slate-900 dark:text-white">How Studio Acquisitions Impact Global Market Shares.</p>
          </div>
          <div className="min-w-[300px] bg-white dark:bg-black border border-slate-100 dark:border-white/10 p-6 rounded-3xl shadow-sm hover:border-blue-500 transition cursor-pointer">
            <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest mb-2 block">Link: Science -{'>'} Geo-Politics</span>
            <p className="text-sm font-bold text-slate-900 dark:text-white">Space Debris Cleanup Treaties: A Factual Breakdown.</p>
          </div>
          <div className="min-w-[300px] bg-white dark:bg-black border border-slate-100 dark:border-white/10 p-6 rounded-3xl shadow-sm hover:border-blue-500 transition cursor-pointer">
            <span className="text-[9px] font-bold text-purple-500 uppercase tracking-widest mb-2 block">Link: Anime -{'>'} Production Science</span>
            <p className="text-sm font-bold text-slate-900 dark:text-white">AI in Japanese Animation: A Study on Human Output vs Logic.</p>
          </div>
        </div>
      </div>

    </main>
  );
}