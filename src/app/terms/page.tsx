import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-6 max-w-4xl py-32">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using Sophie.ai, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="text-muted-foreground">
              Sophie.ai provides an AI-powered language learning platform ("Service"). You are responsible for obtaining access to the Service and that access may involve third party fees (such as Internet service provider or airtime charges).
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-bold mb-4">3. User Conduct</h2>
            <p className="text-muted-foreground">
              You agree to use the Service only for purposes that are legal, proper and in accordance with these Terms and any applicable policies or guidelines. You agree not to misuse the AI coaching features or attempt to manipulate the system in unintended ways.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground">
              The Service and its original content, features, and functionality are and will remain the exclusive property of Sophie.ai and its licensors. The Service is protected by copyright, trademark, and other laws.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-bold mb-4">5. Termination</h2>
            <p className="text-muted-foreground">
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}