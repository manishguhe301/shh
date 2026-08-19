import Hero from "@/components/Hero";
import MechanicFlip from "@/components/MechanicFlip";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <MechanicFlip />
      </main>
    </div>
  );
}
