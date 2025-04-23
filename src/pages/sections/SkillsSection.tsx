
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => (
  <section className="mb-4 px-6">
    <div className="flex items-center mb-2">
      <h2 className="text-base font-bold">TECHNICAL SKILLS</h2>
      <Separator className="flex-grow ml-3 border-t-2 border-gray-400" />
    </div>
    <Card>
      <CardContent className="p-3">
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <div className="font-bold mb-0.5">Programming Languages:</div>
            <p>
              Core Java, Java Servlets, JavaScript, TypeScript, Solidity, HTML, CSS
            </p>
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
              RESTful APIs, GraphQL, Blockchain, Web Development, Google Cloud
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </section>
);

export default SkillsSection;
