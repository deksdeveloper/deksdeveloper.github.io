'use client';

import { useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import VideoCard from './VideoCard';

import 'swiper/css';
import 'swiper/css/navigation';

const VIDEOS = [
    // ragemp
    { videoId: "3gclN6Zain8", title: "ragemp plate steal - work in progress", category: "RageMP" },
    { videoId: "ebZwTwvviWQ", title: "ragemp settings panel", category: "RageMP" },
    { videoId: "p2VIKZ8t_-0", title: "ragemp report & report panel", category: "RageMP" },
    { videoId: "ZaUePdzOB8M", title: "ragemp samp style phone dialog", category: "RageMP" },
    { videoId: "ngUPUA92ES8", title: "ragemp clothes shop", category: "RageMP" },
    { videoId: "yfnTcXp1Slc", title: "ragemp vehicle shop", category: "RageMP" },
    { videoId: "Vh8vUIQ_A78", title: "ragemp vehicle repair", category: "RageMP" },
    { videoId: "JaeSc90tOaY", title: "ragemp boombox", category: "RageMP" },
    { videoId: "4XIr0SMs24k", title: "ragemp discord account pairing", category: "RageMP" },
    { videoId: "qPBZ7Uh-yDc", title: "ragemp basic mini game for fish job", category: "RageMP" },
    { videoId: "vrdcaBQigu8", title: "ragemp dealership system", category: "RageMP" },
    { videoId: "PDNTzvfXePA", title: "ragemp weapon shop", category: "RageMP" },
    { videoId: "Qyi_c4e169E", title: "ragemp lobby & lobby counter", category: "RageMP" },
    { videoId: "i4He2nZIUlk", title: "ragemp login & register, lobby and chat", category: "RageMP" },
    { videoId: "E3IE-pBm5DE", title: "ragemp house", category: "RageMP" },
    // fivem
    { videoId: "fIPa_DvC-XQ", title: "fivem improved salty_tokenizer", category: "FiveM" },
    { videoId: "lqlezGYa8nc", title: "fivem server-sided verified vehicles", category: "FiveM" },
    { videoId: "I3yKoHWTfTM", title: "fivem disable vehicle exit animation", category: "FiveM" },
    // samp
    { videoId: "03EuNcTZaIc", title: "samp weapon paint", category: "SAMP" },
    { videoId: "uysK3s5k9Ws", title: "samp anti silent-aim", category: "SAMP" },
    { videoId: "IMMpXJPbIjk", title: "samp register", category: "SAMP" },
    { videoId: "dRBR6N7MfQQ", title: "samp interior bug detector", category: "SAMP" },
    { videoId: "ApSzfdxmdaM", title: "samp phone system", category: "SAMP" },
    { videoId: "d3mOd0tJYow", title: "samp dynamic bus station and journey", category: "SAMP" },

    { videoId: "xqLkkGVXGUI", title: "openmp inventory system", category: "SAMP" },
    { videoId: "8fAGFHWGqRg", title: "openmp login, register, character selector and creator", category: "SAMP" },
    { videoId: "yEzTO345jnQ", title: "openmp dx ui", category: "SAMP" },
    { videoId: "lnRDpxthiMc", title: "openmp dx ui 2", category: "SAMP" },
    { videoId: "PePrjPJONPg", title: "openmp dx ui 3", category: "SAMP" },
    { videoId: "2C_f0Xj_sAc", title: "openmp cef inventory", category: "SAMP" },

    { videoId: "DESDALKIK8c", title: "samp plate steal", category: "SAMP" },
    { videoId: "mCOAsr03Jqk", title: "samp improved register", category: "SAMP" },
    { videoId: "aJq3AgLWXl0", title: "samp house", category: "SAMP" },
    { videoId: "rKW6VTv_Wp8", title: "samp entrance system", category: "SAMP" },
    { videoId: "LwCrwehYWb0", title: "samp login register", category: "SAMP" },
    { videoId: "scBaq4XlSbw", title: "samp porterage job", category: "SAMP" },
    { videoId: "aP8gGOz1Ofs", title: "samp gun detention", category: "SAMP" },
    { videoId: "n5wkUT_VB38", title: "samp straw job", category: "SAMP" },
    { videoId: "Nb6H5l3M9JI", title: "samp prison systems", category: "SAMP" },
    { videoId: "cLG6c2kRFT8", title: "samp parcel transportation job", category: "SAMP" },
    { videoId: "cTJJJGUjfM8", title: "samp dynamic stand", category: "SAMP" },
    { videoId: "vdH77OKCCAs", title: "samp server guard", category: "SAMP" },
    { videoId: "mHO5fGQwzQs", title: "samp trashmaster job", category: "SAMP" },
    { videoId: "IHsf48rl3TE", title: "samp rent a bike", category: "SAMP" },
    { videoId: "I9xGdvXNrrA", title: "samp weapon steal", category: "SAMP" },
    { videoId: "xPe-vl8BBBs", title: "samp termal helicam", category: "SAMP" },
    { videoId: "b3gK7YiKHy0", title: "samp escort", category: "SAMP" },
    // mta
    { videoId: "C4qw_3Fw9U4", title: "mta disease", category: "MTA" },
    { videoId: "WtJGChBB9V8", title: "mta gui setting panel", category: "MTA" },
    { videoId: "vOyMH-4xtik", title: "mta dynamic object and blacklist object", category: "MTA" },
    { videoId: "5HWheu1iYHk", title: "mta corpse", category: "MTA" },
    { videoId: "blKm_bhZiZY", title: "mta bug", category: "MTA" },
    { videoId: "CEiU23nSLes", title: "mta discord pairing (discord bot)", category: "MTA" },
    { videoId: "2jH6koI4_fs", title: "mta discord pairing (game)", category: "MTA" },
    { videoId: "WmMLOIHVzCo", title: "mta plate steal", category: "MTA" },
    { videoId: "tN7WqXWKGdY", title: "mta dynamic object", category: "MTA" },
    // roblox
    { videoId: "4GviMzVwm6I", title: "roblox pairing request, gui, control & notify", category: "Roblox" },
    // cs
    { videoId: "3rfOjwAfu_U", title: "cs2 anti-flash", category: "CS2" }
];

const CATEGORIES = ["All", "RageMP", "FiveM", "SAMP", "MTA", "Roblox", "CS2"];

export default function Carousel() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperRef, setSwiperRef] = useState<any>(null);

    const filteredVideos = useMemo(() => {
        return activeCategory === "All"
            ? VIDEOS
            : VIDEOS.filter(v => v.category === activeCategory);
    }, [activeCategory]);

    const startSlide = useMemo(() => {
        return Math.max(0, Math.floor(filteredVideos.length / 2) - 1);
    }, [filteredVideos]);

    // Handle slide change to update pagination
    const handleSlideChange = (swiper: any) => {
        setActiveIndex(swiper.realIndex);
    };

    // Calculate dynamic dots window (paged format, max 10 dots)
    const dotWindow = useMemo(() => {
        const total = filteredVideos.length;
        const pageSize = 10;
        const pageIndex = Math.floor(activeIndex / pageSize);

        const start = pageIndex * pageSize;
        const end = Math.min(total, start + pageSize);

        return { start, end };
    }, [activeIndex, filteredVideos]);

    return (
        <div className="relative">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-14 sm:mb-20 pb-4">
                {CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setActiveCategory(cat);
                            setActiveIndex(0); // Reset index
                        }}
                        className={`px-6 py-2 min-w-[80px] rounded-full text-[10px] font-black tracking-[0.15em] uppercase transition-all duration-500 whitespace-nowrap border ${activeCategory === cat
                            ? "bg-black text-white border-black shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1)]"
                            : "bg-white text-secondary border-black/[0.05] hover:border-black/20 hover:text-primary hover:bg-black/[0.01]"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <Swiper
                key={activeCategory}
                onSwiper={setSwiperRef}
                onSlideChange={handleSlideChange}
                onTransitionEnd={handleSlideChange}
                modules={[Navigation, Autoplay]}
                spaceBetween={32}
                slidesPerView={1}
                grabCursor={true}
                speed={800}
                initialSlide={startSlide}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={filteredVideos.length > 3}
                navigation={{
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev',
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                    },
                }}
                className="mySwiper !overflow-visible"
            >
                {filteredVideos.map((video) => (
                    <SwiperSlide key={video.videoId}>
                        <VideoCard
                            videoId={video.videoId}
                            title={video.title}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Control Bar - Stacked & Centered */}
            <div className="relative mt-12 sm:mt-16">
                <div className="flex flex-col items-center gap-10">
                    {/* CUSTOM REACT PAGINATION WITH SLIDING WINDOW */}
                    <div className="flex justify-center items-center gap-3 min-h-[20px]">
                        {filteredVideos.slice(dotWindow.start, dotWindow.end).map((_, i) => {
                            const idx = dotWindow.start + i;
                            return (
                                <button
                                    key={idx}
                                    onClick={() => swiperRef?.slideToLoop(idx)}
                                    className={`h-1.5 transition-all duration-500 rounded-full ${activeIndex === idx
                                        ? "w-8 bg-black opacity-100"
                                        : "w-1.5 bg-black opacity-10 hover:opacity-30"
                                        }`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            );
                        })}
                    </div>

                    {/* Custom Navigation - Now Centered */}
                    <div className="flex items-center gap-8">
                        <button className="swiper-prev nav-button" aria-label="Previous video">
                            <ArrowLeft size={20} strokeWidth={2.5} />
                        </button>
                        <button className="swiper-next nav-button" aria-label="Next video">
                            <ArrowRight size={20} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
