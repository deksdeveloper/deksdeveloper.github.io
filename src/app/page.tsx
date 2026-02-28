import Carousel from '@/components/Carousel';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fafafa] transition-colors duration-500 overflow-x-hidden pt-16 sm:pt-24">
      {/* Background Decorative Element */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-black/[0.03] to-transparent rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="page-container">
        {/* Unified Gallery Header Section */}
        <section className="pb-12">
          {/* ... existing header content ... */}
          <div className="flex flex-col items-center text-center mb-24 sm:mb-32 animate-fade-in">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-[#0a0a0a] leading-[0.9]" style={{ marginBottom: '3.5rem' }}>
              deks<span className="text-black/20 italic font-serif font-light">developer</span>
            </h1>
            <div className="max-w-[600px] mx-auto space-y-4">
              <p className="text-base sm:text-lg text-[#666666] font-medium leading-relaxed">
                Design, code, and lifestyle. Exploring the intersection of minimalist aesthetics and modern technology through visual storytelling.
              </p>
            </div>
          </div>

          <Carousel />
        </section>
      </div>

      {/* --- Visual Divider 1 (Reduced height) --- */}
      <div className="h-12 sm:h-16 flex items-center">
        <div className="w-full h-px bg-black/[0.05]" />
      </div>

      <Projects />

      {/* --- Visual Divider 2 --- */}
      <div className="h-12 sm:h-16 flex items-center">
        <div className="w-full h-px bg-black/[0.05]" />
      </div>

      {/* Contact Section */}
      <section className="bg-white/20">
        <div className="page-container">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-24">
            <div className="flex-1 space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-white scale-75">
                    <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
                  </div>
                  <span className="text-[10px] font-bold tracking-[.4em] text-black uppercase">
                    Connect
                  </span>
                </div>
                <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black tracking-[-.05em] text-[#0a0a0a] leading-[0.8]">
                  Let&apos;s build <br />
                  <span className="text-black/5 italic font-serif font-light">something cool.</span>
                </h2>
              </div>

              <p className="text-lg text-[#666666] max-w-md leading-relaxed font-medium">
                I help startups and brands build high-end digital products with a focus on minimalist design and clean code.
              </p>
            </div>

            <div className="w-full lg:w-auto flex flex-col items-start gap-12 pt-8">
              <div className="space-y-4">
                <span className="text-[10px] font-black tracking-[.3em] text-black/10 uppercase">Email</span>
                <a
                  href="mailto:hello@deks.dev"
                  className="group block text-3xl sm:text-5xl font-black text-[#0a0a0a] hover:text-black/30 transition-all duration-500 tracking-tighter"
                >
                  hello@deks.dev
                </a>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] font-black tracking-[.3em] text-black/10 uppercase">Social</span>
                <div className="flex flex-col gap-4">
                  <a href="https://youtube.com/@deksdeveloper" target="_blank" className="flex items-center gap-3 text-sm font-bold text-[#666666] hover:text-[#0a0a0a] transition-all group">
                    <span className="w-6 h-[1px] bg-black/10 group-hover:w-10 transition-all" /> YouTube
                  </a>
                  <a href="https://github.com/deksdeveloper" target="_blank" className="flex items-center gap-3 text-sm font-bold text-[#666666] hover:text-[#0a0a0a] transition-all group">
                    <span className="w-6 h-[1px] bg-black/10 group-hover:w-10 transition-all" /> GitHub
                  </a>
                  <a href="https://instagram.com/efethegreatest" target="_blank" className="flex items-center gap-3 text-sm font-bold text-[#666666] hover:text-[#0a0a0a] transition-all group">
                    <span className="w-6 h-[1px] bg-black/10 group-hover:w-10 transition-all" /> Instagram
                  </a>
                </div>
              </div>

              <div className="pt-8">
                <div className="px-6 py-2.5 min-w-[120px] rounded-full bg-black/[0.03] border border-black/[0.02] inline-flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="text-[10px] font-bold text-black/40 uppercase tracking-widest">Response: 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Visual Divider 2 (Reduced height) --- */}
      <div className="h-12 sm:h-16 flex items-center">
        <div className="w-full h-px bg-black/[0.05]" />
      </div>
    </main>
  );
}
