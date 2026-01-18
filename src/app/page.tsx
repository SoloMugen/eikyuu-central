'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      category: "Hardware News",
      badgeColor: "bg-[#FF5F00]",
      title: "2NM CHIPSET LEAK.",
      desc: "Supply chain logs confirm tape-out for unannounced hardware targets.",
      borderColor: "border-[#FF5F00]",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2000"
    },
    {
      category: "Hollywood Intel",
      badgeColor: "bg-[#D946EF]",
      title: "SCIFI EPIC CASTING.",
      desc: "Verification engine confirms return of original franchise lead.",
      borderColor: "border-[#D946EF]",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2000"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden font-sans">

      {/* TOP NAVIGATION */}
      <header className="max-w-[1600px] mx-auto p-6 md:px-12 py-10">
        <nav className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-8 gap-6 md:gap-0">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-7xl font-display uppercase tracking-tighter">
                Eikyuu<span className="text-blue-600">.</span>Central
              </h1>
              <div className="flex items-center gap-4 text-slate-500 font-mono text-[10px] uppercase">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Legitimacy Engine Online
              </div>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-end">
              {/* MODE TOGGLE */}
              <ThemeToggle />
              <button className="hidden md:block px-6 py-3 rounded-full bg-slate-950 text-white text-[10px] font-black uppercase border border-slate-800 hover:bg-slate-900 transition">
                Directives
              </button>
            </div>
          </div>

          {/* QUICK NAV */}
          <div className="w-full overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-8 min-w-max">
              <button className="text-[10px] font-black uppercase text-blue-600">Live Mix</button>
              <Link href="/geo-politics" className="text-[10px] font-bold uppercase opacity-50 hover:opacity-100 transition">Geo-Politics</Link>
              <Link href="/gaming" className="text-[10px] font-bold uppercase opacity-50 hover:opacity-100 transition">Gaming</Link>
              <Link href="/twitch-drama" className="text-[10px] font-bold uppercase opacity-50 hover:opacity-100 transition">Twitch</Link>
              <Link href="/anime" className="text-[10px] font-bold uppercase opacity-50 hover:opacity-100 transition">Anime</Link>
              <Link href="/science" className="text-[10px] font-bold uppercase opacity-50 hover:opacity-100 transition">Science</Link>
              <Link href="/entertainment" className="text-[10px] font-bold uppercase opacity-50 hover:opacity-100 transition">Entertainment</Link>
            </div>
          </div>
        </nav>
      </header>

      {/* CAROUSEL HERO */}
      <section className="carousel-container relative w-full h-[650px] overflow-hidden bg-black">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-item absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover opacity-50"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-20 zone-content text-white max-w-[1600px] mx-auto w-full">
              <span className={`px-3 py-1 ${slide.badgeColor} w-max rounded text-[9px] font-black uppercase mb-4`}>{slide.category}</span>
              <h2 className="text-5xl md:text-8xl font-display uppercase italic tracking-tighter leading-none mb-4">{slide.title}</h2>
              <p className={`text-slate-300 text-xl border-l-4 ${slide.borderColor} pl-6 italic max-w-3xl`}>{slide.desc}</p>
            </div>
          </div>
        ))}
        {/* Progress Bar */}
        <div key={currentSlide} className="absolute bottom-0 left-0 h-1 bg-blue-600 z-50 animate-[grow_5s_linear]" style={{ width: '100%' }}></div>
      </section>

      {/* SECTION: GEO-POLITICS */}
      <section id="geo" className="full-zone zone-geo w-full py-32 bg-blue-500/5 relative">
        <div className="zone-content max-w-[1600px] mx-auto px-4">
          <h2 className="section-label text-blue-600 text-xs font-black uppercase tracking-[0.6em] mb-16 flex items-center gap-8 after:content-[''] after:flex-grow after:h-px after:bg-current after:opacity-10">Geo-Political Hub</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4 aspect-square bg-blue-600 rounded-[2.5rem] p-10 flex flex-col justify-between text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20">
                <svg viewBox="0 0 400 400" className="w-full h-full"><circle cx="200" cy="200" r="150" fill="none" stroke="white" strokeWidth="1" strokeDasharray="10 10" className="animate-[spin_60s_linear_infinite]" /></svg>
              </div>
              <h4 className="text-4xl font-display uppercase leading-none italic relative z-10">Friction Grid.</h4>
              <button className="w-full py-4 bg-white text-blue-600 rounded-xl text-[10px] font-black uppercase hover:bg-slate-950 hover:text-white transition relative z-10">Launch Situation Room</button>
            </div>
            <div className="md:col-span-8 hub-card">
              <div className="h-[400px] mb-6 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200" alt="Arctic" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <span className="text-blue-600 font-black text-[10px] uppercase mb-2 block">Arctic Monitoring</span>
              <h4 className="text-3xl font-display uppercase tracking-tighter">Naval Deployment: Verified Thermal Logs.</h4>
            </div>
            <div className="md:col-span-4 hub-card">
              <div className="h-48 mb-4 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=600" alt="Trade" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="text-lg font-bold uppercase">Trade Pact Draft.</h4>
            </div>
            <div className="md:col-span-4 hub-card">
              <div className="h-48 mb-4 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1521791136064-7986c295944c?auto=format&fit=crop&q=80&w=600" alt="EU" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="text-lg font-bold uppercase">EU Sanction Leak.</h4>
            </div>
            <div className="md:col-span-4 hub-card">
              <div className="h-48 mb-4 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=600" alt="G7" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="text-lg font-bold uppercase">G7 Final Edit.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: GAMING */}
      <section id="gaming" className="full-zone zone-gaming w-full py-32 bg-[#0B0B0F] text-white">
        <div className="zone-content max-w-[1600px] mx-auto px-4">
          <h2 className="section-label text-[#FF5F00] text-xs font-black uppercase tracking-[0.6em] mb-16 flex items-center gap-8 after:content-[''] after:flex-grow after:h-px after:bg-current after:opacity-10">Gaming Intelligence</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-12 hub-card relative mb-10 group">
              <div className="h-[500px] relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1500"
                  alt="Handheld"
                  fill
                  className="object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-10 left-10 pointer-events-none">
                <h4 className="text-5xl md:text-7xl font-display italic uppercase tracking-tighter mix-blend-overlay">Handheld Specs.</h4>
                <p className="text-orange-500 font-black text-sm uppercase">Grade: S Tier</p>
              </div>
            </div>
            <div className="md:col-span-4 hub-card">
              <div className="h-60 mb-4 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=600" alt="Unreal" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="italic font-bold text-white">Unreal 5.5 Tests</h4>
            </div>
            <div className="md:col-span-4 hub-card">
              <div className="h-60 mb-4 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600" alt="FromSoft" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="italic font-bold text-white">FromSoft IP Leak</h4>
            </div>
            <div className="md:col-span-4 hub-card">
              <div className="h-60 mb-4 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80&w=600" alt="Cyberpunk" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="italic font-bold text-white">Cyberpunk 2 Phase</h4>
            </div>
            <div className="md:col-span-6 hub-card">
              <div className="h-48 mb-4 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800" alt="Switch" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="italic font-bold text-white">Switch 2 Logistics</h4>
            </div>
            <div className="md:col-span-6 hub-card">
              <div className="h-48 mb-4 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1605898960710-863a34a87c53?auto=format&fit=crop&q=80&w=800" alt="Valve" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="italic font-bold text-white">Valve Deck Patent</h4>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: TWITCH */}
      <section id="twitch" className="full-zone zone-twitch w-full py-32 bg-[#0e0e10] text-white">
        <div className="zone-content max-w-[1600px] mx-auto px-4">
          <h2 className="section-label text-[#9146ff] text-xs font-black uppercase tracking-[0.6em] mb-16 flex items-center gap-8 after:content-[''] after:flex-grow after:h-px after:bg-current after:opacity-10">Twitch Monitor</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 aspect-video bg-white/5 rounded-3xl p-12 flex flex-col justify-center">
              <h4 className="text-xs font-black uppercase text-slate-500 mb-6">Social Heatmap</h4>
              <div className="w-full h-2 bg-white/10 rounded-full mb-4 overflow-hidden">
                <div className="h-full bg-[#9146ff] w-[72%] shadow-[0_0_15px_#9146ff]"></div>
              </div>
              <p className="text-2xl font-bold uppercase tracking-tighter">72% Volatility</p>
            </div>
            <div className="md:col-span-7 hub-card">
              <div className="h-80 mb-6 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1541167760496-1628856ab752?auto=format&fit=crop&q=80&w=1200" alt="Discord" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="text-2xl font-bold uppercase text-white">Exposed: Discord Raid Archives</h4>
            </div>
            <div className="md:col-span-3 hub-card">
              <div className="h-40 mb-4 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1560253023-3ee5d6446bd4?auto=format&fit=crop&q=80&w=600" alt="Contract" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="font-bold text-white">Contract Leak</h4>
            </div>
            <div className="md:col-span-3 hub-card">
              <div className="h-40 mb-4 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1598897349489-44769b7b51ce?auto=format&fit=crop&q=80&w=600" alt="Ban" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="font-bold text-white">Ban Analysis</h4>
            </div>
            <div className="md:col-span-3 hub-card">
              <div className="h-40 mb-4 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&q=80&w=600" alt="Migration" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="font-bold text-white">Migration Data</h4>
            </div>
            <div className="md:col-span-3 hub-card">
              <div className="h-40 mb-4 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=600" alt="Sub Meta" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="font-bold text-white">Sub Meta</h4>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ANIME */}
      <section id="anime" className="full-zone zone-anime w-full py-32 bg-[#0A0A0C] text-white">
        <div className="zone-content max-w-[1600px] mx-auto px-4">
          <h2 className="section-label text-[#FFB800] text-xs font-black uppercase tracking-[0.6em] mb-16 flex items-center gap-8 after:content-[''] after:flex-grow after:h-px after:bg-current after:opacity-10">Anime Production Hub</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3 hub-card">
              <div className="aspect-[2/3] overflow-hidden rounded-[1.5rem] mb-4 relative">
                <Image src="https://images.unsplash.com/photo-1607604276483-4efdd6d4adbb?auto=format&fit=crop&q=80&w=600" alt="Diaries" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="font-bold text-white">Diaries S2</h4>
            </div>
            <div className="md:col-span-6 hub-card">
              <div className="h-[300px] mb-6 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1580336652385-2cd013358053?auto=format&fit=crop&q=80&w=1200" alt="MAPPA" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="text-xl font-bold text-white">MAPPA 2027 Roadmap</h4>
            </div>
            <div className="md:col-span-3 hub-card">
              <div className="h-[300px] mb-4 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1614583225154-5feaba071595?auto=format&fit=crop&q=80&w=600" alt="Solo Leveling" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="font-bold text-white">Solo Leveling</h4>
            </div>
            <div className="md:col-span-4 hub-card bg-white/5 p-6 rounded-[1.5rem]">
              <h4 className="font-bold text-white">Spy x Family Unit</h4>
            </div>
            <div className="md:col-span-4 hub-card bg-white/5 p-6 rounded-[1.5rem]">
              <h4 className="font-bold text-white">Ufotable Pipeline</h4>
            </div>
            <div className="md:col-span-4 hub-card bg-white/5 p-6 rounded-[1.5rem]">
              <h4 className="font-bold text-white">OPM S3 Analysis</h4>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: SCIENCE */}
      <section id="science" className="full-zone zone-science w-full py-32 bg-emerald-500/5">
        <div className="zone-content max-w-[1600px] mx-auto px-4">
          <h2 className="section-label text-emerald-600 text-xs font-black uppercase tracking-[0.6em] mb-16 flex items-center gap-8 after:content-[''] after:flex-grow after:h-px after:bg-current after:opacity-10">Empirical Intelligence</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-8 hub-card">
              <div className="h-[450px] mb-6 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200" alt="Quantum" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="text-2xl font-bold">Quantum Stability</h4>
            </div>
            <div className="md:col-span-4 hub-card p-10 bg-emerald-600/5 rounded-3xl">
              <h4 className="text-xl font-bold">CRISPR v4.2</h4>
              <p className="text-xs mt-4 opacity-70">98% Corroboration</p>
            </div>
            <div className="md:col-span-4 hub-card bg-white/50 dark:bg-white/5 p-6 rounded-[1.5rem]">
              <h4 className="font-bold">Neural Transformers</h4>
            </div>
            <div className="md:col-span-4 hub-card bg-white/50 dark:bg-white/5 p-6 rounded-[1.5rem]">
              <h4 className="font-bold">Deep Sea Cycles</h4>
            </div>
            <div className="md:col-span-4 hub-card bg-white/50 dark:bg-white/5 p-6 rounded-[1.5rem]">
              <h4 className="font-bold">Fusion Alpha</h4>
            </div>
            <div className="md:col-span-12 hub-card h-24 flex-row items-center border-t border-emerald-100 p-8">
              <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-600">NASA James Webb Primary Data synthesis...</h4>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ENTERTAINMENT */}
      <section id="ent" className="full-zone zone-ent w-full py-32 bg-fuchsia-500/5">
        <div className="zone-content max-w-[1600px] mx-auto px-4">
          <h2 className="section-label text-[#D946EF] text-xs font-black uppercase tracking-[0.6em] mb-16 flex items-center gap-8 after:content-[''] after:flex-grow after:h-px after:bg-current after:opacity-10">Entertainment Monitor</h2>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 hub-card">
              <div className="h-[400px] mb-6 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1598897349489-44769b7b51ce?auto=format&fit=crop&q=80&w=1200" alt="Academy" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="text-2xl font-bold">Academy Sentiment</h4>
            </div>
            <div className="md:col-span-5 hub-card">
              <div className="h-[400px] mb-6 relative overflow-hidden rounded-[1.5rem]">
                <Image src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=800" alt="Seoul" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <h4 className="text-2xl font-bold">Idol Contract Reform</h4>
            </div>
            <div className="md:col-span-4 hub-card bg-white/50 dark:bg-white/5 p-6 rounded-[1.5rem]">
              <h4 className="font-bold">Streaming Churn</h4>
            </div>
            <div className="md:col-span-4 hub-card bg-white/50 dark:bg-white/5 p-6 rounded-[1.5rem]">
              <h4 className="font-bold">Cannes 2026</h4>
            </div>
            <div className="md:col-span-4 hub-card bg-white/50 dark:bg-white/5 p-6 rounded-[1.5rem]">
              <h4 className="font-bold">WME Agency Leaks</h4>
            </div>
            <div className="md:col-span-12 h-32 bg-[#D946EF] rounded-3xl p-8 flex items-center text-white">
              <h4 className="text-xl md:text-3xl font-display uppercase tracking-tighter">EXCLUSIVE: Major Studio IPO planned for Q4 2026.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* COMPACT FOOTER */}
      <footer className="max-w-[1600px] mx-auto p-6 md:px-12 py-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest opacity-50">
        <div>&copy; 2026 Eikyuu Central Intelligence Network</div>
        <div className="flex gap-8 mt-4 md:mt-0">
          <Link href="#" className="hover:text-blue-600 transition">Contact Node</Link>
          <Link href="#" className="hover:text-blue-600 transition">Source Logs</Link>
          <Link href="#" className="hover:text-blue-600 transition">Privacy Directive</Link>
        </div>
      </footer>

    </main>
  );
}