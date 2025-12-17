import React from "react";
import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      {/* Left: Form */}
      <div className="flex flex-col p-8 lg:p-12 justify-between bg-background relative">
        <Link href="/" className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-black transition-colors mb-8 w-fit">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
        
        <div className="flex-1 flex flex-col justify-center items-center">
            <LoginForm />
        </div>

        <div className="mt-8 text-center lg:text-left text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Sophie AI Inc.
        </div>
      </div>

      {/* Right: Visual */}
      <div className="hidden lg:flex flex-col justify-center items-center p-12 relative overflow-hidden bg-black text-white">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FF0080] via-purple-900 to-black opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#40E0D0] via-transparent to-transparent opacity-40"></div>
        </div>
        
        <div className="relative z-10 max-w-lg text-center">
            <div className="mb-8">
                <div className="text-6xl font-black mb-4">"</div>
                <p className="text-3xl font-medium leading-tight mb-8">
                    Sophie pushed me to speak from Day 1. It's terrifying, thrilling, and incredibly effective.
                </p>
                <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 mb-4 border-2 border-white"></div>
                    <div className="font-bold text-lg">Alex Chen</div>
                    <div className="text-sm text-gray-400 uppercase tracking-widest">Polyglot & Developer</div>
                </div>
            </div>
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
      </div>
    </main>
  );
}