
import React from "react";
import { Link } from "react-router-dom";
import { Github, Link as LinkIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-serif bg-white">
      {/* Header/Name Section */}
      <header className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">Shreyansh Kumar Srivastava</h1>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-1">
            <span>📞</span>
            <span>(+91) 7985737698</span>
          </div>
          <div className="flex items-center gap-1">
            <span>📧</span>
            <a href="mailto:Shreyansh.srivastava2812@gmail.com" className="hover:underline">
              Shreyansh.srivastava2812@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-1">
            <a href="https://ShreyasnshSrivastava" className="flex items-center hover:underline">
              <span className="inline-block mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </span>
              <span>Shreyansh-Srivastava</span>
            </a>
          </div>
          <div className="flex items-center gap-1">
            <a href="https://github.com/Sajal-12" className="flex items-center hover:underline">
              <Github size={16} className="inline-block mr-1" />
              <span>ShreyasnshSri</span>
            </a>
          </div>
        </div>
      </header>

      {/* Education Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold border-b-2 border-black pb-1 mb-4">EDUCATION</h2>
        <div className="mb-4">
          <div className="flex flex-col sm:flex-row justify-between mb-1">
            <div className="font-bold">Chandigarh University</div>
            <div className="italic">Mohali, Punjab</div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between text-sm">
            <div><i>B.E. Computer Science and Engineering | CGPA: 7.99</i></div>
            <div>August 2020 – June 2024</div>
          </div>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row justify-between mb-1">
            <div className="font-bold">Academic Global School</div>
            <div className="italic">Gorakhpur, Uttar Pradesh</div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between text-sm">
            <div><i>Secondary Education</i></div>
            <div>2018 – 2020</div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold border-b-2 border-black pb-1 mb-4">PROJECTS</h2>
        
        {/* SmartJobber Project */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="font-bold">SMART JOBBER</h3>
            <span className="text-xs">| React.js, Node.js, Supabase, GraphQL |</span>
            <a href="https://github.com/Sajal-12/smartjobber" className="inline-flex items-center">
              <Github size={16} className="inline-block" />
            </a>
          </div>
          <ul className="list-disc pl-6 space-y-1">
            <li>Built a <span className="font-bold">job matching platform</span> with <span className="font-bold">ML-powered recommendation engine</span> that analyzes resume content and skills to suggest optimal job matches.</li>
            <li>Implemented <span className="font-bold">real-time updates</span> with <span className="font-bold">Supabase</span> for instant notifications on application status and new job postings.</li>
            <li>Designed responsive UI with <span className="font-bold">React</span> and <span className="font-bold">TailwindCSS</span>, providing seamless experience across mobile and desktop.</li>
          </ul>
        </div>

        {/* Blog Website Project */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="font-bold">BLOG-WEBSITE</h3>
            <span className="text-xs">| React.js, Tailwind CSS, Node.js, MongoDB, Firebase |</span>
            <a href="#" className="inline-flex items-center">
              <Github size={16} className="inline-block" />
            </a>
          </div>
          <ul className="list-disc pl-6 space-y-1">
            <li>Developed a full-stack blog website featuring <span className="font-bold">email/password</span> and <span className="font-bold">Google Firebase authentication</span>, with functionalities for liking, commenting, and logging out.</li>
            <li>Built an <span className="font-bold">Admin Dashboard</span> for post management with <span className="font-bold">activity tracking</span>, tested data fetching and API responses using <span className="font-bold">Postman</span>.</li>
            <li>Implemented <span className="font-bold">JWT authentication and bcrypt encryption</span> for secure user access, with <span className="font-bold">Redux Toolkit</span> for state management.</li>
          </ul>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="mb-8">
        <h2 className="text-xl font-bold border-b-2 border-black pb-1 mb-4">TECHNICAL SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <span className="font-bold">Programming Languages:</span> C++, Java, JavaScript
          </div>
          <div>
            <span className="font-bold">Frameworks:</span> ReactJS, Spring Boot
          </div>
          <div>
            <span className="font-bold">Version Control & Collaboration:</span> Git, GitHub
          </div>
          <div>
            <span className="font-bold">Cloud & Databases:</span> Cloud SQL, Snowflake, DynamoDB, Google Pub/Sub
          </div>
          <div>
            <span className="font-bold">Testing & Code Quality:</span> Postman, JUnit, SonarQube, SonarLint
          </div>
          <div>
            <span className="font-bold">Relevant Coursework:</span> Data Structures & Algorithms, OOP, Database Management Systems
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section>
        <h2 className="text-xl font-bold border-b-2 border-black pb-1 mb-4">ACHIEVEMENTS</h2>
        <ul className="space-y-2">
          <li>Solved <span className="font-bold">1000+ DSA problems</span> across platforms like <span className="font-bold">CodeChef</span>, <span className="font-bold">LeetCode</span>, <span className="font-bold">GFG</span>.</li>
          <li>Achieved <span className="font-bold">Snowflake SnowPro Core Certification</span> <span className="font-bold">Certified</span> with hands-on expertise in cloud data warehousing and data management.</li>
          <li>Competed in <span className="font-bold">35+ coding contests</span> on CodeChef, achieving a <span className="font-bold">global rank of 22nd</span> in the April Long Challenge and <span className="font-bold">124th in Starters 112 Division 3</span>.</li>
          <li>Reached a <span className="font-bold">maximum rating of 1611</span> on CodeChef and <span className="font-bold">1685 on LeetCode (top 15% user)</span>, demonstrating strong competitive programming skills.</li>
        </ul>
      </section>
    </div>
  );
};

export default Index;
