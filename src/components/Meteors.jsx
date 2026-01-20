import { useEffect, useState } from "react";

export default function Meteors({ number = 20 }) {
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        const styles = [...new Array(number)].map(() => ({
            left: Math.floor(Math.random() * 100) + "%",
            animationDelay: Math.random() * 1 + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
        }));
        setMeteors(styles);
    }, [number]);

    return (
        <>
            {meteors.map((style, idx) => (
                <span
                    key={idx}
                    className="pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor opacity-0"
                    style={style}
                >
                    {/* Meteor Head */}
                    <div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent shadow-[0_0_0_1px_#ffffff10]" />
                </span>
            ))}
        </>
    );
}
