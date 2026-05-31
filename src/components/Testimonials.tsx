import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const handleNext = () => {
    setDirection('right');
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Optional auto glide
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8500);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const activeTestimonial = TESTIMONIALS[activeIndex];

  // Motion variants for slider transitions
  const slideVariants = {
    enter: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: 'left' | 'right') => ({
      x: dir === 'right' ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-24 bg-charcoal/40 border-y border-charcoal/85 relative overflow-hidden">
      {/* Background visual light elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-luxury-gold uppercase tracking-[0.2em] font-bold block mb-2">
            Client Reviews
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            Client <span className="text-transparent bg-gradient-to-r from-luxury-gold via-vibrant-orange to-luxury-gold bg-clip-text">Testimonials</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-luxury-gold to-vibrant-orange mt-4 rounded-full mx-auto" />
        </div>

        {/* Slider Box Wrapper */}
        <div className="max-w-4xl mx-auto relative px-4" id="testimonials-carousel-wrapper">
          
          {/* Main Display Area */}
          <div className="relative min-h-[300px] flex items-center justify-center bg-charcoal/40 border border-charcoal rounded-3xl p-6 sm:p-12 shadow-2xl backdrop-blur-sm">
            
            {/* Elegant Background Quote Symbol */}
            <div className="absolute top-6 right-8 text-charcoal/60 pointer-events-none">
              <Quote className="w-24 h-24 stroke-[0.8] rotate-180 opacity-50" />
            </div>

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                className="w-full flex flex-col items-center text-center space-y-6 sm:space-y-8"
                id={`testimonial-index-${activeIndex}`}
              >
                {/* 5-Star Indicator */}
                <div className="flex gap-1">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                  ))}
                </div>

                {/* Review message text */}
                <p className="font-sans text-sm sm:text-lg text-soft-gray leading-relaxed italic max-w-3xl">
                  "{activeTestimonial.content}"
                </p>

                {/* Reviewer signature and info */}
                <div className="flex items-center gap-4 text-left border-t border-charcoal pt-6 w-full max-w-sm justify-center">
                  <img
                    src={activeTestimonial.avatar}
                    alt={activeTestimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-charcoal"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-sans font-extrabold text-sm sm:text-base text-white">
                      {activeTestimonial.name}
                    </h4>
                    <span className="font-sans text-[11px] sm:text-xs text-soft-gray block font-semibold leading-normal mt-0.5">
                      {activeTestimonial.role} at <span className="text-luxury-gold">{activeTestimonial.company}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-11 h-11 bg-deep-navy border border-charcoal hover:border-vibrant-orange/30 text-soft-gray hover:text-white rounded-full flex items-center justify-center cursor-pointer transition-all active:scale-95 shadow-lg"
              aria-label="Previous Review"
              id="testimonial-prev-arrow"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Slider Indicator dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > activeIndex ? 'right' : 'left');
                    setActiveIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeIndex === idx
                      ? 'bg-vibrant-orange w-6'
                      : 'bg-charcoal hover:bg-charcoal/80'
                  }`}
                  aria-label={`Jump to review ${idx + 1}`}
                  id={`testimonial-indicator-dot-${idx}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-11 h-11 bg-deep-navy border border-charcoal hover:border-vibrant-orange/30 text-soft-gray hover:text-white rounded-full flex items-center justify-center cursor-pointer transition-all active:scale-95 shadow-lg"
              aria-label="Next Review"
              id="testimonial-next-arrow"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
