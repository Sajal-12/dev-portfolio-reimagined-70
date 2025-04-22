
import React from "react";
import { Github, Mail, Phone, Linkedin, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 font-serif">
      {/* Header/Name Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">SAJAL SWAPNIL</h1>
        <div className="text-sm mb-2">Basant Bihar, Begusarai, 851101 | 7773876622</div>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="mailto:sajalvictorious3@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Mail size={16} className="inline-block" />
            <span>sajalvictorious3@gmail.com</span>
          </a>
          <a href="https://linkedin.com/in/Shreyansh-Srivastava" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Linkedin size={16} className="inline-block" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/Sajal-12" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Github size={16} className="inline-block" />
            <span>GitHub</span>
          </a>
        </div>
      </header>

      {/* Education Section */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-bold">EDUCATION</h2>
          <Separator className="flex-grow ml-3" />
        </div>
        
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row justify-between mb-1">
              <div className="font-bold">Chandigarh University, Gharuan</div>
              <div className="italic">August 2020 – June 2024</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-sm">
              <div><i>B.E. Computer Science Engineering</i></div>
              <div>CGPA: 7.7</div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row justify-between mb-1">
              <div className="font-bold">ST JOSEPH PUBLIC SCHOOL, Begusarai</div>
              <div className="italic">2018 - 2019</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-sm">
              <div><i>Intermediate (CBSE)</i></div>
              <div>Percentage: 82%</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row justify-between mb-1">
              <div className="font-bold">DAV PUBLIC SCHOOL, Begusarai</div>
              <div className="italic">2016 - 2017</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-sm">
              <div><i>Matriculation (CBSE)</i></div>
              <div>Percentage: 76%</div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Projects Section */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-bold">PROJECTS</h2>
          <Separator className="flex-grow ml-3" />
        </div>
        
        {/* Pathfinding Visualizer Project */}
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="font-bold">PATHFINDING VISUALIZER</h3>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">React.js</div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">JavaScript</div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">CSS</div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">Data Structures & Algorithms</div>
              <a 
                href="https://github.com/Sajal-12/PathfindingVisualizer" 
                className="flex items-center hover:text-primary transition-colors"
                aria-label="GitHub repository"
              >
                <Github size={16} className="inline-block" />
              </a>
              <a 
                href="https://sajal-12.github.io/PathfindingVisualizer/" 
                className="flex items-center hover:text-primary transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={16} className="inline-block" />
              </a>
            </div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Developed an <span className="font-bold">interactive web application</span> to visualize various pathfinding algorithms including <span className="font-bold">Dijkstra's, A*, BFS, and DFS</span> with real-time visualization capabilities.</li>
              <li>Implemented a responsive grid system with <span className="font-bold">customizable animation speed</span> and obstacle placement for enhanced user experience.</li>
              <li>Utilized <span className="font-bold">React.js</span> for efficient state management and component-based architecture, resulting in a smooth and responsive user interface.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Gericht Restaurant Project */}
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="font-bold">GERICHT RESTAURANT</h3>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">React.js</div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">Node.js</div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">Express.js</div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">MongoDB</div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">Tailwind CSS</div>
              <a 
                href="https://github.com/Sajal-12/Gericht-Restaurant" 
                className="flex items-center hover:text-primary transition-colors"
                aria-label="GitHub repository"
              >
                <Github size={16} className="inline-block" />
              </a>
              <a 
                href="https://lucent-kitten-5ba2da.netlify.app/" 
                className="flex items-center hover:text-primary transition-colors"
                aria-label="Live Demo"
              >
                <ExternalLink size={16} className="inline-block" />
              </a>
            </div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Built a <span className="font-bold">full-stack MERN application</span> for a restaurant featuring an elegant UI with <span className="font-bold">responsive design</span> across all device sizes.</li>
              <li>Implemented <span className="font-bold">RESTful API</span> endpoints for menu items, reservations, and user authentication with <span className="font-bold">JWT tokens</span>.</li>
              <li>Utilized <span className="font-bold">MongoDB</span> for database operations and <span className="font-bold">Express.js</span> for server-side routing with optimized performance.</li>
            </ul>
          </CardContent>
        </Card>

        {/* SmartJobber Project */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="font-bold">SMARTJOBBER</h3>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">React.js</div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">Supabase</div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">Tailwind CSS</div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">JavaScript</div>
              <a 
                href="https://github.com/Sajal-12/smartjobber" 
                className="flex items-center hover:text-primary transition-colors"
                aria-label="GitHub repository"
              >
                <Github size={16} className="inline-block" />
              </a>
              <a 
                href="https://supabase.com/dashboard/project/qvrhegtdstcfpbhjvwsk" 
                className="flex items-center hover:text-primary transition-colors"
                aria-label="Supabase project"
              >
                <ExternalLink size={16} className="inline-block" />
              </a>
            </div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Developed a <span className="font-bold">job application tracking system</span> with <span className="font-bold">Supabase</span> for backend services including authentication and database operations.</li>
              <li>Created an intuitive dashboard for users to <span className="font-bold">track application status</span>, set reminders, and organize job search activities.</li>
              <li>Implemented <span className="font-bold">real-time notifications</span> and data synchronization using <span className="font-bold">Supabase's realtime subscriptions</span> for instant updates.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Technical Skills Section */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-bold">TECHNICAL SKILLS</h2>
          <Separator className="flex-grow ml-3" />
        </div>
        
        <Card>
          <CardContent className="p-4">
            <div className="space-y-4">
              <div>
                <div className="font-bold mb-2">Programming Languages:</div>
                <div className="text-sm mb-1">JavaScript, TypeScript, Java (Core, Advanced), Solidity, HTML, CSS</div>
                <Progress value={90} className="h-2" />
              </div>
              
              <div>
                <div className="font-bold mb-2">Frameworks & Libraries:</div>
                <div className="text-sm mb-1">React.js, Node.js, Express.js, MongoDB, Next.js, Tailwind CSS, Material UI</div>
                <Progress value={85} className="h-2" />
              </div>
              
              <div>
                <div className="font-bold mb-2">Development Tools:</div>
                <div className="text-sm mb-1">Git, GitHub, VS Code, Webpack, npm, Postman</div>
                <Progress value={92} className="h-2" />
              </div>
              
              <div>
                <div className="font-bold mb-2">Technologies:</div>
                <div className="text-sm mb-1">RESTful APIs, GraphQL, Blockchain, Web Development, Google Cloud (Basics), Responsive Design</div>
                <Progress value={80} className="h-2" />
              </div>
              
              <div>
                <div className="font-bold mb-2">Relevant Coursework:</div>
                <div className="text-sm mb-1">Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems</div>
                <Progress value={88} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Achievements Section */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-bold">ACHIEVEMENTS</h2>
          <Separator className="flex-grow ml-3" />
        </div>
        
        <Card>
          <CardContent className="p-4">
            <ul className="list-disc pl-6 space-y-2">
              <li>Open Source Contributor with <span className="font-bold">250+ Contributions</span> and <span className="font-bold">70+ Repositories</span> on GitHub.</li>
              <li>Technical Content Creator specializing in Web Development and AI topics on Medium.</li>
              <li>Technical Team Lead and Student Coordinator at <span className="font-bold">Hackoverflow Society</span>.</li>
              <li>Secured Gold Medal in Interstate <span className="font-bold">Chess Championship</span> (2019).</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Certifications Section */}
      <section className="mb-8">
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-bold">CERTIFICATIONS</h2>
          <Separator className="flex-grow ml-3" />
        </div>
        
        <Card>
          <CardContent className="p-4">
            <ul className="list-disc pl-6 space-y-2">
              <li>Full Stack Web Development Certification - Udemy</li>
              <li>Google Cloud Platform Fundamentals Certification</li>
              <li>Enterprise Blockchain Development Certification - SimpliLearn</li>
              <li>AI Tools and Prompt Engineering Workshop Certification - beX10</li>
              <li><a href="https://www.cloudskillsboost.google/profile/badges" className="text-blue-600 hover:underline">Google Cloud Skills Badges</a></li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Print Button */}
      <div className="mt-6 text-center">
        <Button 
          onClick={() => window.print()} 
          className="print:hidden"
        >
          Print Resume
        </Button>
      </div>
    </div>
  );
};

export default Index;
