"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SignupModal from "./SignupModal";

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
            INVEST IN YOUR <span className="rainbow-text">VOICE</span>
          </h2>
          <p className="text-xl text-gray-500">Simple pricing. Cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Free */}
            <div className="bg-white rounded-[2rem] p-8 border-2 border-black/5 hover:border-black transition-colors">
                <h3 className="text-xl font-bold mb-2">Starter</h3>
                <div className="text-4xl font-black mb-6">$0</div>
                <ul className="space-y-4 mb-8">
                    <li className="flex items-center space-x-3 text-sm font-medium">
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center"><Check className="w-3 h-3" /></div>
                        <span>10 mins/day speaking</span>
                    </li>
                    <li className="flex items-center space-x-3 text-sm font-medium">
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center"><Check className="w-3 h-3" /></div>
                        <span>Basic feedback</span>
                    </li>
                </ul>
                <SignupModal triggerLocation="pricing_free">
                    <Button variant="outline" className="w-full rounded-xl h-12 border-2 border-black font-bold hover:bg-gray-50">Join Waitlist</Button>
                </SignupModal>
            </div>

            {/* Plus - The Highlight */}
            <div className="bg-black text-white rounded-[2rem] p-8 border-2 border-black relative transform md:-translate-y-4 shadow-2xl">
                <div className="absolute top-0 right-0 bg-[#FF0080] text-white text-xs font-black px-4 py-2 rounded-bl-2xl rounded-tr-[1.8rem] uppercase tracking-wider">Most Popular</div>
                <h3 className="text-xl font-bold mb-2 text-[#FF0080]">Plus</h3>
                <div className="text-5xl font-black mb-6">$12<span className="text-lg font-medium text-gray-400">/mo</span></div>
                <ul className="space-y-4 mb-8">
                    <li className="flex items-center space-x-3 text-sm font-medium">
                        <div className="w-6 h-6 rounded-full bg-[#FF0080] flex items-center justify-center text-white"><Check className="w-3 h-3" /></div>
                        <span>Unlimited speaking</span>
                    </li>
                    <li className="flex items-center space-x-3 text-sm font-medium">
                        <div className="w-6 h-6 rounded-full bg-[#FF0080] flex items-center justify-center text-white"><Check className="w-3 h-3" /></div>
                        <span>Full detailed feedback</span>
                    </li>
                    <li className="flex items-center space-x-3 text-sm font-medium">
                        <div className="w-6 h-6 rounded-full bg-[#FF0080] flex items-center justify-center text-white"><Check className="w-3 h-3" /></div>
                        <span>Tutor Mode</span>
                    </li>
                    <li className="flex items-center space-x-3 text-sm font-medium">
                        <div className="w-6 h-6 rounded-full bg-[#FF0080] flex items-center justify-center text-white"><Check className="w-3 h-3" /></div>
                        <span>Roleplay scenarios</span>
                    </li>
                </ul>
                <SignupModal triggerLocation="pricing_plus">
                    <Button className="w-full rounded-xl h-14 bg-white text-black hover:bg-gray-200 font-bold text-lg">Start Free Trial</Button>
                </SignupModal>
            </div>

            {/* Pro */}
            <div className="bg-white rounded-[2rem] p-8 border-2 border-black/5 hover:border-black transition-colors">
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <div className="text-4xl font-black mb-6">$29<span className="text-lg font-medium text-gray-400">/mo</span></div>
                <ul className="space-y-4 mb-8">
                    <li className="flex items-center space-x-3 text-sm font-medium">
                        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white"><Check className="w-3 h-3" /></div>
                        <span>Everything in Plus</span>
                    </li>
                    <li className="flex items-center space-x-3 text-sm font-medium">
                        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white"><Check className="w-3 h-3" /></div>
                        <span>Advanced drills</span>
                    </li>
                    <li className="flex items-center space-x-3 text-sm font-medium">
                        <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white"><Check className="w-3 h-3" /></div>
                        <span>Accent training</span>
                    </li>
                </ul>
                <SignupModal triggerLocation="pricing_pro">
                    <Button variant="outline" className="w-full rounded-xl h-12 border-2 border-black font-bold hover:bg-gray-50">Join Waitlist</Button>
                </SignupModal>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;