import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { List, X, Phone, TelegramLogo, WhatsappLogo } from '@phosphor-icons/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CONTACT_INFO } from '../../shared/constants';
import './Header.css';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const NAV_ITEMS = [
  { label: 'О компании', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Этапы', href: '#steps' },
  { label: 'Партнерам', href: '#partners' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  return (
    <>
    <header 
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-300 border-b",
        (scrolled || menuOpen)
          ? "top-0 bg-white/80 backdrop-blur-md border-zinc-200 py-3" 
          : "top-0 lg:top-4 bg-transparent border-transparent py-5 lg:mx-6 lg:rounded-2xl"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 xl:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center group py-2">
          <img src="/LOGO.png" alt="Второе Начало" className="header-logo w-auto transition-transform group-hover:scale-105 h-16 md:h-20" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center header-nav">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative header-nav-link font-bold text-zinc-600 hover:text-accent transition-colors py-2 group/link whitespace-nowrap"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover/link:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3 xl:gap-6">
          <a 
            href={CONTACT_INFO.phone.link} 
            className="flex items-center gap-2 header-phone-text font-black text-zinc-900 hover:text-accent transition-colors whitespace-nowrap"
          >
            <Phone size={20} weight="fill" className="text-accent" />
            <span className="hidden xl:inline">{CONTACT_INFO.phone.display}</span>
            <span className="xl:hidden">{CONTACT_INFO.phone.displayShort}</span>
          </a>
          <a 
            href={CONTACT_INFO.phone.link}
            className="header-cta-btn bg-accent hover:bg-accent-hover text-white px-3 xl:px-6 py-2 xl:py-3 rounded-xl xl:rounded-2xl text-xs xl:text-base font-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-accent/20 cursor-pointer whitespace-nowrap"
          >
            Консультация
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          className="xl:hidden p-2 text-zinc-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          {menuOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 h-screen bg-black/20 backdrop-blur-sm xl:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 p-6 xl:hidden shadow-xl"
            >
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-zinc-900"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-zinc-100" />
              <a 
                href={CONTACT_INFO.phone.link} 
                className="flex items-center gap-3 text-lg font-bold text-zinc-900"
              >
                <Phone size={24} weight="fill" className="text-accent" />
                {CONTACT_INFO.phone.display}
              </a>
              <a 
                href={CONTACT_INFO.phone.link}
                className="w-full bg-accent text-white py-4 rounded-xl font-bold text-center cursor-pointer"
              >
                Бесплатная консультация
              </a>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>

    {/* Floating Widgets - Bottom Right */}
    <div className="fixed bottom-6 right-6 xl:bottom-8 xl:right-8 z-60 flex flex-col items-center gap-2 xl:gap-4 pointer-events-auto">
      <motion.a
        href={CONTACT_INFO.telegram}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-11 h-11 xl:w-16 xl:h-16 bg-[#26A5E4] text-white rounded-full shadow-xl shadow-[#26A5E4]/30"
      >
        <TelegramLogo weight="fill" className="w-5.5 h-5.5 xl:w-8 xl:h-8" />
      </motion.a>
      <motion.a
        href={CONTACT_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-11 h-11 xl:w-16 xl:h-16 bg-[#25D366] text-white rounded-full shadow-xl shadow-[#25D366]/30"
      >
        <WhatsappLogo weight="fill" className="w-5.5 h-5.5 xl:w-8 xl:h-8" />
      </motion.a>
      {/* Call Button - Mobile/Tablet only */}
      <motion.a
        href={CONTACT_INFO.phone.link}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="xl:hidden flex items-center justify-center w-11 h-11 bg-accent text-white rounded-full shadow-2xl shadow-accent/40 relative"
      >
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-accent rounded-full"
        />
        <Phone weight="fill" className="relative z-10 w-5.5 h-5.5" />
      </motion.a>
    </div>
    </>
  );
}
