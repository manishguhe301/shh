import Container from "./Container"

const STEPS = [
  {
    title: "Surrender your phone",
    desc: "At the door. It's returned when you leave, fully charged, with nothing missed.",
  },
  {
    title: "Write your last sentence",
    desc: "One line in the guestbook — the final thing you'll say for the length of your stay.",
  },
  {
    title: "Walk in without a word",
    desc: "A host leads you to your room. No greeting exchanged. That's the whole practice, starting now.",
  },
]

const Arrival = () => {
  return (
    <section className="border-y border-ink/10 bg-linen-deep/40 py-24 sm:py-28">
      <Container className="max-w-3xl">
        Content
      </Container>
    </section>
  )
}

export default Arrival