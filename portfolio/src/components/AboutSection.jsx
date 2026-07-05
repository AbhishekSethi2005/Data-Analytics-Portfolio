import {
  BarChart3,
  Database,
  TrendingUp,
  Sparkles,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import HeroImage from "./HeroImage";
import myPhoto from "../assets/myphoto2.jpeg";
import { useEffect } from "react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".glow-card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      });
    });
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  };

  const staggerCards = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardAnim = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <section id="about" className="pt-24 px-4 relative">
      <div className="container max-w-9xl py-12 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-12">
          <motion.div className="space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-bold mb-12">
              Hello, I&apos;m <span className="text-primary">Abhishek Sethi</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-muted-foreground text-xl text-left">
              I&apos;m a B.Tech IT student and aspiring data analyst with hands-on experience in data analysis, dashboarding, and visualization.
            </motion.p>

            <motion.p variants={fadeUp} className="text-muted-foreground text-xl text-left">
              My work spans Python, SQL, Excel, Power BI, Tableau, and data cleaning so I can turn raw data into insights that support smarter decisions.
            </motion.p>

            <motion.div variants={fadeUp} className="gradient-border px-6 py-4 card-hover border-l-4 border-l-primary">
              <p className="text-muted-foreground italic text-lg font-semibold text-orange-200">
                I believe strong analytics is about making complex information understandable, actionable, and useful for business teams.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-5 justify-center">
              <a href="#contact" className="bg-linear-to-r from-orange-400 to-orange-600 rounded-3xl px-6 py-2 transition-transform duration-300 hover:scale-105 flex items-center gap-2">
                Let&apos;s Connect
              </a>

              <a href="/Abhishek-Sethi-Data_Analytics_Resume.pdf" className="px-6 py-2 font-bold rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-6">
              <div className="flex space-x-4 justify-center">
                <a href="mailto:sethiabhi15@gmail.com" target="_blank" className="p-3 rounded-full bg-primary/80 hover:bg-primary/60 transition-colors duration-300">
                  <Mail />
                </a>
                <a href="https://github.com/AbhishekSethi2005" target="_blank" className="p-3 rounded-full bg-primary/80 hover:bg-primary/60 transition-colors duration-300">
                  <Github />
                </a>
                <a href="https://www.linkedin.com/in/abhisheksethi2005/" target="_blank" className="p-3 rounded-full bg-primary/80 hover:bg-primary/60 transition-colors duration-300">
                  <Linkedin />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center justify-center py-10">
            <HeroImage src={myPhoto} alt="Abhishek Sethi" />
          </motion.div>
        </div>

        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-3xl md:text-4xl font-bold mb-12 text-center">
          What I Bring <span className="text-primary">to the Table</span>
        </motion.h2>

        <motion.div variants={staggerCards} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={cardAnim} className="gradient-border glow-card relative p-8 rounded-2xl cursor-pointer group">
            <div className="absolute inset-0 glow-effect rounded-2xl" />
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-3xl bg-linear-to-br from-orange-400 to-orange-600"><BarChart3 className="h-8 w-8" /></div>
              <h4 className="font-bold text-xl text-primary">Data Cleaning & EDA</h4>
              <p className="text-muted-foreground">Preparing messy data for analysis and uncovering patterns through exploratory techniques.</p>
            </div>
          </motion.div>

          <motion.div variants={cardAnim} className="gradient-border glow-card relative p-8 rounded-2xl cursor-pointer group">
            <div className="absolute inset-0 glow-effect rounded-2xl" />
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-3xl bg-linear-to-br from-orange-400 to-orange-600"><Database className="h-8 w-8" /></div>
              <h4 className="font-bold text-xl text-primary">SQL & Dashboards</h4>
              <p className="text-muted-foreground">Querying data and building interactive dashboards for performance tracking and reporting.</p>
            </div>
          </motion.div>

          <motion.div variants={cardAnim} className="gradient-border glow-card relative p-8 rounded-2xl cursor-pointer group">
            <div className="absolute inset-0 glow-effect rounded-2xl" />
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-3xl bg-linear-to-br from-orange-400 to-orange-600"><TrendingUp className="h-8 w-8" /></div>
              <h4 className="font-bold text-xl text-primary">KPI Analysis</h4>
              <p className="text-muted-foreground">Tracking metrics and identifying trends that support stronger business decisions.</p>
            </div>
          </motion.div>

          <motion.div variants={cardAnim} className="gradient-border glow-card relative p-8 rounded-2xl cursor-pointer group">
            <div className="absolute inset-0 glow-effect rounded-2xl" />
            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-3xl bg-linear-to-br from-orange-400 to-orange-600"><Sparkles className="h-8 w-8" /></div>
              <h4 className="font-bold text-xl text-primary">Automation & Reporting</h4>
              <p className="text-muted-foreground">Building repeatable workflows that save time and improve reporting quality.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
