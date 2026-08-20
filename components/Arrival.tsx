import { STEPS } from "@/utils/constants"
import Container from "./Container"
import SectionHeader from "./SectionHeader"

const Arrival = () => {
  return (
    <section className="border-y border-ink/10 bg-linen-deep/40 py-24 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeader
          desc="Three things happen before you go quiet."
          title="On arrival"
        />

        <div className="mt-16 space-y-10">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex gap-6">
              <span className="font-display text-3xl font-light text-stone">
                0{i + 1}
              </span>
              <div className="border-l border-ink/10 pl-6">
                <h3 className="font-display text-xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-ink/65">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Arrival