import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  FileText, 
  Wallet, 
  UsersThree, 
  LockKey, 
  GlobeHemisphereWest 
} from '@phosphor-icons/react';

const ADVANTAGES = [
  {
    icon: ShieldCheck,
    title: 'Юридическая защита',
    description: 'Берём на себя все контакты с кредиторами и коллекторами с первого дня.',
    className: 'lg:col-span-2 lg:row-span-1'
  },
  {
    icon: FileText,
    title: 'Гарантия в договоре',
    description: 'Фиксируем ответственность за результат и прозрачную стоимость.',
    className: 'lg:col-span-1 lg:row-span-1'
  },
  {
    icon: Wallet,
    title: 'Рассрочка оплаты',
    description: 'Удобная система оплаты от 10 000 рублей в месяц.',
    className: 'lg:col-span-1 lg:row-span-1'
  },
  {
    icon: UsersThree,
    title: 'Опытные юристы',
    description: 'Только профильные специалисты с реальной судебной практикой.',
    className: 'lg:col-span-2 lg:row-span-1'
  },
  {
    icon: LockKey,
    title: 'Сохранение имущества',
    description: 'Разрабатываем стратегию для защиты вашего имущества по закону.',
    className: 'lg:col-span-1 lg:row-span-1'
  },
  {
    icon: GlobeHemisphereWest,
    title: 'Вся Россия',
    description: 'Дистанционное сопровождение в любом городе страны.',
    className: 'lg:col-span-2 lg:row-span-1'
  }
];

export function Advantages() {
  return (
    <section className="py-8 bg-white overflow-hidden" id="advantages">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start mb-12 md:mb-24 text-center md:text-left">
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/5 text-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-4 md:mb-8 border border-accent/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Надежность
            </div>
            <h2 className="text-5xl md:text-[4.2rem] lg:text-8xl font-bold text-zinc-900 leading-[0.85] tracking-tighter mb-6 md:mb-0">
              Почему нам <br />
              <span className="text-accent italic font-medium">доверяют</span>
            </h2>
          </div>
          <div className="md:w-1/2 md:pt-16 lg:pt-12 flex justify-center md:justify-end">
            <p className="text-xl text-zinc-500 leading-relaxed max-w-md md:text-right">
              Мы не просто списываем долги — мы создаем условия для вашего нового старта.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {ADVANTAGES.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-5 md:p-8 lg:p-10 rounded-3xl md:rounded-[3rem] bg-zinc-50 border border-zinc-100 flex flex-row md:flex-col gap-4 md:gap-6 lg:gap-10 items-center md:items-start hover:bg-white hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-700"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-xl md:rounded-2xl lg:rounded-3xl bg-white shadow-xl shadow-black/5 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shrink-0">
                <item.icon size={24} className="md:w-8 md:h-8 lg:w-10 lg:h-10" weight="bold" />
              </div>
              <div className="flex-1 pr-0 md:pr-4">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-zinc-900 mb-0.5 md:mb-2 lg:mb-4 group-hover:text-accent transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-zinc-500 leading-relaxed line-clamp-2 md:line-clamp-none">
                  {item.description}
                </p>
              </div>
              <div className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 text-zinc-200 font-black text-lg md:text-2xl lg:text-4xl group-hover:text-accent/10 transition-colors select-none opacity-50 lg:opacity-100">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Stat Banner */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-zinc-900 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-accent/10 -skew-x-12 translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <div className="text-5xl md:text-7xl font-black tracking-tighter text-accent leading-none">
                1.5к+
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold mb-2">Успешных кейсов</h3>
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-sm">
                  За каждым делом — человек, который вернул себе финансовую независимость.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-accent text-white flex flex-col md:flex-row lg:flex-col justify-center items-center text-center md:text-left lg:text-center gap-6 md:gap-12 lg:gap-0 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-white/10 -skew-x-12 -translate-x-1/2" />
            <div className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none">
              100%
            </div>
            <div className="relative z-10">
              <div className="text-xs uppercase tracking-widest font-bold opacity-60 mb-1">Гарантия результата</div>
              <div className="text-sm font-medium opacity-80">Закреплено в договоре</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
