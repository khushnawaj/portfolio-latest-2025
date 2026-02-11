import { motion, AnimatePresence } from "framer-motion";
import { FiCheck } from "react-icons/fi";

export default function Toast({ message, isVisible }) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    className="
            fixed bottom-24 right-8 z-50
            px-6 py-3 rounded-lg shadow-xl
            bg-gray-900 text-white
            dark:bg-white dark:text-gray-900
            flex items-center gap-3
            font-medium
          "
                >
                    <FiCheck className="text-green-500 dark:text-green-600" size={20} />
                    {message}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
