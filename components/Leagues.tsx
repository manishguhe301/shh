import Container from './Container'
import SectionHeader from './SectionHeader'

const Leagues = () => {
  return (
    <section id="leagues" className="bg-ink py-24 text-linen sm:py-28">
      <Container>
        <SectionHeader
          title='Climb the ranks, quietly'
          desc='Whisper. Hush. Still. Silence.'
          containerStyles='mx-auto max-w-xl'
          isLeagues
        />

      </Container>
    </section>
  )
}

export default Leagues