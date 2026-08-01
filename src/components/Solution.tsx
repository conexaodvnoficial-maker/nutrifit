import { CheckCircle2, ChefHat, Sparkles, Clock, ShoppingBag, Sun, Layers, Zap, Utensils, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Solution() {
  const steps = [
    {
      step: "01",
      title: "Escolha sua receita",
      description: "Navegue pelas categorias e escolha o prato ideal para o seu momento do dia.",
      icon: Utensils
    },
    {
      step: "02",
      title: "Prepare com ingredientes simples",
      description: "Utilize alimentos acessíveis do dia a dia, fáceis de encontrar em qualquer mercado.",
      icon: ChefHat
    },
    {
      step: "03",
      title: "Aproveite refeições variadas",
      description: "Desfrute de muito sabor e praticidade para manter sua rotina saudável sem monotonia.",
      icon: Sparkles
    }
  ];

  const deliverables = [
    {
      title: "Mais de 150 receitas fitness",
      description: "Opções deliciosas e testadas para transformar sua alimentação sem repetições.",
      icon: Utensils
    },
    {
      title: "Receitas rápidas",
      description: "Pratos práticos que ficam prontos em poucos minutos para dias corridos.",
      icon: Clock
    },
    {
      title: "Ingredientes fáceis de encontrar",
      description: "Sem itens caros ou importados: tudo o que você precisa está no mercado do bairro.",
      icon: ShoppingBag
    },
    {
      title: "Opções para diferentes momentos",
      description: "Café da manhã, almoço, jantar, lanches rápidos e sobremesas saudáveis.",
      icon: Sun
    },
    {
      title: "Organização intuitiva",
      description: "Categorias bem definidas e índice visual para encontrar qualquer receita na hora.",
      icon: Layers
    },
    {
      title: "Acesso digital imediato",
      description: "Receba no seu e-mail assim que confirmar a compra para ler no celular, tablet ou PC.",
      icon: Zap
    }
  ];

  return (
    <div className="bg-white">
      {/* ================= HOW IT WORKS (COMO FUNCIONA) ================= */}
      <section id="como-funciona" className="py-20 sm:py-28 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">
              Simplicidade no dia a dia
            </span>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
              Como funciona
            </h2>
            <p className="text-slate-600 font-sans text-base">
              Em apenas três passos simples, você transforma sua rotina alimentar:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
                >
                  {/* Step indicator pill */}
                  <span className="inline-block text-xs font-poppins font-bold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full mb-6">
                    Passo {item.step}
                  </span>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-slate-100 group-hover:bg-brand-green/10 text-slate-700 group-hover:text-brand-green flex items-center justify-center transition-colors mb-6">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <h3 className="font-poppins font-bold text-xl text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Arrow for steps 1 & 2 on Desktop */}
                  {index < 2 && (
                    <div className="hidden md:flex items-center justify-center absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 shadow-sm">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= WHAT YOU GET (O QUE VOCÊ RECEBE) ================= */}
      <section id="o-que-voce-recebe" className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">
              Tudo em um só lugar
            </span>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
              O que você recebe
            </h2>
            <p className="text-slate-600 font-sans text-base">
              Um guia digital completo pensado nos mínimos detalhes para facilitar a sua cozinha:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {deliverables.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-poppins font-bold text-lg sm:text-xl text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
