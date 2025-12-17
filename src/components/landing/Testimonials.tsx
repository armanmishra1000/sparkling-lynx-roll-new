"use client";

import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">What people say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                {
                    quote: "Finally an app that actually lets me speak. I used to freeze in meetings, now I just talk.",
                    author: "Elena R.",
                    role: "Product Manager"
                },
                {
                    quote: "The corrections are spot on. It doesn't just correct grammar, it corrects style.",
                    author: "Marco D.",
                    role: "Software Engineer"
                },
                {
                    quote: "I love that it remembers my mistakes. It feels like a real tutor that knows me.",
                    author: "Sarah K.",
                    role: "Student"
                }
            ].map((t, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-border/50">
                    <div className="flex space-x-1 text-yellow-400 mb-4">
                        {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-gray-700 mb-6 italic">"{t.quote}"</p>
                    <div>
                        <div className="font-bold">{t.author}</div>
                        <div className="text-sm text-muted-foreground">{t.role}</div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;