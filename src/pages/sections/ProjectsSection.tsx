
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Github } from "lucide-react";

const ProjectsSection = () => (
  <section className="mb-4 px-6">
    <div className="flex items-center mb-2">
      <h2 className="text-base font-bold">PROJECTS</h2>
      <Separator className="flex-grow ml-3 border-t-2 border-gray-400" />
    </div>

    {/* Pathfinding Visualizer Project */}
    <Card className="mb-2">
      <CardContent className="p-3">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="font-bold">PATHFINDING VISUALIZER</h3>
          <div className="text-[10px] px-2 py-0.5 bg-muted rounded-full">
            React.js
          </div>
          <div className="text-[10px] px-2 py-0.5 bg-muted rounded-full">
            JavaScript
          </div>
          <div className="text-[10px] px-2 py-0.5 bg-muted rounded-full">
            DSA
          </div>
          <a
            href="https://github.com/Sajal-12/PathfindingVisualizer"
            className="flex items-center hover:text-primary transition-colors"
            aria-label="GitHub repository"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "11px", color: "#1A1F2C" }}
          >
            <Github size={13} strokeWidth={1.7} />
          </a>
          <a
            href="https://pathfinding-visualizer-ss.netlify.app/"
            className="flex items-center hover:text-primary transition-colors"
            aria-label="Live Demo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "11px", color: "#0A66C2" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </a>
        </div>
        <ul className="list-disc pl-4 space-y-[2px] text-[12px] leading-tight">
          <li>
            Developed an <span className="font-bold">interactive web application</span> to visualize various pathfinding algorithms including <span className="font-bold">Dijkstra&apos;s, A*, BFS, and DFS</span>.
          </li>
          <li>
            Implemented a responsive grid system with <span className="font-bold">customizable animation speed</span> and obstacle placement.
          </li>
          <li>
            Utilized <span className="font-bold">React.js</span> for efficient state management and component-based architecture.
          </li>
        </ul>
      </CardContent>
    </Card>

    {/* JKS Restaurant Project */}
    <Card className="mb-2">
      <CardContent className="p-3">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="font-bold">JKS RESTAURANT</h3>
          <div className="text-[10px] px-2 py-0.5 bg-muted rounded-full">
            MERN
          </div>
          <div className="text-[10px] px-2 py-0.5 bg-muted rounded-full">
            Tailwind
          </div>
          <div className="text-[10px] px-2 py-0.5 bg-muted rounded-full">
            Blockchain
          </div>
          <a
            href="https://github.com/Sajal-12/JKS---Restaurant"
            className="flex items-center hover:text-primary transition-colors"
            aria-label="GitHub repository"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "11px", color: "#1A1F2C" }}
          >
            <Github size={13} strokeWidth={1.7} />
          </a>
          <a
            href="https://lucent-kitten-5ba2da.netlify.app/"
            className="flex items-center hover:text-primary transition-colors"
            aria-label="Live Demo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "11px", color: "#0A66C2" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </a>
        </div>
        <ul className="list-disc pl-4 space-y-[2px] text-[12px] leading-tight">
          <li>
            Built a <span className="font-bold">full-stack MERN application</span> for a restaurant featuring an elegant UI with <span className="font-bold">responsive design</span>.
          </li>
          <li>
            Implemented <span className="font-bold">RESTful API</span> endpoints for menu items, reservations, and user authentication with <span className="font-bold">JWT tokens</span>.
          </li>
          <li>
            Utilized <span className="font-bold">MongoDB</span> for database operations and <span className="font-bold">Express.js</span> for server-side routing. Also integrated <span className="font-bold">Blockchain</span> technology.
          </li>
        </ul>
      </CardContent>
    </Card>

    {/* SmartJobber Project */}
    <Card>
      <CardContent className="p-3">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="font-bold">SMARTJOBBER</h3>
          <div className="text-[10px] px-2 py-0.5 bg-muted rounded-full">
            React.js
          </div>
          <div className="text-[10px] px-2 py-0.5 bg-muted rounded-full">
            Supabase
          </div>
          <div className="text-[10px] px-2 py-0.5 bg-muted rounded-full">
            Tailwind CSS
          </div>
          <a
            href="https://github.com/Sajal-12/smartjobber"
            className="flex items-center hover:text-primary transition-colors"
            aria-label="GitHub repository"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "11px", color: "#1A1F2C" }}
          >
            <Github size={13} strokeWidth={1.7} />
          </a>
          <a
            href="https://supabase.com/dashboard/project/hqrnaunolwzztkjamvab"
            className="flex items-center hover:text-primary transition-colors"
            aria-label="Live Demo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "11px", color: "#0A66C2" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
          </a>
        </div>
        <ul className="list-disc pl-4 space-y-[2px] text-[12px] leading-tight">
          <li>
            Developed a <span className="font-bold">job application tracking system</span> with <span className="font-bold">Supabase</span> for backend services.
          </li>
          <li>
            Created an intuitive dashboard for users to <span className="font-bold">track application status</span> and organize job search activities.
          </li>
          <li>
            Implemented <span className="font-bold">real-time notifications</span> using <span className="font-bold">Supabase&apos;s realtime subscriptions</span>.
          </li>
        </ul>
      </CardContent>
    </Card>
  </section>
);

export default ProjectsSection;
