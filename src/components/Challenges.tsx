import { CHALLENGES } from "../data";
import { Clock, UtensilsCrossed, CalendarDays, Coins } from "lucide-react";
import { motion } from "motion/react";

const iconMap: Record<string, any> = {
  Clock: Clock,
  UtensilsCrossed: UtensilsCrossed,
  CalendarDays: CalendarDays,
  Coins: Coins
};

export default function Challenges() {
  return (
    <section id="desafios" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">A Realidade do Dia a Dia</span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-brand-dark leading-tight">
            Por que é tão difícil manter uma alimentação saudável?
          </h2>
          <p className="text-gray-500 font-sans text-base">
            Muitas pessoas começam uma dieta, mas desistem nas primeiras semanas. E a culpa quase nunca é da força de vontade, mas sim destes obstáculos comuns:
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CHALLENGES.map((challenge, index) => {
            const IconComponent = iconMap[challenge.iconName] || Clock;
            return (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 flex gap-5 items-start group"
              >
                {/* Icon wrapper */}
                <div className="p-4 rounded-xl bg-orange-500/10 text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                
                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-poppins font-bold text-lg text-brand-dark group-hover:text-brand-orange transition-colors duration-300">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {challenge.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Encouragement footer */}
        <div className="mt-12 text-center">
          <p className="text-sm font-medium text-brand-green bg-brand-green/5 border border-brand-green/10 rounded-full px-6 py-2.5 inline-block">
            💡 Se você se identifica com algum desses pontos, o eBook de Receitas Fitness foi feito sob medida para você!
          </p>
        </div>

      </div>
    </section>
  );
}
