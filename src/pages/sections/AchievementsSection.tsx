
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

const AchievementsSection = () => (
  <section className="mb-4 px-6">
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
);

export default AchievementsSection;
