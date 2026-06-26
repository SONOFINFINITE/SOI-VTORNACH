import { motion } from 'motion/react';
import { 
  UserCircle, 
  CreditCard, 
  HandCoins, 
  ShieldCheck, 
  HouseLine, 
  Briefcase 
} from '@phosphor-icons/react';

const SERVICES = [
  {
    icon: UserCircle,
    title: 'Банкротство физических лиц',
    description: 'Полное сопровождение процедуры — от подачи заявления до списания всех долгов.',
  },
  {
    icon: CreditCard,
    title: 'Списание кредитов',
    description: 'Избавление от задолженностей по банковским кредитам и кредитным картам.',
  },
  {
    icon: HandCoins,
    title: 'Списание микрозаймов',
    description: 'Освобождение от МФО, включая все накопленные проценты и штрафы.',
  },
  {
    icon: ShieldCheck,
    title: 'Защита от коллекторов',
    description: 'Юридическая защита с первого дня. Все звонки и давление переводим на себя.',
  },
  {
    icon: HouseLine,
    title: 'Долги ЖКХ и налоги',
    description: 'Помогаем законно списать задолженности перед налоговой и за коммунальные услуги.',
  },
  {
    icon: Briefcase,
    title: 'Банкротство ИП',
    description: 'Процедура для предпринимателей с сохранением имущества в рамках закона.',
  },
];

export function Services() {
  return (
    <section className="py-8 bg-white overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start mb-12 md:mb-24 text-center md:text-left">
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/5 text-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-4 md:mb-8 border border-accent/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Специализация
            </div>
            <h2 className="text-5xl md:text-[4.2rem] lg:text-8xl font-bold text-zinc-900 leading-[0.85] tracking-tighter mb-6 md:mb-8 lg:mb-0">
              Как мы можем <br />
              <span className="text-accent italic font-medium">помочь</span> вам
            </h2>
          </div>
          <div className="md:w-1/2 md:pt-16 lg:pt-12 flex justify-center md:justify-end">
            <p className="text-xl text-zinc-500 leading-relaxed max-w-md md:text-right">
              Мы специализируемся на банкротстве любой сложности, 
              обеспечивая полную правовую защиту и гарантированное списание долгов.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-12 md:gap-y-16">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0 p-5 md:p-0 rounded-3xl md:rounded-none bg-zinc-50 md:bg-transparent border border-zinc-100 md:border-none hover:bg-white md:hover:bg-transparent hover:shadow-2xl md:hover:shadow-none transition-all duration-500"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-3xl bg-white md:bg-zinc-50 shadow-md md:shadow-none flex items-center justify-center text-accent md:text-zinc-400 md:mb-8 group-hover:bg-accent group-hover:text-white transition-all duration-500 md:group-hover:-translate-y-2 shrink-0">
                <service.icon size={24} className="md:w-8 md:h-8" weight="bold" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg md:text-2xl font-bold text-zinc-900 mb-0.5 md:mb-4 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-lg text-zinc-500 leading-relaxed line-clamp-2 md:line-clamp-none">
                  {service.description}
                </p>
                <div className="hidden md:block mt-6 w-8 h-[2px] bg-zinc-100 group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
