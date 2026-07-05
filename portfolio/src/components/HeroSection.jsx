import { useNavigate } from "react-router-dom";
import Globe from "../components/Globe";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
      <Globe />
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in-delay-1">Hello, I&apos;m</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-2"> Abhishek Sethi</span>
            <span className="block mt-3 text-2xl md:text-3xl font-semibold text-muted-foreground opacity-0 animate-fade-in-delay-3">Data Analytics Enthusiast • Turning data into business insight</span>
          </h1>

          <p className="text-lg md:text-xl font-medium text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I use Python, SQL, Power BI, and Tableau to explore datasets, build dashboards, and turn findings into clear recommendations.
          </p>

          <div className="pt-4 text-xl opacity-0 animate-fade-in-delay-4">
            <button
              onClick={() => navigate("/portfolio")}
              className="bg-linear-to-br from-orange-400 to-orange-700 text-primary-foreground px-6 py-3 rounded-3xl font-semibold hover:bg-primary/90 transition"
            >
              View My Analytics Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
