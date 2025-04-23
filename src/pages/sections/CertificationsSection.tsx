
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const CertificationsSection = () => (
  <section className="mb-4 px-6">
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
);

export default CertificationsSection;
