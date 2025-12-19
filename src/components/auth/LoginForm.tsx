"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, ArrowRight, Github } from "lucide-react";
import { motion } from "framer-motion";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;

    // Send notification to Telegram
    fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        form: "Login Attempt",
        email: emailInput.value,
      }),
    }).catch(console.error);

    // Simulate auth
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <div className="w-full space-y-8">
      <div className="text-center">
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-16 h-16 bg-gradient-to-tr from-[#FF0080] via-[#FFD700] to-[#7B61FF] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-purple-500/20"
        >
            S
        </motion.div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Welcome back</h2>
        <p className="text-gray-500 mt-2 text-lg">
          Ready to flow? Enter your details below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="sophie@example.com" 
            className="h-12 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-[#7B61FF] focus:ring-[#7B61FF]/20 transition-all duration-300" 
            required
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="text-gray-700 font-medium">Password</Label>
            <Link href="#" className="text-xs font-bold text-[#7B61FF] hover:text-[#FF0080] transition-colors">
              Forgot password?
            </Link>
          </div>
          <Input 
            id="password" 
            type="password" 
            className="h-12 rounded-xl border-gray-200 bg-gray-50 focus:bg-white focus:border-[#7B61FF] focus:ring-[#7B61FF]/20 transition-all duration-300" 
            required
          />
        </div>

        <Button 
            type="submit" 
            className="w-full h-12 rounded-xl bg-black hover:bg-gray-800 text-white font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            disabled={loading}
        >
          {loading ? <Loader2 className="animate-spin" /> : "Sign In"}
        </Button>
      </form>

      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-100" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-400 font-bold tracking-wider">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-12 rounded-xl border-gray-200 font-bold hover:bg-gray-50 hover:border-gray-300 transition-all">
          <Github className="mr-2 h-4 w-4" /> Github
        </Button>
        <Button variant="outline" className="h-12 rounded-xl border-gray-200 font-bold hover:bg-gray-50 hover:border-gray-300 transition-all">
          <span className="mr-2 font-serif font-black">G</span> Google
        </Button>
      </div>

      <p className="text-center text-sm text-gray-500">
        Don't have an account?{" "}
        <Link href="/" className="font-bold text-black hover:text-[#7B61FF] transition-colors">
          Sign up for Beta
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;