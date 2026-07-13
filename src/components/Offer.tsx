import { useState, useEffect } from "react";
import { Check, ShieldCheck, Zap, Flame, CreditCard, Sparkles } from "lucide-react";
import { motion } from "motion/react";

interface OfferProps {
  checkoutUrl: string;
}

export default function Offer({ checkoutUrl }: OfferProps) {
  const [timeLeft, setTimeLeft] = useState(899); // 14 mins 59 secs

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 899)); // loop back to create persistent urgency
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section id="oferta" className="py-20 lg:py-28 bg-brand-dark text-white relative overflow-hidden">
      {/* Visual glowing decorators */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-brand-green/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-12">
        
        {/* Scarcity Trigger Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-orange/15 text-brand-orange border border-brand-orange/30 animate-pulse-slow mx-auto"
        >
          <Flame className="w-4 h-4 fill-brand-orange" />
          <span className="font-poppins font-bold text-xs uppercase tracking-wider">
            OFERTA EXCLUSIVA POR TEMPO LIMITADO: <span className="font-mono">{formatTime(timeLeft)}</span>
          </span>
        </motion.div>

        {/* Copywriting */}
        <div className="space-y-4">
          <h2 className="font-poppins font-black text-4xl sm:text-5xl leading-tight">
            Chegou a hora de comer bem <br />
            <span className="text-brand-green">sem abrir mão do sabor!</span>
          </h2>
          <p className="text-gray-400 font-sans text-base sm:text-lg max-w-2xl mx-auto">
            Garanta agora mesmo o eBook de Receitas Fitness com mais de 150 opções saudáveis + todos os 3 bônus exclusivos de suporte!
          </p>
        </div>

        {/* Main Pricing Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-white/10 max-w-xl mx-auto relative group shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        >
          {/* Popular Tag */}
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-green text-white font-poppins font-extrabold text-xs px-5 py-1.5 rounded-full tracking-widest uppercase shadow-md flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-white" /> MELHOR ESCOLHA
          </span>

          <div className="space-y-8">
            
            {/* Value comparison */}
            <div className="space-y-1">
              <span className="text-sm text-gray-400 font-medium line-through block">De R$ 97,00</span>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-xl sm:text-2xl text-gray-400 font-poppins">Por apenas</span>
                <span className="text-5xl sm:text-6xl font-black font-poppins text-white tracking-tight">R$ 19,90</span>
              </div>
              <span className="text-xs text-brand-green font-semibold uppercase block tracking-wider mt-1">✓ Desconto Especial de 80% Aplicado</span>
            </div>

            {/* Checklist of what's included */}
            <ul className="space-y-3.5 text-left border-y border-white/5 py-6 font-sans text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <span>eBook Principal com mais de 150 Receitas Fitness</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <span className="font-semibold text-brand-green">Bônus 1: Planner Alimentar Interativo (R$ 47 grátis)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <span className="font-semibold text-brand-green">Bônus 2: Lista de Compras Inteligente (R$ 29 grátis)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <span className="font-semibold text-brand-green">Bônus 3: Calendário de Preparo de Marmitas (R$ 39 grátis)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <span>Acesso Vitalício + Atualizações futuras grátis</span>
              </li>
            </ul>

            {/* Huge Glow CTA Button */}
            <div className="space-y-3 pt-2 relative">
              <div className="absolute inset-x-0 -top-4 bottom-0 bg-brand-orange/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-5 rounded-2xl bg-brand-orange text-white font-poppins font-black text-xl shadow-lg hover:bg-brand-orange-hover hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 relative z-10 glow-orange group-hover:shadow-orange-500/30 cursor-pointer"
              >
                Quero Meu eBook
              </a>
              
              <span className="text-[10px] sm:text-xs text-gray-400 block">
                🔐 Pagamento 100% criptografado e seguro
              </span>
            </div>

            {/* Payment Icons */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-center gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-80 transition-all">
              <span className="text-[10px] uppercase font-bold text-gray-400">Aceitamos:</span>
              <div className="flex gap-2.5 text-xs text-white">
                <span className="bg-white/10 px-2 py-1 rounded">Pix</span>
                <span className="bg-white/10 px-2 py-1 rounded">Cartão</span>
                <span className="bg-white/10 px-2 py-1 rounded">Boleto</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Risk-free warning */}
        <p className="text-xs text-gray-500 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-brand-green" /> 7 dias de Garantia Incondicional. Risco ZERO para você!
        </p>

      </div>
    </section>
  );
}
