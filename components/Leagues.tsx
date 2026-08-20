import { LEAGUES } from '@/utils/constants';
import Container from './Container'
import LeaguesCard from './LeaguesCard';
import SectionHeader from './SectionHeader'

export type Tier = {
  name: string,
  price: string,
  period: string,
  desc: string,
  perks: string[],
  featured: boolean,
}

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
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {LEAGUES.map((tier) => (
            <LeaguesCard tier={tier} key={tier.name} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Leagues