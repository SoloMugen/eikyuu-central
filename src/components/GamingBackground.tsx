'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function GamingBackground() {
    const [currentBg, setCurrentBg] = useState(0);

    const backgrounds = [
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1533234458044-95c0d5a452d0?auto=format&fit=crop&q=80&w=2000",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=2000"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [backgrounds.length]);

    return (
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
    );
}
