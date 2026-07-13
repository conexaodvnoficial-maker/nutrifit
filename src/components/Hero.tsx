import { motion } from "motion/react";
import { Check, Smartphone, Zap, Sparkles, Flame, Clock } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section id="hero" className="relative pt-24 pb-16 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-green-50/40 via-white to-white">
      {/* Background Decorative Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20"
            >
              <Sparkles className="w-4 h-4" />
              <span className="font-poppins font-medium text-xs tracking-wider uppercase">Lançamento Exclusivo 2026</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-poppins font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brand-dark leading-[1.1] tracking-tight"
            >
              Mais de <span className="text-brand-green relative inline-block">
                150 Receitas
                <span className="absolute bottom-1 left-0 w-full h-2 bg-brand-green/10 -z-10 rounded-lg"></span>
              </span> Fitness Deliciosas Para Comer Bem Todos os Dias
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Receitas práticas para facilitar uma alimentação equilibrada, com opções para café da manhã, almoço, jantar, lanches e sobremesas. Sem sacrifícios e sem gastar horas cozinhando.
            </motion.p>

            {/* CTA and Conversion Triggers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-orange text-white font-poppins font-bold text-lg shadow-lg hover:bg-brand-orange-hover hover:scale-[1.03] active:scale-[0.98] hover:shadow-orange-500/20 glow-orange transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                Quero Receber Agora
              </button>
              
              <div className="flex flex-col items-start gap-1 text-left sm:pl-4">
                <span className="text-sm font-semibold text-brand-dark">Apenas R$ 19,90</span>
                <span className="text-xs text-gray-500">Pagamento único, sem mensalidades.</span>
              </div>
            </motion.div>

            {/* Quick trust trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-gray-100 pt-6 max-w-xl mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex items-center gap-1.5 text-brand-green">
                  <Zap className="w-4 h-4 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-brand-dark">Acesso Imediato</span>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 text-center lg:text-left">E-mail automático</span>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex items-center gap-1.5 text-brand-green">
                  <Check className="w-4 h-4 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-brand-dark">Arquivo Digital</span>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 text-center lg:text-left">PDF de Alta Resolução</span>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-1">
                <div className="flex items-center gap-1.5 text-brand-green">
                  <Smartphone className="w-4 h-4 shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-brand-dark">Celular & Tablet</span>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500 text-center lg:text-left">Diagramação vertical</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Premium 3D Book Mockup & Images */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[420px] sm:min-h-[500px]">
            
            {/* Visual background glow elements */}
            <div className="absolute w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] bg-brand-green/20 rounded-full blur-[80px] -z-10 animate-pulse-slow" />
            
            {/* Interactive perspective book wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="relative group cursor-grab active:cursor-grabbing"
              style={{ perspective: "1200px" }}
              whileHover={{ rotateY: -15, rotateX: 5, scale: 1.02 }}
            >
              {/* Actual Book Render */}
              <div 
                className="w-[240px] h-[340px] sm:w-[280px] sm:h-[400px] rounded-r-2xl relative shadow-[25px_25px_50px_rgba(0,0,0,0.15)] bg-cover bg-center overflow-hidden border border-white/20"
                style={{ 
                  transformStyle: "preserve-3d", 
                  backgroundImage: "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80')",
                }}
              >
                {/* Book spine lighting/shadow gradient layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-white/10" />
                
                {/* Cover text elements */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 text-white z-10 bg-black/40 backdrop-blur-[1px]">
                  <div className="space-y-2">
                    <span className="text-[10px] sm:text-xs tracking-widest uppercase font-bold text-brand-green font-poppins">LIVRO DIGITAL</span>
                    <h2 className="text-xl sm:text-2xl font-black font-poppins leading-tight">150+ RECEITAS FITNESS</h2>
                    <p className="text-[10px] sm:text-xs text-white/80 font-sans">Sabor e Saúde sem sacrifício na sua cozinha</p>
                  </div>
                  
                  <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                    <div>
                      <p className="text-[8px] sm:text-[10px] uppercase tracking-wider text-white/60">AUTOR</p>
                      <p className="text-[10px] sm:text-xs font-semibold">EQUIPE NUTRIFIT</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center">
                      <Flame className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Cover book shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
              </div>

              {/* 3D Spine side depth */}
              <div className="absolute top-0 bottom-0 left-0 w-[12px] bg-brand-dark/90 origin-left -rotate-y-[90deg] translate-z-0 rounded-l-md shadow-inner" />

              {/* Floating Widget 1: Recipes Count */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-8 bg-white/90 dark:bg-brand-dark/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-100 dark:border-white/10 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-medium">Cardápio Completo</h4>
                  <p className="text-sm font-bold text-brand-dark dark:text-white">+150 Opções Fit</p>
                </div>
              </motion.div>

              {/* Floating Widget 2: Prep time */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -bottom-6 -right-6 bg-white/90 dark:bg-brand-dark/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-100 dark:border-white/10 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-brand-orange">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs text-gray-500 font-medium">Ultra Prático</h4>
                  <p className="text-sm font-bold text-brand-dark dark:text-white">Em até 20 min</p>
                </div>
              </motion.div>

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
