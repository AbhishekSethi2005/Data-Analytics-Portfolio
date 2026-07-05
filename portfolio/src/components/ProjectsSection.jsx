import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Vaccination Data Analysis",
        description: "Analyzed vaccination trends across demographics using Python and Seaborn to identify coverage patterns and highlight insights.",
        image: "/projects/Project-1.png",
        tags: ["Python", "Seaborn", "EDA"],
        githubUrl: "https://github.com/AbhishekSethi2005/Data-Analytics-Portfolio",
        externalUrl: "https://github.com/AbhishekSethi2005/Data-Analytics-Portfolio",
    },
    {
        id: 2,
        title: "HR Analytics Dashboard",
        description: "Built an interactive Power BI dashboard to analyze employee attrition, job satisfaction, and department-wise trends.",
        image: "/projects/Project-2.png",
        tags: ["Power BI", "SQL", "Dashboarding"],
        githubUrl: "https://github.com/AbhishekSethi2005/Data-Analytics-Portfolio",
        externalUrl: "https://github.com/AbhishekSethi2005/Data-Analytics-Portfolio",
    },
    {
        id: 3,
        title: "Customer Churn Analysis",
        description: "Analyzed customer behavior to identify churn patterns and the key factors influencing customer retention.",
        image: "/projects/Project-3.png",
        tags: ["Python", "Pandas", "Statistics"],
        githubUrl: "https://github.com/AbhishekSethi2005/Data-Analytics-Portfolio",
        externalUrl: "https://github.com/AbhishekSethi2005/Data-Analytics-Portfolio",
    },
    {
        id: 4,
        title: "Credit Card Fraud Analysis",
        description: "Explored transaction data to identify suspicious behavior and understand indicators of fraud.",
        image: "/projects/Project-4.png",
        tags: ["Python", "Visualization", "EDA"],
        githubUrl: "https://github.com/AbhishekSethi2005/Data-Analytics-Portfolio",
        externalUrl: "https://github.com/AbhishekSethi2005/Data-Analytics-Portfolio",
    },
    {
        id: 5,
        title: "Taxi Fare Analysis",
        description: "Conducted feature analysis and visual exploration of taxi fare data to understand cost-driving factors.",
        image: "/projects/Project-5.jpg",
        tags: ["Python", "Data Analysis", "Visualization"],
        githubUrl: "https://github.com/AbhishekSethi2005/Data-Analytics-Portfolio",
        externalUrl: "https://github.com/AbhishekSethi2005/Data-Analytics-Portfolio",
    },
    {
        id: 6,
        title: "Employee Turnover Analysis",
        description: "Analyzed workforce data with statistical metrics and visualizations to assess attrition risk patterns.",
        image: "/projects/Project-6.png",
        tags: ["Statistics", "Visualization", "Reporting"],
        githubUrl: "https://github.com/AbhishekSethi2005/Data-Analytics-Portfolio",
        externalUrl: "https://github.com/AbhishekSethi2005/Data-Analytics-Portfolio",
    },
];

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

export const ProjectsSection = () => {
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
    };

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-9xl">
                <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Analytics Projects</span>
                </motion.h2>

                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    A selection of the dashboards, analyses, and reporting work I have built through internships and self-driven projects.
                </motion.p>

                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                    {projects.map((project) => (
                        <motion.div key={project.id} variants={cardVariants} className="glow-card group bg-card rounded-lg shadow-xs overflow-hidden card-hover" onMouseMove={handleMouseMove}>
                            <div className="glow-effect" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}></div>

                            <div className="h-48 p-4">
                                <div className="w-full h-full overflow-hidden rounded-xl">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-1 py-2">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="text-xs text-orange-100 border-orange-400 bg-orange-300/15 border px-4 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3 p-3">
                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={24} />
                                        </a>
                                    </div>

                                    <div className="flex space-x-3 p-3">
                                        <a href={project.externalUrl} target="_blank" className="bg-linear-to-bl from-orange-400 to-orange-600 rounded-xl px-3 py-2 flex items-center gap-2">
                                            View Project
                                            <ExternalLink size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mt-12">
                    <a href="https://github.com/AbhishekSethi2005/Data-Analytics-Portfolio" target="_blank" className="bg-linear-to-br from-orange-400 to-orange-700 text-primary-foreground p-3 rounded-3xl w-fit flex items-center mx-auto gap-2 hover:bg-primary/90 transition">
                        Explore More on GitHub <ArrowRight size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
