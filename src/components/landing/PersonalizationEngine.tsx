"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, TrendingUp, History, Map, Sparkles } from "lucide-react";

const PersonalizationEngine = () => {
  return (
    <section className="py-32 bg-black text-white overflow-hidden relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50"></div>
      
      {/* Glowing Orb Background */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-8 bg-white/5 backdrop-blur-sm"
            >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-bold tracking-wider uppercase">Live Model</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black mb-8 leading-[0.95]"
            >
              WE BUILD A <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40E0D0] to-[#7B61FF]">
                MAP OF YOUR BRAIN.
              </span>
            </motion.h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Most apps reset every session. Sophie builds a persistent, evolving model of your language patterns. She knows what you know.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: History,
                  title: "Persistent Memory",
                  desc: "Mistakes from last week become drills for today. Nothing is lost."
                },
                {
                  icon: TrendingUp,
                  title: "Adaptive Difficulty",
                  desc: "Always challenging, never crushing. It scales with your confidence."
                },
                {
                  icon: Map,
                  title: "Context Awareness",
                  desc: "Sophie knows you're a 'Software Engineer' who likes 'Hiking', not a generic user."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-black p-4 rounded-2xl border border-white/10 group-hover:border-[#40E0D0]/50 transition-colors">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-white">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual: The Synapse Map */}
          <div className="order-1 lg:order-2 flex justify-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-md aspect-square"
            >
              {/* Central Node - The Brain */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-32 h-32 bg-black rounded-full shadow-[0_0_50px_rgba(123,97,255,0.5)] border-2 border-[#7B61FF] flex items-center justify-center relative group">
                   <div className="absolute inset-0 bg-[#7B61FF]/20 rounded-full animate-ping" />
                   <Brain className="w-14 h-14 text-white" />
                   
                   {/* Orbiting particles */}
                   <motion.div 
                     className="absolute inset-[-20px] border border-dashed border-white/20 rounded-full"
                     animate={{ rotate: 360 }}
                     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   />
                </div>
              </div>

              {/* Data Points */}
              {[
                { label: "Grammar", val: "92%", color: "#FF0080", x: "50%", y: "0%" },
                { label: "Accent", val: "64%", color: "#FF8C00", x: "100%", y: "40%" },
                { label: "Vocab", val: "88%", color: "#40E0D0", x: "80%", y: "90%" },
                { label: "Fluency", val: "75%", color: "#7B61FF", x: "20%", y: "90%" },
                { label: "Tone", val: "81%", color: "#FFD700", x: "0%", y: "40%" },
              ].map((node, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: node.x, top: node.y }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 + (i * 0.1), type: "spring" }}
                >
                    {/* Connecting Line to Center (approximate visuals via absolute positioning) */}
                    <div className="absolute top-1/2 left-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent to-white/20 origin-left -z-10" 
                         style={{ 
                             width: '200px', 
                             transform: `translate(-50%, -50%) rotate(${Math.atan2(250 - (parseInt(node.y)/100 * 500), 250 - (parseInt(node.x)/100 * 500)) * (180/Math.PI)}deg)` 
                         }} 
                    />

                    <div 
                        className="bg-black border border-white/20 px-4 py-3 rounded-2xl shadow-xl flex flex-col items-center gap-1 min-w-[100px] hover:scale-110 transition-transform cursor-default"
                        style={{ boxShadow: `0 4px 0 ${node.color}` }}
                    >
                        <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{node.label}</span>
                        <span className="text-xl font-black text-white">{node.val}</span>
                    </div>
                </motion.div>
              ))}

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizationEngine;