import React from "react";
import Link from "next/link";
import { MadeWithDyad } from "../made-with-dyad";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Top Section: CTA and Brand */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-10">
            <div className="max-w-md">
                <Link href="/" className="text-3xl font-bold tracking-tight mb-6 block">Sophie.ai</Link>
                <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
                    Ready to find your <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF0080] to-[#7B61FF]">voice?</span>
                </h3>
                <div className="flex gap-4">
                    <Button className="rounded-full px-8 h-12 bg-black hover:bg-gray-800 text-white font-medium">Get Started</Button>
                    <Button variant="outline" className="rounded-full px-8 h-12 border-gray-200 hover:bg-gray-50">Contact Sales</Button>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
                <div>
                    <h4 className="font-semibold mb-6 text-gray-900">Product</h4>
                    <ul className="space-y-4 text-sm text-gray-500 font-medium">
                        <li><Link href="#features" className="hover:text-black transition-colors">Features</Link></li>
                        <li><Link href="#pricing" className="hover:text-black transition-colors">Pricing</Link></li>
                        <li><Link href="#methodology" className="hover:text-black transition-colors">Methodology</Link></li>
                        <li><Link href="/login" className="hover:text-black transition-colors">Log in</Link></li>
                    </ul>
                </div>

                 <div>
                    <h4 className="font-semibold mb-6 text-gray-900">Company</h4>
                    <ul className="space-y-4 text-sm text-gray-500 font-medium">
                        <li><Link href="#" className="hover:text-black transition-colors">About</Link></li>
                        <li><Link href="#" className="hover:text-black transition-colors">Blog</Link></li>
                        <li><Link href="#" className="hover:text-black transition-colors">Careers</Link></li>
                        <li><Link href="#" className="hover:text-black transition-colors">Press</Link></li>
                    </ul>
                </div>

                 <div>
                    <h4 className="font-semibold mb-6 text-gray-900">Legal</h4>
                    <ul className="space-y-4 text-sm text-gray-500 font-medium">
                        <li><Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link></li>
                        <li><Link href="#" className="hover:text-black transition-colors">Cookie Policy</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Sophie AI Inc. All rights reserved.</p>
            
            <div className="flex items-center space-x-8 mt-4 md:mt-0 font-medium">
                <Link href="#" className="hover:text-black transition-colors">Twitter</Link>
                <Link href="#" className="hover:text-black transition-colors">LinkedIn</Link>
                <Link href="#" className="hover:text-black transition-colors">Instagram</Link>
            </div>
        </div>
        <div className="mt-8 flex justify-center opacity-50 hover:opacity-100 transition-opacity">
            <MadeWithDyad />
        </div>
      </div>
    </footer>
  );
};

export default Footer;