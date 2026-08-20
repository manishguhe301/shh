import { FAQS } from '@/utils/constants'
import Container from './Container'
import SectionHeader from './SectionHeader'

const FAQs = () => {
  return (
    <section id="faq" className="border-t border-ink/10 bg-linen-deep/40 py-24 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeader
          title='Before you go quiet'
          desc='Questions, answered plainly'
        />

        <div className="mt-14 divide-y divide-ink/10 border-t border-b border-ink/10">
          {FAQS.map(({ ans, que }) => (
            <details key={que} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-ink">
                {que}
                <span className="shrink-0 text-stone transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-ink/65">{ans}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FAQs