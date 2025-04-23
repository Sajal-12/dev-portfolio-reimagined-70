
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const EducationSection = () => (
  <section className="mb-4 px-6">
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
);

export default EducationSection;
