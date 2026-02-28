"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, History, Map, Brain } from "lucide-react";
import { Colors } from "@/lib/constants";
import { RainbowIcon } from "@/components/ui/RainbowIcon";

// Restored nodes data for the Stat Grid
const stats = [
  { label: "Confidence", val: "100%", color: "bg-red-500" },
  { label: "Vocab", val: "88%", color: "bg-orange-500" },
  { label: "Tone", val: "81%", color: "bg-amber-500" },
  { label: "Fluency", val: "75%", color: "bg-green-500" },
  { label: "Accent", val: "64%", color: "bg-blue-500" },
];

const PersonalizationEngine = () => {
  const steps = [
    {
      icon: History,
      title: "Persistent Memory",
      desc: "Mistakes from last week become drills for today. Nothing is lost.",
      delay: 0.1
    },
    {
      icon: TrendingUp,
      title: "Adaptive Difficulty",
      desc: "Always challenging, never crushing. It scales with your confidence.",
      delay: 0.2
    },
    {
      icon: Map,
      title: "Context Awareness",
      desc: "Sophie knows you're a 'Software Engineer' who likes 'Hiking', not a generic user.",
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Define Rainbow Gradient for Icons */}


      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT COLUMN: Header + Stats Grid */}
          <div>
            <div className="lg:text-left text-center">
              <h2
                className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-6"
              >
                We build a map of your unique brain.
              </h2>
              <p className="text-xl text-gray-500 mb-12 leading-relaxed">
                Most apps reset every session. Sophie builds a persistent, evolving model of your language patterns. She knows what you know.
              </p>
            </div>
            {/* The "Nodes" as a Clean Stat Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white border p-5 rounded-2xl shadow-sm flex flex-col justify-between gap-2"
                >
                  <div className={`w-2 h-2 rounded-full ${stat.color}`} />
                  <div>
                    <div className="text-gray-500 text-xs tracking-wider">{stat.label}</div>
                    <div className="text-2xl text-black tracking-tight">{stat.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Feature Steps */}
          <div className="space-y-6 lg:mt-24">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-3xl border shadow-sm group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0">
                    <RainbowIcon
                      icon={step.icon}
                      className="w-6 h-6"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-black mb-2">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PersonalizationEngine;