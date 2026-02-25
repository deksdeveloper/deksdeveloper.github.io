'use client';

import { Play } from 'lucide-react';

interface VideoCardProps {
    videoId: string;
    title: string;
}

export default function VideoCard({ videoId, title }: VideoCardProps) {
    return (
        <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="video-container group block w-full"
        >
            {/* Background Thumbnail */}
            <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Overlay Gradient - Balanced for clipping prevention */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40"></div>

            {/* Interactive Layer */}
            <div className="absolute inset-0 flex flex-col justify-end">
                {/* Play Button Reveal */}
                <div className="play-reveal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                        <Play size={24} fill="white" className="ml-1" />
                    </div>
                </div>

                {/* Video Info Area - Slightly raised position and CENTERED text */}
                <div className="relative z-10 p-6 sm:p-8 pb-10 sm:pb-12 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col items-center text-center">
                    <span className="text-[9px] font-black text-white/40 tracking-[.3em] uppercase mb-3 block w-full">
                        Watch Episode
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug line-clamp-2 tracking-tight w-full max-w-[280px]">
                        {title}
                    </h3>
                </div>
            </div>
        </a>
    );
}
