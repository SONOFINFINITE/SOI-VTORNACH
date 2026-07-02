import { motion, useMotionValue, animate } from 'motion/react';
import { Handshake, CurrencyCircleDollar, ChartLineUp, ShieldCheck, ArrowUpRight, Globe, Users, Wallet } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { CONTACT_INFO } from '../../shared/constants';
import './PartnerProgram.css';

function Counter({ value, suffix = "" }) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.5,
      onUpdate: (latest) => {
        const formatted = Math.floor(latest).toLocaleString();
        setDisplayValue(formatted);
      }
    });
    return controls.stop;
  }, [count, value]);

  return <span>{displayValue}{suffix}</span>;
}

export function PartnerProgram() {
  return (
    <section className="py-6 md:py-8 lg:py-10 bg-white overflow-hidden relative" id="partners">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="container-custom relative z-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch partner-program-grid">
          
          {/* Left: Header Section + Stats */}
          <div className="lg:col-span-5 flex flex-col partner-program-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 lg:mb-4 text-center lg:text-left partner-program-header"
            >
              <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-accent/5 text-accent text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mb-4 md:mb-8 border border-accent/10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Партнерская программа
              </div>
              
              <h2 className="text-5xl md:text-[4.2rem] lg:text-8xl font-bold leading-[0.85] tracking-tighter mb-6 text-zinc-900">
                ВАШ <span className="text-accent italic font-medium">РОСТ</span> <br /> 
                С НАМИ
              </h2>
              
              <p className="text-xl text-zinc-500 leading-relaxed max-w-md mx-auto lg:mx-0">
                Мы создаем крупнейшую в стране сеть профессиональных партнеров. Объединяем экспертизу для достижения общих целей.
              </p>
            </motion.div>

            {/* Stats Block - Horizontal on tablet, Vertical on PC */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-6 md:p-8 lg:p-10 rounded-3xl md:rounded-[2.5rem] border border-zinc-100 bg-white shadow-sm flex flex-col sm:flex-row lg:flex-col justify-between items-center lg:items-stretch grow gap-8 md:gap-10 lg:gap-8 partner-program-stats"
            >
              <div className="flex flex-col sm:flex-row lg:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 partner-program-stat-item group cursor-default">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-zinc-50 flex items-center justify-center shrink-0 group-hover:bg-accent/5 transition-colors">
                  <Users size={20} className="md:w-6 md:h-6 text-zinc-400 group-hover:text-accent transition-colors" weight="duotone" />
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tighter group-hover:text-accent transition-colors">
                    <Counter value={200} suffix="+" />
                  </div>
                  <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-accent/60 transition-colors">Партнеров</div>
                </div>
              </div>
              
              <div className="bg-zinc-100 w-full h-px sm:w-px sm:h-12 lg:w-full lg:h-px sm:hidden lg:block" />
              
              <div className="flex flex-col sm:flex-row lg:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 partner-program-stat-item group cursor-default">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-zinc-50 flex items-center justify-center shrink-0 group-hover:bg-accent/5 transition-colors">
                  <Globe size={20} className="md:w-6 md:h-6 text-zinc-400 group-hover:text-accent transition-colors" weight="duotone" />
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tighter group-hover:text-accent transition-colors">
                    <Counter value={85} />
                  </div>
                  <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-accent/60 transition-colors">Регионов</div>
                </div>
              </div>

              <div className="bg-zinc-100 w-full h-px sm:w-px sm:h-12 lg:w-full lg:h-px sm:hidden lg:block" />

              <div className="flex flex-col sm:flex-row lg:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 partner-program-stat-item group cursor-default">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-zinc-50 flex items-center justify-center shrink-0 group-hover:bg-accent/5 transition-colors">
                  <Wallet size={20} className="md:w-6 md:h-6 text-zinc-400 group-hover:text-accent transition-colors" weight="duotone" />
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-zinc-900 tracking-tighter group-hover:text-accent transition-colors">
                    <Counter value={45} suffix=" млн ₽" />
                  </div>
                  <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-accent/60 transition-colors">Выплат</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Bento Grid Content Section */}
          <div className="lg:col-span-7 space-y-6 lg:pt-[44px] partner-program-right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              
              {/* Income Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:border-accent/20 transition-colors flex flex-col justify-between h-full text-center lg:text-left partner-program-cards"
              >
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                      <CurrencyCircleDollar size={20} className="md:w-6 md:h-6 text-accent" weight="duotone" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">Высокий доход</h4>
                  </div>
                  <p className="text-zinc-500 text-base md:text-lg leading-relaxed">Получайте достойную оплату за каждую успешную рекомендацию клиента.</p>
                </div>
              </motion.div>

              {/* Scale Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:border-accent/20 transition-colors flex flex-col justify-between h-full text-center lg:text-left partner-program-cards"
              >
                <div>
                  <div className="flex items-center justify-center lg:justify-start gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0">
                      <ChartLineUp size={20} className="md:w-6 md:h-6 text-accent" weight="duotone" />
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">Масштаб работы</h4>
                  </div>
                  <p className="text-zinc-500 text-base md:text-lg leading-relaxed">Более 1500 процедур и 1.8 млрд ₽ списанных долгов по всей стране.</p>
                </div>
              </motion.div>

              {/* Guarantees Wide Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="sm:col-span-2 relative p-6 md:p-10 lg:p-14 rounded-4xl md:rounded-[3rem] bg-zinc-900 text-white overflow-hidden group min-h-[240px] md:min-h-[320px] flex items-center"
              >
                <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-10 items-center w-full text-center lg:text-left partner-program-cards">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-white/10 text-white/70 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-4 md:mb-6">
                      Надежность и гарантии
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 md:mb-5">Безопасное сотрудничество</h3>
                    <p className="text-zinc-400 text-sm md:text-base lg:text-lg leading-relaxed">
                      Мы берем на себя всю юридическую ответственность и гарантируем профессиональный подход к каждому делу.
                    </p>
                  </div>
                  <div className="relative flex items-center justify-center mt-6 md:mt-0">
                    <div className="absolute inset-0 bg-accent/20 blur-[60px] md:blur-[100px] rounded-full animate-pulse" />
                    <ShieldCheck size={80} className="md:w-[100px] md:h-[100px] lg:w-[140px] lg:h-[140px] text-accent relative z-10 opacity-90" weight="duotone" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Repositioned CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 lg:mt-12 flex flex-col lg:flex-row items-center justify-between p-6 md:p-8 lg:p-10 rounded-4xl md:rounded-[3rem] bg-accent text-white shadow-2xl shadow-accent/20 relative overflow-hidden group partner-program-cta"
        >
          <div className="relative z-10 mb-6 lg:mb-0 w-full lg:w-auto partner-program-cta-text">
            <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mb-2 text-center lg:text-left">Ваша выгода при сотрудничестве</div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter text-center lg:text-left">
              до <Counter value={30000} /> ₽ <span className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-60 font-medium ml-1 md:ml-2 tracking-normal">за клиента</span>
            </div>
          </div>
          
          <a 
            href={CONTACT_INFO.phone.link}
            className="relative z-10 flex items-center gap-3 px-6 md:px-10 py-4 md:py-5 bg-white text-accent rounded-xl md:rounded-2xl font-bold uppercase text-xs md:text-sm tracking-widest hover:gap-5 transition-all cursor-pointer shadow-xl active:scale-95 w-full lg:w-auto justify-center partner-program-cta-btn"
          >
            Стать партнером <ArrowUpRight weight="bold" />
          </a>

          <Handshake 
            size={100} 
            className="md:w-[140px] md:h-[140px] lg:w-[180px] lg:h-[180px] absolute -bottom-5 md:-bottom-10 -right-5 md:-right-10 text-white/10 -rotate-12 transition-transform group-hover:rotate-0 duration-700 pointer-events-none" 
            weight="duotone" 
          />
        </motion.div>
      </div>
    </section>
  );
}
