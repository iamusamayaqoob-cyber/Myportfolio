import { motion } from 'motion/react';
import { ArrowRight, Sparkles, FolderKanban, ShieldCheck, Mail, MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 85,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-deep-navy"
    >
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute inset-0">
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-luxury-gold/10 blur-[125px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 translate-x-1/2 w-[450px] h-[450px] rounded-full bg-vibrant-orange/10 blur-[150px] pointer-events-none animate-pulse-slow" />

        {/* Technical Grid Pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Side Content */}
        <div className="lg:col-span-7 text-left flex flex-col items-start gap-6">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal/80 border border-charcoal backdrop-blur-sm shadow-inner"
            id="hero-badge"
          >
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-luxury-gold/90">
              International Freelancer & Graphic Expert
            </span>
          </motion.div>

          {/* Large display headings */}
          <div className="space-y-3 max-w-2xl">
            <motion.h4
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-mono text-soft-gray text-xs sm:text-sm uppercase tracking-[0.25em] block"
            >
              Creative Visionary
            </motion.h4>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white tracking-tight leading-[1.05] relative animate-fade-in"
              id="hero-name-title"
            >
              {PERSONAL_INFO.name}
              <span className="absolute -bottom-1 left-0 w-24 h-1 bg-gradient-to-r from-luxury-gold to-vibrant-orange rounded-full" />
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl lg:text-3xl font-sans font-bold bg-gradient-to-r from-luxury-gold via-vibrant-orange to-luxury-gold bg-clip-text text-transparent pt-3"
            >
              {PERSONAL_INFO.title}
            </motion.h2>
          </div>

          {/* Subheading Short Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-soft-gray max-w-xl font-normal leading-relaxed font-sans"
            id="hero-short-bio"
          >
            {PERSONAL_INFO.shortBio}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-4"
            id="hero-ctas"
          >
            <button
               onClick={() => scrollToSection('contact')}
               className="group flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-vibrant-orange text-white font-sans text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-vibrant-orange/90 active:scale-98 hover:shadow-xl hover:shadow-vibrant-orange/20 transition-all cursor-pointer shadow-md"
               id="hero-primary-cta"
             >
               <Mail className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
               Hire Me Today
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </button>

             <a
               href="https://wa.me/923079989925?text=Hello%20Usama,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20hire%20you%20for%20a%20project!"
               target="_blank"
               rel="noopener noreferrer"
               className="group flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#25D366]/90 text-white font-sans text-xs sm:text-sm font-extrabold uppercase tracking-wider hover:bg-[#25D366] active:scale-98 hover:shadow-xl hover:shadow-[#25D366]/20 transition-all cursor-pointer shadow-md"
               id="hero-whatsapp-cta"
             >
               <MessageCircle className="w-4 h-4 fill-transparent" />
               WhatsApp
             </a>
 
             <button
               onClick={() => scrollToSection('portfolio')}
               className="group flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-charcoal border border-charcoal hover:border-luxury-gold/30 text-white font-sans text-xs sm:text-sm uppercase font-semibold tracking-wider hover:bg-charcoal/80 transition-all cursor-pointer"
               id="hero-secondary-cta"
             >
               <FolderKanban className="w-4 h-4 text-luxury-gold animate-pulse" />
               View Portfolio
             </button>
          </motion.div>

          {/* Quick Metrics Trust Signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6 sm:gap-8 pt-8 border-t border-charcoal w-full"
            id="hero-trust-indicators"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="font-sans text-xs font-semibold text-soft-gray tracking-wide uppercase">
                Available for Contract & Full-time
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Visual Graphic Showcase */}
        <div className="lg:col-span-5 flex justify-center items-center relative h-[380px] sm:h-[450px] w-full mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full h-full max-w-[380px] sm:max-w-[420px] flex items-center justify-center"
            id="hero-artwork-canvas"
          >
            {/* Elegant Outer Rings */}
            <div className="absolute inset-0 rounded-full border border-dashed border-charcoal/70 animate-spin-slow pointer-events-none" />
            <div className="absolute inset-4 rounded-full border border-charcoal/45 pointer-events-none" />

            {/* Glowing Center Glass Card */}
            <div className="absolute w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] bg-charcoal/40 rounded-3xl border border-charcoal/80 shadow-2xl backdrop-blur-md flex flex-col justify-between p-6 overflow-hidden ring-1 ring-white/5">
              {/* Gold gradient mesh inside the card */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-luxury-gold/15 blur-2xl rounded-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-vibrant-orange/15 blur-3xl rounded-full" />

              {/* Top Vector Interface graphic mockup */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-[9px] text-soft-gray tracking-widest uppercase bg-deep-navy/80 px-2.5 py-1 rounded border border-charcoal">
                  Vector Engine v2.5
                </span>
              </div>

              {/* Graphic Design Abstract Geometry */}
              <div className="relative z-10 flex flex-col items-center justify-center py-4 my-auto">
                {/* SVG Pencil drafting visual */}
                <svg
                  className="w-20 h-20 text-luxury-gold animate-pulse"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="12" y1="12" x2="2" y2="8.5" />
                  <line x1="12" y1="12" x2="22" y2="8.5" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" className="text-luxury-gold/20" />
                </svg>

                <div className="mt-4 text-center">
                  <span className="font-sans font-bold text-sm tracking-wide text-white block">
                    Usama Yaqoob
                  </span>
                  <span className="font-sans text-[11px] text-soft-gray block mt-0.5 font-medium">
                    Creative Graphic Professional
                  </span>
                </div>
              </div>

              {/* Footer details mockup */}
              <div className="relative z-10 flex justify-between items-center border-t border-charcoal/80 pt-4 font-mono text-[9px] text-soft-gray">
                <span>COORD: RY_PK</span>
                <span className="text-luxury-gold font-bold uppercase tracking-widest bg-luxury-gold/10 px-2 py-0.5 rounded">
                  95% Satisfaction
                </span>
              </div>
            </div>

            {/* Little floating detail badges around */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute top-8 -left-4 px-3 py-1.5 bg-charcoal border border-charcoal/80 rounded-xl shadow-lg flex items-center gap-2 pointer-events-none"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-vibrant-orange block animate-ping" />
              <span className="font-mono text-[9px] text-soft-gray font-semibold uppercase tracking-wider">
                Ps Expert
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
              className="absolute bottom-12 -right-6 px-3 py-1.5 bg-charcoal border border-charcoal/85 rounded-xl shadow-lg flex items-center gap-2 pointer-events-none"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold block animate-ping" />
              <span className="font-mono text-[9px] text-soft-gray font-semibold uppercase tracking-wider">
                Ai Master
              </span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-6 px-3 py-1.5 bg-charcoal border border-charcoal/85 rounded-xl shadow-lg flex items-center gap-2 pointer-events-none"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-vibrant-orange block animate-ping" />
              <span className="font-mono text-[9px] text-soft-gray font-semibold uppercase tracking-wider">
                Pr Video Editor
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modern Mouse Scroll Down Prompter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-10">
        <span className="font-mono text-[9px] text-soft-gray uppercase tracking-widest">
          Scroll To Discover
        </span>
        <div className="w-5 h-9 rounded-full border border-charcoal flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-1.5 h-2 bg-luxury-gold rounded-full"
          />
        </div>
      </div>
    </section>
  );
}
