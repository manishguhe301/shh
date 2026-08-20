import Container from './Container'
import SectionHeader from './SectionHeader'

const VOICES = [
  {
    quote:
      "I run a language-learning startup, so the joke wasn't lost on me. What surprised me was how much I needed the actual thing.",
    name: "R. Bhatt",
    role: "Ridge House, 4 nights",
  },
  {
    quote:
      "My streak is at 63 days now. My family has started leaving notes instead of calling. Not sure that was the goal, but I'll take it.",
    name: "S. Menon",
    role: "Hush League member",
  },
  {
    quote:
      "There is no leaderboard in the Silence League. When I asked why, the host just looked at me. I understood.",
    name: "A. Fernandes",
    role: "Still League member",
  },
];

const Testimonials = () => {
  return (
    <section id="voices" className="bg-linen py-24 sm:py-28">
      <Container>
        <SectionHeader
          title='What gets said afterward'
          desc='Notes from the guestbook'
          containerStyles='mx-auto max-w-xl'
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {VOICES.map((v) => (
            <figure
              key={v.name}
              className="flex flex-col justify-between rounded-2xl border border-ink/10 bg-linen-deep/40 p-8"
            >
              <blockquote className="font-display text-lg font-light leading-relaxed text-ink">
                &ldquo;{v.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-xs uppercase tracking-[0.15em] text-stone">
                {v.name} — {v.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Testimonials