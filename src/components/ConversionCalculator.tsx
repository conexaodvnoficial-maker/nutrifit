import { useState } from "react";
import { Calculator, Flame, Scale, Sparkles, Trophy, ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ConversionCalculatorProps {
  onCtaClick: () => void;
}

export default function ConversionCalculator({ onCtaClick }: ConversionCalculatorProps) {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState<"male" | "female">("female");
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(165);
  const [age, setAge] = useState(30);
  const [goal, setGoal] = useState<"loss" | "muscle" | "health">("loss");
  const [activity, setActivity] = useState<"sedentary" | "moderate" | "active">("moderate");

  // Calculated results
  const [bmr, setBmr] = useState(0);
  const [tdee, setTdee] = useState(0);
  const [targetCalories, setTargetCalories] = useState(0);
  const [macros, setMacros] = useState({ protein: 0, carbs: 0, fat: 0 });

  const handleCalculate = () => {
    // Mifflin-St Jeor Equation
    let calculatedBmr = 0;
    if (gender === "male") {
      calculatedBmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      calculatedBmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Activity Multiplier
    let multiplier = 1.2;
    if (activity === "moderate") multiplier = 1.45;
    if (activity === "active") multiplier = 1.725;

    const calculatedTdee = Math.round(calculatedBmr * multiplier);
    
    // Goal Adjustment
    let targetCals = calculatedTdee;
    if (goal === "loss") targetCals = Math.round(calculatedTdee - 450);
    if (goal === "muscle") targetCals = Math.round(calculatedTdee + 300);

    // Minimum safe calories
    if (targetCals < 1200) targetCals = 1200;

    // Macro distribution based on goal
    let pRatio = 0.3; // 30% protein
    let cRatio = 0.45; // 45% carbs
    let fRatio = 0.25; // 25% fat

    if (goal === "loss") {
      pRatio = 0.35; // Higher protein for satiety
      cRatio = 0.35; // Lower carb
      fRatio = 0.30;
    } else if (goal === "muscle") {
      pRatio = 0.30;
      cRatio = 0.50; // Higher carbs for energy
      fRatio = 0.20;
    }

    const proteinGrams = Math.round((targetCals * pRatio) / 4);
    const carbsGrams = Math.round((targetCals * cRatio) / 4);
    const fatGrams = Math.round((targetCals * fRatio) / 9);

    setBmr(Math.round(calculatedBmr));
    setTdee(calculatedTdee);
    setTargetCalories(targetCals);
    setMacros({ protein: proteinGrams, carbs: carbsGrams, fat: fatGrams });
    setStep(3);
  };

  return (
    <section id="calculadora" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Glow Effects */}
        <div className="absolute top-[10%] right-[-10%] w-[350px] h-[350px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Ferramenta Interativa de Alta Conversão</span>
          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-brand-dark leading-tight">
            Descubra suas Metas Calóricas e Macronutrientes em 30 segundos
          </h2>
          <p className="text-gray-500 font-sans text-base">
            Antes de começar a cozinhar, você precisa saber o quanto seu corpo precisa. Use o nosso simulador inteligente de macros e veja quais receitas do eBook se encaixam na sua meta!
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden min-h-[480px] flex flex-col">
          
          {/* Progress Header Indicator */}
          <div className="bg-gray-50 border-b border-gray-100 p-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-brand-green" />
              <span className="font-poppins font-bold text-sm text-brand-dark">Calculadora Nutrifit Personalizada</span>
            </div>
            <div className="flex items-center gap-1">
              <span className={`w-2.5 h-2.5 rounded-full transition-colors ${step >= 1 ? "bg-brand-green" : "bg-gray-200"}`} />
              <span className={`w-2.5 h-2.5 rounded-full transition-colors ${step >= 2 ? "bg-brand-green" : "bg-gray-200"}`} />
              <span className={`w-2.5 h-2.5 rounded-full transition-colors ${step >= 3 ? "bg-brand-green" : "bg-gray-200"}`} />
            </div>
          </div>

          <div className="p-6 sm:p-10 flex-1 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: Basic Info */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 flex-1 flex flex-col justify-center"
                >
                  <h3 className="font-poppins font-bold text-lg sm:text-xl text-brand-dark text-center">
                    Primeiro, nos conte sobre você:
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setGender("female")}
                      className={`p-4 rounded-2xl border font-poppins font-bold text-sm transition-all cursor-pointer flex flex-col items-center gap-2 ${
                        gender === "female"
                          ? "border-brand-green bg-brand-green/5 text-brand-green"
                          : "border-gray-200 text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-2xl">👩‍♀️</span>
                      Mulher
                    </button>
                    <button
                      onClick={() => setGender("male")}
                      className={`p-4 rounded-2xl border font-poppins font-bold text-sm transition-all cursor-pointer flex flex-col items-center gap-2 ${
                        gender === "male"
                          ? "border-brand-green bg-brand-green/5 text-brand-green"
                          : "border-gray-200 text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-2xl">👨‍💻</span>
                      Homem
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-600 block">Idade (anos)</label>
                      <div className="flex items-center border border-gray-200 rounded-xl px-3 bg-gray-50">
                        <input
                          type="number"
                          value={age}
                          onChange={(e) => setAge(Math.max(1, parseInt(e.target.value) || 0))}
                          className="w-full bg-transparent py-3 text-sm focus:outline-none font-semibold text-brand-dark"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-600 block">Peso Atual (kg)</label>
                      <div className="flex items-center border border-gray-200 rounded-xl px-3 bg-gray-50">
                        <input
                          type="number"
                          value={weight}
                          onChange={(e) => setWeight(Math.max(1, parseInt(e.target.value) || 0))}
                          className="w-full bg-transparent py-3 text-sm focus:outline-none font-semibold text-brand-dark"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-600 block">Altura (cm)</label>
                      <div className="flex items-center border border-gray-200 rounded-xl px-3 bg-gray-50">
                        <input
                          type="number"
                          value={height}
                          onChange={(e) => setHeight(Math.max(1, parseInt(e.target.value) || 0))}
                          className="w-full bg-transparent py-3 text-sm focus:outline-none font-semibold text-brand-dark"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => setStep(2)}
                      className="px-6 py-3.5 bg-brand-green text-white font-poppins font-bold text-sm rounded-xl hover:bg-brand-green-hover transition-all flex items-center gap-2 group cursor-pointer"
                    >
                      Próximo Passo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Goal & Activity Level */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6 flex-1 flex flex-col justify-center"
                >
                  <h3 className="font-poppins font-bold text-lg sm:text-xl text-brand-dark text-center">
                    Qual é o seu objetivo principal?
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <button
                      onClick={() => setGoal("loss")}
                      className={`p-5 rounded-2xl border font-poppins font-bold text-sm text-left transition-all cursor-pointer flex flex-col justify-between h-32 ${
                        goal === "loss"
                          ? "border-brand-green bg-brand-green/5 text-brand-green"
                          : "border-gray-200 text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-2xl">🔥</span>
                      <div>
                        <p className="font-bold text-sm block">Emagrecer</p>
                        <span className="text-[10px] text-gray-400 font-normal">Perder gordura sem perder massa</span>
                      </div>
                    </button>

                    <button
                      onClick={() => setGoal("muscle")}
                      className={`p-5 rounded-2xl border font-poppins font-bold text-sm text-left transition-all cursor-pointer flex flex-col justify-between h-32 ${
                        goal === "muscle"
                          ? "border-brand-green bg-brand-green/5 text-brand-green"
                          : "border-gray-200 text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-2xl">💪</span>
                      <div>
                        <p className="font-bold text-sm block">Ganhar Massa</p>
                        <span className="text-[10px] text-gray-400 font-normal">Desenvolver definição e força</span>
                      </div>
                    </button>

                    <button
                      onClick={() => setGoal("health")}
                      className={`p-5 rounded-2xl border font-poppins font-bold text-sm text-left transition-all cursor-pointer flex flex-col justify-between h-32 ${
                        goal === "health"
                          ? "border-brand-green bg-brand-green/5 text-brand-green"
                          : "border-gray-200 text-gray-500 hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-2xl">🥗</span>
                      <div>
                        <p className="font-bold text-sm block">Saúde & Bem-estar</p>
                        <span className="text-[10px] text-gray-400 font-normal">Alimentação balanceada diária</span>
                      </div>
                    </button>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-gray-600 block">Nível de Atividade Física Diária</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setActivity("sedentary")}
                        className={`py-2.5 rounded-lg border text-xs font-semibold font-poppins cursor-pointer transition-all ${
                          activity === "sedentary"
                            ? "bg-brand-dark text-white border-brand-dark"
                            : "bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100"
                        }`}
                      >
                        Sedentário
                      </button>
                      <button
                        type="button"
                        onClick={() => setActivity("moderate")}
                        className={`py-2.5 rounded-lg border text-xs font-semibold font-poppins cursor-pointer transition-all ${
                          activity === "moderate"
                            ? "bg-brand-dark text-white border-brand-dark"
                            : "bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100"
                        }`}
                      >
                        Moderado (1-3x por semana)
                      </button>
                      <button
                        type="button"
                        onClick={() => setActivity("active")}
                        className={`py-2.5 rounded-lg border text-xs font-semibold font-poppins cursor-pointer transition-all ${
                          activity === "active"
                            ? "bg-brand-dark text-white border-brand-dark"
                            : "bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100"
                        }`}
                      >
                        Muito Ativo (Treina pesado)
                      </button>
                    </div>
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    <button
                      onClick={() => setStep(1)}
                      className="px-4 py-2 text-gray-500 hover:text-brand-dark font-poppins font-semibold text-sm flex items-center gap-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" /> Voltar
                    </button>
                    
                    <button
                      onClick={handleCalculate}
                      className="px-6 py-3.5 bg-brand-green text-white font-poppins font-bold text-sm rounded-xl hover:bg-brand-green-hover transition-all flex items-center gap-2 group cursor-pointer shadow-lg shadow-green-500/10"
                    >
                      Calcular Meus Resultados
                      <Sparkles className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Results & Ultra CRO Hook */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 flex-1 flex flex-col justify-center text-center"
                >
                  <div className="mx-auto w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mb-2">
                    <Trophy className="w-6 h-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-poppins font-black text-xl sm:text-2xl text-brand-dark leading-tight">
                      Seu Diagnóstico Nutricional Completo:
                    </h3>
                    <p className="text-xs text-gray-500">Com base nos dados fornecidos de {weight}kg e {age} anos</p>
                  </div>

                  {/* Calories & Macros Display */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="bg-brand-green/5 border border-brand-green/10 rounded-2xl p-4">
                      <span className="text-[10px] font-bold text-gray-500 uppercase block">Calorias Recomendadas</span>
                      <strong className="text-2xl font-black font-poppins text-brand-green">{targetCalories} kcal</strong>
                      <span className="text-[9px] text-gray-400 block mt-0.5">Sua meta diária</span>
                    </div>

                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">
                      <span className="text-[10px] font-bold text-gray-500 uppercase block">Proteínas Diárias</span>
                      <strong className="text-xl font-bold font-poppins text-brand-dark">{macros.protein}g</strong>
                      <span className="text-[9px] text-gray-400 block mt-0.5">Para manter músculos</span>
                    </div>

                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">
                      <span className="text-[10px] font-bold text-gray-500 uppercase block">Carboidratos</span>
                      <strong className="text-xl font-bold font-poppins text-brand-dark">{macros.carbs}g</strong>
                      <span className="text-[9px] text-gray-400 block mt-0.5">Para fornecer energia</span>
                    </div>

                    <div className="bg-gray-50 border border-gray-100 rounded-2xl p-4">
                      <span className="text-[10px] font-bold text-gray-500 uppercase block">Gorduras Saudáveis</span>
                      <strong className="text-xl font-bold font-poppins text-brand-dark">{macros.fat}g</strong>
                      <span className="text-[9px] text-gray-400 block mt-0.5">Para controle hormonal</span>
                    </div>
                  </div>

                  {/* Customized Conversion hook */}
                  <div className="bg-gradient-to-r from-brand-green/5 to-emerald-500/5 border border-brand-green/10 rounded-3xl p-6 text-left space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="text-xl shrink-0">💡</span>
                      <div>
                        <h4 className="font-poppins font-bold text-sm text-brand-dark">Como alcançar esses números de forma gostosa?</h4>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                          No nosso <strong>eBook de 150+ Receitas Fitness</strong>, todas as opções contêm a contagem de calorias e macros exata. Você só precisa combinar 3 a 4 das nossas receitas fáceis de 15 minutos para bater exatamente esses <strong className="text-brand-green">{targetCalories} kcal</strong> calculados!
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                      <button
                        onClick={onCtaClick}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-orange text-white font-poppins font-bold text-sm shadow-md hover:bg-brand-orange-hover hover:scale-[1.02] transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
                      >
                        Adquirir o eBook de R$ 19,90 agora
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setStep(1)}
                        className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1 font-semibold py-2 cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" /> Recalcular dados
                      </button>
                    </div>
                  </div>

                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
