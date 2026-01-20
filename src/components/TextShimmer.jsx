import { motion } from "framer-motion";

export default function TextShimmer({ text, className = "" }) {
    return (
        <span className={`relative inline-block overflow-hidden ${className}`}>
            <span className="relative z-10">{text}</span>
            <motion.span
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "linear",
                    repeatDelay: 1
                }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/50 dark:via-white/20 to-transparent skew-x-12"
            />
        </span>
    );
}
