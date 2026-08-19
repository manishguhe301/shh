import Image from 'next/image'
import Container from './Container'
import WaveAnimation from './WaveAnimation'

const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
    >
      <Container className="grid gap-16 py-20 sm:py-28 lg:grid-cols-[1fr_0.85fr] lg:gap-10 lg:py-32">
        <div className="lg:pr-8">
          <p className="text-xs uppercase tracking-[0.3em] text-wine">
            A practice, not an app
          </p>
          <h1 className="mt-6 font-display text-6xl font-light leading-[1.05] text-ink sm:text-7xl lg:text-[5.5rem] flex flex-col">
            <span>
              Say a little
            </span>
            <span>
              less, every
            </span>
            <span>
              single day.
            </span>
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/70">
            You already know the app that begs you to talk every day —
            the streak, the mascot, the guilt if you skip a lesson. Shh.
            runs on the exact same mechanics, pointed the other way.
            Keep a streak of silence. Climb a league of quiet.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#"
              className="rounded-full bg-ink px-7 py-3.5 text-sm uppercase tracking-[0.15em] text-linen transition-colors hover:bg-wine"
            >
              Start your streak
            </a>
            <a
              href="#"
              className="text-sm uppercase tracking-[0.15em] text-ink/60 underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink"
            >
              How it works
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-8 lg:pt-10">
          <div className="rounded-2xl border border-ink/10 bg-linen-deep/60 p-7">
            <p className="text-xs uppercase tracking-[0.25em] text-stone">
              Your noise, by the day
            </p>
            <WaveAnimation className="mt-6" />
          </div>
          <div className="flex items-center justify-between rounded-2xl border border-ink/10 bg-linen-deep/60 px-7 py-6">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-stone">
                Silence streak
              </p>
              <p className="mt-1 font-display text-4xl text-ink">21 days</p>
            </div>
            <Image
              src='/assets/candle.svg'
              alt='candle'
              width={1}
              height={56}
              className='w-auto'
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero