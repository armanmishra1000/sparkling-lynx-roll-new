import React from "react";

const SocialProof = () => {
  return (
    <section className="py-10 border-y border-border/40 bg-white/50">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-medium text-muted-foreground mb-8">
          Built with language teachers & speech technology experts
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholders for logos - using text for now as per instructions to not fake logos */}
          <div className="text-xl font-bold font-serif text-gray-400">Linguist.io</div>
          <div className="text-xl font-bold font-sans text-gray-400">SpeechTech</div>
          <div className="text-xl font-bold font-mono text-gray-400">PolyglotDaily</div>
          <div className="text-xl font-bold font-serif italic text-gray-400">GlobalSpeak</div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;