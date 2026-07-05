import { useState } from "react";
import { cn } from "@/libs/utils";
import { motion } from "framer-motion";
import {
    BarChart3,
    Database,
    FileSpreadsheet,
    BrainCircuit,
    TrendingUp,
    Workflow,
    Gauge,
    BadgeCheck,
} from "lucide-react";

const skills = [
    { name: "Python", level: 88, category: "programming", icon: <BrainCircuit size={32} /> },
    { name: "SQL", level: 90, category: "analytics", icon: <Database size={32} /> },
    { name: "Pandas & NumPy", level: 84, category: "programming", icon: <BrainCircuit size={32} /> },
    { name: "Power BI", level: 86, category: "analytics", icon: <BarChart3 size={32} /> },
    { name: "Tableau", level: 82, category: "analytics", icon: <TrendingUp size={32} /> },
    { name: "Excel", level: 84, category: "tools", icon: <FileSpreadsheet size={32} /> },
    { name: "MySQL & MongoDB", level: 78, category: "analytics", icon: <Database size={32} /> },
    { name: "Data Cleaning & EDA", level: 87, category: "tools", icon: <Workflow size={32} /> },
];

const categories = ["all", "analytics", "programming", "tools"];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "all" || skill.category === activeCategory
    );

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--y", `${e.clientY - rect.top}px`);
    };

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-9xl">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    Skills & <span className="text-primary">Toolbox</span>
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {filteredSkills.map((skill, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            className="glow-card bg-card p-6 rounded-lg shadow-xs relative"
                            onMouseMove={handleMouseMove}
                        >
                            <div className="glow-effect absolute inset-0 pointer-events-none"></div>

                            <div className="flex items-center gap-3 mb-4">
                                {skill.icon}
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{ width: skill.level + "%" }} />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
