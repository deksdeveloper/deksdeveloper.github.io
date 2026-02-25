'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [time, setTime] = useState('');
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        // Update time
        const interval = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit'
            }));
        }, 1000);

        // Handle scroll
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Calculate scroll progress
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;
            if (totalScroll > 0) {
                setScrollProgress((currentScroll / totalScroll) * 100);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial call
        handleScroll();

        return () => {
            clearInterval(interval);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="fixed top-16 left-0 w-full z-50 px-6 flex justify-center pointer-events-none">
            <div className="relative flex flex-col items-center pointer-events-auto">
                <header className={`
                    relative flex items-center gap-6 px-6 py-3 rounded-full 
                    transition-all duration-500 ease-out
                    ${scrolled
                        ? 'bg-white/70 backdrop-blur-xl border border-black/5 shadow-2xl shadow-black/5 py-2.5 translate-y-[-4px]'
                        : 'bg-white/40 backdrop-blur-md border border-black/5 shadow-lg shadow-black/[0.02]'}
                `}>
                    {/* Brand */}
                    <Link href="/" className="group flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-[12px] font-black tracking-tighter uppercase text-primary">
                            deksdeveloper
                        </span>
                    </Link>

                    {/* Divider */}
                    <div className="w-[1px] h-4 bg-black/10" />

                    {/* Status / Links */}
                    <nav className="flex items-center gap-6">
                        <div className="hidden sm:flex items-center gap-1.5">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                            </span>
                            <span className="text-[10px] font-bold tracking-widest text-[#666666] uppercase whitespace-nowrap">
                                Available for work
                            </span>
                        </div>

                        {/* Time (Premium touch) */}
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.02]">
                            <span className="text-[10px] font-medium text-black/60 font-mono">
                                {time || '00:00'}
                            </span>
                        </div>
                    </nav>

                    {/* Subtle Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-black/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </header>

                {/* Scroll Progress Indicator */}
                <div className="absolute -bottom-2 w-[40%] h-[2px] bg-black/5 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-black transition-all duration-150 ease-out"
                        style={{ width: `${scrollProgress}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
