"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Finally an app that actually lets me speak. I used to freeze in meetings, now I just talk.",
        author: "Elena R.",
        role: "Product Manager",
        color: "bg-[#FF0080]" // Pink
    },
    {
        quote: "The corrections are spot on. It doesn't just correct grammar, it corrects style.",
        author: "Marco D.",
        role: "Software Engineer",
        color: "bg-[#40E0D0]" // Teal
    },
    {
        quote: "I love that it remembers my mistakes. It feels like a real tutor that knows me.",
        author: "Sarah K.",
        role: "Student",
        color: "bg-[#FF8C00]" // Orange
    }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
            DON'T TAKE OUR <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-600">WORD FOR IT.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
                <div 
                    key={i} 
                    className="group relative bg-white p-8 rounded-[2rem] border-2 border-black transition-transform hover:-translate-y-2"
                >
                    {/* Shadow Block */}
                    <div className={`absolute inset-0 rounded-[2rem] translate-x-2 translate-y-2 ${t.color} -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform border-2 border-black`}></div>
                    
                    <Quote className="w-10 h-10 text-black/10 mb-6" />
                    
                    <div className="flex space-x-1 mb-6">
                        {[...Array(5)].map((_, j) => (
                            <Star key={j} className="w-5 h-5 fill-black text-black" />
                        ))}
                    </div>

                    <p className="text-xl font-medium leading-relaxed mb-8">"{t.quote}"</p>
                    
                    <div className="flex items-center gap-4 border-t-2 border-gray-100 pt-6">
                        <div className={`w-12 h-12 rounded-full border-2 border-black ${t.color}`}></div>
                        <div>
                            <div className="font-bold text-lg">{t.author}</div>
                            <div className="text-sm text-gray-500 font-bold uppercase">{t.role}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;