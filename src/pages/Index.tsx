
import React from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { downloadNodeAsPdf } from "@/lib/download-pdf";

const Index = () => {
  // Handler for PDF download button
  const handleDownload = () => {
    downloadNodeAsPdf(".a4-page", "Sajal_Swapnil_Resume.pdf");
  };

  return (
    <div
      className="relative font-serif a4-page border-2 border-gray-300 shadow-lg bg-white print:bg-white"
      style={{
        width: "595px",
        minHeight: "842px",
        maxWidth: "595px",
        margin: "40px auto",
        boxSizing: "border-box",
        borderRadius: "12px",
      }}
    >
      {/* Download Button (NO icon, just text) */}
      <button
        aria-label="Download PDF"
        onClick={handleDownload}
        className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded text-xs font-semibold shadow hover:bg-primary/80 transition print:hidden border border-primary"
        style={{
          letterSpacing: "0.02em",
        }}
      >
        Download PDF
      </button>

      {/* Header/Name Section */}
      <header className="text-center mb-4 mt-2">
        <h1 className="text-3xl font-bold mb-1 tracking-wide text-gray-900" style={{ letterSpacing: "0.04em" }}>SAJAL SWAPNIL</h1>
        <div className="text-xs mb-1 text-gray-700 font-medium tracking-wide">
          Basant Bihar, Begusarai, 851101 | 7773876622
        </div>
        {/* Contact Row: Tightly aligned, resized logos/links, no extra underline */}
        <div className="flex justify-center gap-2 items-center flex-wrap text-xs mt-1 mb-1">
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
            <Mail size={15} strokeWidth={1.7} style={{ marginRight: 2 }} />
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
            <Linkedin size={15} strokeWidth={1.7} style={{ marginRight: 2 }} />
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
            <Github size={15} strokeWidth={1.7} style={{ marginRight: 2 }} />
            GitHub
          </a>
        </div>
      </header>

      {/* Education Section */}
      <section className="mb-4 mt-2">
        <div className="flex items-center mb-2">
          <h2 className="text-base font-bold">EDUCATION</h2>
          <Separator className="flex-grow ml-3 border-t-2 border-gray-400" />
        </div>

        <Card className="mb-2">
          <CardContent className="p-3">
            <div className="flex flex-col sm:flex-row justify-between mb-1">
              <div className="font-bold">Chandigarh University, Gharuan</div>
              <div className="italic text-xs">August 2020 – June 2024</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-xs">
              <div>
                <i>B.E. Computer Science Engineering</i>
              </div>
              <div>CGPA: 7.7</div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-2">
          <CardContent className="p-3">
            <div className="flex flex-col sm:flex-row justify-between mb-1">
              <div className="font-bold">ST JOSEPH PUBLIC SCHOOL, Begusarai</div>
              <div className="italic text-xs">2018 - 2019</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-xs">
              <div>
                <i>Intermediate (CBSE)</i>
              </div>
              <div>Percentage: 62%</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-3">
            <div className="flex flex-col sm:flex-row justify-between mb-1">
              <div className="font-bold">DAV PUBLIC SCHOOL, Begusarai</div>
              <div className="italic text-xs">2016 - 2017</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-xs">
              <div>
                <i>Matriculation (CBSE)</i>
              </div>
              <div>Percentage: 79%</div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section className="mb-4">
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

      {/* Technical Skills Section - Condensed */}
      <section className="mb-4">
        <div className="flex items-center mb-2">
          <h2 className="text-base font-bold">TECHNICAL SKILLS</h2>
          <Separator className="flex-grow ml-3 border-t-2 border-gray-400" />
        </div>
        <Card>
          <CardContent className="p-3">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <div className="font-bold mb-0.5">Programming Languages:</div>
                <p>JavaScript, TypeScript, Java, <span className="font-bold">Solidity</span>, HTML, CSS</p>
              </div>
              <div>
                <div className="font-bold mb-0.5">Frameworks & Libraries:</div>
                <p>React.js, Node.js, Express.js, MongoDB, Next.js, Tailwind CSS</p>
              </div>
              <div>
                <div className="font-bold mb-0.5">Development Tools:</div>
                <p>Git, GitHub, VS Code, Webpack, npm, Postman</p>
              </div>
              <div>
                <div className="font-bold mb-0.5">Technologies:</div>
                <p>
                  RESTful APIs, GraphQL, <span className="font-bold">Blockchain</span>, Web Development, Google Cloud
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Achievements Section */}
      <section className="mb-4">
        <div className="flex items-center mb-2">
          <h2 className="text-base font-bold">ACHIEVEMENTS</h2>
          <Separator className="flex-grow ml-3 border-t-2 border-gray-400" />
        </div>
        <Card>
          <CardContent className="p-3">
            <ul className="list-disc pl-4 space-y-[2px] text-[12px] leading-tight">
              <li>
                Open Source Contributor with <span className="font-bold">250+ Contributions</span> and <span className="font-bold">70+ Repositories</span> on GitHub.
              </li>
              <li>
                Technical Content Creator specializing in Web Development and <span className="font-bold">Blockchain</span> topics on Medium.
              </li>
              <li>
                Technical Team Lead and Student Coordinator at <span className="font-bold">Hackoverflow Society</span>.
              </li>
              <li>
                Secured Gold Medal in Interstate <span className="font-bold">Chess Championship</span> (2019).
              </li>
              <li>
                Earned <span className="font-bold">45+ Google Cloud Skills Badges</span> demonstrating expertise in cloud technologies.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Certifications Section */}
      <section>
        <div className="flex items-center mb-2">
          <h2 className="text-base font-bold">CERTIFICATIONS</h2>
          <Separator className="flex-grow ml-3 border-t-2 border-gray-400" />
        </div>
        <Card>
          <CardContent className="p-3">
            <ul className="list-disc pl-4 space-y-[2px] text-[12px] leading-tight">
              <li>AI Tools and Prompt Engineering Workshop Certification - beX10</li>
              <li>Full Stack Web Development Certification - Udemy</li>
              <li>Google Cloud Platform Fundamentals Certification</li>
              <li>
                <span className="font-bold">Enterprise Blockchain Development Certification</span> - SimpliLearn
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
