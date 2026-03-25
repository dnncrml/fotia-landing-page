import Hero from "@/components/landing/Hero";
import Process from "@/components/landing/Process";
import Benefits from "@/components/landing/Benefits";
import IgniteProcess from "@/components/landing/IgniteProcess";
import CtaSection from "@/components/landing/CtaSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Process />
      <Benefits />
      <IgniteProcess />
      <CtaSection />
      <Footer />
    </main>
  );
};

export default Index;
