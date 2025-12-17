import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-6 max-w-4xl py-32">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground">
              Sophie.ai ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and sign up for our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. The Data We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data:</strong> includes email address and telephone number.</li>
              <li><strong>Voice Data:</strong> includes audio recordings of your practice sessions, which are processed to provide feedback and then securely stored or deleted according to your preferences.</li>
              <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
            </ul>
          </section>

           <section>
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Voice Data</h2>
            <p className="text-muted-foreground">
              Your voice data is used exclusively for the purpose of providing language coaching, pronunciation analysis, and feedback. We do not sell your voice data to third parties. We may use anonymized voice data to improve our speech recognition models only if you explicitly opt-in to help improve the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@sophie.ai.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}