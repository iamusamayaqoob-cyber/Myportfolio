import React from 'react';
import { motion } from 'motion/react';
import {
  Brush,
  BookOpen,
  Camera,
  Compass,
  Music,
  Check,
  Award,
  CircleCheck,
} from 'lucide-react';
import { SOFT_SKILLS, HOBBIES } from '../data';

const iconMap: Record<string, React.ComponentType<any>> = {
  Brush: Brush,
  BookOpen: BookOpen,
  Camera: Camera,
  Compass: Compass,
  Music: Music
};

export default function SoftSkillsHobbies() {
  return (
    <section id="personal-attributes" className="py-24 bg-deep-navy relative overflow-hidden">
      {/* Background visual aids */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-vibrant-orange/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Soft Skills Section Banner */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-luxury-gold uppercase tracking-[0.2em] font-bold block mb-2">
            The Human Side
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            Interpersonal <span className="text-transparent bg-gradient-to-r from-luxury-gold via-vibrant-orange to-luxury-gold bg-clip-text">Soft Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-luxury-gold to-vibrant-orange mt-4 rounded-full mx-auto" />
        </div>

        {/* Soft Skills Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {SOFT_SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group bg-charcoal/40 hover:bg-charcoal/80 p-6 rounded-2xl border border-charcoal hover:border-luxury-gold/20 transition-all duration-300 flex flex-col justify-between shadow-lg"
              id={`soft-skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="space-y-4">
                {/* Icon Checkmark badge */}
                <div className="w-9 h-9 rounded-lg bg-deep-navy flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-deep-navy transition-all duration-300 shadow-inner">
                  <CircleCheck className="w-4 h-4" />
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-sans font-extrabold text-sm sm:text-base text-white group-hover:text-luxury-gold transition-colors">
                    {skill.name}
                  </h4>
                  <p className="font-sans text-xs text-soft-gray leading-relaxed group-hover:text-neutral-200 transition-colors">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hobbies / Lifestyle Section Banner */}
        <div className="text-center mt-28 mb-16">
          <span className="font-mono text-xs text-vibrant-orange uppercase tracking-[0.2em] font-bold block mb-2">
            Recharge & Lifestyle
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            Interests & <span className="text-transparent bg-gradient-to-r from-luxury-gold via-vibrant-orange to-luxury-gold bg-clip-text">Hobbies</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-luxury-gold to-vibrant-orange mt-4 rounded-full mx-auto" />
        </div>

        {/* Floating Hobbies Pill Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto" id="hobbies-pills-list">
          {HOBBIES.map((hobby, idx) => {
            const IconComponent = iconMap[hobby.icon] || Brush;
            return (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, scale: 0.93 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex items-center gap-3 px-6 py-3.5 bg-charcoal/60 hover:bg-charcoal border border-charcoal/85 hover:border-vibrant-orange/25 rounded-2xl transition-all duration-300 shadow-md cursor-default select-none hover:shadow-vibrant-orange/5 hover:-translate-y-0.5"
                id={`hobby-pill-${hobby.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="w-8 h-8 rounded-lg bg-deep-navy flex items-center justify-center text-vibrant-orange group-hover:scale-110 transition-transform">
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className="font-sans font-bold text-xs sm:text-sm text-soft-gray group-hover:text-white transition-colors">
                  {hobby.name}
                </span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
