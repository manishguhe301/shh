import { FLIPS } from "@/utils/constants";
import Container from "./Container";
import SectionHeader from "./SectionHeader";

export default function MechanicFlip() {
  return (
    <section id="practice" className="border-y border-ink/10 bg-linen-deep/40 py-24 sm:py-28">
      <Container>
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
