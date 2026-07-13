import { useState, useEffect } from "react";
import { ArrowUp, ShoppingCart, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Challenges from "./components/Challenges";
import Solution from "./components/Solution";
import BookPreviewer from "./components/BookPreviewer";
import ConversionCalculator from "./components/ConversionCalculator";
import Categories from "./components/Categories";
import Gallery from "./components/Gallery";
import Bonuses from "./components/Bonuses";
import DietQuiz from "./components/DietQuiz";
import Benefits from "./components/Benefits";
import Guarantee from "./components/Guarantee";
import Testimonials from "./components/Testimonials";
import Offer from "./components/Offer";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LivePurchaseNotifier from "./components/LivePurchaseNotifier";

// CONFIGURAÇÃO DO CHECKOUT - Substitua facilmente por seu link real da Kiwify ou outra plataforma
const KIWIFY_CHECKOUT_URL = "https://pay.kiwify.com.br/fSj6vn2"; 

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToOffer = () => {
    const element = document.getElementById("oferta");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="app-container" className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-brand-green selection:text-white">
      
      {/* 1. Header (Sticky Glass Header with Reading Progress) */}
      <Header checkoutUrl={KIWIFY_CHECKOUT_URL} />

      {/* 2. Hero Section (Conversion Hook with 3D Book Cover & Badges) */}
      <Hero onCtaClick={scrollToOffer} />

      {/* 3. Challenges Section (Addressing common fitness pain points) */}
      <Challenges />

      {/* 4. Solution Section (How our eBook cures all cook friction) */}
      <Solution />

      {/* eBook Live Visual Preview (Browse inside the book) */}
      <section className="py-20 bg-slate-50 border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-green">Degustação Grátis</span>
              <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-brand-dark leading-tight">
                Dê uma espiada exclusiva por dentro do nosso eBook!
              </h2>
              <p className="text-gray-500 font-sans text-base leading-relaxed">
                Nós confiamos tanto na qualidade visual e no conteúdo prático do nosso livro digital que liberamos uma demonstração interativa para você folhear agora mesmo. Veja como as receitas são organizadas e fáceis de ler!
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <span className="w-5 h-5 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-semibold text-gray-700">Tabelas de Macros & Calorias exatas</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <span className="w-5 h-5 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-semibold text-gray-700">Instruções de preparo direto ao ponto</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <span className="w-5 h-5 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-sm font-semibold text-gray-700">Dicas secretas de conservação em todas as páginas</span>
                </div>
              </div>
              <div className="pt-4">
                <button
                  onClick={scrollToOffer}
                  className="px-6 py-3.5 bg-brand-orange text-white font-poppins font-bold text-sm rounded-xl hover:bg-brand-orange-hover transition-all inline-flex items-center gap-2 cursor-pointer shadow-lg shadow-orange-500/10"
                >
                  Quero Garantir Meu eBook Completo
                </button>
              </div>
            </div>
            <div className="lg:col-span-6">
              <BookPreviewer />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Savings & Macro Calculator Section */}
      <ConversionCalculator onCtaClick={scrollToOffer} />

      {/* 5. What's Included (Inside structure / Premium Categories layout) */}
      <Categories />

      {/* 6. Gallery Section (Recipe Carousels and Full interactive Lightbox details) */}
      <Gallery />

      {/* 7. Extra Bonuses Section (Planner, Shopping List, Food prep schedule) */}
      <Bonuses />

      {/* Personalized Nutrition Profile Quiz */}
      <DietQuiz onCtaClick={scrollToOffer} />

      {/* 8. Extra Benefits Grid (Portable formats, instant email deliver) */}
      <Benefits />

      {/* 9. Satisfaction Guarantee Section (Rotating trust seal, secure payment notes) */}
      <Guarantee />

      {/* 10. Client Testimonials (Active reviews layout + Custom customer form submission) */}
      <Testimonials />

      {/* 11. Core Offer Table (Scarcity countdown, old price anchor, enormous glow CTA) */}
      <Offer checkoutUrl={KIWIFY_CHECKOUT_URL} />

      {/* 12. Accordion FAQ (Expandable queries with smooth motion) */}
      <FAQ />

      {/* 13. Closing CTA Final Block & Document Footer */}
      <Footer checkoutUrl={KIWIFY_CHECKOUT_URL} />

      {/* Premium Floating Actions (WhatsApp/Buy FAB and Scroll-to-Top combined) */}
      <AnimatePresence>
        {showScrollTop && (
          <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
            
            {/* Direct Buy FAB */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToOffer}
              className="p-4 bg-brand-orange text-white rounded-full shadow-lg hover:bg-brand-orange-hover hover:scale-110 active:scale-95 transition-all glow-orange cursor-pointer"
              aria-label="Ir para Oferta"
            >
              <ShoppingCart className="w-5 h-5" />
            </motion.button>

            {/* Scroll back to top FAB */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-4 bg-brand-dark/90 text-white rounded-full shadow-lg hover:bg-brand-dark hover:scale-110 active:scale-95 transition-all cursor-pointer border border-white/5"
              aria-label="Voltar ao Topo"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>

          </div>
        )}
      </AnimatePresence>

      {/* Live purchase notifications for strong social proof (CRO) */}
      <LivePurchaseNotifier />

    </div>
  );
}
