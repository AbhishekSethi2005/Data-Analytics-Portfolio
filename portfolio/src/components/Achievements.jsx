import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const AchievementsPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Cloud", "AI/ML", "Automation", "Programming"];

  const data = [
    {
      id: "1",
      title: "AWS Cloud Practitioner Certificate",
      organization: "Amazon Web Services",
      issueDate: "2025",
      description: "Demonstrated foundational understanding of AWS cloud concepts, services, security, and pricing.",
      category: "Cloud",
      certificateUrl: "/certificates/" + encodeURIComponent("AWS-AWS Cloud Practitioner Certificate.pdf"),
    },
    {
      id: "2",
      title: "Oracle Cloud Infrastructure 2025 Foundations Associate",
      organization: "Oracle Cloud Infrastructure",
      issueDate: "2025",
      description: "Built foundational knowledge of OCI services, architecture, and cloud concepts.",
      category: "Cloud",
      certificateUrl: "/certificates/" + encodeURIComponent("Oracle-Oracle Cloud Infrastructure 2025 Foundations Associate.pdf"),
    },
    {
      id: "3",
      title: "AWS Academy Cloud Foundations",
      organization: "AWS Academy",
      issueDate: "2024",
      description: "Completed foundational cloud learning covering core AWS services and architectural principles.",
      category: "Cloud",
      certificateUrl: "/certificates/" + encodeURIComponent("AWS Academy Graduate - AWS Academy Cloud Foundations.pdf"),
    },
    {
      id: "4",
      title: "AWS Academy Cloud Architecting",
      organization: "AWS Academy",
      issueDate: "2024",
      description: "Strengthened understanding of architecting secure, scalable, and resilient cloud solutions on AWS.",
      category: "Cloud",
      certificateUrl: "/certificates/" + encodeURIComponent("AWS Academy Graduate - AWS Academy Cloud Architecting.pdf"),
    },
    {
      id: "5",
      title: "AWS Academy Cloud Operations",
      organization: "AWS Academy",
      issueDate: "2024",
      description: "Learned operational practices for monitoring, automation, and reliability in cloud environments.",
      category: "Cloud",
      certificateUrl: "/certificates/" + encodeURIComponent("AWS Academy Graduate - Cloud Operations.pdf"),
    },
    {
      id: "6",
      title: "UiPath Automation Developer Associate Training",
      organization: "UiPath",
      issueDate: "2024",
      description: "Developed practical skills in building and deploying automation workflows with UiPath.",
      category: "Automation",
      certificateUrl: "/certificates/" + encodeURIComponent("UiPath-Automation Developer Associate Training.pdf"),
    },
    {
      id: "7",
      title: "Certificate Program in Artificial Intelligence and Machine Learning",
      organization: "NASSCOM",
      issueDate: "2025",
      description: "Completed a structured AI/ML program covering core concepts, practical workflows, and modern applications.",
      category: "AI/ML",
      certificateUrl: "/certificates/" + encodeURIComponent("NASSCOM-Certificate Program in Artificial Intelligence and Machine Learning.pdf"),
    },
    {
      id: "8",
      title: "Data Science Methods and Algorithm",
      organization: "Udemy",
      issueDate: "2025",
      description: "Expanded understanding of data science methods, analytical thinking, and algorithmic problem solving.",
      category: "Programming",
      certificateUrl: "/certificates/" + encodeURIComponent("Udemy-Data Science Methods and Algorithm.pdf"),
    },
    {
      id: "9",
      title: "The Joy of Computing using Python",
      organization: "NPTEL • IIT Madras",
      issueDate: "2024",
      description: "Strengthened analytical thinking and practical Python skills used in data preparation and automation.",
      category: "Programming",
      certificateUrl: "/certificates/" + encodeURIComponent("NPTEL-The Joy of Computing using Python.pdf"),
    },
    {
      id: "10",
      title: "Internship Completion Certificate in Artificial Intelligence",
      organization: "YHills",
      issueDate: "2024",
      description: "Completed an internship focused on AI concepts, hands-on model-related work, and practical learning.",
      category: "AI/ML",
      certificateUrl: "/certificates/" + encodeURIComponent("Yhills-Internship Completion Certificate in Artificial Intelligence.pdf"),
    },
  ];

  const filteredData = data.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || item.organization.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || item.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div id="achievements" className="w-full min-h-screen px-6 py-30 md:px-16 lg:px-24 bg-background text-foreground">
      <div className="flex gap-4 items-center justify-center mb-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 bg-linear-to-br from-orange-400 to-orange-600 px-4 py-2 rounded-xl border-2 border-orange-700 hover:bg-white/20 transition">
          <ArrowLeft size={20} />
          Back
        </button>

        <input
          type="text"
          placeholder="Search certificates or categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-2/3 lg:w-1/2 px-4 py-3 rounded-xl bg-card/80 border border-border focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-2xl border transition-all duration-300 ${filter === item ? "bg-orange-600 border-orange-400" : "bg-card/80 border-border hover:bg-card"}`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {filteredData.map((cert) => (
          <div key={cert.id} className="p-0.5 rounded-xl bg-linear-to-r from-orange-400 to-orange-700">
            <div className="p-5 bg-card/80 rounded-xl h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">{cert.title}</h2>
                <p className="text-sm text-orange-600 dark:text-orange-400">{cert.organization}</p>
                <p className="text-xs opacity-70 mt-1">Issued: {cert.issueDate}</p>
                <p className="mt-3 text-sm opacity-90 leading-relaxed">{cert.description}</p>
              </div>

              <a href={cert.certificateUrl} className="mt-4 inline-block bg-primary/10 px-4 py-2 rounded-lg hover:bg-primary/20 transition">
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsPage;
