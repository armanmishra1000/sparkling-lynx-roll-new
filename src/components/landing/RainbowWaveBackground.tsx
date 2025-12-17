"use client";

import React from "react";
import { motion } from "framer-motion";

const RainbowWaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-white">
      {/* Aurora Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#FF0080] rounded-full blur-[120px] opacity-30 mix-blend-multiply"
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[10%] right-[-20%] w-[600px] h-[600px] bg-[#7B61FF] rounded-full blur-[120px] opacity-30 mix-blend-multiply"
      />

      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-[-20%] left-[20%] w-[700px] h-[700px] bg-[#40E0D0] rounded-full blur-[100px] opacity-20 mix-blend-multiply"
      />

      {/* Noise Texture Overlay for Premium Feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
};

export default RainbowWaveBackground;