import { motion } from 'motion/react';
import { Award, Briefcase, FileSignature, CheckCircle2, ChevronRight, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function About() {
  const highlights = [
    { title: 'Professional Video Editing', desc: 'Editing high-quality YouTube videos, cinematics, corporate vlogs, and tutorials with rich audio/music sync.' },
    { title: 'Promo Ads & Reels Specialist', desc: 'Crafting high-conversion vertical content, Instagram Reels, Shorts, and premium business advert videos.' },
    { title: 'Graphic Design & Vector Art', desc: 'Crafting visually astonishing layouts, scale posters, and master templates.' },
    { title: 'Branding & Identity Architecture', desc: 'Engineering professional guidelines, color guides, and iconic corporate marks.' },
    { title: 'Photoshop Fine Retouching', desc: 'Expert color balances, micro contrast tweaks, skin restoration, and compositions.' },
    { title: 'Illustrator Vector Mechanics', desc: 'Tracing blueprint drafts into pristine, infinitely scalable vector outputs.' },
    { title: 'Computer Operations & Administration', desc: 'Directing data entry registries, file indexing, and robust device calibration.' },
    { title: 'Documentation & Formatting Protocol', desc: 'Drafting legal filings and corporate newsletters with high style integrity.' },
  ];

  const counters = [
    { value: `${PERSONAL_INFO.experienceYears}+`, label: 'Years Experience', icon: Award, color: 'text-luxury-gold' },
    { value: `${PERSONAL_INFO.completedProjects}+`, label: 'Completed Projects', icon: Briefcase, color: 'text-vibrant-orange' },
    { value: `${PERSONAL_INFO.happyClients}%`, label: 'Client Rating', icon: CheckCircle2, color: 'text-luxury-gold' },
  ];

  return (
    <section id="about" className="py-24 bg-charcoal/40 border-y border-charcoal/85 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16 relative">
          <span className="font-mono text-xs text-luxury-gold uppercase tracking-[0.2em] font-bold block mb-2">
            Professional Profile
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            About <span className="text-transparent bg-gradient-to-r from-luxury-gold via-vibrant-orange to-luxury-gold bg-clip-text">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-luxury-gold to-vibrant-orange mt-4 rounded-full mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait and Stats Cards */}
          <div className="lg:col-span-5 flex flex-col items-center gap-8 relative" id="about-portrait-and-stats">
            
            {/* Elegant Portrait Frame */}
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden p-[2px] bg-gradient-to-tr from-luxury-gold via-vibrant-orange to-charcoal">
              <div className="absolute inset-0 bg-deep-navy rounded-2xl" />
              <img
                src={PERSONAL_INFO.avatar}
                alt="Usama Yaqoob portrait"
                className="w-full h-full object-cover rounded-2xl relative z-10 opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay highlight */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-transparent to-transparent z-20 pointer-events-none" />
              
              {/* Location Badge */}
              <div className="absolute bottom-4 left-4 z-30 bg-deep-navy/90 backdrop-blur-sm border border-charcoal px-3.5 py-1.5 rounded-full flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-vibrant-orange" />
                <span className="font-sans text-[10px] sm:text-xs font-semibold text-soft-gray">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Quick Metrics Cards */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-md sm:max-w-lg">
              {counters.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-deep-navy/80 border border-charcoal/80 rounded-xl p-4 text-center hover:border-luxury-gold/30 transition-all hover:bg-deep-navy"
                  >
                    <div className="flex justify-center mb-1">
                      <IconComponent className={`w-5 h-5 ${card.color}`} />
                    </div>
                    <span className="block font-sans font-bold text-lg sm:text-xl text-white">
                      {card.value}
                    </span>
                    <span className="block font-sans text-[9px] sm:text-[10px] text-soft-gray uppercase tracking-wider font-semibold mt-1">
                      {card.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Bio and Capabilities Highlights */}
          <div className="lg:col-span-7 space-y-8 text-neutral-300 flex flex-col justify-center">
            
            <div className="space-y-4">
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-white">
                Designing High-End Digital Assets & Directing Operations
              </h3>
              <p className="font-sans text-soft-gray text-sm sm:text-base leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Structured core specialties */}
            <div className="space-y-4">
              <span className="font-mono text-soft-gray text-xs uppercase tracking-widest block font-bold">
                Core Expertise & Pillars:
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 bg-charcoal/40 p-3.5 rounded-xl border border-charcoal/80 hover:border-luxury-gold/15 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-luxury-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                      <ChevronRight className="w-3.5 h-3.5 text-luxury-gold" />
                    </div>
                    <div>
                      <h5 className="font-sans text-xs sm:text-sm font-bold text-white leading-tight">
                        {item.title}
                      </h5>
                      <p className="font-sans text-[11px] sm:text-xs text-soft-gray mt-1 leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
