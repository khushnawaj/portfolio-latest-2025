import { useRef, useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaVuejs, FaAws, FaDocker, FaPython } from "react-icons/fa";
import { SiMongodb, SiRedis, SiPostgresql, SiTailwindcss, SiTypescript, SiGraphql } from "react-icons/si";

export default function TechMarquee() {
    const [width, setWidth] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth);
        }
    }, []);

    const icons = [
        { Icon: FaReact, name: "React" },
        { Icon: FaNodeJs, name: "Node.js" },
        { Icon: SiTypescript, name: "TypeScript" },
        { Icon: SiMongodb, name: "MongoDB" },
        { Icon: SiRedis, name: "Redis" },
        { Icon: FaAws, name: "AWS" },
        { Icon: FaDocker, name: "Docker" },
        { Icon: SiPostgresql, name: "PostgreSQL" },
        { Icon: FaVuejs, name: "Vue.js" },
        { Icon: SiTailwindcss, name: "Tailwind" },
        { Icon: SiGraphql, name: "GraphQL" },
        { Icon: FaPython, name: "Python" },
    ];

    return (
        <div className="w-full overflow-hidden bg-gray-50 dark:bg-[#0B0B0D] py-10 border-y border-gray-200 dark:border-[#1F2937]">
            <div className="relative w-full max-w-6xl mx-auto px-6">

                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-50 dark:from-[#0B0B0D] to-transparent z-10" />
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 dark:from-[#0B0B0D] to-transparent z-10" />

                <div className="flex overflow-hidden">
                    {/* First Loop */}
                    <div className="flex gap-12 animate-marquee whitespace-nowrap py-2 px-6">
                        {icons.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-cyan-600 dark:hover:text-accent transition duration-300">
                                <item.Icon size={32} />
                                <span className="font-medium text-lg hidden md:block">{item.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Second Loop (Duplicate for seamless scroll) */}
                    <div className="flex gap-12 animate-marquee whitespace-nowrap py-2 px-6" aria-hidden="true">
                        {icons.map((item, i) => (
                            <div key={`dup-${i}`} className="flex items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-cyan-600 dark:hover:text-accent transition duration-300">
                                <item.Icon size={32} />
                                <span className="font-medium text-lg hidden md:block">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
