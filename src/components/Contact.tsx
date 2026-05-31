import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, Check, Clock, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // Load message logs from localStorage to mock direct submission records
  const [feedbackRecords, setFeedbackRecords] = useState<any[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('usama_contact_messages');
      if (stored) {
        setFeedbackRecords(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage('Please fill in all layout fields to continue.');
      return;
    }

    // Basic email assessment
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address configuration.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate reliable api delay
    setTimeout(() => {
      const newMessage = {
        id: Math.random().toString(),
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toLocaleString(),
      };

      try {
        const currentLogs = [...feedbackRecords, newMessage];
        localStorage.setItem('usama_contact_messages', JSON.stringify(currentLogs));
        setFeedbackRecords(currentLogs);
      } catch (err) {
        console.error(err);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className="py-24 bg-deep-navy relative overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-vibrant-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-luxury-gold uppercase tracking-[0.2em] font-bold block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-white tracking-tight">
            Start A <span className="text-transparent bg-gradient-to-r from-luxury-gold via-vibrant-orange to-luxury-gold bg-clip-text">Project</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-luxury-gold to-vibrant-orange mt-4 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Office Connect details */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-sans font-extrabold text-2xl text-white">
                Contact Info
              </h3>
              <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed">
                Have a beautiful design project or documentation assignment? Connect with me directly via phone, corporate email, or submit the contact form. I return responses within 24 hours.
              </p>

              {/* Direct clickable indicators */}
              <div className="space-y-4 pt-4">
                
                {/* Phone number */}
                <div className="flex items-center gap-4 bg-charcoal/40 p-4 border border-charcoal group rounded-2xl hover:border-luxury-gold/20 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-deep-navy flex items-center justify-center text-luxury-gold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="block font-mono text-[9px] text-soft-gray/60 uppercase font-bold">Phone Number</span>
                    <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="font-sans font-bold text-sm sm:text-base text-white hover:text-luxury-gold transition-colors mt-0.5 block">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="font-mono text-[10px] text-soft-gray hover:text-luxury-gold px-2.5 py-1 bg-deep-navy border border-charcoal rounded-lg cursor-pointer"
                    id="copy-phone-btn"
                  >
                    {copiedField === 'phone' ? 'Copied' : 'Copy'}
                  </button>
                </div>

                {/* Corporate Email */}
                <div className="flex items-center gap-4 bg-charcoal/40 p-4 border border-charcoal group rounded-2xl hover:border-luxury-gold/20 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-deep-navy flex items-center justify-center text-luxury-gold shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <span className="block font-mono text-[9px] text-soft-gray/60 uppercase font-bold font-sans">Business Email</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="font-sans font-bold text-xs sm:text-sm text-white hover:text-luxury-gold transition-colors mt-0.5 block truncate">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="font-mono text-[10px] text-soft-gray hover:text-luxury-gold px-2.5 py-1 bg-deep-navy border border-charcoal rounded-lg cursor-pointer"
                    id="copy-email-btn"
                  >
                    {copiedField === 'email' ? 'Copied' : 'Copy'}
                  </button>
                </div>

                {/* Country Location */}
                <div className="flex items-center gap-4 bg-charcoal/40 p-4 border border-charcoal group rounded-2xl hover:border-luxury-gold/20 transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-deep-navy flex items-center justify-center text-luxury-gold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="block font-sans font-mono text-[9px] text-soft-gray/60 uppercase font-bold">Office Location</span>
                    <span className="font-sans font-bold text-sm text-white mt-0.5 block">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Response speed metrics */}
            <div className="bg-charcoal/20 p-4 rounded-2xl border border-charcoal/80 text-xs text-soft-gray space-y-2 max-w-sm">
              <div className="flex items-center gap-1.5 font-sans font-semibold text-neutral-400">
                <Clock className="w-3.5 h-3.5 text-luxury-gold" />
                <span>Working Hours Timeline</span>
              </div>
              <p className="font-sans text-[11px] leading-relaxed font-normal">
                Monday – Saturday: 09:00 AM – 10:00 PM (GMT+5)<br />
                Available on WhatsApp and digital chat clients constantly.
              </p>
            </div>
          </div>

          {/* Right Column: Dynamic submission mail box form */}
          <div className="lg:col-span-7 bg-charcoal/30 border border-charcoal rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-sm self-stretch flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  id="contact-submission-form"
                >
                  <div className="space-y-1">
                    <h4 className="font-sans font-bold text-lg text-white">
                      Send a Message
                    </h4>
                    <p className="font-sans text-xs text-neutral-400">
                      Share your creative brief or file operations checklist below.
                    </p>
                  </div>

                  {/* Validation Error reporting block */}
                  {errorMessage && (
                    <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-xl flex items-center gap-2 font-sans" id="validation-error">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name grid item */}
                  <div className="space-y-2">
                    <label htmlFor="name-input" className="font-sans text-xs font-semibold text-neutral-400 block">
                      Your Full Name *
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Salim Ahmed"
                      disabled={isSubmitting}
                      className="w-full bg-deep-navy border border-charcoal focus:border-luxury-gold/60 rounded-xl px-4 py-3.5 text-xs text-neutral-200 focus:outline-none focus:ring-1 focus:ring-luxury-gold transition-all font-sans"
                      required
                    />
                  </div>

                  {/* Email grid item */}
                  <div className="space-y-2">
                    <label htmlFor="email-input" className="font-sans text-xs font-semibold text-neutral-400 block">
                      Your Email Address *
                    </label>
                    <input
                      id="email-input"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. salim@example.com"
                      disabled={isSubmitting}
                      className="w-full bg-deep-navy border border-charcoal focus:border-luxury-gold/60 rounded-xl px-4 py-3.5 text-xs text-neutral-200 focus:outline-none focus:ring-1 focus:ring-luxury-gold transition-all font-sans"
                      required
                    />
                  </div>

                  {/* Message grid item */}
                  <div className="space-y-2">
                    <label htmlFor="message-input" className="font-sans text-xs font-semibold text-neutral-400 block">
                      Message / Design Requirements *
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Describe your design specifications or ledger administrative load..."
                      disabled={isSubmitting}
                      className="w-full bg-deep-navy border border-charcoal focus:border-luxury-gold/60 rounded-xl px-4 py-3.5 text-xs text-neutral-200 focus:outline-none focus:ring-1 focus:ring-luxury-gold transition-all font-sans resize-none"
                      required
                    />
                  </div>

                  {/* Custom hire check elements / submit actions */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="submit-message-btn"
                      className="flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-vibrant-orange hover:bg-vibrant-orange/90 text-white font-sans text-xs font-extrabold uppercase tracking-wider rounded-xl cursor-pointer disabled:opacity-50 hover:shadow-lg hover:shadow-vibrant-orange/20 active:scale-98 transition-all shadow-md"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-dashed border-white rounded-full animate-spin" />
                           Analyzing Layout...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      id="form-hire-me-secondary-btn"
                      onClick={() => {
                        window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Hiring%20Proposal%20for%20Usama`;
                      }}
                      className="py-4 px-6 bg-deep-navy border border-charcoal text-soft-gray hover:text-white font-sans text-xs font-bold uppercase tracking-wider rounded-xl cursor-pointer hover:bg-charcoal hover:border-luxury-gold/30 hover:text-luxury-gold"
                    >
                      Hire Me Now
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="submission-success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 space-y-6 flex flex-col items-center"
                  id="form-success-card"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center animate-bounce shadow-inner">
                    <Check className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-sans font-extrabold text-2xl text-white">
                      Message Dispatched!
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed">
                      Thank you for connecting. Your message has been filed successfully inside Usama Yaqoob's local log. I will reply back to your email very soon!
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-deep-navy border border-charcoal hover:border-luxury-gold/30 text-soft-gray hover:text-white font-sans text-xs uppercase font-semibold rounded-xl cursor-pointer transition-colors"
                    id="submit-another-btn"
                  >
                    Submit Another Details
                  </button>

                  {/* Submitted messages visual debugger log inside memory */}
                  {feedbackRecords.length > 0 && (
                    <div className="w-full border-t border-charcoal pt-6 mt-4 text-left space-y-3">
                      <span className="font-mono text-soft-gray/50 text-[9px] uppercase tracking-widest block font-bold text-center">
                        Active Messaging Logs (Stored Locally for Demo)
                      </span>
                      <div className="max-h-32 overflow-y-auto space-y-2.5 pr-1.5">
                        {feedbackRecords.map((rec) => (
                          <div key={rec.id} className="bg-deep-navy/80 p-3 rounded-lg border border-charcoal flex justify-between gap-4 text-[10px] items-start">
                            <div className="space-y-1 overflow-hidden">
                              <span className="font-sans text-white font-semibold flex items-center gap-1.5">
                                <Check className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
                                {rec.name} ({rec.email})
                              </span>
                              <p className="font-sans text-soft-gray line-clamp-2 italic leading-normal">
                                "{rec.message}"
                              </p>
                            </div>
                            <span className="font-mono text-[9px] text-soft-gray/60 shrink-0 whitespace-nowrap pt-0.5">
                              {rec.timestamp}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
