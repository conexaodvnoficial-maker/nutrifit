import { SOLUTION_BENEFITS } from "../data";
import { Zap, ShoppingBag, Layers, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const iconMap: Record<string, any> = {
  Zap: Zap,
  ShoppingBag: ShoppingBag,
  Layers: Layers,
  Sparkles: Sparkles
};

export default function Solution() {
  return (
    <section id="solucao" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Solution Intro & Grid of Benefits */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green">A Solução Definitiva</span>
              <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-brand-dark leading-tight">
                Como o nosso eBook simplifica a sua alimentação diária
              </h2>
              <p className="text-gray-600 font-sans text-base leading-relaxed">
                Reunimos mais de 150 receitas exclusivas testadas por nutricionistas, organizadas de forma visual e intuitiva para que você coma extremamente bem todos os dias, sem esforço mental ou frustrações.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {SOLUTION_BENEFITS.map((benefit, index) => {
                const IconComponent = iconMap[benefit.iconName] || Sparkles;
                return (
                  <motion.div
                    key={benefit.id}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="space-y-2 border-l-2 border-brand-green/20 hover:border-brand-green pl-4 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2 text-brand-green">
                      <IconComponent className="w-5 h-5 shrink-0" />
                      <h4 className="font-poppins font-bold text-base text-brand-dark">{benefit.title}</h4>
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Mockup showing a Recipe Detail in a Tablet */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Visual glow backdrop */}
            <div className="absolute inset-0 bg-brand-green/5 rounded-full blur-3xl -z-10" />

            {/* Premium Glassmorphic Card representing a Tablet/Device */}
            <div className="w-full max-w-[340px] bg-brand-dark rounded-3xl p-3 shadow-2xl border border-gray-800/10">
              <div className="bg-slate-900 rounded-2xl overflow-hidden text-white font-sans text-xs pb-6">
                
                {/* Simulated Recipe Cover */}
                <div 
                  className="h-44 bg-cover bg-center relative"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=400&q=80')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-brand-green/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">CAFÉ DA MANHÃ</span>
                    <h4 className="text-base font-bold font-poppins mt-1 text-white">Panqueca de Aveia & Banana</h4>
                  </div>
                </div>

                {/* Simulated Recipe Specs */}
                <div className="p-4 space-y-4">
                  <div className="grid grid-cols-3 gap-2 bg-white/5 rounded-xl p-2.5 text-center text-[10px]">
                    <div>
                      <span className="text-gray-400 block">Tempo</span>
                      <strong className="text-brand-green">10 Min</strong>
                    </div>
                    <div className="border-x border-white/10">
                      <span className="text-gray-400 block">Calorias</span>
                      <strong className="text-brand-green">280 kcal</strong>
                    </div>
                    <div>
                      <span className="text-gray-400 block">Macros</span>
                      <strong className="text-brand-green">14g P / 38g C</strong>
                    </div>
                  </div>

                  {/* Checklist Items */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider block">Ingredientes Rápidos</span>
                    
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                      <span>1 banana madura</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                      <span>2 colheres de farelo de aveia</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                      <span>1 ovo inteiro + Canela a gosto</span>
                    </div>
                  </div>

                  {/* Layout indicator */}
                  <div className="pt-2 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-400">
                    <span>Página 14 de 150</span>
                    <span className="text-brand-green font-medium">✓ Pronto para cozinhar</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-4 -left-4 bg-white shadow-xl rounded-2xl p-3 border border-gray-100 flex items-center gap-2 animate-float">
              <span className="text-lg">🥑</span>
              <div>
                <p className="text-[10px] font-semibold text-gray-400">Dica Nutricional</p>
                <p className="text-xs font-bold text-brand-dark">Foco em Alimentos Inteiros</p>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
