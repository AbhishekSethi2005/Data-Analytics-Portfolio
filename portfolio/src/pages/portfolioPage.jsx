import { AboutSection } from "../components/AboutSection";
import { StartBackground } from "@/components/StartBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import {Footer} from "../components/Footer";
import Experience from "../components/experience";
import AchievementsPreview from "../components/AchievementsPreview";

// add other sections as you build them

export const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StartBackground />
      <main>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsPreview />
        <Experience />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

