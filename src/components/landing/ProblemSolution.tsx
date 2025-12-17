"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Most apps teach recognition. <br />
            <span className="text-primary">Real life demands speech.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Problem */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-border/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <X className="w-24 h-24 text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-6 text-gray-900">The Old Way</h3>
            <ul className="space-y-4">
              {[
                "You freeze when the conversation is real.",
                "You don't get corrections at the moment you need them.",
                "You repeat lessons that don't match your life."
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3 text-muted-foreground">
                  <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary to-violet-600 p-8 rounded-3xl shadow-xl text-white relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-4 opacity-10">
              <Check className="w-24 h-24 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-6">Sophie.ai</h3>
            <div className="mb-6">
              <p className="text-primary-foreground/90 font-medium text-lg">
                Sophie is a private coach, not a gamified worksheet.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Real conversations.",
                "Real corrections.",
                "Zero cringe."
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <div className="bg-white/20 p-1 rounded-full">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;