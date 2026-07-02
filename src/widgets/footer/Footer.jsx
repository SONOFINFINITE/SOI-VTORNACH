import { TelegramLogo, WhatsappLogo, Phone, EnvelopeSimple, MapPin } from '@phosphor-icons/react';
import { CONTACT_INFO, COMPANY_INFO } from '../../shared/constants';

const NAV_ITEMS = [
  { label: 'О компании', href: '#about' },
  { label: 'Услуги', href: '#services' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Этапы', href: '#steps' },
  { label: 'Партнерам', href: '#partners' },
  { label: 'FAQ', href: '#faq' },
];

export function Footer() {
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
  };

  return (
    <footer className="bg-white text-zinc-500 pt-12 pb-4 md:pt-20 md:pb-8 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12 gap-12 xl:gap-16 mb-16 md:mb-24">
          
          {/* Brand Section */}
          <div className="md:col-span-6 xl:col-span-5">
            <div className="mb-8 md:mb-10 flex flex-col items-center xl:items-start text-center xl:text-left">
              <img src="/LOGO.png" alt="Второе Начало" className="h-20 md:h-24 w-auto mb-6" />
              <p className="text-sm leading-relaxed max-w-[320px] text-zinc-400 mx-auto xl:mx-0">
                Профессиональная юридическая помощь в списании долгов и банкротстве физических лиц. Работаем на результат с 2018 года.
              </p>
            </div>
            <div className="flex items-center justify-center xl:justify-start gap-6">
              <a href={CONTACT_INFO.telegram} className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-accent hover:text-white transition-colors">
                <TelegramLogo size={24} weight="fill" />
              </a>
              <a href={CONTACT_INFO.whatsapp} className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 hover:bg-accent hover:text-white transition-colors">
                <WhatsappLogo size={24} weight="fill" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 xl:col-span-3">
            <div className="text-base md:text-lg font-black text-accent uppercase tracking-[0.2em] mb-6 md:mb-8">
              Навигация
            </div>
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-bold text-zinc-500 hover:text-accent transition-colors"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div className="md:col-span-3 xl:col-span-4">
            <div className="text-base md:text-lg font-black text-accent uppercase tracking-[0.2em] mb-6 md:mb-8">
              Контакты
            </div>
            <div className="flex flex-col gap-5 md:gap-6">
              <a href={CONTACT_INFO.phone.link} className="group flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Phone size={18} weight="fill" />
                </div>
                <div className="text-sm font-bold text-zinc-500 group-hover:text-accent transition-colors">{CONTACT_INFO.phone.display}</div>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="group flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <EnvelopeSimple size={18} weight="fill" />
                </div>
                <div className="text-sm font-bold text-zinc-500 group-hover:text-accent transition-colors">{CONTACT_INFO.email}</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Company Legal Info */}
      <div className="max-w-7xl mx-auto px-6 border-t border-zinc-100 pt-6 pb-2 md:pt-8 md:pb-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
          <span>{COMPANY_INFO.name}</span>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
            <span>ИНН {COMPANY_INFO.inn}</span>
            <span>ОГРН {COMPANY_INFO.ogrn}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
