import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Brain, Repeat, MessageCircle, Zap } from "lucide-react";

export default function MethodologyPage() {
  const principles = [
    {
      icon: MessageCircle,
      title: "Active Production",
      description: "Passive listening doesn't build fluency. Our 'Input Hypothesis + 1' engine forces you to construct sentences slightly above your current level, triggering rapid adaptation.",
      color: "text-[#FF0080]",
      bg: "bg-[#FF0080]/10"
    },
    {
      icon: Repeat,
      title: "Contextual Spaced Repetition",
      description: "We don't just repeat words. We repeat *patterns* within new contexts. If you struggle with the subjunctive mood, Sophie will weave it into a debate about pizza toppings tomorrow.",
      color: "text-[#FF8C00]",
      bg: "bg-[#FF8C00]/10"
    },
    {
      icon: Brain,
      title: "The Affective Filter",
      description: "Fear blocks learning. By simulating a safe, judgment-free environment, we lower your cortisol levels, allowing your brain to take risks and retain information faster.",
      color: "text-[#40E0D0]",
      bg: "bg-[#40E0D0]/10"
    },
    {
      icon: Zap,
      title: "Immediate Feedback Loop",
      description: "Neuroplasticity requires instant error correction. Sophie intervenes the moment a mistake happens, rewriting the neural pathway before the bad habit sets in.",
      color: "text-[#7B61FF]",
      bg: "bg-[#7B61FF]/10"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 bg-gray-50 border-b border-black/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
                THE SCIENCE OF <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] via-[#FFD700] to-[#7B61FF]">
                    ACQUISITION
                </span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                We didn't invent language learning. We just stripped away the flashcards, gamification, and owl mascots to focus on how the brain actually rewires itself.
            </p>
        </div>
      </section>

      {/* Principles Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
                {principles.map((p, i) => (
                    <div key={i} className="flex gap-6 group">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${p.bg} ${p.color}`}>
                            <p.icon className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-[#7B61FF] transition-colors">{p.title}</h3>
                            <p className="text-lg text-gray-500 leading-relaxed">{p.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#40E0D0] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
            <p className="text-3xl md:text-4xl font-serif italic leading-relaxed mb-8">
                "Language is not a genetic gift, it is a social organism. It lives only when spoken."
            </p>
            <div className="font-bold text-gray-400 uppercase tracking-widest">— Sophie Research Team</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}