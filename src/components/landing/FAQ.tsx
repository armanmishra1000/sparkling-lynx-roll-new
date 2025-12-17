"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-white border-t border-black/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tight mb-4">FAQ</h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border-2 border-black/5 px-6 rounded-2xl data-[state=open]:border-black transition-colors">
            <AccordionTrigger className="text-lg font-bold hover:no-underline">What languages at launch?</AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg leading-relaxed">
              We are launching with Spanish, French, German, and English. More languages will be added soon based on user demand.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="border-2 border-black/5 px-6 rounded-2xl data-[state=open]:border-black transition-colors">
            <AccordionTrigger className="text-lg font-bold hover:no-underline">Is this good for beginners?</AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg leading-relaxed">
              Absolutely. Sophie adapts to your level, whether you are a complete beginner or looking to polish your fluency.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="border-2 border-black/5 px-6 rounded-2xl data-[state=open]:border-black transition-colors">
            <AccordionTrigger className="text-lg font-bold hover:no-underline">How is this different from generic AI?</AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg leading-relaxed">
              Generic AIs forget you. Sophie remembers your mistakes, your vocabulary gaps, and your goals, building a personalized curriculum that evolves with you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="border-2 border-black/5 px-6 rounded-2xl data-[state=open]:border-black transition-colors">
            <AccordionTrigger className="text-lg font-bold hover:no-underline">Is my voice data private?</AccordionTrigger>
            <AccordionContent className="text-gray-500 text-lg leading-relaxed">
              Yes. We take privacy seriously. Your voice data is processed securely and is never sold to third parties.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;