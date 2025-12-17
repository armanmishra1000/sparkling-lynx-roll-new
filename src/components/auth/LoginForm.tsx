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
    // Simulate auth
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-12 h-12 bg-black rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg"
        >
            S
        </motion.div>
        <h2 className="text-3xl font-black tracking-tight">Welcome back</h2>
        <p className="text-muted-foreground mt-2">
          Ready to flow? Enter your details below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="sophie@example.com" 
            className="h-12 rounded-xl border-2 focus-visible:ring-offset-0 focus-visible:ring-[#FF0080]" 
            required
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="#" className="text-sm font-medium text-[#FF0080] hover:underline">
              Forgot password?
            </Link>
          </div>
          <Input 
            id="password" 
            type="password" 
            className="h-12 rounded-xl border-2 focus-visible:ring-offset-0 focus-visible:ring-[#FF0080]" 
            required
          />
        </div>

        <Button 
            type="submit" 
            className="w-full h-12 rounded-xl bg-black hover:bg-gray-900 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all"
            disabled={loading}
        >
          {loading ? <Loader2 className="animate-spin" /> : "Sign In"}
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground font-bold">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-12 rounded-xl border-2 font-bold">
          <Github className="mr-2 h-4 w-4" /> Github
        </Button>
        <Button variant="outline" className="h-12 rounded-xl border-2 font-bold">
          <span className="mr-2 font-serif font-black">G</span> Google
        </Button>
      </div>

      <p className="text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link href="/" className="font-bold text-black hover:underline">
          Sign up for Beta
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;