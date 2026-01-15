import React from 'react';

interface LegitimacyBadgeProps {
    score: number; // 0 to 100
    size?: 'sm' | 'md' | 'lg';
}

export default function LegitimacyBadge({ score, size = 'md' }: LegitimacyBadgeProps) {
    // Determine color based on score
    let colorClass = 'text-red-500 border-red-500/50 bg-red-500/10 shadow-red-500/20';

    if (score >= 80) {
        colorClass = 'text-accent-lime border-accent-lime/50 bg-accent-lime/10 shadow-[0_0_10px_rgba(168,230,207,0.2)]';
    } else if (score >= 50) {
        colorClass = 'text-yellow-500 border-yellow-500/50 bg-yellow-500/10 shadow-yellow-500/20';
    }

    // Size classes
    const sizeClasses = {
        sm: 'text-xs px-2 py-0.5',
        md: 'text-sm px-3 py-1',
        lg: 'text-base px-4 py-2',
    };

    return (
        <div
            className={`
        inline-flex items-center justify-center font-mono font-bold
        border rounded backdrop-blur-sm
        transition-all duration-300
        ${colorClass}
        ${sizeClasses[size]}
      `}
        >
            <span className="mr-2">L-SCORE</span>
            <span>{score}</span>
        </div>
    );
}
