"use client";

import React from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDemo } from "@/context/DemoContext";
import { RainbowGradient } from "@/components/ui/RainbowGradient";
import { RainbowIcon } from "@/components/ui/RainbowIcon";

const ComparisonTable = () => {
  const { currentLanguage } = useDemo();

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
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-24">

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6">
            Compare your options.
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            See how Sophie stacks up against traditional learning methods and other apps.
            The difference isn't just in the price—it's in the results.
          </p>
        </div>

        {/* Glassmorphic Table Container */}
        <div className="relative rounded-[2rem] md:rounded-[2.5rem] border backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] ring-1 ring-gray-900/5 overflow-hidden">

          <div
            className="overflow-x-auto custom-scrollbar relative max-h-[800px]"
          >
            <div className="min-w-[900px]">
              {/* Header */}
              <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-gray-100 bg-gray-50">
                <div className="p-6 md:p-8 font-medium text-lg md:text-xl text-black flex items-center">
                  Feature
                </div>
                <div className="p-6 md:p-8 relative">
                  <RainbowGradient className="absolute inset-0 opacity-20" />
                  <div
                    className="relative z-10 text-center font-medium text-lg md:text-xl flex items-center justify-center gap-2"
                  >
                    Sophie.ai
                  </div>
                  {/* Top Accent Line for Sophie Column */}
                  <RainbowGradient className="absolute top-0 left-0 right-0 h-1" />
                </div>
                <div className="p-6 md:p-8 text-center font-medium text-lg md:text-xl text-black flex items-center justify-center">
                  Gamified Apps
                </div>
                <div className="p-6 md:p-8 text-center font-medium text-lg md:text-xl text-black flex items-center justify-center">
                  Private Tutor
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-gray-100">
                {features.map((feature, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[1.5fr_1fr_1fr_1fr] hover:bg-white/50 transition-colors group relative"
                  >
                    {/* Feature Name */}
                    <div className="p-4 md:p-6 flex items-center gap-3 md:gap-4 border-r md:border-r-0 border-gray-100/50">
                      <span className="text-gray-500 ">
                        {feature.name}
                      </span>
                    </div>

                    {/* Sophie Column */}
                    <div className="p-4 md:p-6 flex items-center justify-center relative">
                      {/* Subtle column highlight just for Sophie */}
                      <RainbowGradient className="absolute inset-0 opacity-20" />

                      <div
                        key={`col-${currentLanguage.id}-${i}`}
                        className={cn(
                          "px-4 py-2.5 rounded-xl inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-sm",
                        )}
                      // style={{
                      //   color: currentLanguage.color,
                      //   borderColor: `${currentLanguage.color}30`,
                      //   boxShadow: `0 4px 12px ${currentLanguage.color}15`
                      // }}
                      >
                        {feature.sophie.includes("Unlimited") || feature.sophie === "Permanent" || feature.sophie === "Zero" ? (
                          <div
                            className="p-1 flex items-center justify-center rounded-full bg-white shadow-sm shrink-0"
                          >
                            <RainbowIcon icon={Check} size={14} className="stroke-[4]" />
                          </div>
                        ) : null}
                        {feature.sophie}
                      </div>
                    </div>

                    {/* Apps Column */}
                    <div className="p-4 md:p-6 flex items-center justify-center text-gray-500">
                      <span className="opacity-90">{feature.apps}</span>
                    </div>

                    {/* Tutor Column */}
                    <div className="p-4 md:p-6 flex items-center justify-center text-gray-500">
                      <span className="opacity-90">{feature.tutor}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 text-center text-sm text-gray-500 border-t border-gray-100/50 flex items-center justify-center gap-2">
            <span>Based on average market rates for professional language tutors in the US/EU.</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ComparisonTable;
