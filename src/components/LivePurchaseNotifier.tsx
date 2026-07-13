import { useState, useEffect } from "react";
import { ShoppingBag, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NotificationItem {
  id: number;
  name: string;
  city: string;
  state: string;
  time: string;
  product: string;
}

const PURCHASES_LIST: Omit<NotificationItem, "id">[] = [
  { name: "Juliana S.", city: "São Paulo", state: "SP", time: "há 2 minutos", product: "Garante o eBook + 4 Bônus" },
  { name: "Carlos Henrique R.", city: "Rio de Janeiro", state: "RJ", time: "há 45 segundos", product: "Adquiriu com o Planner Semanal" },
  { name: "Ana Beatriz M.", city: "Belo Horizonte", state: "MG", time: "há 3 minutos", product: "Aproveitou a promoção de R$ 19,90" },
  { name: "Mateus O.", city: "Porto Alegre", state: "RS", time: "há 1 minuto", product: "Garante o eBook + 4 Bônus" },
  { name: "Gabriela F.", city: "Salvador", state: "BA", time: "há 5 minutos", product: "Adquiriu com o Planner Semanal" },
  { name: "Rodrigo P.", city: "Brasília", state: "DF", time: "há 12 segundos", product: "Aproveitou a promoção de R$ 19,90" },
  { name: "Patricia K.", city: "Curitiba", state: "PR", time: "há 4 minutos", product: "Garante o eBook + 4 Bônus" },
  { name: "Lucas T.", city: "Fortaleza", state: "CE", time: "há 2 minutos", product: "Adquiriu com o Planner Semanal" },
];

export default function LivePurchaseNotifier() {
  const [currentNotification, setCurrentNotification] = useState<NotificationItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Show first notification after 6 seconds
    const initialTimeout = setTimeout(() => {
      showNextNotification();
    }, 6000);

    return () => clearTimeout(initialTimeout);
  }, []);

  useEffect(() => {
    if (currentNotification) {
      // Auto-hide after 5 seconds
      const hideTimeout = setTimeout(() => {
        setCurrentNotification(null);
      }, 5000);

      // Trigger next one 15 seconds after the current one finishes
      const nextTimeout = setTimeout(() => {
        showNextNotification();
      }, 20000);

      return () => {
        clearTimeout(hideTimeout);
        clearTimeout(nextTimeout);
      };
    }
  }, [currentNotification]);

  const showNextNotification = () => {
    const rawItem = PURCHASES_LIST[currentIndex];
    setCurrentNotification({
      id: Date.now(),
      ...rawItem,
    });
    setCurrentIndex((prevIndex) => (prevIndex + 1) % PURCHASES_LIST.length);
  };

  if (!currentNotification) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, x: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="fixed bottom-6 left-6 z-50 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-white/5 p-4 max-w-sm flex items-center gap-3.5"
      >
        <div className="w-10 h-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
          <ShoppingBag className="w-5 h-5 animate-bounce-slow" />
        </div>

        <div className="flex-1 min-w-0 pr-4">
          <p className="font-sans font-bold text-xs text-slate-800 dark:text-white leading-tight">
            {currentNotification.name} <span className="font-normal text-gray-400">({currentNotification.city} - {currentNotification.state})</span>
          </p>
          <p className="font-poppins font-semibold text-[11px] text-brand-green mt-0.5">
            {currentNotification.product}
          </p>
          <p className="font-sans text-[10px] text-gray-400 mt-1">
            {currentNotification.time}
          </p>
        </div>

        <button
          onClick={() => setCurrentNotification(null)}
          className="text-gray-300 hover:text-gray-500 p-1 cursor-pointer transition-colors shrink-0"
          aria-label="Fechar notificação"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
