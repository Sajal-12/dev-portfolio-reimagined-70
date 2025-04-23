
import React from "react";
import { Github, Mail, Linkedin, ExternalLink, Download } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { downloadNodeAsPdf } from "@/lib/download-pdf";

const Index = () => {
  // Handler for PDF download button
  const handleDownload = () => {
    downloadNodeAsPdf(".a4-page", "Sajal_Swapnil_Resume.pdf");
  };

  return (
    <div className="relative max-w-4xl mx-auto p-4 md:p-6 font-serif a4-page">
      {/* Download Button */}
      <button
        aria-label="Download PDF"
        className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded flex items-center gap-1 text-xs shadow transition hover:bg-primary/80 print:hidden"
        onClick={handleDownload}
      >
        <Download size={16} />
        Download PDF
      </button>

      {/* Header/Name Section */}
      <header className="text-center mb-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">SAJAL SWAPNIL</h1>
        <div className="text-sm mb-2">
          Basant Bihar, Begusarai, 851101 | 7773876622
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a
            href="mailto:sajalvictorious3@gmail.com"
            className="flex items-center gap-1 hover:text-primary transition-colors underline"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            <Mail size={16} className="inline-block" />
            <span style={{ textDecoration: "none" }}>sajalvictorious3@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sajal-swapnil-a93a741ba/"
            className="flex items-center gap-1 hover:text-primary transition-colors underline"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            <Linkedin size={16} className="inline-block" />
            <span style={{ textDecoration: "none" }}>LinkedIn</span>
          </a>
          <a
            href="https://github.com/Sajal-12"
            className="flex items-center gap-1 hover:text-primary transition-colors underline"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "underline" }}
          >
            <Github size={16} className="inline-block" />
            <span style={{ textDecoration: "none" }}>GitHub</span>
          </a>
        </div>
      </header>

      {/* Education Section */}
      <section className="mb-6">
        <div className="flex items-center mb-3">
          <h2 className="text-xl font-bold">EDUCATION</h2>
          <Separator className="flex-grow ml-3 border-t-2" />
        </div>

        <Card className="mb-3">
          <CardContent className="p-3">
            <div className="flex flex-col sm:flex-row justify-between mb-1">
              <div className="font-bold">Chandigarh University, Gharuan</div>
              <div className="italic">August 2020 – June 2024</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-sm">
              <div>
                <i>B.E. Computer Science Engineering</i>
              </div>
              <div>CGPA: 7.7</div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-3">
          <CardContent className="p-3">
            <div className="flex flex-col sm:flex-row justify-between mb-1">
              <div className="font-bold">ST JOSEPH PUBLIC SCHOOL, Begusarai</div>
              <div className="italic">2018 - 2019</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-sm">
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
              <div className="italic">2016 - 2017</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-sm">
              <div>
                <i>Matriculation (CBSE)</i>
              </div>
              <div>Percentage: 79%</div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section className="mb-6">
        <div className="flex items-center mb-3">
          <h2 className="text-xl font-bold">PROJECTS</h2>
          <Separator className="flex-grow ml-3 border-t-2" />
        </div>

        {/* Pathfinding Visualizer Project */}
        <Card className="mb-3">
          <CardContent className="p-3">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="font-bold">PATHFINDING VISUALIZER</h3>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">
                React.js
              </div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">
                JavaScript
              </div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">
                DSA
              </div>
              <a
                href="https://github.com/Sajal-12/PathfindingVisualizer"
                className="flex items-center hover:text-primary transition-colors"
                aria-label="GitHub repository"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} className="inline-block" />
              </a>
              <a
                href="https://pathfinding-visualizer-ss.netlify.app/"
                className="flex items-center hover:text-primary transition-colors"
                aria-label="Live Demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} className="inline-block" />
              </a>
            </div>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>
                Developed an{" "}
                <span className="font-bold">interactive web application</span> to
                visualize various pathfinding algorithms including{" "}
                <span className="font-bold">
                  Dijkstra&apos;s, A*, BFS, and DFS
                </span>
                .
              </li>
              <li>
                Implemented a responsive grid system with{" "}
                <span className="font-bold">customizable animation speed</span>{" "}
                and obstacle placement.
              </li>
              <li>
                Utilized <span className="font-bold">React.js</span> for
                efficient state management and component-based architecture.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* JKS Restaurant Project */}
        <Card className="mb-3">
          <CardContent className="p-3">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="font-bold">JKS RESTAURANT</h3>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">
                MERN
              </div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">
                Tailwind
              </div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">
                Blockchain
              </div>
              <a
                href="https://github.com/Sajal-12/JKS---Restaurant"
                className="flex items-center hover:text-primary transition-colors"
                aria-label="GitHub repository"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} className="inline-block" />
              </a>
              <a
                href="https://lucent-kitten-5ba2da.netlify.app/"
                className="flex items-center hover:text-primary transition-colors"
                aria-label="Live Demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} className="inline-block" />
              </a>
            </div>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>
                Built a <span className="font-bold">full-stack MERN application</span>{" "}
                for a restaurant featuring an elegant UI with{" "}
                <span className="font-bold">responsive design</span>.
              </li>
              <li>
                Implemented{" "}
                <span className="font-bold">RESTful API</span> endpoints for menu
                items, reservations, and user authentication with{" "}
                <span className="font-bold">JWT tokens</span>.
              </li>
              <li>
                Utilized <span className="font-bold">MongoDB</span> for database
                operations and <span className="font-bold">Express.js</span> for
                server-side routing. Also integrated{" "}
                <span className="font-bold">Blockchain</span> technology.
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* SmartJobber Project */}
        <Card>
          <CardContent className="p-3">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="font-bold">SMARTJOBBER</h3>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">
                React.js
              </div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">
                Supabase
              </div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">
                Tailwind CSS
              </div>
              <a
                href="https://github.com/Sajal-12/smartjobber"
                className="flex items-center hover:text-primary transition-colors"
                aria-label="GitHub repository"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} className="inline-block" />
              </a>
              <a
                href="https://supabase.com/dashboard/project/hqrnaunolwzztkjamvab"
                className="flex items-center hover:text-primary transition-colors"
                aria-label="Live Demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} className="inline-block" />
              </a>
            </div>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>
                Developed a{" "}
                <span className="font-bold">job application tracking system</span>{" "}
                with <span className="font-bold">Supabase</span> for backend
                services.
              </li>
              <li>
                Created an intuitive dashboard for users to{" "}
                <span className="font-bold">track application status</span> and
                organize job search activities.
              </li>
              <li>
                Implemented{" "}
                <span className="font-bold">real-time notifications</span> using{" "}
                <span className="font-bold">
                  Supabase&apos;s realtime subscriptions
                </span>
                .
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Technical Skills Section - Condensed */}
      <section className="mb-6">
        <div className="flex items-center mb-3">
          <h2 className="text-xl font-bold">TECHNICAL SKILLS</h2>
          <Separator className="flex-grow ml-3 border-t-2" />
        </div>

        <Card>
          <CardContent className="p-3">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <div className="font-bold mb-1">Programming Languages:</div>
                <p>JavaScript, TypeScript, Java, <span className="font-bold">Solidity</span>, HTML, CSS</p>
              </div>
              <div>
                <div className="font-bold mb-1">Frameworks & Libraries:</div>
                <p>React.js, Node.js, Express.js, MongoDB, Next.js, Tailwind CSS</p>
              </div>
              <div>
                <div className="font-bold mb-1">Development Tools:</div>
                <p>Git, GitHub, VS Code, Webpack, npm, Postman</p>
              </div>
              <div>
                <div className="font-bold mb-1">Technologies:</div>
                <p>
                  RESTful APIs, GraphQL, <span className="font-bold">Blockchain</span>, Web Development, Google Cloud
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Achievements Section */}
      <section className="mb-6">
        <div className="flex items-center mb-3">
          <h2 className="text-xl font-bold">ACHIEVEMENTS</h2>
          <Separator className="flex-grow ml-3 border-t-2" />
        </div>

        <Card>
          <CardContent className="p-3">
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>
                Open Source Contributor with <span className="font-bold">250+ Contributions</span>{" "}
                and <span className="font-bold">70+ Repositories</span> on GitHub.
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
        <div className="flex items-center mb-3">
          <h2 className="text-xl font-bold">CERTIFICATIONS</h2>
          <Separator className="flex-grow ml-3 border-t-2" />
        </div>

        <Card>
          <CardContent className="p-3">
            <ul className="list-disc pl-6 space-y-1 text-sm">
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

