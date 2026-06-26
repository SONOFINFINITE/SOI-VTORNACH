import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from '@phosphor-icons/react';

const FAQ_DATA = [
  {
    question: 'Можно ли оформлять имущество на себя после банкротства?',
    answer: 'Да, после завершения процедуры вы сможете приобретать и распоряжаться имуществом без ограничений.',
  },
  {
    question: 'Смогу ли я выезжать за границу после процедуры?',
    answer: 'После завершения банкротства нет причин для запрета выезда. Вы можете свободно путешествовать.',
  },
  {
    question: 'Можно ли открыть ИП после банкротства?',
    answer: 'Да, после завершения процедуры физического лица вы имеете право зарегистрировать ИП.',
  },
  {
    question: 'Можно ли подать на банкротство при трудоустройстве?',
    answer: 'Да, работа не является препятствием. Однако каждая ситуация требует профессиональной оценки.',
  },
  {
    question: 'Заберут ли единственное жильё при банкротстве?',
    answer: 'Нет, единственное жильё защищено законом и не подлежит реализации в ходе процедуры.',
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-8 bg-white overflow-hidden" id="faq">
      <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start mb-8 md:mb-24">
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/5 text-accent text-[11px] font-bold uppercase tracking-[0.3em] mb-4 md:mb-8 border border-accent/10">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Вопросы и ответы
            </div>
            <h2 className="text-5xl md:text-[4.2rem] lg:text-8xl font-bold text-zinc-900 leading-[0.85] tracking-tighter">
              Часто <br />
              <span className="text-accent italic font-medium">спрашивают</span>
            </h2>
          </div>
          <div className="md:w-1/2 md:pt-16 lg:pt-12 flex justify-center md:justify-end">
            <p className="text-xl text-zinc-500 leading-relaxed max-w-md md:text-right">
              Мы собрали ответы на самые популярные вопросы, чтобы вы могли лучше понять процедуру банкротства.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-[2rem] border transition-all duration-500 ${
                  isOpen 
                    ? 'bg-accent border-accent shadow-2xl shadow-accent/20' 
                    : 'bg-zinc-50 border-zinc-100 hover:border-zinc-200'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`text-base md:text-xl font-bold transition-colors duration-500 ${isOpen ? 'text-white' : 'text-zinc-900 group-hover:text-accent'}`}>
                    {item.question}
                  </span>
                  <div className={`shrink-0 ml-4 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-white text-accent rotate-180' : 'bg-white text-zinc-400 shadow-sm group-hover:text-accent'}`}>
                    {isOpen ? <Minus size={18} className="md:w-5 md:h-5" weight="bold" /> : <Plus size={18} className="md:w-5 md:h-5" weight="bold" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 text-white/90 text-lg leading-relaxed pt-2">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
