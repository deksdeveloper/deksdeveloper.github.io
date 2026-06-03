'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Github, ExternalLink, ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';

const PROJECTS = [
    {
        title: "DAWNO IDE",
        description: "A professional, classic code editor for PAWN scripting, built with modern web technologies and a focus on developer experience.",
        image: "https://opengraph.githubassets.com/1/yeatdev/dawno",
        github: "https://github.com/yeatdev/dawno",
        tags: ["Electron", "React", "Monaco Editor", "TypeScript"],
        year: "2026",
        index: "01",
    },
    {
        title: "DAWNO Web",
        description: "The digital gateway for DAWNO, featuring a high-end, glassmorphic landing page designed to showcase the power of the core editor.",
        image: "https://opengraph.githubassets.com/1/yeatdev/dawno-web",
        github: "https://github.com/yeatdev/dawno-web",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        year: "2026",
        index: "02",
    },
    {
        title: "omp-dx",
        description: "Server-authoritative, hardware-accelerated 2D rendering and UI framework for open.mp and SA-MP using Direct3D9.",
        image: "https://opengraph.githubassets.com/1/yeatdev/omp-dx",
        github: "https://github.com/yeatdev/omp-dx",
        tags: ["C++", "Direct3D9", "open.mp"],
        year: "2026",
        index: "05",
    },
    {
        title: "omp-cef-installer",
        description: "A lightweight desktop application for installing and managing Chromium Embedded Framework (CEF) for Open.MP",
        image: "https://opengraph.githubassets.com/1/yeatdev/omp-cef-installer",
        github: "https://github.com/yeatdev/omp-cef-installer",
        tags: ["Rust", "Tauri", "Javascript"],
        year: "2026",
        index: "05",
    },
    {
        title: "github-repo-analyzer",
        description: " AI-powered TUI tool to analyze GitHub repositories and generate READMEs, .gitignore files, security reports, and more. ",
        image: "https://opengraph.githubassets.com/1/yeatdev/github-repo-analyzer",
        github: "https://github.com/yeatdev/github-repo-analyzer",
        tags: ["Javascript", "Inquirer", "TUI"],
        year: "2026",
        index: "03",
    },
    {
        title: "discord-ai-userbot",
        description: "Self-hosted AI-powered Discord selfbot that generates human-like conversations and responses. ",
        image: "https://opengraph.githubassets.com/1/yeatdev/discord-ai-userbot",
        github: "https://github.com/yeatdev/discord-ai-userbot",
        tags: ["Javascript"],
        year: "2026",
        index: "03",
    },
];

function FallbackPattern({ title }: { title: string }) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 select-none">
            <div className="w-16 h-16 rounded-2xl bg-black/[0.06] flex items-center justify-center">
                <Github size={28} className="text-black/20" />
            </div>
            <span className="text-sm font-bold text-black/20 tracking-tight">{title}</span>
        </div>
    );
}

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
    return (
        <div
            className="group relative flex flex-col bg-white border border-black/[0.06] rounded-[2rem] overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] hover:border-black/[0.12] hover:-translate-y-1 h-full"
        >
            {/* Image Area */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f0f0f0]">
                {project.image ? (
                    <>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                                const parent = (e.target as HTMLImageElement).parentElement;
                                if (parent) {
                                    const fallback = parent.querySelector('.img-fallback') as HTMLElement;
                                    if (fallback) fallback.style.display = 'flex';
                                }
                            }}
                        />
                        <div className="img-fallback absolute inset-0 items-center justify-center bg-[#f0f0f0] hidden">
                            <FallbackPattern title={project.title} />
                        </div>
                    </>
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#f0f0f0]">
                        <FallbackPattern title={project.title} />
                    </div>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/[0.04] via-transparent to-transparent pointer-events-none" />

                {/* Year badge */}
                <div className="absolute top-5 left-5">
                    <span className="px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 text-[10px] font-bold tracking-widest text-black/50 uppercase">
                        {project.year}
                    </span>
                </div>

                {/* Arrow icon on hover */}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0">
                    <ArrowUpRight size={16} className="text-black/70" />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-7 sm:p-8 gap-5">
                {/* Title row */}
                <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black tracking-[0.3em] text-black/20 uppercase tabular-nums">
                                {project.index}
                            </span>
                            <span className="w-4 h-px bg-black/10" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#0a0a0a] leading-[1.1]">
                            {project.title}
                        </h3>
                    </div>

                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-full border border-black/[0.08] flex items-center justify-center text-black/35 hover:text-black hover:border-black/20 hover:bg-black/[0.02] transition-all duration-300 shrink-0 bg-white shadow-sm mt-1"
                        aria-label={`${project.title} GitHub`}
                    >
                        <Github size={18} />
                    </a>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span
                            key={tag}
                            className="text-[10px] font-bold tracking-[0.12em] text-black/40 uppercase px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.03]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#777777] font-medium leading-relaxed flex-1">
                    {project.description}
                </p>

                {/* Footer CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-black/[0.05]">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[10px] font-black tracking-[0.2em] uppercase text-black/50 hover:text-black transition-colors duration-300 group/link"
                    >
                        View on GitHub
                        <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperRef, setSwiperRef] = useState<any>(null);

    return (
        <section className="py-16 sm:py-24 overflow-hidden">
            <div className="page-container">
                <div className="flex flex-col gap-14 sm:gap-20">

                    {/* Section Header */}
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
                        <div className="space-y-5">
                            <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                                <span className="text-[10px] font-black tracking-[0.4em] text-black/40 uppercase">
                                    Works
                                </span>
                            </div>
                            <div>
                                <h2 className="text-5xl sm:text-7xl font-black tracking-[-0.04em] text-[#0a0a0a] leading-[0.85]">
                                    Featured
                                </h2>
                                <h2 className="text-5xl sm:text-7xl font-light italic font-serif tracking-[-0.02em] text-black/15 leading-[0.85] mt-1">
                                    projects.
                                </h2>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex items-center gap-3 pb-2">
                            <button
                                onClick={() => swiperRef?.slidePrev()}
                                className="project-prev nav-button w-10 h-10"
                                aria-label="Previous project"
                            >
                                <ArrowLeft size={18} strokeWidth={2.5} />
                            </button>
                            <button
                                onClick={() => swiperRef?.slideNext()}
                                className="project-next nav-button w-10 h-10"
                                aria-label="Next project"
                            >
                                <ArrowRight size={18} strokeWidth={2.5} />
                            </button>
                        </div>
                    </div>

                    {/* Carousel */}
                    <Swiper
                        onSwiper={setSwiperRef}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        modules={[Navigation, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        grabCursor={true}
                        speed={800}
                        autoplay={{
                            delay: 7000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 32,
                            },
                        }}
                        className="w-full !overflow-visible"
                    >
                        {PROJECTS.map((project, idx) => (
                            <SwiperSlide key={idx} className="h-auto">
                                <ProjectCard project={project} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Pagination dots */}
                    <div className="flex justify-center items-center gap-3">
                        {PROJECTS.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => swiperRef?.slideTo(idx)}
                                className={`h-1.5 transition-all duration-500 rounded-full ${activeIndex === idx
                                    ? 'w-8 bg-black opacity-100'
                                    : 'w-1.5 bg-black opacity-10 hover:opacity-30'
                                    }`}
                                aria-label={`Go to project ${idx + 1}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
