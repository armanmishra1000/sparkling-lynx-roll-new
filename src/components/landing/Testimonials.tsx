"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Finally an app that actually lets me speak. I used to freeze in meetings, now I just talk.",
        author: "Elena R.",
        role: "Product Manager",
        gradient: "from-pink-500/10 to-rose-500/10"
    },
    {
        quote: "The corrections are spot on. It doesn't just correct grammar, it corrects style.",
        author: "Marco D.",
        role: "Software Engineer",
        gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
        quote: "I love that it remembers my mistakes. It feels like a real tutor that knows me.",
        author: "Sarah K.",
        role: "Student",
        gradient: "from-purple-500/10 to-violet-500/10"
    }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
            Don't take our <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800">word for it.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
                <div 
                    key={i} 
                    className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                    {/* Subtle Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient} rounded-3xl opacity-50`}></div>
                    
                    <div className="relative z-10">
                        <div className="mb-6 opacity-20">
                            <Quote className="w-10 h-10 text-black" />
                        </div>
                        
                        <div className="flex space-x-1 mb-6">
                            {[...Array(5)].map((_, j) => (
                                <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>

                        <p className="text-lg font-medium leading-relaxed mb-8 text-gray-800">"{t.quote}"</p>
                        
                        <div className="flex items-center gap-4 pt-6 border-t border-gray-100/50">
                            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold text-gray-500">
                                {t.author.charAt(0)}
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">{t.author}</div>
                                <div className="text-sm text-gray-500 font-medium">{t.role}</div>
                            </div>
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