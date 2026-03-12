import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiXCircle, FiInfo } from "react-icons/fi";

export default function Toast({ message, isVisible, type = "success" }) {
    const icons = {
        success: <FiCheck className="text-emerald-500" size={20} />,
        error: <FiXCircle className="text-rose-500" size={20} />,
        info: <FiInfo className="text-cyan-500" size={20} />
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    className="
                        fixed bottom-8 sm:bottom-12 right-4 sm:right-8 z-[100]
                        px-5 py-3.5 rounded-xl shadow-2xl backdrop-blur-md
                        bg-white/90 dark:bg-gray-900/90 
                        border border-gray-200 dark:border-white/10
                        text-gray-900 dark:text-white
                        flex items-center gap-3
                        font-semibold text-sm
                    "
                >
                    {icons[type] || icons.success}
                    {message}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
