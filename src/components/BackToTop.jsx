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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={scrollToTop}
                    className="
                        fixed bottom-8 right-8 z-50
                        p-4 rounded-xl shadow-2xl
                        bg-gradient-to-br from-cyan-600 to-blue-700 text-white
                        hover:shadow-cyan-500/20 active:scale-95
                        transition-all duration-300
                        group
                    "
                    whileHover={{ y: -5 }}
                >
                    <FiArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
