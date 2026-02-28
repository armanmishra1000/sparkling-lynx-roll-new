import Navbar from "@/components/landing/Navbar";
import EraSection from "@/components/landing/EraSection";
import LanguagesMarqueeSection from "@/components/landing/LanguagesMarqueeSection";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import ProblemSolution from "@/components/landing/ProblemSolution";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import PersonalizationEngine from "@/components/landing/PersonalizationEngine";
import ProductTour from "@/components/landing/ProductTour";
import ComparisonTable from "@/components/landing/ComparisonTable";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans text-foreground selection:bg-[#FF0080]/20 selection:text-[#FF0080]">
      <Navbar />
      <EraSection />
      <Hero />
      <LanguagesMarqueeSection />
      {/* <SocialProof /> */}
      <ProblemSolution />
      <HowItWorks />
      <Features />
      <PersonalizationEngine />
      <ProductTour />
      <Testimonials />
      <ComparisonTable />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
