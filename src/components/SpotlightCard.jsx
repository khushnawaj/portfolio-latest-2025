import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function SpotlightCard({ children, className = "" }) {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative overflow-hidden rounded-xl border border-gray-250 dark:border-white/5 bg-white dark:bg-[#111216]/60 backdrop-blur-sm transition-all duration-300 hover:scale-[1.015] hover:border-cyan-500/30 hover:shadow-[0_20px_50px_-20px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_20px_50px_-20px_rgba(6,182,212,0.08)] ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(6, 182, 212, 0.12), rgba(168, 85, 247, 0.05), transparent 60%)`,
                }}
            />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
