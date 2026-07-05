import { useState } from "react";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";
import AnimatedContent from "./AnimatedContent";

const journeyData = {
  experience: [
    {
      title: "Data Analytics Intern",
      period: "2024",
      role: "CodSoft",
      description: "Performed exploratory data analysis on real-world datasets using Python and created meaningful visualizations to uncover trends and support business insights.",
      achievements: [
        "Explored structured datasets using Python",
        "Built visualizations to surface trends and patterns",
        "Supported insight generation for business use cases",
      ],
      link: "https://www.linkedin.com/in/abhisheksethi2005/",
      icon: "briefcase",
    },
    {
      title: "AIML Intern",
      period: "Oct 2023 – Jan 2024",
      role: "YHills",
      description: "Worked with structured datasets involving preprocessing, visualization, and reporting while applying analytical thinking to model outputs and metrics.",
      achievements: [
        "Handled preprocessing and reporting workflows",
        "Applied analytical thinking to model-related metrics",
        "Strengthened hands-on experience with data-driven projects",
      ],
      icon: "briefcase",
    },
  ],

  education: [
    {
      title: "Sanjivani College of Engineering, Kopargaon",
      period: "2023 – Present",
      role: "B.Tech in Information Technology",
      description: "Building a strong academic foundation while exploring data-driven projects, analytical thinking, and practical problem solving.",
      achievements: [
        "Maintaining a strong academic record",
        "Expanding hands-on learning through real-world analytics projects",
      ],
      link: "https://sanjivanicoe.org.in/",
      icon: "education",
    },
    {
      title: "Maharshi Vidya Mandir, Kopargaon",
      period: "2022",
      role: "HSC",
      description: "Built a disciplined academic base with a focus on analytical thinking and structured learning.",
      achievements: [
        "Developed strong fundamentals for technical study",
        "Built consistency and perseverance in academics",
      ],
      icon: "education",
    },
    {
      title: "Sadhvi Preetisudhaji International School, Rahata",
      period: "2020",
      role: "SSC",
      description: "Established a strong academic foundation during school years that supported later technical and analytical learning.",
      achievements: [
        "Built a strong base in problem solving",
        "Developed curiosity for technology and data",
      ],
      icon: "education",
    },
  ],

  activities: [
    {
      title: "Certification Learning Path",
      period: "2024 – 2025",
      role: "Continuous Learning",
      description: "Completed multiple certificates and practical learning modules that support a growing analytics and technical profile.",
      achievements: [
        "Completed Power BI and Tableau learning",
        "Built confidence through structured self-learning",
      ],
      link: "/achievements",
      icon: "trophy",
    },
    {
      title: "Smart India Hackathon",
      period: "2023, 2024",
      role: "3rd Stage Qualifier",
      description: "Took part in innovation challenges that required teamwork, structured thinking, and creative problem solving under time pressure.",
      achievements: [
        "Qualified to the 3rd stage in multiple editions",
        "Strengthened collaborative execution and presentation skills",
      ],
      link: "https://www.linkedin.com/in/abhisheksethi2005/",
      icon: "trophy",
    },
  ],
};

export default function Experience() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div id="experience" className="w-full px-4 py-10 min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Experience & <span className="text-primary">Journey</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        A snapshot of the internships, education, and achievements that are shaping my path in analytics and problem solving.
      </p>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center gap-4 mb-16">
          <TabButton active={activeTab === "experience"} onClick={() => setActiveTab("experience")} icon={<Briefcase className="w-5 h-5" />} label="Experience" />
          <TabButton active={activeTab === "education"} onClick={() => setActiveTab("education")} icon={<GraduationCap className="w-5 h-5" />} label="Education" />
          <TabButton active={activeTab === "activities"} onClick={() => setActiveTab("activities")} icon={<Trophy className="w-5 h-5" />} label="Activities" />
        </div>

        <Timeline items={journeyData[activeTab]} />
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }) {
  return (
    <button onClick={onClick} className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${active ? "bg-orange-600 text-white shadow-lg shadow-orange-500/50" : "bg-card text-slate-400 hover:text-orange-500"}`}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

function Timeline({ items }) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-linear-to-b from-orange-400 via-orange-500 to-orange-700" />
      <div className="space-y-12 py-8">{items.map((item, index) => <TimelineItem key={index} item={item} index={index} />)}</div>
    </div>
  );
}

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;
  const delayMs = index * 150;

  const getIcon = () => {
    switch (item.icon) {
      case "briefcase": return <Briefcase className="w-6 h-6" />;
      case "education": return <GraduationCap className="w-6 h-6" />;
      case "trophy": return <Trophy className="w-6 h-6" />;
      default: return <Briefcase className="w-6 h-6" />;
    }
  };

  return (
    <div className="relative flex items-start">
      <div className={`w-1/2 ${isLeft ? "pr-12 text-left" : "pl-12 text-left"} ${isLeft ? "order-1" : "order-3"}`}>
        <AnimatedContent key={`${item.title}-${index}-${item.role}`} distance={80} direction="horizontal" reverse={!isLeft} config={{ tension: 100, friction: 30 }} initialOpacity={0} animateOpacity threshold={0.3} delay={delayMs}>
          <div className="relative">
            <div className="bg-card glow-card backdrop-blur-sm border-2 border-orange-400 rounded-2xl p-6 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30">
              <div className={`flex items-start gap-4 ${isLeft ? "flex-row-reverse" : "flex-row"}`}>
                <div className="shrink-0 w-14 h-14 rounded-xl bg-linear-to-br from-orange-600 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30">{getIcon()}</div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-1">{item.title}</h3>
                  <div className="text-m font-semibold text-orange-600 dark:text-orange-400 mb-1">{item.period} | {item.role}</div>
                  <p className="text-slate-400 mb-4 leading-relaxed">{item.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-m font-bold italic text-slate-200">Key Highlights</h4>
                    <ul className="space-y-1.5">
                      {item.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-slate-400 flex items-start gap-2">
                          <span className="text-orange-400 shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-m font-bold italic text-orange-500 hover:text-orange-400 transition-colors">
                      Visit Link →
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className={`absolute top-6 ${isLeft ? "-right-6" : "-left-6"} w-12 h-0.5 bg-gradient-to-${isLeft ? "r" : "l"} from-slate-700/50 to-transparent`} />
          </div>
        </AnimatedContent>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 z-10 order-2">
        <AnimatedContent distance={20} direction="vertical" config={{ tension: 120, friction: 20 }} initialOpacity={0} animateOpacity threshold={0.3} delay={delayMs + 100}>
          <div className="relative">
            <div className="w-9 h-9 rounded-full border-8 border-orange-600 bg-orange-300 shadow-lg shadow-orange-500/50 animate-pulse" />
            <div className="absolute inset-0 w-5 h-5 rounded-full bg-orange-500/20 animate-ping opacity-75" />
            <div className="absolute inset-0 w-5 h-5 rounded-full bg-orange-400 blur-md" />
          </div>
        </AnimatedContent>
      </div>

      <div className={`w-1/2 ${isLeft ? "order-3" : "order-1"}`} />
    </div>
  );
}
