import { Disc, Mail, MessageSquare, ArrowUp, Send, Facebook, Globe, Landmark } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Footer() {
  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  const handleQuickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 85,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-deep-navy border-t border-charcoal pt-20 pb-8 relative overflow-hidden" id="footer">
      {/* Background ambient mesh */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-charcoal">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-5">
            <button
               onClick={scrolltoTop}
              className="flex items-center gap-2.5 text-left cursor-pointer group"
              id="footer-logo-btn"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-luxury-gold to-vibrant-orange flex items-center justify-center overflow-hidden shadow-md shadow-luxury-gold/10">
                <Disc className="w-5 h-5 text-deep-navy animate-spin-slow group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <span className="font-sans font-extrabold text-lg tracking-tight text-white block leading-tight">
                  USAMA <span className="text-luxury-gold">YAQOOB</span>
                </span>
                <span className="font-mono text-[9px] text-soft-gray tracking-widest block uppercase">
                  Creative Visual Expert
                </span>
              </div>
            </button>
            
            <p className="font-sans text-xs sm:text-sm text-soft-gray leading-relaxed max-w-sm">
              Creating high-impact custom vector assets, branding guidelines, advanced photo edits, and administrative office formatting sheets matching international agency aesthetics.
            </p>
          </div>

          {/* Col 2: Navigation Links Grid */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans font-extrabold text-xs uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2.5 text-xs text-soft-gray font-sans">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'services', label: 'Services' },
                { id: 'portfolio', label: 'Portfolio' },
                { id: 'experience', label: 'Experience' },
                { id: 'testimonials', label: 'Testimonials' },
                { id: 'contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleQuickScroll(link.id)}
                    className="hover:text-vibrant-orange transition-colors cursor-pointer text-left block py-0.5"
                    id={`footer-nav-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact info summaries */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans font-extrabold text-xs uppercase tracking-widest text-white">
              Get In Touch
            </h4>
            <ul className="space-y-3 font-sans text-xs text-soft-gray">
              <li>
                <span className="block text-soft-gray/50 font-mono text-[9px] uppercase font-bold mb-0.5">Phone Number</span>
                <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="text-white hover:text-luxury-gold font-semibold transition-colors">
                  {PERSONAL_INFO.phone}
                </a>
              </li>
              <li>
                <span className="block text-soft-gray/50 font-mono text-[9px] uppercase font-bold mb-0.5">Business Email</span>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-luxury-gold font-semibold transition-colors block leading-tight truncate">
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li>
                <span className="block text-soft-gray/50 font-mono text-[9px] uppercase font-bold mb-0.5">Country Office</span>
                <span className="text-white font-semibold">
                  {PERSONAL_INFO.location}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Creative Portals Link */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-sans font-extrabold text-xs uppercase tracking-widest text-white">
              Visual Channels
            </h4>
            <div className="flex gap-2.5" id="socials-channel-list">
              {[
                { id: 'behance', label: 'WhatsApp', href: `https://wa.me/${PERSONAL_INFO.phone.replace(/\D/g, '')}`, icon: MessageSquare },
                { id: 'mail', label: 'Mail Direct', href: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
                { id: 'facebook', label: 'Facebook Connect', href: `https://facebook.com`, icon: Facebook },
                { id: 'portfolio', label: 'Live Portal', href: '#', icon: Globe },
              ].map((soc) => {
                const IconComp = soc.icon;
                return (
                  <a
                    key={soc.id}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-charcoal/50 border border-charcoal flex items-center justify-center text-soft-gray hover:text-deep-navy hover:bg-luxury-gold hover:border-luxury-gold hover:-translate-y-0.5 transition-all shadow-md group"
                    title={soc.label}
                    id={`footer-social-${soc.id}`}
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
            <p className="font-mono text-[9px] text-soft-gray/50 uppercase tracking-wider leading-relaxed pt-1.5">
              Available instantly on WhatsApp & Email.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Scroll To Top */}
        <div className="pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 font-sans text-xs text-soft-gray/60">
          
          <div className="text-center sm:text-left">
            <p>
              &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
            </p>
            <p className="text-[10px] text-soft-gray/40 mt-1 font-mono tracking-wider">
              PORTFOLIO: DIGITAL CRAFT // DESIGNED SECURE PK
            </p>
          </div>

          {/* Dynamic Scroll Up Trigger */}
          <button
            onClick={scrolltoTop}
            className="group flex items-center gap-2 px-4 py-2 bg-charcoal border border-charcoal rounded-xl hover:border-vibrant-orange/30 text-soft-gray hover:text-white transition-all cursor-pointer shadow-md text-[11px] uppercase tracking-wider font-semibold"
            aria-label="Scroll to top"
            id="scroll-to-top-footer"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>

      </div>
    </footer>
  );
}
