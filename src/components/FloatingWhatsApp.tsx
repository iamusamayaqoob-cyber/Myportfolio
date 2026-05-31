import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after 3 seconds of load for elegance
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = "https://wa.me/923079989925?text=Hello%20Usama,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20hire%20you%20for%20a%20project!";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 50 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
          id="floating-whatsapp-container"
        >
          {/* Pulsing Backlit Glow */}
          <div className="absolute inset-0 bg-[#25D366]/25 rounded-full blur-xl animate-pulse-slow pointer-events-none" />

          {/* Interactive Tooltip Banner */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                className="absolute right-16 bottom-2 bg-charcoal border border-charcoal text-white px-4 py-2 rounded-2xl shadow-2xl flex flex-col pointer-events-none whitespace-nowrap min-w-[200px]"
                id="floating-whatsapp-tooltip"
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-[#25D366] rounded-full animate-ping" />
                  <span className="font-sans font-bold text-xs tracking-wide">Usama Yaqoob</span>
                </div>
                <span className="font-sans text-[11px] text-soft-gray font-normal leading-normal mt-0.5">
                  Available instantly on WhatsApp
                </span>
                {/* Arrow Accent */}
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 w-3 bg-charcoal border-t border-r border-charcoal rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Core Green WhatsApp Circular Trigger */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white hover:bg-[#20ba5a] rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.35)] transition-all active:scale-95 duration-300 group cursor-pointer"
            aria-label="Chat on WhatsApp"
            id="floating-whatsapp-button"
          >
            {/* Online Green Indicator Circle */}
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-yellow-400 border-2 border-white dark:border-charcoal rounded-full z-10" />

            {/* Inner Chat Icon */}
            <MessageCircle className="w-7 h-7 stroke-[2] fill-transparent group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
