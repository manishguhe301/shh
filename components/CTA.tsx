import Container from "./Container";

const CTA = () => {
  return (
    <section className="bg-ink py-20 text-linen">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl font-light sm:text-4xl">
          You already have a streak going somewhere else.
        </h2>
        <p className="max-w-md text-linen/60">
          Start a different one. Your first weekend in the Whisper League
          is free.
        </p>
        <a
          href="#leagues"
          className="rounded-full bg-linen px-8 py-4 text-sm uppercase tracking-[0.15em] text-ink transition-colors hover:bg-wine-soft hover:text-linen"
        >
          Join the Whisper League — free
        </a>
      </Container>
    </section>
  );
}


export default CTA