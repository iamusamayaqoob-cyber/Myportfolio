import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, MapPin, CircleDot } from 'lucide-react';
import { EXPERIENCE, EDUCATION } from '../data';

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-24 bg-charcoal/40 border-y border-charcoal/85 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-luxury-gold/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-luxury-gold uppercase tracking-[0.2em] font-bold block mb-2">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            Work & <span className="text-transparent bg-gradient-to-r from-luxury-gold via-vibrant-orange to-luxury-gold bg-clip-text">Education</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-luxury-gold to-vibrant-orange mt-4 rounded-full mx-auto" />
        </div>

        {/* Dual Column Timelines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 max-w-7xl mx-auto">
          
          {/* Left Column: Employment Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 border-b border-charcoal pb-4">
              <div className="w-10 h-10 rounded-xl bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center text-luxury-gold">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-white">
                Professional Experience
              </h3>
            </div>

            <div className="relative border-l border-charcoal ml-5 pl-8 space-y-10 py-2">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={exp.id}
                  className="relative group lg:pr-4"
                  id={`experience-timeline-card-${exp.id}`}
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute -left-[41px] top-1 bg-deep-navy p-1 rounded-full text-luxury-gold group-hover:scale-110 transition-transform border border-charcoal">
                    <CircleDot className="w-4 h-4 animate-pulse" />
                  </div>

                  {/* Header info */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
                      <span className="inline-flex items-center gap-1.5 text-luxury-gold font-bold bg-luxury-gold/10 px-2.5 py-0.5 rounded-full">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="text-soft-gray inline-flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <h4 className="font-sans font-extrabold text-lg sm:text-xl text-white group-hover:text-luxury-gold transition-colors">
                      {exp.role}
                    </h4>
                    
                    <span className="font-sans text-xs font-semibold text-soft-gray block tracking-tight">
                      {exp.company}
                    </span>
                  </div>

                  {/* Core Responsibilities List */}
                  <ul className="space-y-2 text-soft-gray font-sans text-xs leading-relaxed max-w-xl group-hover:text-neutral-200 transition-colors">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold shrink-0 mt-1.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Educational Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3 border-b border-charcoal pb-4">
              <div className="w-10 h-10 rounded-xl bg-vibrant-orange/10 border border-vibrant-orange/20 flex items-center justify-center text-vibrant-orange">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-white">
                Academic History
              </h3>
            </div>

            <div className="relative border-l border-charcoal ml-5 pl-8 space-y-10 py-2">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={edu.id}
                  className="relative group lg:pr-4"
                  id={`education-timeline-card-${edu.id}`}
                >
                  {/* Timeline Dot Indicator */}
                  <div className="absolute -left-[41px] top-1 bg-deep-navy p-1 rounded-full text-vibrant-orange group-hover:scale-110 transition-transform border border-charcoal">
                    <CircleDot className="w-4 h-4" />
                  </div>

                  {/* Header info */}
                  <div className="space-y-1.5 mb-3">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs">
                      <span className="inline-flex items-center gap-1.5 text-vibrant-orange font-bold bg-vibrant-orange/10 px-2.5 py-0.5 rounded-full">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                    </div>

                    <h4 className="font-sans font-extrabold text-lg sm:text-xl text-white group-hover:text-vibrant-orange transition-colors">
                      {edu.degree}
                    </h4>

                    <span className="font-sans text-xs font-semibold text-soft-gray block tracking-tight">
                      {edu.institution}
                    </span>
                  </div>

                  {/* Description */}
                  {edu.description && (
                    <p className="font-sans text-xs text-soft-gray max-w-xl group-hover:text-neutral-200 transition-colors leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
