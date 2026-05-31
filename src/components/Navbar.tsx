import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Disc, PhoneCall, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      return stored !== 'light'; // Default is dark if no key exists
    }
    return true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'experience', label: 'Experience' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled state
      setIsScrolled(window.scrollY > 20);

      // Active section watcher
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 85,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <motion.header
        id="navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-deep-navy/90 backdrop-blur-md border-b border-charcoal shadow-lg shadow-black/20'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo / Brand */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 group cursor-pointer"
            id="nav-logo-btn"
          >
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-tr from-luxury-gold to-vibrant-orange flex items-center justify-center overflow-hidden shadow-md shadow-vibrant-orange/10">
              <Disc className="w-5 h-5 text-charcoal animate-spin-slow group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-left">
              <span className="font-sans font-bold text-lg tracking-tight text-white block leading-tight">
                USAMA <span className="text-luxury-gold">YAQOOB</span>
              </span>
              <span className="font-mono text-[10px] text-soft-gray tracking-widest block uppercase font-medium">
                Creative Visual Expert
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-charcoal/40 p-1 rounded-full border border-charcoal/85 backdrop-blur-sm">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`navlink-desktop-${link.id}`}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 rounded-full font-sans text-xs font-semibold tracking-wide transition-all uppercase duration-200 cursor-pointer relative z-10 ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-soft-gray hover:text-white'
                }`}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-vibrant-orange rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </button>
            ))}
          </nav>

          {/* Hire Me Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Desktop Theme Toggle */}
            <button
              onClick={toggleTheme}
              id="desktop-theme-toggle"
              className="w-10 h-10 rounded-full bg-charcoal/80 text-soft-gray hover:text-white border border-charcoal hover:border-vibrant-orange/30 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md"
              aria-label="Toggle Theme"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-luxury-gold" />
              ) : (
                <Moon className="w-4 h-4 text-vibrant-orange" />
              )}
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              id="desktop-hire-btn"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-vibrant-orange text-white text-xs font-sans uppercase font-bold tracking-wider hover:bg-vibrant-orange/95 hover:shadow-lg hover:shadow-vibrant-orange/20 transition-all duration-300 cursor-pointer shadow-md"
            >
              <PhoneCall className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform" />
              Hire Me
            </button>
          </div>

          {/* Mobile Actions Container */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              id="mobile-theme-toggle"
              className="w-10 h-10 rounded-full bg-charcoal/80 text-soft-gray hover:text-white border border-charcoal flex items-center justify-center cursor-pointer shadow-md"
              aria-label="Toggle Theme"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-luxury-gold" />
              ) : (
                <Moon className="w-4 h-4 text-vibrant-orange" />
              )}
            </button>

            {/* Mobile hamburger trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-soft-gray hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle Menu"
              id="mobile-nav-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay Slider */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            id="mobile-menu-drawer"
            className="fixed top-20 left-0 w-full bg-charcoal/95 backdrop-blur-lg border-b border-charcoal z-40 lg:hidden overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-4 pb-8 flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.id}
                  id={`navlink-mobile-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl font-sans text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    activeSection === link.id
                      ? 'bg-vibrant-orange text-white shadow-md'
                      : 'text-soft-gray hover:bg-deep-navy/50 hover:text-white'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}

              <motion.button
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => scrollToSection('contact')}
                id="mobile-drawer-cta"
                className="w-full mt-4 flex items-center justify-center gap-2 py-4 rounded-xl bg-vibrant-orange text-white font-sans text-sm font-bold uppercase tracking-wider hover:bg-vibrant-orange/95 hover:shadow-lg hover:shadow-vibrant-orange/20 active:scale-98 transition-all cursor-pointer shadow-md"
              >
                <PhoneCall className="w-4 h-4 animate-bounce" />
                Let's Build Together
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
