import { ShieldCheck, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Guarantee() {
  return (
    <section id="garantia" className="py-20 lg:py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Left side: Premium vector Guarantee Shield Seal */}
            <div className="md:col-span-4 flex justify-center">
              <motion.div
                initial={{ rotate: -5, scale: 0.95 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
                className="relative w-44 h-44 flex items-center justify-center shrink-0"
              >
                {/* Rotating decorative dotted outer ring */}
                <div className="absolute inset-0 border-2 border-dashed border-amber-500/20 rounded-full animate-[spin_40s_linear_infinite]" />
                
                {/* Main badge circle */}
                <div className="absolute w-[85%] h-[85%] bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg flex flex-col items-center justify-center text-white text-center p-4">
                  <ShieldCheck className="w-12 h-12 mb-1 drop-shadow-md text-white" />
                  <span className="font-poppins font-black text-2xl leading-none block drop-shadow-sm">7 DIAS</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest mt-0.5 opacity-90 block">GARANTIA</span>
                </div>
              </motion.div>
            </div>

            {/* Right side: Trust-building copywriting */}
            <div className="md:col-span-8 space-y-6 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-500/10 inline-block">
                Compra 100% Segura & Sem Risco
              </span>
              
              <h2 className="font-poppins font-extrabold text-2xl sm:text-3xl text-brand-dark leading-tight">
                Satisfação Garantida ou seu dinheiro de volta!
              </h2>
              
              <div className="space-y-4 text-gray-500 text-sm sm:text-base leading-relaxed font-sans">
                <p>
                  Queremos que você tome sua decisão com total tranquilidade. Por isso, oferecemos uma <strong>garantia incondicional de 7 dias</strong>.
                </p>
                <p>
                  Adquira o eBook hoje, baixe os bônus, experimente as receitas na sua casa e analise o material. Se por qualquer motivo você achar que o guia não é para você, basta solicitar o reembolso diretamente pela plataforma de pagamento (Kiwify) em até 7 dias e devolveremos <strong>100% do seu investimento</strong>, sem perguntas e sem complicação.
                </p>
              </div>

              {/* Secure payment microcopy */}
              <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1.5">
                  🛡️ Pagamento processado pela Kiwify
                </span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center gap-1.5">
                  🔐 Dados criptografados e protegidos
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
