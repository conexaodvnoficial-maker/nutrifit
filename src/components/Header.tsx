import { useState, useEffect } from "react";
import { BookOpen, ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  checkoutUrl: string;
}

export default function Header({ checkoutUrl }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Background opacity change
      setIsScrolled(window.scrollY > 20);

      // Scroll progress bar
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div 
        id="reading-progress-bar"
        className="fixed top-0 left-0 right-0 h-1 bg-brand-green z-50 transition-all duration-100 origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/80 dark:bg-brand-dark/80 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-white/5 py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 cursor-pointer group"
            >
              <div className="p-2 bg-brand-green/10 rounded-xl group-hover:bg-brand-green/20 transition-colors">
                <BookOpen className="w-5 h-5 text-brand-green" />
              </div>
              <span className="font-poppins font-bold text-lg sm:text-xl tracking-tight text-brand-dark dark:text-white">
                Nutri<span className="text-brand-green">Fit</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection("desafios")} 
                className="text-sm font-medium text-gray-600 hover:text-brand-green dark:text-gray-300 dark:hover:text-brand-green transition-colors cursor-pointer"
              >
                Desafios
              </button>
              <button 
                onClick={() => scrollToSection("beneficios")} 
                className="text-sm font-medium text-gray-600 hover:text-brand-green dark:text-gray-300 dark:hover:text-brand-green transition-colors cursor-pointer"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection("categorias")} 
                className="text-sm font-medium text-gray-600 hover:text-brand-green dark:text-gray-300 dark:hover:text-brand-green transition-colors cursor-pointer"
              >
                O que Inclui
              </button>
              <button 
                onClick={() => scrollToSection("galeria")} 
                className="text-sm font-medium text-gray-600 hover:text-brand-green dark:text-gray-300 dark:hover:text-brand-green transition-colors cursor-pointer"
              >
                Receitas
              </button>
              <button 
                onClick={() => scrollToSection("depoimentos")} 
                className="text-sm font-medium text-gray-600 hover:text-brand-green dark:text-gray-300 dark:hover:text-brand-green transition-colors cursor-pointer"
              >
                Avaliações
              </button>
              <button 
                onClick={() => scrollToSection("faq")} 
                className="text-sm font-medium text-gray-600 hover:text-brand-green dark:text-gray-300 dark:hover:text-brand-green transition-colors cursor-pointer"
              >
                FAQ
              </button>
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-brand-orange text-white font-poppins font-semibold text-sm shadow-sm hover:bg-brand-orange-hover hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group cursor-pointer"
              >
                Comprar Agora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-30 md:hidden bg-white/95 dark:bg-brand-dark/95 backdrop-blur-lg border-b border-gray-100 dark:border-white/5 shadow-lg p-6 flex flex-col gap-4"
          >
            <button 
              onClick={() => scrollToSection("desafios")} 
              className="text-left py-2 font-medium text-gray-800 dark:text-gray-200 hover:text-brand-green transition-colors"
            >
              Desafios
            </button>
            <button 
              onClick={() => scrollToSection("beneficios")} 
              className="text-left py-2 font-medium text-gray-800 dark:text-gray-200 hover:text-brand-green transition-colors"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection("categorias")} 
              className="text-left py-2 font-medium text-gray-800 dark:text-gray-200 hover:text-brand-green transition-colors"
            >
              O que Inclui
            </button>
            <button 
              onClick={() => scrollToSection("galeria")} 
              className="text-left py-2 font-medium text-gray-800 dark:text-gray-200 hover:text-brand-green transition-colors"
            >
              Receitas
            </button>
            <button 
              onClick={() => scrollToSection("depoimentos")} 
              className="text-left py-2 font-medium text-gray-800 dark:text-gray-200 hover:text-brand-green transition-colors"
            >
              Avaliações
            </button>
            <button 
              onClick={() => scrollToSection("faq")} 
              className="text-left py-2 font-medium text-gray-800 dark:text-gray-200 hover:text-brand-green transition-colors"
            >
              Perguntas Frequentes
            </button>

            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3.5 rounded-xl bg-brand-orange text-white font-poppins font-semibold shadow-md hover:bg-brand-orange-hover transition-colors flex items-center justify-center gap-2 mt-2"
            >
              Comprar Agora
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
