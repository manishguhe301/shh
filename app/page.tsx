import Arrival from "@/components/Arrival";
import Hero from "@/components/Hero";
import MechanicFlip from "@/components/MechanicFlip";
import NavBar from "@/components/NavBar";
import Stays from "@/components/Stays";

export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <Hero />
        <MechanicFlip />
        <Stays />
        <Arrival />
      </main>
    </div>
  );
}
