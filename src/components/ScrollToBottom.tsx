'use client';

import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export default function ScrollToBottom() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const toggleVisibility = () => {
            // Hide if near bottom
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToBottom}
            className="fixed top-6 right-6 z-50 w-10 h-10 rounded-full bg-slate-950/80 border border-white/10 backdrop-blur-md flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all group shadow-2xl"
            title="Scroll to Bottom"
        >
            <ArrowDown size={16} className="text-slate-400 group-hover:text-white transition-colors" />
        </button>
    );
}
