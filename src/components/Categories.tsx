import { CATEGORIES } from "../data";
import { Coffee, Sun, Moon, Apple, Cookie, GlassWater, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const iconMap: Record<string, any> = {
  Coffee: Coffee,
  Sun: Sun,
  Moon: Moon,
  Apple: Apple,
  Cookie: Cookie,
  GlassWater: GlassWater
};

export default function Categories() {
  return (
    <section id="categorias" className="py-20 lg:py-28 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Estrutura Interna</span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-brand-dark leading-tight">
            Tudo o que você vai encontrar no eBook de Receitas Fitness
          </h2>
          <p className="text-gray-500 font-sans text-base">
            O eBook é totalmente categorizado para facilitar a sua navegação diária. Encontre rapidamente as refeições certas para qualquer hora do dia:
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((category, index) => {
            const IconComponent = iconMap[category.iconName] || Coffee;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between relative overflow-hidden group`}
              >
                {/* Background soft glow gradient decoration */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} rounded-bl-full opacity-40 group-hover:scale-110 transition-transform duration-500`} />

                <div>
                  {/* Icon & Count Header */}
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div className="p-3.5 rounded-2xl bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-poppins font-bold bg-gray-100 dark:bg-brand-dark/10 text-gray-600 px-3.5 py-1.5 rounded-full border border-gray-200/50">
                      {category.recipesCount}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-poppins font-extrabold text-xl text-brand-dark mb-3 group-hover:text-brand-green transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {category.description}
                  </p>
                </div>

                {/* Sub-tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-gray-500 bg-gray-100/80 px-2.5 py-1 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
