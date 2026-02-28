"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RainbowBorder } from "@/components/ui/RainbowBorder";
import { RainbowText } from "@/components/ui/RainbowText";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: "Step 01",
    title: "Context Injection",
    description: "Travel, work, dating, or arguing with your landlord. Sophie adapts the simulation to your actual life, not a textbook.",
  },
  {
    step: "Step 02",
    title: "Active Simulation",
    description: "No multiple choice. No tapping words. Just talk. Sophie responds at your level, pushing you slightly every time (i+1).",
  },
  {
    step: "Step 03",
    title: "Neural Rewriting",
    description: "Get instant corrections on pronunciation and style. Sophie rewrites your neural pathways before bad habits set in.",
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6"
          >
            The Fluency Loop
          </h2>
          <p
            className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            From frozen to fluent in three cognitive steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left Column: Sophie Image (Sticky on Desktop) */}
          <div className="relative order-2 lg:order-1">
            <div className="lg:sticky lg:top-32">
              <div
                className="relative z-10"
              >
                {/* Soft background glow/shape */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-50/50 rounded-full blur-3xl -z-10" />

                <Image
                  src="/SOPHIE no background.png"
                  alt="Sophie AI Mascot"
                  width={600}
                  height={800}
                  className="w-auto h-[500px] lg:h-[550px] mx-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column: Steps */}
          <div className="flex flex-col gap-10 order-1 lg:order-2 lg:pt-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group"
              >
                <div className="flex flex-col items-start text-left pl-6 border-l-2 border-gray-100 group-hover:border-gray-200 transition-colors duration-300">
                  <span className="text-sm font-bold tracking-wider mb-2 uppercase">
                    <RainbowText text={step.step} />
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 group-hover:text-gray-900 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div
              className="pl-6"
            >
              <RainbowBorder
                className="inline-block"
                borderRadius={9999}
                innerClassName="bg-transparent"
              >
                <button className="bg-black text-white py-4 px-8 rounded-full font-medium text-lg flex items-center gap-2 hover:bg-gray-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
                  Start Talking
                  <ArrowRight className="w-5 h-5" />
                </button>
              </RainbowBorder>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
