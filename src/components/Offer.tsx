import { Check, ShieldCheck, Zap, ArrowRight, Lock } from "lucide-react";
import { motion } from "motion/react";

interface OfferProps {
  checkoutUrl: string;
}

export default function Offer({ checkoutUrl }: OfferProps) {
  return (
    <section id="oferta" className="py-20 sm:py-28 bg-brand-green text-white relative overflow-hidden">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-12">
        
        {/* Title and Subtitle - Exact wording requested by user */}
        <div className="space-y-6 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight"
          >
            Comece hoje mesmo.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 font-sans text-lg sm:text-xl leading-relaxed font-normal"
          >
            Tenha acesso imediato ao NutriFit e descubra novas formas de tornar sua alimentação mais prática e saborosa.
          </motion.p>
        </div>

        {/* Clean, Apple-inspired White Box with Pricing & Instant Access */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 sm:p-12 text-slate-900 max-w-xl mx-auto shadow-2xl border border-white/40 relative"
        >
          <div className="space-y-8">
            
            {/* Price Display */}
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 block">
                Acesso Completo ao Ebook
              </span>
              <div className="flex items-baseline justify-center gap-1 text-slate-900">
                <span className="text-sm font-semibold">R$</span>
                <span className="text-5xl sm:text-6xl font-bold font-poppins tracking-tight">19,90</span>
              </div>
              <span className="text-xs text-brand-green font-semibold uppercase block tracking-wider mt-1">
                ✓ Pagamento único — Sem mensalidades
              </span>
            </div>

            {/* What you receive checklist */}
            <ul className="space-y-3.5 text-left border-y border-slate-100 py-6 font-sans text-sm text-slate-700">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">Mais de 150 receitas fitness exclusivas</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">Opções para café da manhã, almoço, jantar, lanches e sobremesas</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">Organização visual e ingredientes acessíveis do dia a dia</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium">Acesso digital imediato em qualquer celular, tablet ou PC</span>
              </li>
            </ul>

            {/* CTA Button - Exact wording requested by user */}
            <div className="space-y-3 pt-2">
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 rounded-2xl bg-brand-green text-white font-poppins font-semibold text-lg sm:text-xl shadow-lg shadow-brand-green/30 hover:bg-emerald-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>Quero acessar agora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Pagamento 100% seguro pela Kiwify</span>
              </div>
            </div>

            {/* Accepted payment methods */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-3 text-xs text-slate-500">
              <span className="uppercase font-semibold text-[10px] text-slate-400">Pagamento fácil via:</span>
              <div className="flex gap-2">
                <span className="bg-slate-100 px-2.5 py-1 rounded font-medium text-slate-700">Pix instantâneo</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded font-medium text-slate-700">Cartão de Crédito</span>
                <span className="bg-slate-100 px-2.5 py-1 rounded font-medium text-slate-700">Boleto</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Guarantee short badge */}
        <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
          <ShieldCheck className="w-5 h-5 text-white" />
          <span>7 dias de garantia incondicional. Você satisfeito ou seu dinheiro de volta.</span>
        </div>

      </div>
    </section>
  );
}

