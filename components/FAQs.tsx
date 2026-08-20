import Container from './Container'
import SectionHeader from './SectionHeader'

const FAQS = [
  {
    que: "Is this actually run by the language app people?",
    ans: "No — Shh. is an independent retreat brand built as a deliberate mirror of that kind of app: same streaks, same leagues, same daily nudge, aimed at the opposite behaviour.",
  },
  {
    que: "What happens if I speak during a Still or Silence stay?",
    ans: "Nothing punitive. Your streak resets, quietly, and a host notes it without comment. Most guests find that worse than any penalty.",
  },
  {
    que: "Can I bring my phone at all?",
    ans: "It stays at the front desk for the length of your stay. Whisper members may request one supervised hour daily; Hush and Still do not.",
  },
  {
    que: "Do I need retreat experience to join?",
    ans: "No. Most guests arrive from the Whisper League with zero background. The practice is designed to be boring at first, on purpose.",
  },
  {
    que: "Is there a leaderboard for the Silence League?",
    ans: "There is, technically. Almost no one checks it.",
  },
];

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