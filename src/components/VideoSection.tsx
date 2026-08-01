import { useState } from "react";
import { Play, X, CheckCircle2, Sparkles, Volume2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="video-ugc" className="py-20 sm:py-28 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-brand-green/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Na Prática do Dia a Dia</span>
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
            Veja como é simples preparar suas refeições com o NutriFit
          </h2>
          <p className="text-slate-600 font-sans text-base">
            Uma rotina real, ingredientes acessíveis de qualquer mercado e pratos prontos em minutos:
          </p>
        </div>

        {/* Video Thumbnail Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-900 group cursor-pointer aspect-video"
          onClick={() => setIsPlaying(true)}
        >
          {/* Beautiful high-res cooking thumbnail */}
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1400&q=85"
            alt="Preparo de receita fitness do dia a dia com NutriFit"
            className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700 ease-out"
          />

          {/* Elegant Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

          {/* Center Play Button (Apple / Stripe inspired glassmorphism) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-brand-green text-white flex items-center justify-center shadow-2xl shadow-brand-green/40 border-4 border-white/30 backdrop-blur-md group-hover:bg-emerald-600 transition-colors"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
            </motion.div>
          </div>

          {/* Bottom Caption Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1 text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-semibold">
                ▶ Experiência Real — Rotina Prática
              </span>
              <h3 className="font-poppins font-bold text-lg sm:text-xl text-white">
                Como variar o cardápio da semana em menos de 20 minutos
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/80 font-medium">
              <Volume2 className="w-4 h-4 text-brand-green" />
              <span>Com som</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Highlights below Video */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-600 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-green" />
            <span>Ingredientes do mercado local</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-green" />
            <span>Passo a passo sem enrolação</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-green" />
            <span>Sabor e saciedade de verdade</span>
          </div>
        </div>

      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setIsPlaying(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 text-white flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="Fechar vídeo"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Embedded video player demonstration */}
              <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
                <div className="w-20 h-20 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center mb-6">
                  <Play className="w-10 h-10 fill-brand-green translate-x-0.5" />
                </div>
                <h3 className="font-poppins font-bold text-2xl text-white mb-2">
                  Receitas Práticas & Saborosas
                </h3>
                <p className="text-slate-300 text-sm sm:text-base max-w-md mb-8">
                  Todas as nossas 150+ receitas foram criadas para que você coma comida de verdade no conforto de casa, gastando pouco tempo e utilizando alimentos simples.
                </p>
                <a
                  href="https://pay.kiwify.com.br/fSj6vn2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-2xl bg-brand-green text-white font-poppins font-semibold text-sm hover:bg-emerald-600 transition-all shadow-lg shadow-brand-green/30"
                >
                  Quero Acessar o NutriFit Agora
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
