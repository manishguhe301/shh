import Container from "./Container";
import SectionHeader from "./SectionHeader";

const FLIPS = [
  {
    original: "Daily reminder to practice speaking",
    flipped: "Daily reminder to practice saying nothing",
  },
  {
    original: '"Duo is sad you missed your lesson"',
    flipped: '"You spoke 40 words today. That\'s alright. Try for less tomorrow."',
  },
  {
    original: "Streak counter for consecutive days used",
    flipped: "Streak counter for consecutive days unspoken",
  },
  {
    original: "Leagues: Bronze, Silver, Gold, Diamond",
    flipped: "Leagues: Whisper, Hush, Still, Silence",
  },
  {
    original: "Leaderboard ranks who spoke the most",
    flipped: "Leaderboard ranks who spoke the least",
  },
];

export default function MechanicFlip() {
  return (
    <section id="practice" className="border-y border-ink/10 bg-linen-deep/40 py-24 sm:py-28">
      <Container>
        {/* <div className="mx-auto max-w-xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-wine">
            Same app. Opposite goal.
          </p>
          <h2 className="mt-5 font-display text-4xl font-light text-ink sm:text-5xl">
            Every mechanic you know, pointed the other way.
          </h2>
        </div> */}
        <SectionHeader
          title="Same app. Opposite goal."
          desc="Every mechanic you know, pointed the other way."
          containerStyles="mx-auto max-w-xl "
        />

        <div className="mx-auto mt-16 max-w-3xl divide-y divide-ink/10 border-y border-ink/10">
          {FLIPS.map((f) => (
            <div
              key={f.original}
              className="grid gap-2 py-6 sm:grid-cols-2 sm:gap-8"
            >
              <p className="text-sm text-ink/45 line-through decoration-ink/25">
                {f.original}
              </p>
              <p className="font-display text-lg text-ink sm:text-xl">
                {f.flipped}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
