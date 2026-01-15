'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react'; // Placeholder for icons if needed, though template uses none

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      category: "Gaming",
      badgeColor: "bg-[#FF5F00]",
      title: "THE 2NM REVOLUTION: CHIPSET LEAK.",
      desc: "Supply chain logs confirm tape-out for unannounced console hardware targets.",
      borderColor: "border-[#FF5F00]",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2000",
      tag: "Top Gaming Intel"
    },
    {
      category: "Geo-Politics",
      badgeColor: "bg-blue-600",
      title: "Indo-Pacific Naval Drills: ministerial Logs.",
      desc: "Verified ministerial cables from Tokyo confirm joint defense parameters for 2026.",
      borderColor: "border-blue-600",
      image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000",
      tag: "Global Strategic Monitor"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <main className="bg-white text-slate-900 font-sans overflow-x-hidden">

      {/* NAVIGATION HEADER */}
      <header className="max-w-[1700px] mx-auto p-6 md:p-12">
        <nav className="w-full flex flex-col gap-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-slate-900 pb-10">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-9xl font-display text-slate-950 uppercase tracking-tighter">
                Eikyuu<span className="text-blue-600">.</span>Central
              </h1>
              <div className="flex items-center gap-6 text-slate-500">
                <span className="flex h-4 w-4 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]"></span>
                <span className="text-[12px] uppercase font-black tracking-[0.2em]">Live Intelligence Matrix: Connected</span>
              </div>
            </div>
            <div className="mt-8 md:mt-0 flex gap-4">
              <button className="px-8 py-4 rounded-full bg-white border border-slate-200 text-[11px] font-black uppercase tracking-widest hover:bg-slate-50 transition">DIRECTORY</button>
              <button className="px-8 py-4 rounded-full bg-slate-950 text-white text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 transition shadow-2xl">INITIALIZE</button>
            </div>
          </div>

          {/* QUICK NAV BAR */}
          <div className="w-full overflow-x-auto no-scrollbar py-2">
            <div className="flex items-center gap-6 min-w-max">
              <button className="px-10 py-3.5 rounded-2xl bg-slate-950 text-white text-[11px] font-black uppercase tracking-widest">Global Live</button>
              <Link href="/geo-politics" className="px-8 py-3.5 rounded-2xl bg-white border border-slate-200 text-blue-600 text-[11px] font-bold uppercase tracking-widest hover:bg-blue-50 transition">Geo-Politics</Link>
              <Link href="/gaming" className="px-8 py-3.5 rounded-2xl bg-white border border-slate-200 text-orange-600 text-[11px] font-bold uppercase tracking-widest hover:bg-orange-50 transition">Gaming</Link>
              <Link href="/twitch-drama" className="px-8 py-3.5 rounded-2xl bg-white border border-slate-200 text-purple-600 text-[11px] font-bold uppercase tracking-widest hover:border-purple-600 transition">Twitch Drama</Link>
              <Link href="/anime" className="px-8 py-3.5 rounded-2xl bg-white border border-slate-200 text-yellow-600 text-[11px] font-bold uppercase tracking-widest hover:border-yellow-600 transition">Anime</Link>
              <Link href="/science" className="px-8 py-3.5 rounded-2xl bg-white border border-slate-200 text-emerald-600 text-[11px] font-bold uppercase tracking-widest hover:bg-emerald-50 transition">Science</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* AUTO-CHANGING HERO CAROUSEL */}
      <section className="carousel-container bg-slate-950">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
            <Image
              src={slide.image}
              alt={slide.category}
              fill
              className="object-cover opacity-50"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-24 zone-content text-white">
              <span className={`px-4 py-1.5 ${slide.badgeColor} w-max rounded text-[10px] font-black uppercase mb-6 tracking-widest`}>{slide.tag}</span>
              <h2 className="text-6xl md:text-8xl font-display uppercase italic tracking-tighter leading-none mb-6">{slide.title}</h2>
              <p className={`text-slate-300 text-2xl border-l-8 ${slide.borderColor} pl-8 italic max-w-4xl`}>{slide.desc}</p>
            </div>
          </div>
        ))}
        {/* Progress Bar */}
        <div key={currentSlide} className="absolute bottom-0 left-0 h-1.5 bg-blue-600 z-50 animate-[grow_5s_linear_forwards]" style={{ width: '100%' }}></div>
        <style jsx>{`
          @keyframes grow { from { width: 0%; } to { width: 100%; } }
        `}</style>
      </section>

      {/* SECTION: GEO-POLITICS (Full Width, Tactical Blue) */}
      <section className="full-zone zone-geo">
        <div className="zone-content">
          <h2 className="section-label text-blue-600">Geo-Political Intelligence</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[400px]">

            {/* Large Collage Feature */}
            <div className="md:col-span-8 hub-card group relative">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
                alt="Arctic"
                fill
                className="object-cover opacity-20 transition-opacity duration-700 group-hover:opacity-30"
              />
              <div className="p-12 relative z-10 flex flex-col justify-center">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6 block">Region: Arctic_Node_04</span>
                <h4 className="text-4xl md:text-6xl font-display uppercase tracking-tighter leading-none mb-6">Arctic Naval Deployment: Thermal Logs.</h4>
                <p className="text-slate-500 text-xl italic max-w-2xl">Satellite thermal imaging confirms unannounced repositioning in neutral sectors.</p>
              </div>
            </div>

            {/* RESTORED SITUATION ROOM CARD */}
            <div className="md:col-span-4 bg-blue-600 text-white rounded-[2.5rem] p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 400 400" className="w-full h-full fill-current">
                  <circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="1" strokeDasharray="10 10" className="grid-matrix-svg" />
                  <path d="M0,200 L400,200 M200,0 L200,400" stroke="white" strokeWidth="0.5" />
                </svg>
              </div>
              <div>
                <span className="text-[11px] font-black uppercase tracking-[0.5em] mb-8 block opacity-60">Situation Room v2.4</span>
                <h4 className="text-4xl font-display leading-none mb-6 uppercase tracking-tighter italic">Live Friction Grid.</h4>
                <p className="text-blue-100 text-sm italic leading-relaxed">Real-time coordinate tracking of diplomatic events synthesized from global verified signals.</p>
              </div>
              <button className="w-full py-5 bg-white text-blue-600 rounded-2xl text-[11px] font-black tracking-widest hover:bg-slate-900 hover:text-white transition uppercase">Launch Interactive Matrix</button>
            </div>

            {/* Small Grid Items */}
            <div className="md:col-span-4 hub-card group p-10">
              <div className="h-1/2 rounded-2xl overflow-hidden mb-6 relative">
                <Image src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=600" alt="Trade" fill className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <h4 className="text-2xl font-display uppercase tracking-tight mb-4">Trade Pact Text Verified.</h4>
              <span className="text-blue-600 font-black text-[10px] uppercase">Legit-Score: 99.4%</span>
            </div>
            <div className="md:col-span-4 hub-card group p-10">
              <div className="h-1/2 rounded-2xl overflow-hidden mb-6 relative">
                <Image src="https://images.unsplash.com/photo-1521791136064-7986c295944c?auto=format&fit=crop&q=80&w=600" alt="Sanctions" fill className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <h4 className="text-2xl font-display uppercase tracking-tight mb-4">Sanction Draft Leak: EU Node.</h4>
              <span className="text-blue-600 font-black text-[10px] uppercase">Brussels_Archive</span>
            </div>
            <div className="md:col-span-4 hub-card group p-10">
              <div className="h-1/2 rounded-2xl overflow-hidden mb-6 relative">
                <Image src="https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=600" alt="G7" fill className="object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
              <h4 className="text-2xl font-display uppercase tracking-tight mb-4">G7 Communiqué: Final Edit.</h4>
              <span className="text-blue-600 font-black text-[10px] uppercase">Verified Primary</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: GAMING (Full Width, Industrial Dark) */}
      <section className="full-zone zone-gaming">
        <div className="zone-content">
          <h2 className="section-label text-[#FF5F00]">Gaming & Hardware Nexus</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[350px]">

            {/* Massive Wide Feature */}
            <div className="md:col-span-9 hub-card group relative">
              <Image
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200"
                alt="Hardware"
                fill
                className="object-cover opacity-20 transition-opacity duration-700 group-hover:opacity-40"
              />
              <div className="p-12 relative z-10 mt-auto">
                <span className="text-[10px] font-black text-[#FF5F00] uppercase tracking-widest mb-4 block">Hardware Telemetry</span>
                <h4 className="text-4xl md:text-7xl font-display italic uppercase tracking-tighter mb-4 leading-[0.8]">Handheld Specs confirmed.</h4>
                <p className="text-slate-400 text-xl max-w-2xl border-l-4 border-[#FF5F00] pl-6 italic">Yield logs confirm 4nm architecture with dedicated neural upscaling nodes.</p>
              </div>
            </div>

            {/* Studio Card */}
            <div className="md:col-span-3 hub-card p-10 justify-between">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold uppercase italic text-[#FF5F00]">Studio Monitor</h4>
                <div className="border-l-2 border-[#FF5F00] pl-6">
                  <span className="text-[10px] text-slate-500 uppercase">Rockstar North</span>
                  <p className="text-base font-bold italic">New patent for foliage simulation verified.</p>
                </div>
              </div>
              <button className="w-full py-4 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest hover:text-[#FF5F00] transition">Archives</button>
            </div>
          </div>

          {/* Gaming Row 2: Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[400px] mt-8">
            <div className="md:col-span-4 hub-card group p-10 bg-[#13131A] border-white/5">
              <div className="h-40 overflow-hidden relative rounded-xl mb-6">
                <Image src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=800" alt="VR" fill className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <h4 className="text-2xl font-display text-white mb-4 uppercase italic">VR Sense-Link Patent.</h4>
              <p className="text-sm text-slate-400">Sony files new haptic feedback logic for unannounced headset.</p>
            </div>
            <div className="md:col-span-4 hub-card group p-10 bg-[#13131A] border-white/5">
              <div className="h-40 overflow-hidden relative rounded-xl mb-6">
                <Image src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=800" alt="VR" fill className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <h4 className="text-2xl font-display text-white mb-4 uppercase italic">FPS Frame-Gen Hack.</h4>
              <p className="text-sm text-slate-400">Modders unlock 120fps on locked console firmware via memory injection.</p>
            </div>
            <div className="md:col-span-4 hub-card group p-10 bg-[#13131A] border-white/5">
              <div className="h-40 overflow-hidden relative rounded-xl mb-6">
                <Image src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" alt="VR" fill className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <h4 className="text-2xl font-display text-white mb-4 uppercase italic">Indie Market Crash.</h4>
              <p className="text-sm text-slate-400">Data suggest 40% revenue drop for non-subscription titles.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: TWITCH (Full Width, Dark Obsidian) */}
      <section className="full-zone zone-twitch">
        <div className="zone-content">
          <h2 className="section-label text-[#9146ff]">Twitch Drama monitor</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[450px]">

            {/* Toxicity Monitor Collage */}
            <div className="md:col-span-5 hub-card p-12 justify-center border-white/5">
              <h4 className="text-[11px] font-black uppercase text-slate-500 tracking-[0.3em] mb-12">Global chat Sentiment</h4>
              <div className="space-y-12">
                <div>
                  <div className="flex justify-between mb-4">
                    <span className="text-[12px] font-bold uppercase tracking-widest">Platform Node A</span>
                    <span className="text-[12px] text-[#9146ff] font-black tracking-widest">72% VOLATILE</span>
                  </div>
                  <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-[#9146ff] w-[72%] shadow-[0_0_20px_#9146ff]"></div>
                  </div>
                </div>
                <p className="text-slate-400 italic text-base leading-relaxed border-l-2 border-[#9146ff] pl-6">Significant spikes in keywords: "unfair", "bias", "redact" following the automated ban wave.</p>
              </div>
            </div>

            {/* Wide Evidence Collage */}
            <div className="md:col-span-7 hub-card group relative border-white/5">
              <Image
                src="https://images.unsplash.com/photo-1541167760496-1628856ab752?auto=format&fit=crop&q=80&w=1200"
                alt="Discord"
                fill
                className="object-cover opacity-30 transition-opacity group-hover:opacity-50"
              />
              <div className="p-12 relative z-10 mt-auto">
                <span className="text-[10px] font-black text-[#9146ff] uppercase mb-4 tracking-[0.2em] block">Verified Evidence Node</span>
                <h4 className="text-4xl md:text-6xl font-display tracking-tighter uppercase mb-6 leading-none italic">Exposed: Discord archives confirm coordination behind raids.</h4>
                <button className="w-max px-12 py-4 bg-[#9146ff] text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-[0_10px_40px_rgba(145,70,255,0.4)]">Access Logs</button>
              </div>
            </div>
          </div>

          {/* Twitch Row 2: Smaller Alerts */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[300px] mt-8">
            <div className="md:col-span-4 hub-card border-white/5 bg-[#18181b] p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20"><svg className="w-20 h-20 text-[#9146ff]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg></div>
              <span className="text-[#9146ff] text-[10px] font-black uppercase tracking-widest mb-4">Ban Wave</span>
              <h4 className="text-xl font-bold text-white mb-2">Top 50 Partners flagged.</h4>
              <p className="text-slate-400 text-xs">Automated moderation bot malfunction confirmed by insider logs.</p>
            </div>
            <div className="md:col-span-4 hub-card border-white/5 bg-[#18181b] p-8 flex flex-col relative overflow-hidden">
              <span className="text-[#9146ff] text-[10px] font-black uppercase tracking-widest mb-4">Contract Leak</span>
              <h4 className="text-xl font-bold text-white mb-2">Exclusivity Clause Void.</h4>
              <p className="text-slate-400 text-xs">New terms allow multi-streaming for Affiliate tier.</p>
            </div>
            <div className="md:col-span-4 hub-card border-white/5 bg-[#18181b] p-8 flex flex-col relative overflow-hidden">
              <span className="text-[#9146ff] text-[10px] font-black uppercase tracking-widest mb-4">Live Analytics</span>
              <h4 className="text-xl font-bold text-white mb-2">View-bot Net detected.</h4>
              <p className="text-slate-400 text-xs">Origin tracing points to server farm in Eastern Europe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ANIME (Full Width, Dark Hub) */}
      <section className="full-zone zone-anime">
        <div className="zone-content">
          <h2 className="section-label text-[#FFB800]">Anime Production Hub</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
            {[
              { img: "https://images.unsplash.com/photo-1607604276483-4efdd6d4adbb?auto=format&fit=crop&q=80&w=600", tag: "Season 2", title: "Apothecary Diaries Script verified." },
              { img: "https://images.unsplash.com/photo-1614583225154-5feaba071595?auto=format&fit=crop&q=80&w=600", tag: "Production", title: "Solo Leveling: Cour 2 Internal phase." },
              { img: "https://images.unsplash.com/photo-1627337194440-4966601f074d?auto=format&fit=crop&q=80&w=600", tag: "Movie Unit", title: "Spy x Family: Box Office Synthesis." },
              { img: "https://images.unsplash.com/photo-1571757767119-68b8dbed8c97?auto=format&fit=crop&q=80&w=600", tag: "Leak", title: "OPM Season 3: Frame analysis." },
              { img: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&q=80&w=600", tag: "Ghibli", title: "Miyazaki's Final Slate verified." },
              // Extra cards to ensure 5-6 items as used to be requested, though template showed 5. Using 5 to match template exactly for now.
            ].map((card, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-poster rounded-[2.5rem] overflow-hidden mb-6 relative border border-white/10 group-hover:border-[#FFB800] transition-all duration-500">
                  <Image
                    src={card.img}
                    alt="Poster"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="px-3 py-1 bg-[#FFB800] text-black text-[10px] font-black rounded uppercase mb-4 inline-block shadow-lg">{card.tag}</span>
                    <h4 className="text-xl font-bold text-white uppercase tracking-tighter leading-none">{card.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}