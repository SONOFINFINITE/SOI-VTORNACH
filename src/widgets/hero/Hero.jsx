import { motion, useMotionValue, animate } from 'motion/react';
import { ShieldCheck, CurrencyCircleDollar, ArrowRight } from '@phosphor-icons/react';
import { useEffect, useRef, useState } from 'react';
import { CONTACT_INFO } from '../../shared/constants';

function Counter({ value, suffix = "" }) {
  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.5,
      onUpdate: (latest) => {
        // Handle float for 1.8b case
        const formatted = value % 1 !== 0 
          ? latest.toFixed(1).replace('.', ',') 
          : Math.floor(latest).toLocaleString();
        setDisplayValue(formatted);
      }
    });
    return controls.stop;
  }, [count, value]);

  return <span>{displayValue}{suffix}</span>;
}

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] md:min-h-0 flex items-center pt-32 lg:pt-52 pb-8 overflow-hidden bg-white" id="hero">
      {/* Background with Image behind slanted line */}
      <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-zinc-50 -skew-x-12 translate-x-1/4 overflow-hidden border-l border-zinc-100">
          <img 
            src="/HEROBCKG.jpg" 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover skew-x-12 -translate-x-1/4 opacity-20 lg:opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent skew-x-12 -translate-x-1/4" />
        </div>
      </div>

      {/* Man Image - Only Desktop (XL+) */}
      <div className="hidden xl:block absolute bottom-0 right-[-15%] w-[70%] h-full pointer-events-none z-20">
        <motion.img 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          src="/MAN_FOR_HERO.png" 
          alt="Юрист" 
          className="absolute bottom-0 right-0 h-[130%] w-auto object-contain object-bottom drop-shadow-2xl"
        />
      </div>
      
      <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-zinc-900 leading-[0.95] mb-8">
              <span className="md:whitespace-nowrap">Законное <span className="text-accent italic font-medium">списание</span></span> <br />
              ваших долгов
            </h1>
            
            <div className="flex flex-col gap-10 items-center lg:items-start">
              <p className="text-lg text-zinc-500 leading-relaxed max-w-[460px]">
                Профессиональная помощь в банкротстве физических лиц. Мы берем на себя всю бумажную работу и защиту от коллекторов.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
                <a 
                  href={CONTACT_INFO.phone.link}
                  className="w-full sm:w-auto bg-accent hover:bg-zinc-900 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-accent/20 cursor-pointer"
                >
                  Бесплатная консультация
                  <ArrowRight size={20} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center gap-4 px-2 shrink-0">
                  <div className="flex -space-x-2">
                    {['client1.jpg', 'client2.jpg', 'client3.jpg'].map((img, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-100 overflow-hidden shadow-sm">
                        <img src={`/${img}`} alt="Client" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-zinc-400">3 200+ клиентов</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Creative Metrics Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-16 border border-zinc-100 rounded-[2.5rem] overflow-hidden bg-zinc-50/50 backdrop-blur-sm lg:max-w-xl"
          >
            <div className="p-8 border-b md:border-b-0 md:border-r border-zinc-100 hover:bg-accent transition-all duration-500 group">
              <div className="text-3xl font-black text-zinc-900 mb-2 tracking-tighter group-hover:text-white transition-colors">
                <Counter value={1500} suffix="+" />
              </div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold group-hover:text-white/80 transition-colors">Успешных дел</div>
            </div>
            <div className="p-8 border-b md:border-b-0 md:border-r border-zinc-100 hover:bg-accent transition-all duration-500 group">
              <div className="text-3xl font-black text-zinc-900 mb-2 tracking-tighter group-hover:text-white transition-colors">
                <Counter value={1.8} suffix=" млрд" />
              </div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold group-hover:text-white/80 transition-colors">Списано ₽</div>
            </div>
            <div className="p-8 hover:bg-accent transition-all duration-500 group">
              <div className="text-3xl font-black text-zinc-900 mb-2 tracking-tighter group-hover:text-white transition-colors">
                <Counter value={100} suffix="%" />
              </div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold group-hover:text-white/80 transition-colors">Гарантия</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


