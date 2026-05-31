import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, Briefcase, Calendar, PenTool, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data';
import { PortfolioItem } from '../types';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const categories = [
    'All',
    'Logo Design',
    'Social Media Design',
    'Video Editing',
    'Branding',
    'Photo Editing',
    'Print Design',
    'Advertising',
  ];

  const filteredItems = selectedCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 bg-deep-navy relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-vibrant-orange/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-luxury-gold uppercase tracking-[0.2em] font-bold block mb-2">
            My Visual Lab
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            Portfolio <span className="text-transparent bg-gradient-to-r from-luxury-gold via-vibrant-orange to-luxury-gold bg-clip-text">Showcase</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-luxury-gold to-vibrant-orange mt-4 rounded-full mx-auto" />
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12 max-w-5xl mx-auto">
          {categories.map((cat) => (
            <button
               key={cat}
               id={`portfolio-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
               onClick={() => setSelectedCategory(cat)}
               className={`px-4 sm:px-5 py-2 rounded-full font-sans text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-luxury-gold text-deep-navy font-extrabold shadow-md'
                  : 'bg-charcoal/60 text-soft-gray border border-charcoal hover:text-white hover:bg-charcoal/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto"
          id="portfolio-items-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="group relative h-80 rounded-2xl overflow-hidden border border-charcoal bg-charcoal/40 shadow-xl cursor-pointer"
                onClick={() => setSelectedProject(item)}
                id={`portfolio-card-${item.id}`}
              >
                {/* Project Image Layout with fallbacks */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-90 animate-fade-in"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep-navy via-deep-navy/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                {/* Project Brief Info Card */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold font-bold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-sans font-bold text-lg text-white leading-snug group-hover:text-luxury-gold transition-colors">
                    {item.title}
                  </h3>
                  
                  {/* Subtle expansion info */}
                  <p className="font-sans text-[11px] text-soft-gray line-clamp-2 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-mono text-[9px] text-soft-gray/70 uppercase font-semibold">
                      Client: {item.client}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-luxury-gold font-sans font-bold uppercase tracking-wider">
                      View Details
                      <Eye className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Direct Detail Trigger Card Ribbon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-deep-navy/90 border border-charcoal backdrop-blur-sm flex items-center justify-center text-white/80 group-hover:text-vibrant-orange group-hover:border-vibrant-orange/40 transition-all opacity-0 group-hover:opacity-100 duration-300 font-bold">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Watch state */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16" id="portfolio-empty-state">
            <span className="text-neutral-500 font-sans block text-sm">
              More exciting premium mockups are currently being cataloged. Check other options!
            </span>
          </div>
        )}

      </div>

      {/* Exquisite Details Dialog Modal popup */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark Mask backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-deep-navy/80 backdrop-blur-md"
              id="portfolio-modal-overlay"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 30 }}
              className="relative w-full max-w-4xl bg-gradient-to-b from-charcoal to-deep-navy border border-charcoal rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row h-[90vh] md:h-auto max-h-[85vh] lg:max-h-[80vh]"
              id="portfolio-detail-modal"
            >
              {/* Close button indicator */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-9 h-9 bg-deep-navy/80 border border-charcoal text-soft-gray hover:text-white rounded-full flex items-center justify-center z-25 cursor-pointer hover:border-luxury-gold/30 hover:scale-105 transition-all"
                aria-label="Close Details"
                id="close-portfolio-modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Visual Project Image */}
              <div className="w-full md:w-1/2 relative h-48 md:h-auto overflow-hidden bg-deep-navy flex items-stretch">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover min-h-[190px] md:min-h-[400px]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Local gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-deep-navy/70 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Right Column: Visual Specifications description */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between h-full relative z-10">
                <div className="space-y-6">
                  {/* Category Label */}
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-luxury-gold font-extrabold bg-luxury-gold/10 px-2.5 py-1 rounded">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-white tracking-tight mt-3 leading-tight">
                      {selectedProject.title}
                    </h3>
                  </div>

                  {/* Description text */}
                  <p className="font-sans text-xs sm:text-sm text-soft-gray leading-relaxed font-normal">
                    {selectedProject.description}
                  </p>

                  {/* Metadata Specs boxes */}
                  <div className="grid grid-cols-2 gap-3 border-y border-charcoal py-4 font-sans text-xs">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-soft-gray/60 shrink-0" />
                      <div>
                        <span className="block text-[9px] uppercase text-soft-gray leading-none">Client</span>
                        <span className="text-white font-semibold mt-0.5 block">{selectedProject.client}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-soft-gray/60 shrink-0" />
                      <div>
                        <span className="block text-[9px] uppercase text-soft-gray leading-none">Year</span>
                        <span className="text-white font-semibold mt-0.5 block">{selectedProject.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Advanced Project Highlights */}
                  {selectedProject.highlights && (
                    <div className="space-y-2.5">
                      <span className="font-mono text-soft-gray text-[10px] uppercase tracking-widest block font-bold">
                        Special highlights:
                      </span>
                      <ul className="space-y-2 text-soft-gray font-sans text-xs">
                        {selectedProject.highlights.map((hl, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-vibrant-orange mt-0.5 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Core Designing Tools Tagging list */}
                  <div className="space-y-2 pt-2">
                    <span className="font-mono text-soft-gray text-[10px] uppercase tracking-widest block font-bold">
                      Tools & Skills:
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {selectedProject.tools.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-deep-navy border border-charcoal rounded font-mono text-[9px] text-soft-gray tracking-wide font-medium uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Call to Action Footer inside Modal */}
                <div className="border-t border-charcoal pt-6 mt-8 flex items-center justify-between">
                  <span className="font-sans text-[11px] text-soft-gray">
                    Need something similar?
                  </span>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      const element = document.getElementById('contact');
                      if (element) {
                        window.scrollTo({
                          top: element.offsetTop - 85,
                          behavior: 'smooth',
                        });
                      }
                    }}
                    className="px-4 py-2 rounded bg-vibrant-orange hover:bg-vibrant-orange/90 text-white font-sans text-[11px] font-extrabold uppercase tracking-widest cursor-pointer hover:shadow-lg hover:shadow-vibrant-orange/15 active:scale-98 transition-all"
                  >
                    Quick Order
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
