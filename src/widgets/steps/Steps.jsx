import { motion } from 'motion/react';
import { CONTACT_INFO } from '../../shared/constants';
import { 
  MagnifyingGlass, 
  FileText, 
  Gavel, 
  ShieldCheck, 
  CheckCircle,
  ArrowRight
} from '@phosphor-icons/react';

const STEPS_DATA = [
  {
    icon: MagnifyingGlass,
    title: 'Анализ вашей ситуации',
    description: 'Проводим бесплатную консультацию, изучаем ситуацию и определяем стратегию списания долгов.',
  },
  {
    icon: FileText,
    title: 'Подготовка документов',
    description: 'Собираем полный пакет документов для подачи в суд. Вся бумажная работа — на наших юристах.',
  },
  {
    icon: Gavel,
    title: 'Подача заявления в суд',
    description: 'Подаём заявление и представляем ваши интересы в суде по доверенности без вашего участия.',
  },
  {
    icon: ShieldCheck,
    title: 'Процедура банкротства',
    description: 'Суд признаёт вас банкротом, управляющий ведёт процедуру под строгим нашим контролем.',
  },
  {
    icon: CheckCircle,
    title: 'Освобождение от долгов',
    description: 'Суд выносит определение об освобождении. Вы начинаете новую жизнь с чистого листа.',
  },
];

export function Steps() {
  return (
    <section className="py-8 bg-zinc-50 overflow-hidden" id="steps">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start mb-12 md:mb-24 text-center md:text-left">
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/5 text-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-6 md:mb-8 border border-accent/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Ваш путь к свободе
            </div>
            <h2 className="text-5xl md:text-[4.2rem] lg:text-7xl font-bold text-zinc-900 leading-[0.85] tracking-tighter">
              Пять шагов к <br />
              <span className="text-accent italic font-medium">результату</span>
            </h2>
          </div>
          <div className="md:w-1/2 md:pt-16 lg:pt-12 flex justify-center md:justify-end">
            <p className="text-xl text-zinc-500 leading-relaxed max-w-md md:text-right">
              Мы разработали четкий алгоритм действий, который позволяет списывать долги максимально быстро и комфортно для вас.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Central Path Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-200 hidden md:block -translate-x-1/2" />

          <div className="space-y-32 relative">
            {STEPS_DATA.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Side */}
                <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:pr-24 md:text-right' : 'md:pl-24 md:text-left'}`}>
                  <div className="relative inline-block">
                    <span className="text-[120px] font-black text-zinc-100 absolute -top-16 -left-8 md:-left-auto md:-right-8 select-none leading-none z-0">
                      0{index + 1}
                    </span>
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-accent mb-6 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                        <step.icon size={28} weight="bold" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">{step.title}</h3>
                      <p className="text-zinc-500 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Node (removed blue dot styling) */}
                <div className="relative z-20 shrink-0 hidden md:block">
                  <div className="w-3 h-3 rounded-full bg-zinc-200 border-2 border-white" />
                </div>

                {/* Empty Side (for zigzag) */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>

          {/* Final Call to Action inside steps */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-8 md:mt-32 pt-8 md:pt-32 border-t border-zinc-200 text-center relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-50 px-8 py-2 text-zinc-400 font-bold text-xs uppercase tracking-widest">
              Финал
            </div>
            <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8">Готовы начать новую главу?</h3>
            <a 
              href={CONTACT_INFO.phone.link}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 md:gap-3 bg-accent hover:bg-zinc-900 text-white px-6 md:px-10 py-4 md:py-5 rounded-full font-bold text-[15px] md:text-lg transition-all group shadow-2xl shadow-accent/20 whitespace-nowrap cursor-pointer"
            >
              Бесплатная консультация
              <ArrowRight size={20} weight="bold" className="group-hover:translate-x-2 transition-transform shrink-0" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
