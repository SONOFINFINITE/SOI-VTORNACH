import { motion } from 'motion/react';
import { Medal, BookOpen, Handshake, TrendUp, ShieldCheck } from '@phosphor-icons/react';

const FEATURES = [
  {
    icon: Medal,
    title: '5+ лет на рынке',
    description: 'Богатый опыт в самых сложных юридических ситуациях.'
  },
  {
    icon: BookOpen,
    title: 'CLUB 127',
    description: 'Резиденты элитного сообщества экспертов по банкротству.'
  },
  {
    icon: Handshake,
    title: '1 500+ процедур',
    description: 'Доверие тысяч клиентов, вернувших себе свободу.'
  },
  {
    icon: TrendUp,
    title: '1.8 млрд ₽',
    description: 'Общая сумма списанных долгов наших клиентов.'
  }
];

export function About() {
  return (
    <section className="pt-20 md:pt-16 lg:pt-8 pb-12 md:pb-0 lg:pb-16 bg-white text-zinc-900 overflow-hidden relative" id="about">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top: Massive Editorial Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-12 text-center lg:text-left"
          >
            <div className="max-w-4xl flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/5 text-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-4 md:mb-8 border border-accent/10">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                О компании
              </div>
              <h2 className="text-5xl md:text-[4.2rem] lg:text-8xl font-bold leading-[0.85] tracking-tighter mb-0">
                ВАШ <span className="text-accent italic font-medium">НОВЫЙ</span> <br />
                СТАРТ
              </h2>
            </div>
            <div className="lg:w-1/3 lg:pt-16 flex justify-center lg:justify-end">
              <p className="text-xl text-zinc-500 leading-relaxed font-medium lg:text-right">
                Мы создали «Второе Начало», чтобы превратить юридическую процедуру в осознанный шаг к свободе.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Middle: Split Layout with Large Asset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative group flex"
          >
            <div className="w-full aspect-[3/4] lg:aspect-auto rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-zinc-100 border border-zinc-100 relative shadow-2xl flex-1">
              <img 
                src="/ACMAN.png" 
                alt="Василий Черепанов — Основатель компании" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80" />
              
              {/* Overlay Label: Founder Info */}
              <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-auto flex flex-col lg:flex-row items-center gap-3 lg:gap-4 text-center lg:text-left">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-accent flex items-center justify-center text-white shadow-xl shrink-0 font-black text-xs lg:text-sm tracking-tighter">
                  CEO
                </div>
                <div>
                  <div className="text-lg lg:text-xl font-bold tracking-tight text-white">Василий Черепанов</div>
                  <div className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-white/70">Основатель компании</div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col justify-between self-stretch lg:pt-12">
            <div className="space-y-6 md:space-y-10">
              <h3 className="text-3xl mb-4 md:text-4xl font-bold tracking-tight text-zinc-900 text-center lg:text-left">Больше чем юристы</h3>
              <p className="text-lg mb-4 md:text-xl text-zinc-500 leading-relaxed text-center lg:text-left">
                В основе нашей работы лежит принцип полной прозрачности. Мы не даем ложных обещаний, мы даем юридические гарантии, закрепленные в договоре.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:gap-8 mt-10 md:mt-12 lg:mt-0">
              {FEATURES.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-row items-center gap-4 md:gap-8 p-5 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-2xl transition-all group relative overflow-hidden"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white shadow-md flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                    <item.icon size={24} className="md:w-8 md:h-8" weight="bold" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg md:text-2xl text-zinc-900 mb-0.5 md:mb-1">{item.title}</div>
                    <div className="text-sm md:text-base text-zinc-500 line-clamp-2 md:line-clamp-none">{item.description}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
