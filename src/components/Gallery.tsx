import { useState } from "react";
import { RECIPES } from "../data";
import { RecipeItem } from "../types";
import { Clock, Flame, X, Check, ChevronRight, Scale, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Gallery() {
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("Todas");

  const categories = ["Todas", "Café da Manhã", "Almoço", "Jantar", "Lanches", "Sobremesas"];

  const filteredRecipes = filterCategory === "Todas"
    ? RECIPES
    : RECIPES.filter(recipe => recipe.category.toLowerCase().includes(filterCategory.split(" ")[0].toLowerCase()));

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-green">Prova Visual</span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-slate-900 leading-tight">
            Refeições reais, bonitas e apetitosas
          </h2>
          <p className="text-slate-600 font-sans text-base">
            Navegue pelas categorias abaixo e confira o aspecto das nossas receitas para cada momento do seu dia. Clique em qualquer prato para ver ingredientes e modo de preparo:
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-poppins font-semibold transition-all cursor-pointer ${
                filterCategory === cat
                  ? "bg-brand-green text-white shadow-md shadow-brand-green/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Recipes Grid / Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredRecipes.map((recipe) => (
              <motion.div
                key={recipe.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedRecipe(recipe)}
                className="group bg-slate-50/70 rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 cursor-pointer flex flex-col h-full"
              >
                {/* Image Wrap */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {recipe.category}
                  </span>

                  {/* Hover icon indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-brand-green text-white font-poppins font-semibold text-xs px-4 py-2.5 rounded-full flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-4 h-4" /> Ver Receita
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-poppins font-bold text-lg text-slate-900 group-hover:text-brand-green transition-colors leading-snug">
                      {recipe.title}
                    </h3>
                    
                    {/* Specs strip */}
                    <div className="flex gap-4 text-xs text-slate-500 font-sans">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" /> {recipe.prepTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-slate-400" /> {recipe.calories}
                      </span>
                    </div>
                  </div>

                  {/* Macros Preview */}
                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex gap-3">
                      <div>
                        <span className="text-[10px] uppercase text-gray-400 block font-semibold">Prot</span>
                        <span className="text-xs font-bold text-brand-dark">{recipe.macros.protein}</span>
                      </div>
                      <div className="border-l border-gray-100 pl-3">
                        <span className="text-[10px] uppercase text-gray-400 block font-semibold">Carb</span>
                        <span className="text-xs font-bold text-brand-dark">{recipe.macros.carbs}</span>
                      </div>
                      <div className="border-l border-gray-100 pl-3">
                        <span className="text-[10px] uppercase text-gray-400 block font-semibold">Gord</span>
                        <span className="text-xs font-bold text-brand-dark">{recipe.macros.fat}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:translate-x-1 group-hover:text-brand-green transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Recipe Lightbox Detail modal */}
        <AnimatePresence>
          {selectedRecipe && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-brand-dark/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
              onClick={() => setSelectedRecipe(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl border border-white/10 flex flex-col"
              >
                {/* Header Image section */}
                <div className="relative h-64 sm:h-80 shrink-0">
                  <img
                    src={selectedRecipe.imageUrl}
                    alt={selectedRecipe.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedRecipe(null)}
                    className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Title metadata on cover */}
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <span className="bg-brand-green text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {selectedRecipe.category}
                    </span>
                    <h3 className="font-poppins font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                      {selectedRecipe.title}
                    </h3>
                  </div>
                </div>

                {/* Content body (Scrollable) */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
                  {/* Specs & Macros Strip */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                    <div>
                      <span className="text-[10px] sm:text-xs text-gray-400 font-medium block">Preparo</span>
                      <strong className="text-sm sm:text-base text-brand-dark flex items-center justify-center gap-1">
                        <Clock className="w-4 h-4 text-brand-green" /> {selectedRecipe.prepTime}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs text-gray-400 font-medium block">Calorias</span>
                      <strong className="text-sm sm:text-base text-brand-dark flex items-center justify-center gap-1">
                        <Flame className="w-4 h-4 text-brand-green" /> {selectedRecipe.calories}
                      </strong>
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs text-gray-400 font-medium block">Macros por Porção</span>
                      <strong className="text-xs sm:text-sm text-brand-dark flex items-center justify-center gap-1 mt-0.5">
                        <Scale className="w-4 h-4 text-brand-green" /> {selectedRecipe.macros.protein} Prot | {selectedRecipe.macros.carbs} Carb
                      </strong>
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-xs text-gray-400 font-medium block">Gordura Saudável</span>
                      <strong className="text-sm sm:text-base text-brand-dark mt-0.5 block">
                        {selectedRecipe.macros.fat}
                      </strong>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Ingredients Column */}
                    <div className="md:col-span-5 space-y-4">
                      <h4 className="font-poppins font-extrabold text-base text-brand-dark border-b border-gray-100 pb-2">
                        Ingredientes Necessários
                      </h4>
                      <ul className="space-y-3">
                        {selectedRecipe.ingredients.map((ing, i) => (
                          <li key={i} className="flex gap-3 text-sm text-gray-600 font-sans">
                            <Check className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                            <span>{ing}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Instructions Column */}
                    <div className="md:col-span-7 space-y-4">
                      <h4 className="font-poppins font-extrabold text-base text-brand-dark border-b border-gray-100 pb-2">
                        Instruções de Preparo
                      </h4>
                      <ol className="space-y-4">
                        {selectedRecipe.instructions.map((step, i) => (
                          <li key={i} className="flex gap-4 text-sm text-gray-600 font-sans">
                            <span className="w-6 h-6 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold flex items-center justify-center shrink-0">
                              {i + 1}
                            </span>
                            <span className="leading-relaxed">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>

                {/* Footer conversion prompt */}
                <div className="bg-gray-50 p-4 sm:p-6 shrink-0 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-xs text-gray-500">Gostou desse preparo prático?</p>
                    <p className="text-sm font-bold text-brand-dark">Acesse mais 150 opções no livro completo!</p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedRecipe(null);
                      const offer = document.getElementById("oferta");
                      if (offer) offer.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-brand-orange text-white text-xs sm:text-sm font-poppins font-bold shadow-md hover:bg-brand-orange-hover transition-colors cursor-pointer"
                  >
                    Adquirir eBook Completo
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
