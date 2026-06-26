import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { List, X, Phone } from '@phosphor-icons/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { CONTACT_INFO } from '../../shared/constants';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const NAV_ITEMS = [
  { label: 'О компании', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Этапы', href: '#steps' },
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
          <img src="/LOGO.png" alt="Второе Начало" className="h-20 md:h-22 xl:h-24 w-auto transition-transform group-hover:scale-105" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm xl:text-lg font-bold text-zinc-600 hover:text-accent transition-colors py-2 group/link"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover/link:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 xl:gap-8">
          <a 
            href={CONTACT_INFO.phone.link} 
            className="flex items-center gap-2 text-base xl:text-xl font-black text-zinc-900 hover:text-accent transition-colors"
          >
            <Phone size={22} weight="fill" className="text-accent" />
            <span className="hidden xl:inline">{CONTACT_INFO.phone.display}</span>
            <span className="xl:hidden">{CONTACT_INFO.phone.displayShort}</span>
          </a>
          <a 
            href={CONTACT_INFO.phone.link}
            className="bg-accent hover:bg-accent-hover text-white px-4 xl:px-7 py-2.5 xl:py-3.5 rounded-full text-sm xl:text-lg font-black transition-all hover:scale-105 active:scale-95 shadow-xl shadow-accent/20 cursor-pointer"
          >
            Консультация
          </a>
        </div>

        {/* Mobile Burger */}
        <button
          className="lg:hidden p-2 text-zinc-900"
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
              className="absolute top-full left-0 right-0 h-screen bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 p-6 lg:hidden shadow-xl"
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

    {/* Floating Call Button for Mobile - Outside header for stable fixed positioning */}
    <div className="fixed bottom-6 right-6 z-[60] lg:hidden pointer-events-auto">
      <motion.a
        href={CONTACT_INFO.phone.link}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-accent text-white rounded-full shadow-2xl shadow-accent/40 relative"
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
        <Phone size={28} weight="fill" className="relative z-10" />
      </motion.a>
    </div>
    </>
  );
}
