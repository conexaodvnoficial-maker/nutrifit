import { useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen, Check, BadgeCheck, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const PREVIEW_PAGES = [
  {
    id: 1,
    title: "Índice de Receitas Práticas",
    subtitle: "Estrutura do Livro Digital",
    bg: "bg-gradient-to-br from-emerald-50 to-teal-50/30",
    content: (
      <div className="space-y-4 text-left">
        <div className="flex items-center gap-2 border-b border-emerald-100 pb-2.5">
          <BookOpen className="w-4 h-4 text-brand-green" />
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Seções Inclusas</span>
        </div>
        <ul className="space-y-2.5">
          <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center text-[10px] font-bold">1</span>
            Café da Manhã Energético <span className="text-gray-400 font-normal ml-auto">Pág. 12</span>
          </li>
          <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center text-[10px] font-bold">2</span>
            Almoços Completos em 15 Minutos <span className="text-gray-400 font-normal ml-auto">Pág. 34</span>
          </li>
          <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center text-[10px] font-bold">3</span>
            Lanches de Alta Proteína <span className="text-gray-400 font-normal ml-auto">Pág. 68</span>
          </li>
          <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center text-[10px] font-bold">4</span>
            Jantares Ultra Leves <span className="text-gray-400 font-normal ml-auto">Pág. 92</span>
          </li>
          <li className="flex items-center gap-2 text-xs font-medium text-slate-700">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-brand-green flex items-center justify-center text-[10px] font-bold">5</span>
            Doces & Sobremesas Fit Sem Culpa <span className="text-gray-400 font-normal ml-auto">Pág. 122</span>
          </li>
        </ul>
        <p className="text-[10px] text-gray-400 italic text-center pt-2">E muito mais... São mais de 150 páginas de puro conteúdo prático!</p>
      </div>
    )
  },
  {
    id: 2,
    title: "Panqueca de Aveia e Whey",
    subtitle: "Categoria: Café da Manhã de Alta Proteína",
    bg: "bg-gradient-to-br from-amber-50 to-orange-50/30",
    content: (
      <div className="space-y-4 text-left">
        <div className="flex items-center justify-between border-b border-amber-100 pb-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange">Receita Prática 07</span>
          <span className="px-2 py-0.5 bg-brand-orange/10 text-brand-orange rounded-full text-[9px] font-bold">★ Favorito</span>
        </div>
        
        {/* Macros */}
        <div className="grid grid-cols-3 gap-2 text-center bg-white/60 rounded-xl p-2.5 border border-amber-100">
          <div>
            <span className="text-[8px] text-gray-400 uppercase block">Kcal</span>
            <strong className="text-xs font-bold text-slate-800">312 kcal</strong>
          </div>
          <div>
            <span className="text-[8px] text-gray-400 uppercase block">Proteína</span>
            <strong className="text-xs font-bold text-slate-800">26g</strong>
          </div>
          <div>
            <span className="text-[8px] text-gray-400 uppercase block">Tempo</span>
            <strong className="text-xs font-bold text-slate-800">8 min</strong>
          </div>
        </div>

        <div className="space-y-1.5">
          <strong className="text-[11px] text-slate-800 uppercase block">Ingredientes Rápidos:</strong>
          <p className="text-[10px] text-slate-600 leading-relaxed">
            • 2 colheres de aveia em flocos finos<br />
            • 1 scoop de Whey Protein (baunilha ou chocolate)<br />
            • 1 ovo inteiro + 2 claras de ovo<br />
            • 1 banana amassada madura
          </p>
        </div>

        <p className="text-[10px] text-slate-500 leading-relaxed italic border-t border-amber-100 pt-2">
          <strong>Modo de preparo rápido:</strong> Misture tudo no mixer ou garfo. Despeje em frigideira antiaderente untada por 3 minutos de cada lado. Decore com canela e mel.
        </p>
      </div>
    )
  },
  {
    id: 3,
    title: "Guia de Conservação",
    subtitle: "Como guardar marmitas por até 7 dias",
    bg: "bg-gradient-to-br from-blue-50/50 to-sky-50/30",
    content: (
      <div className="space-y-4 text-left">
        <div className="flex items-center gap-2 border-b border-blue-100 pb-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-800">Segredos de Meal Prep</span>
        </div>
        <p className="text-[11px] text-slate-600 leading-relaxed">
          Para que sua comida de quarta-feira pareça recém-saída do fogão, siga estas regras de conservação térmica de elite:
        </p>
        <ul className="space-y-2.5 text-[10px] text-slate-700">
          <li className="flex items-start gap-2">
            <span className="text-blue-500 shrink-0 font-bold">✓</span>
            <span><strong>Resfriamento Rápido:</strong> Nunca feche a marmita quente na geladeira para evitar o acúmulo de vapor d'água que deixa os alimentos moles.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 shrink-0 font-bold">✓</span>
            <span><strong>Potes Livres de BPA:</strong> Dê preferência a potes de vidro herméticos, pois não absorvem odor e facilitam o aquecimento.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-500 shrink-0 font-bold">✓</span>
            <span><strong>Molho separado:</strong> Saladas e molhos quentes devem ser guardados em compartimentos ou potinhos separados.</span>
          </li>
        </ul>
      </div>
    )
  }
];

export default function BookPreviewer() {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const handleNext = () => {
    setActivePageIndex((prev) => (prev + 1) % PREVIEW_PAGES.length);
  };

  const handlePrev = () => {
    setActivePageIndex((prev) => (prev - 1 + PREVIEW_PAGES.length) % PREVIEW_PAGES.length);
  };

  const currentPage = PREVIEW_PAGES[activePageIndex];

  return (
    <div className="relative">
      <div className="absolute top-[-8%] right-[-8%] w-16 h-16 bg-brand-orange/20 rounded-full blur-xl pointer-events-none" />
      
      {/* eBook Mockup Container */}
      <div className="bg-slate-900 rounded-[32px] p-4 sm:p-6 shadow-2xl border-4 border-slate-800 relative">
        
        {/* Device camera top detail */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3 bg-slate-800 rounded-full flex items-center justify-center gap-1.5 px-3 z-20">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
          <span className="w-6 h-1 rounded-full bg-slate-600" />
        </div>

        {/* Content Wrapper simulating standard Tablet screen */}
        <div className="bg-white rounded-2xl overflow-hidden min-h-[420px] sm:min-h-[460px] flex flex-col justify-between relative shadow-inner border border-slate-100">
          
          {/* Tablet Status Header */}
          <div className="px-4 py-2 bg-slate-50 border-b border-gray-100 flex items-center justify-between text-[9px] text-gray-400 font-sans">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse" />
              <span>Conexão Segura</span>
            </div>
            <span className="font-semibold text-gray-500">Pág {currentPage.id} de {PREVIEW_PAGES.length}</span>
            <span className="font-semibold text-gray-500">100% Digital</span>
          </div>

          {/* Book Page Screen */}
          <div className={`p-6 sm:p-8 flex-1 flex flex-col justify-center transition-colors duration-500 ${currentPage.bg}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="space-y-1">
                  <span className="text-[10px] text-brand-green font-bold uppercase tracking-wider block">
                    {currentPage.subtitle}
                  </span>
                  <h4 className="font-poppins font-black text-lg sm:text-xl text-slate-800 leading-tight">
                    {currentPage.title}
                  </h4>
                </div>

                {currentPage.content}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Tablet Footer Navigation */}
          <div className="bg-slate-50 border-t border-gray-100 p-4 flex items-center justify-between">
            <button
              onClick={handlePrev}
              className="p-2 bg-white border border-gray-200 rounded-xl text-gray-500 hover:text-brand-dark hover:border-gray-300 transition-all cursor-pointer shadow-sm active:scale-95"
              aria-label="Página anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1">
              {PREVIEW_PAGES.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activePageIndex ? "w-4 bg-brand-green" : "w-1.5 bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 bg-white border border-gray-200 rounded-xl text-gray-500 hover:text-brand-dark hover:border-gray-300 transition-all cursor-pointer shadow-sm active:scale-95 flex items-center gap-1"
              aria-label="Próxima página"
            >
              <span className="text-[10px] font-bold text-gray-600 hidden sm:inline">Avançar</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-400 font-sans font-medium">
        <BadgeCheck className="w-4 h-4 text-brand-green" />
        <span>Clique nos botões acima para ver o miolo do eBook!</span>
      </div>
    </div>
  );
}
