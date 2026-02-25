'use client';

import { ArrowUpRight, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-[#fafafa] pb-12 overflow-hidden lowercase">
            {/* Background Decorative Element */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-black/[0.02] rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="page-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Left: Big CTA */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <span className="text-[10px] font-bold tracking-[.4em] text-secondary uppercase">
                                Connect with me
                            </span>
                            <h2 className="text-5xl sm:text-7xl font-black tracking-[-.04em] text-primary leading-[0.8]">
                                let&apos;s build <br />
                                <span className="text-primary/20 italic font-serif font-light">the future.</span>
                            </h2>
                        </div>

                        {/* CTA button removed */}
                    </div>

                    {/* Right: Links Grid */}
                    <div className="grid grid-cols-2 gap-10 lg:ml-auto lg:max-w-xs">
                        <div className="space-y-8">
                            <h4 className="text-[10px] font-black uppercase tracking-[.3em] text-primary/30">Social</h4>
                            <ul className="space-y-5">
                                {[
                                    { label: "Youtube", href: "https://youtube.com/@deksdeveloper" },
                                    { label: "Github", href: "https://github.com/deksdeveloper" },
                                    { label: "Instagram", href: "https://instagram.com/efethegreatest" }
                                ].map((link) => (
                                    <li key={link.label}>
                                        <a href={link.href} target="_blank" className="text-[13px] font-bold text-secondary hover:text-primary transition-colors flex items-center gap-2 group">
                                            {link.label} <ArrowUpRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-bold" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-8 col-span-2 sm:col-span-1">
                            <h4 className="text-[10px] font-black uppercase tracking-[.3em] text-primary/30">Location</h4>
                            <p className="text-[13px] font-bold text-secondary leading-relaxed">
                                İSTANBUL, TR <br />
                                <span className="text-[11px] font-medium opacity-50">GMT+3</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Divider Center Mechanism (Balanced) */}
                <div className="h-24 sm:h-32 flex items-center">
                    <div className="w-full h-px bg-black/[0.05]" />
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
                    <div className="flex items-center gap-5">
                        <p className="text-[10px] font-bold tracking-[.2em] text-[#666666] uppercase">
                            © {new Date().getFullYear()} DEKSDEVELOPER — MADE WITH PASSION
                        </p>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center justify-center gap-4 px-8 py-3 min-w-[170px] rounded-full border border-black/5 hover:bg-black hover:text-white transition-all duration-500"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Back to top</span>
                        <div className="w-6 h-6 rounded-full bg-black/5 group-hover:bg-white/10 flex items-center justify-center transition-colors">
                            <ArrowUpRight size={14} className="-rotate-45" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
}
