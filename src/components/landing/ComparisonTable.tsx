"use client";

import React from "react";
import { Check, X, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const ComparisonTable = () => {
  const features = [
    {
      name: "Active Speaking Time",
      sophie: "Unlimited",
      apps: "0 mins (Tapping)",
      tutor: "45 mins / session",
    },
    {
      name: "Cost per Month",
      sophie: "$12",
      apps: "$0 - $15",
      tutor: "$200+",
    },
    {
      name: "Feedback Speed",
      sophie: "Instant (<1s)",
      apps: "Instant (Binary)",
      tutor: "Delayed (Polite)",
    },
    {
      name: "Contextual Memory",
      sophie: "Permanent",
      apps: "None",
      tutor: "Human Memory",
    },
    {
      name: "Availability",
      sophie: "24/7",
      apps: "24/7",
      tutor: "Scheduled",
    },
    {
      name: "Anxiety Factor",
      sophie: "Zero",
      apps: "Low",
      tutor: "High",
    },
  ];

  return (
    <section className="py-32 bg-gray-50/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-gray-900">
            Compare your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#7B61FF]">options.</span>
          </h2>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px] bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden relative">
            
            {/* Header Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF0080] to-transparent opacity-50"></div>

            <div className="grid grid-cols-4 p-8 border-b border-gray-100 bg-gray-50/50 text-sm uppercase tracking-widest font-bold text-gray-500">
              <div className="col-span-1">Feature</div>
              <div className="col-span-1 text-center text-[#7B61FF]">Sophie.ai</div>
              <div className="col-span-1 text-center">Gamified Apps</div>
              <div className="col-span-1 text-center">Private Tutor</div>
            </div>

            <div className="divide-y divide-gray-100">
              {features.map((feature, i) => (
                <div 
                    key={i} 
                    className="grid grid-cols-4 p-6 items-center hover:bg-gray-50 transition-colors group"
                >
                  <div className="col-span-1 font-bold text-gray-900 group-hover:text-black">{feature.name}</div>
                  
                  {/* Sophie Column */}
                  <div className="col-span-1 text-center flex justify-center">
                    <div className="bg-[#7B61FF]/10 text-[#7B61FF] font-bold px-4 py-2 rounded-full text-sm inline-flex items-center gap-2 shadow-sm border border-[#7B61FF]/20">
                        {feature.sophie === "Unlimited" || feature.sophie === "Zero" || feature.sophie.includes("Permanent") ? (
                            <Check className="w-3.5 h-3.5" />
                        ) : null}
                        {feature.sophie}
                    </div>
                  </div>

                  {/* Apps Column */}
                  <div className="col-span-1 text-center text-gray-500 font-medium text-sm">
                    {feature.apps}
                  </div>

                  {/* Tutor Column */}
                  <div className="col-span-1 text-center text-gray-500 font-medium text-sm">
                    {feature.tutor}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-6 text-center text-xs text-gray-400 font-medium border-t border-gray-100">
                * Based on average market rates for professional language tutors in the US/EU.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;