import { UtensilsCrossed, Clock, ChefHat, CalendarCheck, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function Benefits() {
  const audiences = [
    {
      title: "Quem quer variar a alimentação",
      description: "Cansado de comer sempre as mesmas coisas? Tenha mais de 150 opções saborosas ao seu alcance para nunca enjoar da sua dieta.",
      icon: UtensilsCrossed
    },
    {
      title: "Quem busca praticidade",
      description: "Ideal para quem tem a rotina corrida, precisa de preparos rápidos em até 20 minutos e ingredientes fáceis do mercado local.",
      icon: Clock
    },
    {
      title: "Quem gosta de cozinhar",
      description: "Descubra novas combinações, técnicas saudáveis e truques culinários para explorar todo o sabor da comida de verdade.",
      icon: ChefHat
    },
    {
      title: "Quem deseja organizar melhor as refeições",
      description: "Planeje seus dias com clareza com um cardápio completo dividido por café da manhã, almoço, jantar, lanches e sobremesas.",
      icon: CalendarCheck
    }
  ];

  return (
    <section id="para-quem-e" className="py-20 lg:py-28 bg-slate-50/70 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">
            Para quem é
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
            Feito para se adaptar ao seu estilo de vida
          </h2>
          <p className="text-slate-600 font-sans text-base">
            O NutriFit foi desenvolvido para resolver as principais dúvidas e desafios da alimentação no dia a dia:
          </p>
        </div>

        {/* Audience 4-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {audiences.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white flex items-center justify-center transition-all duration-300 mb-6">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <h3 className="font-poppins font-bold text-xl text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-brand-green">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Recomendado para o seu dia a dia</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

