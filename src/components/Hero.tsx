import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Smartphone, Sparkles, Flame, Clock, ArrowRight, ShieldCheck, Star, Tablet, Utensils, Heart, BookOpen, ChefHat, Award } from "lucide-react";

interface HeroProps {
  onCtaClick: () => void;
}

const HERO_RECIPES = [
  {
    name: "Salmão Grelhado com Ervas & Aspargos",
    category: "Almoço Rápido • 15 min",
    calories: "380 kcal",
    protein: "36g Proteína",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Crepioca Proteica de Frango & Cottage",
    category: "Café da Manhã • 10 min",
    calories: "260 kcal",
    protein: "28g Proteína",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Bowl de Açaí Zero Açúcar com Frutas",
    category: "Lanche Pós-Treino • 5 min",
    calories: "210 kcal",
    protein: "14g Proteína",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&w=700&q=80"
  },
  {
    name: "Escondidinho de Batata-Doce & Patinho",
    category: "Jantar Nutritivo • 25 min",
    calories: "410 kcal",
    protein: "42g Proteína",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80"
  }
];

export default function Hero({ onCtaClick }: HeroProps) {
  const [activeRecipeIndex, setActiveRecipeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRecipeIndex((prev) => (prev + 1) % HERO_RECIPES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentRecipe = HERO_RECIPES[activeRecipeIndex];

  return (
    <section 
      id="hero" 
      className="relative min-h-[calc(100vh-80px)] flex items-center pt-24 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/90 via-white to-white border-b border-slate-100 dark:from-brand-dark dark:via-brand-dark dark:to-brand-dark/95 dark:border-white/5"
    >
      {/* Apple-style Soft Studio Ambient Lighting & Depth */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-green/5 dark:bg-brand-green/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[450px] h-[450px] bg-emerald-400/5 dark:bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      
      {/* Subtle Notion-style Grid Surface pattern */}
      <div 
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Apple & Airbnb-inspired Strong Typography & High-Converting CTA */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            
            {/* Elegant Minimalist Pill Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 dark:border-brand-green/30 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-poppins font-semibold text-xs tracking-wide uppercase">
                Guia Digital • NutriFit Premium
              </span>
            </motion.div>

            {/* Headline - High-Impact, exact wording requested by user */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-poppins font-bold text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl text-slate-900 dark:text-white leading-[1.08] tracking-tight"
            >
              Nunca mais fique sem ideia do que <span className="text-brand-green">preparar.</span>
            </motion.h1>

            {/* Subtitle - Clean & precise */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-sans text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              Mais de 150 receitas fitness práticas, saborosas e fáceis de preparar.
            </motion.p>

            {/* Social Proof + SINGLE CTA BUTTON + Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 pt-2"
            >
              {/* Reader Rating + Social Proof bar */}
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="flex items-center gap-1.5 bg-amber-50/90 dark:bg-amber-500/10 border border-amber-200/70 dark:border-amber-500/20 px-3.5 py-1.5 rounded-full shadow-xs">
                  <div className="flex text-amber-500 text-xs font-bold gap-0.5">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  </div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">4.9</span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                  +5.000 pessoas já acessaram
                </span>
              </div>

              {/* SINGLE MAIN CTA BUTTON */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a
                  href="https://pay.kiwify.com.br/fSj6vn2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-9 py-4.5 rounded-2xl bg-brand-green text-white font-poppins font-semibold text-lg shadow-xl shadow-brand-green/25 hover:bg-emerald-600 hover:shadow-brand-green/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <span>Quero acessar agora</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Trust Badges - Clean line below button */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400 pt-1">
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Compra segura</span>
                </div>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Acesso imediato</span>
                </div>
                <span className="text-slate-300 dark:text-slate-700">•</span>
                <div className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Funciona no celular</span>
                </div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Ultra-Premium Visual Composition (Apple/Airbnb Product Showcase) */}
          <div className="lg:col-span-6 flex items-center justify-center relative min-h-[480px] sm:min-h-[560px]">
            
            {/* Apple Studio Ambient Halo Glow */}
            <div className="absolute w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-brand-green/15 via-emerald-400/10 to-teal-400/5 rounded-full blur-3xl -z-10" />
            
            {/* Master 3D Layered Composition Container */}
            <div className="relative w-full max-w-lg mx-auto">
              
              {/* BASE LAYER: Real Brazilian woman smiling holding a healthy fitness meal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900 aspect-[4/4.5] sm:aspect-[4/4.1] w-full group"
              >
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=85"
                  alt="Mulher brasileira preparando receita fitness saudável e apetitosa"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                {/* Top Floating Glass Badge inside card */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Edição Digital Completa</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-slate-900 dark:text-white text-xs font-bold shadow-sm">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>Garantia 7 Dias</span>
                  </div>
                </div>

                {/* Bottom Card Title & Value Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-brand-green text-white text-[11px] font-bold uppercase tracking-wider">
                      150+ Receitas
                    </span>
                    <span className="text-xs text-white/80 font-medium">
                      Práticas • Rápidas • Econômicas
                    </span>
                  </div>
                  <h3 className="font-poppins font-bold text-xl sm:text-2xl leading-tight">
                    Sabor e saciedade para todos os momentos do seu dia
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 mt-1">
                    Sem ingredientes difíceis e sem passar fome na rotina
                  </p>
                </div>
              </motion.div>

              {/* OVERLAY 1: Tablet Ebook Mockup (Top Right Floating) */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-3 sm:-right-8 w-44 sm:w-56 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-3 sm:p-3.5 rounded-2xl shadow-2xl border border-slate-200/80 dark:border-white/10 hidden sm:block"
              >
                <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-100 dark:border-white/5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-brand-green flex items-center justify-center">
                      <Tablet className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-800 dark:text-white uppercase tracking-wider">
                      E-book no Tablet
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-brand-green bg-brand-green/10 px-1.5 py-0.5 rounded">
                    PDF
                  </span>
                </div>
                <div className="rounded-xl overflow-hidden aspect-[4/3] relative">
                  <img
                    src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80"
                    alt="Página do Ebook NutriFit em Tablet"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                    <div>
                      <p className="text-[10px] font-bold text-white leading-tight">Guia NutriFit Premium</p>
                      <p className="text-[9px] text-emerald-300 font-medium">100% ilustrado</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* OVERLAY 2: Smartphone Mockup + Automatic Recipe Carousel (Bottom Left Floating) */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute -bottom-7 -left-3 sm:-left-8 w-64 sm:w-76 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-3.5 sm:p-4 rounded-3xl shadow-2xl border border-slate-200/80 dark:border-white/10"
              >
                {/* Smartphone Dynamic Header */}
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-brand-green flex items-center justify-center">
                      <Smartphone className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      Modo Celular • Rotina
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
                    <span>Receitas ao vivo</span>
                  </span>
                </div>

                {/* Automatic Real Recipe Carousel Card */}
                <div className="relative h-20 sm:h-24 overflow-hidden rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-white/5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentRecipe.name}
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -18 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 p-2.5 sm:p-3 flex items-center gap-3"
                    >
                      <img
                        src={currentRecipe.image}
                        alt={currentRecipe.name}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover shrink-0 shadow-sm"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green block truncate">
                          {currentRecipe.category}
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                          {currentRecipe.name}
                        </p>
                        <div className="flex items-center gap-3 mt-1 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                          <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                            <Flame className="w-3 h-3" />
                            {currentRecipe.calories}
                          </span>
                          <span className="text-slate-300 dark:text-slate-600">•</span>
                          <span>{currentRecipe.protein}</span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Carousel progress bar */}
                <div className="mt-2.5 flex items-center justify-between gap-1 px-0.5">
                  {HERO_RECIPES.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        idx === activeRecipeIndex 
                          ? "w-8 bg-brand-green" 
                          : "w-2 bg-slate-200 dark:bg-slate-700"
                      }`}
                    />
                  ))}
                  <span className="text-[10px] font-medium text-slate-400 dark:text-slate-500 ml-auto">
                    {activeRecipeIndex + 1}/{HERO_RECIPES.length}
                  </span>
                </div>
              </motion.div>

              {/* OVERLAY 3: Micro-badge (Reader Approval) */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
                className="absolute top-16 -left-3 sm:-left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200/80 dark:border-white/10 flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-500 flex items-center justify-center shrink-0">
                  <Heart className="w-3.5 h-3.5 fill-rose-500" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-none">Aprovado pelas leitoras</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white mt-0.5">Sem ingredientes caros</p>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

