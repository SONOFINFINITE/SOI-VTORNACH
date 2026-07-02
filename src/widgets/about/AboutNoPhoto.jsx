import { motion } from 'motion/react';
import { Medal, BookOpen, Handshake, TrendUp, ShieldCheck, ArrowRight } from '@phosphor-icons/react';
import { CONTACT_INFO } from '@/shared/constants';
import './AboutNoPhoto.css';

const STATS = [
  {
    value: '5+',
    unit: 'лет',
    label: 'на рынке юридических услуг',
    icon: Medal,
  },
  {
    value: '1 500+',
    unit: '',
    label: 'успешно завершенных процедур',
    icon: Handshake,
  },
  {
    value: '1,8',
    unit: 'млрд ₽',
    label: 'списано долгов клиентов',
    icon: TrendUp,
    accent: true,
  },
  {
    value: 'CLUB',
    unit: '127',
    label: 'резиденты элитного сообщества',
    icon: BookOpen,
  },
];

const PRINCIPLES = [
  {
    icon: ShieldCheck,
    title: 'Гарантия в договоре',
    text: 'Фиксируем ответственность за результат и прозрачную стоимость.',
  },
  {
    icon: ShieldCheck,
    title: 'Полная прозрачность',
    text: 'Мы не даем ложных обещаний, только юридические гарантии.',
  },
];

export function AboutNoPhoto() {
  return (
    <section className="pt-8 md:pt-8 lg:pt-8 pb-4 md:pb-4 lg:pb-4 bg-white text-zinc-900 overflow-hidden relative" id="about">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Editorial Header */}
        <div className="mb-8 md:mb-12 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left about-no-photo-header"
          >
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-accent/5 text-accent text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mb-4 md:mb-8 border border-accent/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              О компании
            </div>
            <h2 className="text-5xl md:text-[4.2rem] lg:text-8xl font-bold leading-[0.85] tracking-tighter mb-6 md:mb-10">
              ВАШ <span className="text-accent italic font-medium">НОВЫЙ</span> <br />
              СТАРТ
            </h2>
            <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-[540px] mx-auto lg:mx-0 lg:text-left">
              Мы создали «Второе Начало», чтобы превратить юридическую процедуру в осознанный шаг к свободе.
            </p>
          </motion.div>
        </div>

        {/* Asymmetric Bento Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5 mb-12 md:mb-16 lg:mb-20 about-no-photo-grid">
          {/* Stat 1: Wide tile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="sm:col-span-2 lg:col-span-5 rounded-4xl md:rounded-[2.5rem] bg-zinc-950 text-white p-8 md:p-10 lg:p-12 flex flex-col justify-between min-h-[220px] md:min-h-[260px] group hover:bg-zinc-900 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="flex items-center gap-3 mb-auto">
              <Medal size={28} weight="bold" className="text-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">{STATS[0].label}</span>
            </div>
            <div className="mt-6">
              <span className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">{STATS[0].value}</span>
              <span className="text-3xl md:text-4xl font-bold text-zinc-400 ml-2">{STATS[0].unit}</span>
            </div>
          </motion.div>

          {/* Stat 2: Regular tile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="lg:col-span-4 rounded-4xl md:rounded-[2.5rem] bg-zinc-50 border border-zinc-100 p-8 md:p-10 flex flex-col justify-between min-h-[220px] md:min-h-[260px] group hover:bg-white hover:shadow-xl transition-all"
          >
            <div className="flex items-center gap-3 mb-auto">
              <Handshake size={24} weight="bold" className="text-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">{STATS[1].label}</span>
            </div>
            <div className="mt-6">
              <span className="text-5xl md:text-6xl font-black tracking-tighter text-zinc-900 leading-none">{STATS[1].value}</span>
            </div>
          </motion.div>

          {/* Stat 3: Accent background tile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="lg:col-span-3 rounded-4xl md:rounded-[2.5rem] bg-accent text-white p-8 md:p-10 flex flex-col justify-between min-h-[220px] md:min-h-[260px] group hover:shadow-xl hover:shadow-accent/20 transition-all"
          >
            <div className="flex items-center gap-3 mb-auto">
              <TrendUp size={24} weight="bold" className="text-white/70" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">{STATS[2].label}</span>
            </div>
            <div className="mt-6">
              <span className="text-5xl md:text-6xl font-black tracking-tighter leading-none">{STATS[2].value}</span>
              <span className="text-2xl md:text-3xl font-bold text-white/70 ml-1">{STATS[2].unit}</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Text + Principles side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start about-no-photo-bottom">
          {/* Left: Mission text + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col h-full about-no-photo-bottom-left"
          >
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-6 text-center lg:text-left">
                Больше чем юристы
              </h3>
              <p className="text-lg md:text-xl text-zinc-500 leading-relaxed mb-10 text-center lg:text-left">
                В основе нашей работы лежит принцип полной прозрачности. Мы не даем ложных обещаний, мы даем юридические гарантии, закрепленные в договоре. В нашей компании работают только профильные специалисты с реальной судебной практикой, а не консультанты.
              </p>
            </div>

            {/* CTA block - Moved to Left */}
            <motion.a
              href={CONTACT_INFO.phone.link}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between p-6 md:p-8 rounded-3xl md:rounded-4xl bg-accent text-white hover:bg-zinc-900 transition-colors group cursor-pointer"
            >
              <div>
                <div className="font-bold text-lg md:text-xl mb-1">Бесплатная консультация</div>
                <div className="text-sm text-white/70">Узнайте, подходит ли вам процедура</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors shrink-0 ml-4">
                <ArrowRight size={24} weight="bold" />
              </div>
            </motion.a>
          </motion.div>

          {/* Right: Principle cards + CLUB 127 */}
          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-5 about-no-photo-bottom-right">
            {PRINCIPLES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-5 md:gap-6 p-6 md:p-8 rounded-4xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                  <item.icon size={24} className="md:w-7 md:h-7" weight="bold" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="font-bold text-lg md:text-xl text-zinc-900 mb-1.5">{item.title}</div>
                  <div className="text-sm md:text-base text-zinc-500 leading-relaxed">{item.text}</div>
                </div>
              </motion.div>
            ))}

            {/* CLUB 127 card - Styled as regular principle card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-5 md:gap-6 p-6 md:p-8 rounded-4xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white shadow-md flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all shrink-0">
                <BookOpen size={24} className="md:w-7 md:h-7" weight="bold" />
              </div>
              <div className="flex-1 pt-1">
                <div className="font-bold text-lg md:text-xl text-zinc-900 mb-1.5 tracking-tight">CLUB 127</div>
                <div className="text-sm md:text-base text-zinc-500 leading-relaxed">Резиденты элитного сообщества экспертов по банкротству</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
