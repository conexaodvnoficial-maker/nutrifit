import { BookOpen, Check, Mail, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";

interface FooterProps {
  checkoutUrl: string;
}

export default function Footer({ checkoutUrl }: FooterProps) {
  return (
    <footer id="footer" className="bg-gray-950 text-gray-400 font-sans text-xs sm:text-sm">
      
      {/* 12. CTA FINAL (Grande bloco de fechamento) */}
      <div className="bg-gradient-to-br from-brand-green/10 via-emerald-950/10 to-brand-dark border-b border-white/5 py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        
        {/* Glow decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-green/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <span className="text-brand-green font-poppins font-black uppercase text-xs tracking-widest block">
            Sua Chance de Mudar de Vida
          </span>
          
          <h2 className="font-poppins font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
            Pronto para comer de forma deliciosa, saudável e sem complicações?
          </h2>

          <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Não procrastine a sua saúde. Adquira o eBook completo hoje com 80% de desconto e tenha em mãos o passo a passo definitivo para facilitar o seu dia a dia.
          </p>

          {/* Quick summary checkmarks */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-gray-200 font-medium max-w-xl mx-auto pt-2">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-brand-green shrink-0" /> 150+ Receitas Fitness
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-brand-green shrink-0" /> 3 Bônus Especiais
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-brand-green shrink-0" /> Garantia de 7 Dias
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-brand-green shrink-0" /> Acesso Imediato
            </span>
          </div>

          {/* Centered Large Glow CTA Button */}
          <div className="pt-4 max-w-md mx-auto">
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex py-4.5 rounded-2xl bg-brand-orange text-white font-poppins font-black text-lg sm:text-xl shadow-lg hover:bg-brand-orange-hover hover:scale-[1.03] active:scale-[0.98] transition-all justify-center items-center gap-2 glow-orange cursor-pointer"
            >
              Quero Meu eBook de Receitas
            </a>
          </div>
        </div>

      </div>

      {/* Main Corporate Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-white/5 pb-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-brand-green/10 rounded-xl">
              <BookOpen className="w-5 h-5 text-brand-green" />
            </div>
            <span className="font-poppins font-bold text-lg text-white tracking-tight">
              Nutri<span className="text-brand-green">Fit</span>
            </span>
          </div>

          {/* Quick legal list */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500 font-medium">
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Termos de Uso</span>
            <span className="hover:text-gray-300 transition-colors cursor-pointer">Políticas de Privacidade</span>
            <span className="hover:text-gray-300 transition-colors cursor-pointer flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" /> suporte@nutrifit.com
            </span>
          </div>
        </div>

        {/* Legal notice and copyright */}
        <div className="space-y-4 text-center md:text-left text-[11px] text-gray-500 leading-relaxed">
          <p>
            Copyright &copy; 2026 NutriFit. Todos os direitos reservados.
          </p>
          
          <p className="flex items-start gap-1.5 max-w-4xl">
            <ShieldAlert className="w-4 h-4 shrink-0 text-gray-600 mt-0.5" />
            <span>
              <strong>Aviso Médico & Legal:</strong> As informações contidas neste eBook têm caráter meramente educativo e informativo, não substituindo consultas e acompanhamentos de profissionais habilitados como Médicos e Nutricionistas. Os resultados podem variar de pessoa para pessoa a depender da sua individualidade biológica, genética, metabolismo e nível de atividade física. Sempre consulte seu médico antes de iniciar qualquer mudança em seus hábitos de alimentação e exercícios físicos.
            </span>
          </p>
        </div>

      </div>

    </footer>
  );
}
