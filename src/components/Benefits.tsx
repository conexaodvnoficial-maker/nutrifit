import { BENEFITS } from "../data";
import { Zap, FileText, Smartphone, Grid, CheckCircle2, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

const iconMap: Record<string, any> = {
  Zap: Zap,
  FileText: FileText,
  Smartphone: Smartphone,
  Grid: Grid,
  CheckCircle2: CheckCircle2,
  RefreshCw: RefreshCw
};

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Diferenciais Premium</span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-brand-dark leading-tight">
            Por que escolher o nosso Guia de Receitas?
          </h2>
          <p className="text-gray-500 font-sans text-base">
            Garantimos uma experiência de leitura premium e prática, desenhada especificamente para se encaixar na sua rotina corrida com total segurança:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => {
            const IconComponent = iconMap[benefit.iconName] || CheckCircle2;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 flex items-start gap-4 group"
              >
                {/* Icon Circle */}
                <div className="p-3 rounded-xl bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300 shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* Text content */}
                <div className="space-y-1">
                  <h3 className="font-poppins font-bold text-base text-brand-dark group-hover:text-brand-green transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
