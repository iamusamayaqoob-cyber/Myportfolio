import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Briefcase,
  LayoutGrid,
  Camera,
  CreditCard,
  FileText,
  Image,
  PenTool,
  Layers,
  Database,
  ArrowRight,
  Video,
  Film,
} from 'lucide-react';
import { SERVICES } from '../data';

const iconMap: Record<string, React.ComponentType<any>> = {
  Sparkles: Sparkles,
  Briefcase: Briefcase,
  LayoutGrid: LayoutGrid,
  Camera: Camera,
  CreditCard: CreditCard,
  FileText: FileText,
  Image: Image,
  PenTool: PenTool,
  Layers: Layers,
  Database: Database,
  Video: Video,
  Film: Film
};

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 85,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services" className="py-24 bg-charcoal/40 border-y border-charcoal/85 relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-luxury-gold uppercase tracking-[0.2em] font-bold block mb-2">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            Premium <span className="text-transparent bg-gradient-to-r from-luxury-gold via-vibrant-orange to-luxury-gold bg-clip-text">Solutions & Services</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-luxury-gold to-vibrant-orange mt-4 rounded-full mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {SERVICES.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Briefcase;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative bg-deep-navy/70 hover:bg-charcoal h-full rounded-2xl p-6 lg:p-8 border border-charcoal hover:border-luxury-gold/25 transition-all duration-300 flex flex-col justify-between shadow-2xl hover:shadow-luxury-gold/5"
                id={`service-card-${service.id}`}
              >
                {/* Decorative gold-light top-right corner glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-luxury-gold/0 group-hover:bg-luxury-gold/5 blur-xl rounded-full transition-all duration-300" />
                
                <div>
                  {/* Icon & Highlight indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-charcoal border border-charcoal/80 flex items-center justify-center text-luxury-gold group-hover:scale-110 group-hover:bg-vibrant-orange group-hover:text-white transition-all duration-300 shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-soft-gray/50 group-hover:text-luxury-gold/50 font-bold transition-all">
                      SVR // 0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-sans font-extrabold text-lg sm:text-xl text-white group-hover:text-luxury-gold transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-soft-gray group-hover:text-neutral-200 leading-relaxed transition-colors mb-6">
                    {service.description}
                  </p>

                  {/* Bullet features list */}
                  <div className="space-y-2 border-t border-charcoal pt-4 mb-6">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-soft-gray/60 group-hover:text-soft-gray transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold shrink-0 block" />
                        <span className="font-sans text-[11px] sm:text-xs">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hire Action trigger */}
                <button
                  onClick={scrollToContact}
                  className="font-mono text-[10px] uppercase tracking-widest font-extrabold text-vibrant-orange group-hover:text-vibrant-orange/90 inline-flex items-center gap-1.5 hover:gap-2.5 transition-all cursor-pointer border-t border-transparent group-hover:border-charcoal pt-4 text-left"
                >
                  Request Service
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
