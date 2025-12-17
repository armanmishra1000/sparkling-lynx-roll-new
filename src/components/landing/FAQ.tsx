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
    <section id="faq" className="py-24 bg-secondary/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What languages at launch?</AccordionTrigger>
            <AccordionContent>
              We are launching with Spanish, French, German, and English. More languages will be added soon based on user demand.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is this good for beginners?</AccordionTrigger>
            <AccordionContent>
              Absolutely. Sophie adapts to your level, whether you are a complete beginner or looking to polish your fluency.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How is this different from generic AI?</AccordionTrigger>
            <AccordionContent>
              Generic AIs forget you. Sophie remembers your mistakes, your vocabulary gaps, and your goals, building a personalized curriculum that evolves with you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is my voice data private?</AccordionTrigger>
            <AccordionContent>
              Yes. We take privacy seriously. Your voice data is processed securely and is never sold to third parties.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;