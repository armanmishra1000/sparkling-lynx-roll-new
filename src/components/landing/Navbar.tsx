"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, Sparkles } from "lucide-react";
import SignupModal from "./SignupModal";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navLinks = [
    { href: "/methodology", label: "Science" },
    { href: "/#how-it-works", label: "How it works" },
    { href: "/#features", label: "Features" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-4 transition-all duration-500",
        isScrolled ? "pt-4" : "pt-6"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className={cn(
            "w-full max-w-7xl flex items-center justify-between transition-all duration-500 rounded-full px-6",
            isScrolled 
                ? "bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg py-3" 
                : "bg-transparent py-4"
        )}
      >
        <Link href="/" className="flex items-center gap-2 group">
           <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF0080] via-[#FFD700] to-[#7B61FF] rounded-full opacity-80 group-hover:opacity-100 blur-[2px] transition-opacity"></div>
                <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center text-xs font-black">S</div>
           </div>
           <span className="text-xl font-bold tracking-tight text-black">Sophie.ai</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-black/5 rounded-full transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors">
            Log in
          </Link>
          <SignupModal triggerLocation="navbar_desktop">
            <Button className="rounded-full px-6 h-10 bg-black hover:bg-gray-800 text-white font-medium shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all text-sm">
              <Sparkles className="w-3 h-3 mr-2 text-[#FFD700]" /> Early Access
            </Button>
          </SignupModal>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-black hover:bg-black/5 rounded-full">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] flex flex-col border-l border-gray-100 bg-white/95 backdrop-blur-xl">
                <SheetHeader>
                    <SheetTitle className="text-left text-2xl font-bold">Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.href}
                            href={link.href} 
                            onClick={() => setIsOpen(false)}
                            className="text-xl font-medium text-gray-600 hover:text-black transition-colors py-2"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="h-px bg-gray-100 my-4" />
                    <Link href="/login" className="text-xl font-medium text-gray-600 hover:text-black py-2">
                        Log in
                    </Link>
                    <SignupModal triggerLocation="navbar_mobile">
                        <Button className="w-full h-12 rounded-full bg-black hover:bg-gray-900 text-white font-bold text-lg mt-4 shadow-lg">
                            Get Early Access
                        </Button>
                    </SignupModal>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;