/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Disc } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ExperienceEducation from './components/ExperienceEducation';
import SoftSkillsHobbies from './components/SoftSkillsHobbies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Elegant intro timeout corresponding to professional agencies
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-deep-navy text-white min-h-screen selection:bg-vibrant-orange selection:text-white overflow-x-hidden antialiased">
      <AnimatePresence mode="wait">
        {isLoading ? (
          /* Messmerizing Launch Loader Card */
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed inset-0 bg-deep-navy z-[9999] flex flex-col items-center justify-center gap-6"
            id="app-preloader"
          >
            {/* Spinning Gold Disc */}
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                className="w-16 h-16 rounded-2xl border border-dashed border-luxury-gold/50 flex items-center justify-center"
              >
                <Disc className="w-8 h-8 text-luxury-gold" />
              </motion.div>
              <div className="absolute inset-0 w-16 h-16 bg-luxury-gold/10 blur-xl rounded-full" />
            </div>

            {/* Typography Loading Block */}
            <div className="text-center space-y-1">
              <motion.h2
                initial={{ opacity: 0, letterSpacing: '0.15em' }}
                animate={{ opacity: 1, letterSpacing: '0.25em' }}
                transition={{ duration: 0.8 }}
                className="font-sans font-extrabold text-sm sm:text-base text-white uppercase tracking-widest block"
              >
                USAMA <span className="text-luxury-gold">YAQOOB</span>
              </motion.h2>
              
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-mono text-[9px] uppercase tracking-[0.3em] text-soft-gray block"
              >
                Visual Arts // Operations Portfolio
              </motion.span>
            </div>

            {/* Progress loading indicators bar */}
            <div className="w-32 h-[1.5px] bg-charcoal rounded-full overflow-hidden relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ repeat: Infinity, duration: 1.2, ease: 'easeInOut' }}
                className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-vibrant-orange to-transparent"
              />
            </div>
          </motion.div>
        ) : (
          /* Completed Integrated Interface */
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen relative"
            id="app-root-container"
          >
            {/* Ambient Overlay Grid */}
            <div id="ambient-overlay" className="fixed inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_40%,rgba(15,23,42,0.35),rgba(17,24,39,0.95))] pointer-events-none z-0" />

            {/* Floating Top Nav bar */}
            <Navbar />

            {/* Body Blocks */}
            <main className="flex-grow relative z-10 w-full">
              {/* Section 1: Hero intro layout */}
              <Hero />

              {/* Section 2: Detailed profile bio */}
              <About />

              {/* Section 3: Animated progress matrices */}
              <Skills />

              {/* Section 4: Dynamic grid services offered */}
              <Services />

              {/* Section 5: Filter-inclusive gallery details popup */}
              <Portfolio />

              {/* Sections 6 & 7: Dual timeline employment and degrees */}
              <ExperienceEducation />

              {/* Sections 8 & 9: Dynamic indicators soft skills, lifestyle */}
              <SoftSkillsHobbies />

              {/* Section 10: Autoplay slider client cards */}
              <Testimonials />

              {/* Section 11: Validated maps feedback forms */}
              <Contact />
            </main>

            {/* Floating Action WhatsApp chat helper */}
            <FloatingWhatsApp />

            {/* Section 12: Signature footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
