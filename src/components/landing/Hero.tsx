"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Wand2 } from "lucide-react";
import { motion } from "framer-motion";
import SignupModal from "./SignupModal";
import DemoModal from "./DemoModal";
import { trackEvent } from "@/lib/analytics";
import RainbowWaveBackground from "./RainbowWaveBackground";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      
      <RainbowWaveBackground />
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-sm text-sm font-medium text-gray-600"
          >
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF0080] opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF0080]"></span>
             </span>
             <span>Beta Access Now Live</span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-gray-900">
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Don't just
            </motion.span>
            <motion.span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] via-[#FF8C00] to-[#7B61FF] pb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              learn it.
            </motion.span>
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Speak it.
            </motion.span>
          </h1>

          <p className="text-xl text-gray-500 max-w-xl leading-relaxed">
            The AI language coach that builds a map of your brain. <br className="hidden md:block" />
            Adaptive scenarios. Instant corrections. <span className="text-gray-900 font-semibold">Zero judgement.</span>
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <SignupModal triggerLocation="hero_primary">
              <Button size="lg" className="h-14 px-8 rounded-full text-lg font-medium bg-gray-900 text-white hover:bg-black shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Start your journey <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </SignupModal>
            
            <DemoModal>
                 <Button 
                    variant="outline" 
                    size="lg" 
                    className="h-14 px-8 rounded-full text-lg font-medium border border-gray-200 bg-white/50 backdrop-blur-sm hover:bg-white text-gray-900 hover:scale-105 transition-all duration-300"
                    onClick={() => trackEvent("cta_click_secondary", { location: "hero_demo_button" })}
                >
                  <Play className="mr-2 w-4 h-4 fill-current" /> Live Demo
                </Button>
            </DemoModal>
          </motion.div>
          
          <div className="pt-4 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                    <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center overflow-hidden`}>
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+10}`} alt="User" />
                    </div>
                ))}
            </div>
            <p>Joined by 10,000+ early adopters</p>
          </div>
        </div>

        {/* Right Visual - Premium Glass Card */}
        <div className="lg:col-span-5 relative mt-12 lg:mt-0">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1.5, delay: 0.5 }}
            className="relative z-20"
          >
             <div className="relative bg-white/60 backdrop-blur-2xl border border-white/40 p-6 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
               {/* Reflection Glint */}
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none"></div>

               <div className="relative z-10 space-y-6">
                 
                 {/* Header of Card */}
                 <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-900 to-gray-700 flex items-center justify-center text-white font-bold text-sm shadow-md">
                            S
                        </div>
                        <div>
                            <div className="text-sm font-bold text-gray-900">Sophie</div>
                            <div className="text-xs text-green-600 font-medium flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Online
                            </div>
                        </div>
                    </div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Real-time</div>
                 </div>

                 {/* Chat Area */}
                 <div className="space-y-4">
                     {/* User Message */}
                     <div className="flex justify-end">
                        <div className="bg-gray-100 text-gray-600 px-5 py-3 rounded-2xl rounded-tr-sm text-sm font-medium max-w-[85%]">
                            "I... uh... want buy ticket?"
                        </div>
                     </div>

                     {/* AI Correction */}
                     <div className="flex justify-start">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF0080] to-[#7B61FF] rounded-2xl rounded-tl-sm opacity-20 blur transition duration-200"></div>
                            <div className="relative bg-white border border-gray-100 p-5 rounded-2xl rounded-tl-sm shadow-sm">
                                <div className="flex items-center gap-2 mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                                    <Wand2 className="w-3 h-3 text-[#FF0080]" /> Suggestion
                                </div>
                                <p className="text-base text-gray-900 leading-relaxed">
                                    <span className="text-gray-400 line-through decoration-red-300 mr-2">want buy</span>
                                    <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#7B61FF]">I'd like to purchase</span>
                                    {" "}a ticket, please.
                                </p>
                            </div>
                        </div>
                     </div>
                 </div>

                 {/* Visualizer Footer */}
                 <div className="pt-2 flex items-center justify-center gap-1 h-8">
                     {[...Array(12)].map((_, i) => (
                         <motion.div 
                            key={i}
                            animate={{ height: [8, 16 + Math.random() * 16, 8] }}
                            transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.05 }}
                            className="w-1 rounded-full bg-gradient-to-t from-gray-900 to-gray-600 opacity-20"
                         />
                     ))}
                 </div>

               </div>
             </div>

             {/* Floating Badge */}
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 -bottom-6 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3 max-w-[160px]"
             >
                 <div className="w-10 h-10 rounded-full bg-[#E0F2FE] flex items-center justify-center text-[#0EA5E9]">
                    <Sparkles className="w-5 h-5 fill-current" />
                 </div>
                 <div className="text-xs font-medium text-gray-600 leading-tight">
                    <strong>+15% Fluency</strong> detected this week
                 </div>
             </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;