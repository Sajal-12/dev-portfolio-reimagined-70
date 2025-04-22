
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
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">Shreyansh Kumar Srivastava</h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="tel:+917985737698" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Phone size={16} className="inline-block" />
            <span>(+91) 7985737698</span>
          </a>
          <a href="mailto:Shreyansh.srivastava2812@gmail.com" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Mail size={16} className="inline-block" />
            <span>Shreyansh.srivastava2812@gmail.com</span>
          </a>
          <a href="https://linkedin.com/in/Shreyansh-Srivastava" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Linkedin size={16} className="inline-block" />
            <span>Shreyansh-Srivastava</span>
          </a>
          <a href="https://github.com/Sajal-12" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Github size={16} className="inline-block" />
            <span>Sajal-12</span>
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
              <div className="font-bold">Chandigarh University</div>
              <div className="italic">Mohali, Punjab</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-sm">
              <div><i>B.E. Computer Science and Engineering | CGPA: 7.99</i></div>
              <div>August 2020 – June 2024</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row justify-between mb-1">
              <div className="font-bold">Academic Global School</div>
              <div className="italic">Gorakhpur, Uttar Pradesh</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-sm">
              <div><i>Secondary Education</i></div>
              <div>2018 – 2020</div>
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
        
        {/* SmartJobber Project */}
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="font-bold">SMART JOBBER</h3>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">React.js</div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">Node.js</div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">Supabase</div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">GraphQL</div>
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
              <li>Built a <span className="font-bold">job matching platform</span> with <span className="font-bold">ML-powered recommendation engine</span> analyzing resume content to suggest optimal job matches.</li>
              <li>Implemented <span className="font-bold">real-time updates</span> with <span className="font-bold">Supabase</span> for instant notifications on application status.</li>
              <li>Designed responsive UI with <span className="font-bold">React</span> and <span className="font-bold">TailwindCSS</span> for seamless cross-device experience.</li>
            </ul>
          </CardContent>
        </Card>

        {/* Blog Website Project */}
        <Card>
          <CardContent className="p-4">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="font-bold">BLOG-WEBSITE</h3>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">React.js</div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">Tailwind CSS</div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">Node.js</div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">MongoDB</div>
              <div className="text-xs px-2 py-1 bg-muted rounded-full">Firebase</div>
              <a 
                href="https://github.com/Sajal-12/Blog-Website" 
                className="flex items-center hover:text-primary transition-colors"
                aria-label="GitHub repository"
              >
                <Github size={16} className="inline-block" />
              </a>
            </div>
            <ul className="list-disc pl-6 space-y-1">
              <li>Developed a full-stack blog platform with <span className="font-bold">Firebase authentication</span> and social features.</li>
              <li>Built an <span className="font-bold">Admin Dashboard</span> with <span className="font-bold">activity tracking</span> and content management.</li>
              <li>Implemented <span className="font-bold">JWT authentication</span> and <span className="font-bold">Redux Toolkit</span> for state management.</li>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold">Programming Languages</span>
                    <span className="text-sm">C++, Java, JavaScript</span>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold">Frameworks</span>
                    <span className="text-sm">ReactJS, Spring Boot</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold">Version Control</span>
                    <span className="text-sm">Git, GitHub</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
              </div>
              
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold">Cloud & Databases</span>
                    <span className="text-sm">Cloud SQL, Snowflake, DynamoDB</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold">Testing & Code Quality</span>
                    <span className="text-sm">Postman, JUnit, SonarQube</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-bold">Relevant Coursework</span>
                    <span className="text-sm">DSA, OOP, DBMS</span>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Achievements Section */}
      <section>
        <div className="flex items-center mb-4">
          <h2 className="text-xl font-bold">ACHIEVEMENTS</h2>
          <Separator className="flex-grow ml-3" />
        </div>
        
        <Card>
          <CardContent className="p-4">
            <ul className="space-y-2">
              <li>Solved <span className="font-bold">1000+ DSA problems</span> across platforms like <span className="font-bold">CodeChef</span>, <span className="font-bold">LeetCode</span>, <span className="font-bold">GFG</span>.</li>
              <li>Achieved <span className="font-bold">Snowflake SnowPro Core Certification</span> with expertise in cloud data warehousing.</li>
              <li>Competed in <span className="font-bold">35+ coding contests</span>, achieving a <span className="font-bold">global rank of 22nd</span> in the April Long Challenge.</li>
              <li>Reached a <span className="font-bold">maximum rating of 1611</span> on CodeChef and <span className="font-bold">1685 on LeetCode (top 15% user)</span>.</li>
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
