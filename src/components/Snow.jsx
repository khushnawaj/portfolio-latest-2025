import { useEffect, useState } from "react";

export default function Confetti({ number = 50 }) {
    const [flakes, setFlakes] = useState([]);

    // Tech-themed colors that work in both light/dark modes
    const colors = [
        "#06b6d4", // Cyan-500
        "#3b82f6", // Blue-500
        "#a855f7", // Purple-500
        "#10b981", // Emerald-500
        "#f59e0b", // Amber-500 (Gold)
        "#ef4444", // Red-500
    ];

    useEffect(() => {
        // Generate randomized confetti
        const newFlakes = Array.from({ length: number }).map((_, i) => {
            const duration = Math.random() * 3 + 4 + "s"; // 4-7s duration
            const delay = Math.random() * 5 + "s"; // 0-5s delay
            const size = Math.random() * 6 + 4 + "px"; // 4-10px size
            const left = Math.random() * 100 + "%";
            const color = colors[Math.floor(Math.random() * colors.length)];

            // Random shape: circle vs square
            const borderRadius = Math.random() > 0.5 ? "50%" : "2px";

            return {
                left,
                width: size,
                height: size,
                backgroundColor: color,
                borderRadius: borderRadius,
                animationDuration: duration,
                animationDelay: delay,
            };
        });
        setFlakes(newFlakes);
    }, [number]);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {flakes.map((style, idx) => (
                <div
                    key={idx}
                    className="absolute opacity-90 animate-snow shadow-sm"
                    style={style}
                />
            ))}
        </div>
    );
}
