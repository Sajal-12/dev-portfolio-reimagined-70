
import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import EducationSection from "./sections/EducationSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import AchievementsSection from "./sections/AchievementsSection";
import CertificationsSection from "./sections/CertificationsSection";

const Index = () => {
  return (
    <div
      className="relative font-serif a4-page shadow-lg bg-white print:bg-white"
      style={{
        width: "595px",
        minHeight: "842px",
        maxWidth: "595px",
        margin: "40px auto",
        boxSizing: "border-box",
        borderRadius: "12px"
      }}
    >
      {/* Header/Name Section */}
      <header className="text-center mb-4 mt-2">
        <h1 className="text-3xl font-bold mb-1 tracking-wide text-gray-900" style={{ letterSpacing: "0.04em" }}>SAJAL SWAPNIL</h1>
        <div className="text-xs mb-1 text-gray-700 font-medium tracking-wide">
          Basant Bihar, Begusarai, 851101 | 7773876622
        </div>
        {/* Tighter links with icons and minimal gap, perfectly aligned */}
        <div className="flex justify-center items-center gap-1 flex-wrap text-xs mt-1 mb-1">
          <a
            href="mailto:sajalvictorious3@gmail.com"
            className="flex items-center gap-1 px-2 py-1 rounded border border-gray-300 bg-muted hover:bg-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#222",
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          >
            <Mail size={14} strokeWidth={1.7} style={{ marginRight: 2, verticalAlign: "middle" }} />
            sajalvictorious3@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/sajal-swapnil-a93a741ba/"
            className="flex items-center gap-1 px-2 py-1 rounded border border-gray-300 bg-muted hover:bg-blue-50 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#0A66C2",
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          >
            <Linkedin size={14} strokeWidth={1.7} style={{ marginRight: 2, verticalAlign: "middle" }} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Sajal-12"
            className="flex items-center gap-1 px-2 py-1 rounded border border-gray-300 bg-muted hover:bg-gray-200 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "#1A1F2C",
              fontWeight: 500,
              lineHeight: 1.2,
            }}
          >
            <Github size={14} strokeWidth={1.7} style={{ marginRight: 2, verticalAlign: "middle" }} />
            GitHub
          </a>
        </div>
      </header>

      {/* Main Sections */}
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <CertificationsSection />
    </div>
  );
};

export default Index;
