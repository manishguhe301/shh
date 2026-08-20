import Arrival from "@/components/Arrival";
import Hero from "@/components/Hero";
import Leagues from "@/components/Leagues";
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
        <Leagues />
      </main>
    </div>
  );
}
