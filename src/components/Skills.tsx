import { useState } from 'react';
import { motion } from 'motion/react';
import { Palette, Cpu, ChevronDown } from 'lucide-react';
import { SKILLS } from '../data';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'design' | 'operations'>('all');

  const filteredSkills = SKILLS.filter(skill => {
    if (activeTab === 'all') return true;
    return skill.category === activeTab;
  });

  return (
    <section id="skills" className="py-24 bg-deep-navy relative overflow-hidden">
      {/* Background abstract element */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-luxury-gold uppercase tracking-[0.2em] font-bold block mb-2">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            Professional <span className="text-transparent bg-gradient-to-r from-luxury-gold via-vibrant-orange to-luxury-gold bg-clip-text">Core Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-luxury-gold to-vibrant-orange mt-4 rounded-full mx-auto" />
        </div>

        {/* Tab Selection Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-charcoal/60 p-1.5 rounded-full border border-charcoal/85">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-full font-sans text-xs uppercase font-bold tracking-wider transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-luxury-gold text-deep-navy font-extrabold shadow-md'
                  : 'text-soft-gray hover:text-white'
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`px-6 py-2 rounded-full font-sans text-xs uppercase font-bold tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'design'
                  ? 'bg-luxury-gold text-deep-navy font-extrabold shadow-md'
                  : 'text-soft-gray hover:text-white'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              Creative Design
            </button>
            <button
              onClick={() => setActiveTab('operations')}
              className={`px-6 py-2 rounded-full font-sans text-xs uppercase font-bold tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'operations'
                  ? 'bg-luxury-gold text-deep-navy font-extrabold shadow-md'
                  : 'text-soft-gray hover:text-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              Administrative
            </button>
          </div>
        </div>

        {/* Skill Progress Bars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-7 max-w-5xl mx-auto">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="space-y-2 bg-charcoal/45 p-4 rounded-xl border border-charcoal/80 hover:border-luxury-gold/20 transition-colors shadow-md animate-fade-in"
            >
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${skill.category === 'design' ? 'bg-luxury-gold' : 'bg-vibrant-orange'}`} />
                  <span className="font-sans font-bold text-white tracking-wide">
                    {skill.name}
                  </span>
                </div>
                <span className={`font-mono font-bold ${skill.category === 'design' ? 'text-luxury-gold' : 'text-vibrant-orange'}`}>
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress track */}
              <div className="h-2 w-full bg-deep-navy rounded-full overflow-hidden relative border border-charcoal/50">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut', delay: idx * 0.05 }}
                  className={`h-full rounded-full bg-gradient-to-r relative ${
                    skill.category === 'design'
                      ? 'from-luxury-gold to-luxury-gold/80'
                      : 'from-vibrant-orange to-vibrant-orange/80'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* High-End Tech Stack Indicator Summary */}
        <div className="mt-16 text-center max-w-2xl mx-auto bg-charcoal/40 p-5 rounded-2xl border border-charcoal/80 shadow-md">
          <p className="font-sans text-xs sm:text-sm text-soft-gray leading-relaxed font-normal">
            ⚙️ <strong className="text-white">Expertise Note:</strong> My custom workflows utilize 
            <span className="text-luxury-gold font-bold px-1">Adobe Premiere Pro, After Effects, Photoshop, & Illustrator</span> for high-end video editing and pixel-perfect designing alongside <span className="text-vibrant-orange font-bold px-1">Microsoft Office Suite & Database Registers</span> for precise administrative record alignments.
          </p>
        </div>

      </div>
    </section>
  );
}
