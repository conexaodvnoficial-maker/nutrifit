import React, { useState, FormEvent } from "react";
import { INITIAL_TESTIMONIALS } from "../data";
import { TestimonialItem } from "../types";
import { Star, MessageSquareCode, Plus, User, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(INITIAL_TESTIMONIALS);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  // Form states
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newRating, setNewRating] = useState(5);

  const handleSubmitReview = (e: FormEvent) => {
    e.preventDefault();
    if (!newName || !newContent) return;

    const newTestimonial: TestimonialItem = {
      id: `custom-test-${Date.now()}`,
      name: newName,
      role: newRole || "Cliente Satisfeito",
      content: newContent,
      rating: newRating,
      date: "Recentemente",
      avatarUrl: "" // Will trigger placeholder
    };

    setTestimonials([newTestimonial, ...testimonials]);
    
    // Reset form
    setNewName("");
    setNewRole("");
    setNewContent("");
    setNewRating(5);
    setIsFormOpen(false);
    
    // Trigger Success feedback
    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 5000);
  };

  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Comentários e Resultados</span>
            <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-brand-dark leading-tight">
              O que dizem as pessoas que já experimentaram nossas receitas
            </h2>
            <p className="text-gray-500 font-sans text-base">
              Espaço reservado para avaliações reais de clientes. Veja as opiniões de quem já baixou e transformou a rotina na cozinha:
            </p>
          </div>

          <button
            onClick={() => setIsFormOpen(true)}
            className="self-start md:self-auto px-5 py-3 rounded-xl bg-brand-green/10 text-brand-green font-poppins font-bold text-sm hover:bg-brand-green hover:text-white transition-all flex items-center gap-2 group cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
            Enviar Minha Avaliação
          </button>
        </div>

        {/* Success Alert */}
        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-emerald-50 border border-emerald-200 text-brand-green p-4 rounded-xl mb-8 flex items-center gap-3 text-sm font-medium"
            >
              <Check className="w-5 h-5 shrink-0" />
              <span>Obrigado! Sua avaliação foi adicionada com sucesso e está visível abaixo na simulação.</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid of Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 relative group"
            >
              <div className="space-y-4">
                {/* Stars and Date */}
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < test.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-400 font-sans">{test.date}</span>
                </div>

                {/* Content */}
                <p className="text-gray-600 text-sm leading-relaxed font-sans italic">
                  &ldquo;{test.content}&rdquo;
                </p>
              </div>

              {/* Client Info Block */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
                {test.avatarUrl ? (
                  <img
                    src={test.avatarUrl}
                    alt={test.name}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-gray-100"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                )}
                
                <div>
                  <h4 className="font-poppins font-bold text-sm text-brand-dark">{test.name}</h4>
                  <p className="text-xs text-gray-400">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal form to write a new review */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-brand-dark/60 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setIsFormOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-gray-100 space-y-6"
              >
                {/* Form Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div>
                    <h3 className="font-poppins font-extrabold text-lg text-brand-dark">Enviar Sua Avaliação</h3>
                    <p className="text-xs text-gray-500">Ajude outras pessoas a comerem melhor.</p>
                  </div>
                  <button
                    onClick={() => setIsFormOpen(false)}
                    className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Seu Nome completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Mariana Costa"
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-sans focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green/35 bg-gray-50/50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Profissão / Ocupação</label>
                    <input
                      type="text"
                      placeholder="Ex: Designer de Interiores"
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-sans focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green/35 bg-gray-50/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-700 block">Classificação (Estrelas)</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className="text-amber-400 p-0.5 hover:scale-110 transition-transform cursor-pointer"
                        >
                          <Star className={`w-6 h-6 ${star <= newRating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-700 block">Sua opinião / comentário *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Conte sua experiência com o eBook, quais receitas você mais gostou ou como ele facilitou a sua rotina..."
                      value={newContent}
                      onChange={(e) => setNewContent(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm font-sans focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green/35 bg-gray-50/50 resize-none"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="pt-4 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="flex-1 py-3 rounded-xl border border-gray-200 font-poppins font-semibold text-sm text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-xl bg-brand-green text-white font-poppins font-bold text-sm hover:bg-brand-green-hover shadow-md transition-colors cursor-pointer"
                    >
                      Salvar Avaliação
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
