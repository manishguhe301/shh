import Arrival from "@/components/Arrival";
import CTA from "@/components/CTA";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Leagues from "@/components/Leagues";
import MechanicFlip from "@/components/MechanicFlip";
import NavBar from "@/components/NavBar";
import Stays from "@/components/Stays";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <MechanicFlip />
        <Stays />
        <Arrival />
        <Leagues />
        <Testimonials />
        <FAQs />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
