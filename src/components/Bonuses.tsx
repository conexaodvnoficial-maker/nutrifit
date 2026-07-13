import { BONUSES } from "../data";
import { FileCheck, ListOrdered, CalendarRange, Gift, Check } from "lucide-react";
import { motion } from "motion/react";

const iconMap: Record<string, any> = {
  FileCheck: FileCheck,
  ListOrdered: ListOrdered,
  CalendarRange: CalendarRange
};

export default function Bonuses() {
  return (
    <section id="bonus" className="py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Background glow decorator */}
        <div className="absolute top-[20%] left-[-10%] w-[30%] h-[30%] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
            <Gift className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Super Oferta Limitada</span>
          </div>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-brand-dark leading-tight">
            Você também vai ganhar 3 Super Bônus Exclusivos
          </h2>
          <p className="text-gray-500 font-sans text-base">
            Se você garantir seu eBook hoje, levará de forma 100% gratuita todo este material de apoio que vai acelerar e organizar os seus resultados:
          </p>
        </div>

        {/* Bonuses Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {BONUSES.map((bonus, index) => {
            const IconComponent = iconMap[bonus.iconName] || FileCheck;
            return (
              <motion.div
                key={bonus.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
              >
                {/* Free glowing tag */}
                <span className="absolute top-6 right-6 bg-brand-green/15 text-brand-green font-poppins font-extrabold text-xs px-3.5 py-1.5 rounded-full border border-brand-green/20">
                  GRÁTIS
                </span>

                <div className="space-y-6">
                  {/* Icon & Bonus number */}
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-brand-orange/10 text-brand-orange rounded-2xl">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold text-brand-orange tracking-widest uppercase">BÔNUS 0{index + 1}</p>
                      <h3 className="font-poppins font-extrabold text-lg text-brand-dark leading-tight">{bonus.title}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {bonus.description}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-2 pt-2">
                    {bonus.highlights.map((high, hIdx) => (
                      <li key={hIdx} className="flex gap-2 text-xs font-semibold text-gray-700">
                        <Check className="w-4 h-4 text-brand-green shrink-0" />
                        <span>{high}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Value representation */}
                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-400">Valor Individual se vendido separado:</span>
                  <strong className="text-gray-400 line-through font-poppins font-medium">{bonus.value}</strong>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
