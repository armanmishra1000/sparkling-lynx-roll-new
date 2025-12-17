"use client";

import React from "react";
import { MessageSquare, GraduationCap, Headphones, Zap, Ear, Brain } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: MessageSquare,
    title: "Real conversations",
    description: "Practice travel, work, social, daily life—like you'll actually use."
  },
  {
    icon: GraduationCap,
    title: "Tutor Mode",
    description: "Step-by-step guidance when you want it. No guessing."
  },
  {
    icon: Headphones,
    title: "Roleplay Mode",
    description: "Stay in the flow. No interruptions—feedback comes after."
  },
  {
    icon: Zap,
    title: "Instant corrections",
    description: "Not 'wrong/right'. You get the better sentence for your context."
  },
  {
    icon: Ear,
    title: "Pronunciation coaching",
    description: "Hear it, say it, fix it—fast. Accent, rhythm, clarity."
  },
  {
    icon: Brain,
    title: "Personalization memory",
    description: "Sophie remembers your weak spots and builds tomorrow's lesson from today's mistakes."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-secondary/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Sophie?</h2>
          <p className="text-muted-foreground">Everything you need to go from frozen to fluent.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-8 rounded-3xl border border-border/60 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 text-primary">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;