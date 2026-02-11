import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    onClick={scrollToTop}
                    className="
            fixed bottom-8 right-8 z-50
            p-3 rounded-full shadow-lg
            bg-cyan-600 text-white
            hover:bg-cyan-700 hover:shadow-xl
            dark:bg-cyan-500 dark:hover:bg-cyan-600
            transition-all duration-300
            group
          "
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FiArrowUp size={20} className="group-hover:animate-bounce" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
