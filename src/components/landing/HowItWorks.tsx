"use client";

import React from "react";
import { Target, Mic, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Target,
    title: "Pick a goal",
    description: "Travel, work, exams, dating, or daily life. Sophie tailors the context to you."
  },
  {
    icon: Mic,
    title: "Talk",
    description: "Sophie adapts to your level and pace. Speak freely without judgement."
  },
  {
    icon: TrendingUp,
    title: "Improve",
    description: "Get instant feedback, targeted micro-drills, and a clear progress map."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">How it works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-secondary/10 transition-colors"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;