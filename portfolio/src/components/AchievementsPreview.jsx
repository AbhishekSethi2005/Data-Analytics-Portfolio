import { motion, useInView } from "framer-motion";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

export default function AchievementsPreview() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const previewData = [
    {
      id: "1",
      title: "AWS Cloud Practitioner Certificate",
      organization: "Amazon Web Services",
      issueDate: "2025",
      description: "Strengthened foundational knowledge of AWS cloud services, security, and architecture.",
      category: "Certification",
    },
    {
      id: "2",
      title: "Oracle Cloud Infrastructure 2025 Foundations Associate",
      organization: "Oracle Cloud Infrastructure",
      issueDate: "2025",
      description: "Built a strong base in OCI concepts, services, and cloud fundamentals.",
      category: "Certification",
    },
    {
      id: "3",
      title: "UiPath Automation Developer Associate Training",
      organization: "UiPath",
      issueDate: "2024",
      description: "Developed practical automation skills for designing and deploying RPA workflows.",
      category: "Certification",
    },
  ];

  return (
    <div id="achievements" ref={sectionRef} className="w-full py-16">
      <motion.h2 className="text-4xl font-bold text-center mb-4" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        Achievements & <span className="text-primary">Certifications</span>
      </motion.h2>
      <p className="text-center mb-12 text-muted-foreground">A quick look at the learning and project milestones shaping my analytics path.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {previewData.map((item, index) => (
          <motion.div key={item.id} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ duration: 0.6, delay: index * 0.15 }} className="bg-card border-4 glow-card relative p-8 rounded-2xl cursor-pointer group">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold bg-orange-500 text-white px-2 py-1 rounded-xl">{item.category}</span>
            </div>

            <h3 className="text-2xl font-bold mb-1 pt-4 text-primary">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{item.organization}</p>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{item.description}</p>

            <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
              <Calendar size={14} />
              <span>{new Date(item.issueDate).toLocaleString("default", { month: "short", year: "numeric" })}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div className="text-center mt-12" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
        <button onClick={() => navigate("/achievements")} className="bg-primary hover:bg-orange-600 text-primary-foreground px-7 py-3 rounded-xl text-lg font-medium transition">
          See All Achievements & Certifications
        </button>
      </motion.div>
    </div>
  );
}
