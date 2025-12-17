"use client";

import React from "react";

const brands = [
  { name: "Linguist.io", font: "font-serif" },
  { name: "SpeechTech", font: "font-mono" },
  { name: "PolyglotDaily", font: "font-sans" },
  { name: "GlobalSpeak", font: "font-serif italic" },
  { name: "FutureLang", font: "font-bold" },
  { name: "VoiceAI", font: "font-mono" },
];

const SocialProof = () => {
  return (
    <section className="py-12 border-b border-gray-100 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          Powering the next generation of polyglots
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group max-w-5xl mx-auto mask-linear-fade">
        {/* We use a mask in CSS or just fade divs on side */}
        
        <div className="flex animate-marquee whitespace-nowrap gap-20 items-center">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <span 
              key={i} 
              className={`text-2xl text-gray-300 ${brand.font} font-medium hover:text-gray-900 transition-colors duration-500 cursor-default select-none grayscale hover:grayscale-0`}
            >
              {brand.name}
            </span>
          ))}
        </div>
        
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-20 items-center ml-20">
           {[...brands, ...brands, ...brands].map((brand, i) => (
            <span 
              key={i} 
              className={`text-2xl text-gray-300 ${brand.font} font-medium hover:text-gray-900 transition-colors duration-500 cursor-default select-none grayscale hover:grayscale-0`}
            >
              {brand.name}
            </span>
          ))}
        </div>
        
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default SocialProof;