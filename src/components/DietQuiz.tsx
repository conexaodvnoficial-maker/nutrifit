import { useState } from "react";
import { Sparkles, CheckCircle2, Trophy, HelpCircle, Flame, Clock, ChefHat, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DietQuizProps {
  onCtaClick: () => void;
}

export default function DietQuiz({ onCtaClick }: DietQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const quizQuestions = [
    {
      question: "Qual é o seu maior obstáculo para manter uma alimentação saudável hoje?",
      options: [
        { id: "A", text: "Falta de tempo para cozinhar pratos elaborados", icon: "⏰" },
        { id: "B", text: "Achar comida fitness sem graça ou sem sabor", icon: "🤢" },
        { id: "C", text: "Dificuldade para organizar as marmitas da semana", icon: "🍱" },
        { id: "D", text: "Desejo incontrolável por doces e lanches à noite", icon: "🍩" },
      ]
    },
    {
      question: "Quanto tempo você gostaria de dedicar à preparação de cada refeição principal?",
      options: [
        { id: "A", text: "No máximo 10 a 15 minutos (receitas vapt-vupt)", icon: "⚡" },
        { id: "B", text: "Até 30 minutos, se for um prato muito saboroso", icon: "🍳" },
        { id: "C", text: "Prefiro tirar 1 dia para deixar tudo congelado para a semana", icon: "❄️" },
      ]
    },
    {
      question: "Qual ingrediente ou tipo de prato você mais sente falta em dietas restritivas?",
      options: [
        { id: "A", text: "Sobremesas saudáveis e bolos fit", icon: "🧁" },
        { id: "B", text: "Massas e molhos cremosos", icon: "🍝" },
        { id: "C", text: "Salgados práticos (coxinha fit, empada, wraps)", icon: "🥟" },
        { id: "D", text: "Grelhados super suculentos e bem temperados", icon: "🥩" },
      ]
    }
  ];

  const handleSelectOption = (optionId: string) => {
    const updatedAnswers = [...answers, optionId];
    setAnswers(updatedAnswers);

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Analyze stage
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        setShowResult(true);
      }, 2000);
    }
  };

  const getCustomRecommendation = () => {
    // Basic heuristic recommendation based on answers
    const hasTimeIssue = answers[0] === "A" || answers[1] === "A";
    const wantsSweets = answers[2] === "A" || answers[0] === "D";
    const wantsMealPrep = answers[0] === "C" || answers[1] === "C";

    if (wantsSweets) {
      return {
        title: "Perfil: Formiga Saudável (Foco em Doces Fit)",
        desc: "Você não precisa sofrer cortando o açúcar. Seu maior perigo é a restrição que gera compulsão alimentar à noite.",
        recipe: "Ninho Trufado Fit de Colher (15g de proteína, zero açúcar adicionado)",
        bonus: "Bônus Grátis incluído: Guia Completo de Doces e Sobremesas Low Carb!"
      };
    }

    if (hasTimeIssue) {
      return {
        title: "Perfil: Executivo Sem Tempo (Foco em Agilidade)",
        desc: "O seu segredo de sucesso são pratos de frigideira de até 12 minutos e ingredientes práticos de mercado que não exigem pré-preparo longo.",
        recipe: "Omelete Cremosa Suprema de Forno & Wrap Express de Frango Desfiado",
        bonus: "Bônus Grátis incluído: Planner de Compras Rápido para Supermercado!"
      };
    }

    if (wantsMealPrep) {
      return {
        title: "Perfil: Planejador Semanal (Foco em Marmitas/Marmita-Prepping)",
        desc: "O seu foco deve ser o preparo em lotes que duram até 5 dias na geladeira mantendo o frescor, a textura e os nutrientes sem ficar ressecado.",
        recipe: "Fricassê de Frango Fit para Marmita Congelável (Rendimento: 5 porções)",
        bonus: "Bônus Grátis incluído: Cronograma Detalhado de Preparo de Marmitas!"
      };
    }

    return {
      title: "Perfil: Gourmet Saudável (Foco em Sabor Intenso)",
      desc: "Você prioriza textura e temperos ricos. Pratos monótonos como frango com batata doce desanimam você rapidamente.",
      recipe: "Strogonoff Gourmet Light com Creme de Castanhas & Batata Rústica de Airfryer",
      bonus: "Bônus Grátis incluído: Livro Secreto de Molhos Saudáveis & Temperos Práticos!"
    };
  };

  const recommendation = getCustomRecommendation();

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  return (
    <section id="quiz" className="py-20 bg-brand-dark text-white overflow-hidden relative">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-green/20 text-brand-green border border-brand-green/30 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-orange animate-spin-slow" />
            Quiz Interativo de Personalização
          </div>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl leading-tight">
            Descubra Seu Perfil Nutricional e Receba um Diagnóstico
          </h2>
          <p className="text-gray-400 font-sans text-sm">
            Responda 3 perguntas simples e descubra qual categoria de receitas do nosso eBook é a ideal para acelerar os seus resultados sem passar fome.
          </p>
        </div>

        {/* Quiz Card */}
        <div className="bg-slate-900/60 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-10 shadow-2xl min-h-[400px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            
            {/* Analyzing state */}
            {isAnalyzing && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-16 text-center space-y-6 flex-1 flex flex-col items-center justify-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-4 border-brand-green/30 border-t-brand-green animate-spin" />
                  <ChefHat className="w-8 h-8 text-brand-orange absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-poppins font-bold text-lg text-white">Cruzando suas respostas com nosso banco de receitas...</h3>
                  <p className="text-xs text-gray-400 max-w-sm mx-auto">Calculando balanço calórico ideal, tempo estimado de preparo e os bônus mais adequados para a sua jornada.</p>
                </div>
              </motion.div>
            )}

            {/* Results Screen */}
            {showResult && !isAnalyzing && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-6 flex-1 flex flex-col justify-between"
              >
                <div className="text-center space-y-2">
                  <div className="inline-flex p-3 bg-brand-green/10 text-brand-green rounded-full border border-brand-green/20 mb-2">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <h3 className="font-poppins font-black text-2xl sm:text-3xl text-brand-green">{recommendation.title}</h3>
                  <p className="text-gray-300 text-sm max-w-xl mx-auto leading-relaxed">{recommendation.desc}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
                    <span className="text-[10px] font-bold text-brand-orange uppercase flex items-center gap-1">
                      <Flame className="w-3 h-3" /> Receita Sugerida Para Você
                    </span>
                    <h4 className="font-poppins font-bold text-sm text-white">{recommendation.recipe}</h4>
                    <p className="text-[11px] text-gray-400">Instruções passo a passo detalhadas e contagem de macros no eBook.</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
                    <span className="text-[10px] font-bold text-brand-green uppercase flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Seu Bônus Recomendado
                    </span>
                    <h4 className="font-poppins font-bold text-sm text-white">{recommendation.bonus}</h4>
                    <p className="text-[11px] text-gray-400">Entregue no seu e-mail imediatamente após a compra do eBook principal.</p>
                  </div>
                </div>

                <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    onClick={handleReset}
                    className="text-xs text-gray-400 hover:text-white underline transition-all font-semibold py-2 cursor-pointer"
                  >
                    Responder Novamente
                  </button>

                  <button
                    onClick={onCtaClick}
                    className="w-full sm:w-auto px-8 py-4 bg-brand-orange text-white font-poppins font-black text-sm rounded-2xl hover:bg-brand-orange-hover hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-orange-500/20"
                  >
                    Quero Meu eBook + Todos os Bônus por R$ 19,90
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Questions Steps */}
            {!showResult && !isAnalyzing && (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="space-y-6 flex-1 flex flex-col justify-between"
              >
                <div>
                  {/* Progress info */}
                  <div className="flex items-center justify-between text-xs font-bold text-brand-green uppercase mb-4 tracking-wider">
                    <span>Etapa {currentStep + 1} de {quizQuestions.length}</span>
                    <span>{Math.round(((currentStep + 1) / quizQuestions.length) * 100)}% Concluído</span>
                  </div>

                  <h3 className="font-poppins font-bold text-lg sm:text-xl text-white leading-snug">
                    {quizQuestions[currentStep].question}
                  </h3>
                </div>

                <div className="grid grid-cols-1 gap-3.5 py-4">
                  {quizQuestions[currentStep].options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(opt.id)}
                      className="w-full text-left p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-green/50 hover:bg-brand-green/5 transition-all flex items-center gap-4 group cursor-pointer"
                    >
                      <span className="text-2xl p-2 bg-white/[0.05] rounded-xl group-hover:scale-110 transition-transform">
                        {opt.icon}
                      </span>
                      <span className="font-sans font-medium text-sm text-gray-200 group-hover:text-white transition-colors">
                        {opt.text}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="text-center text-[11px] text-gray-500 flex items-center justify-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5" /> Respostas 100% anônimas. Sem spam ou cadastros chatos.
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
