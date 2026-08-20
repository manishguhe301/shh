import { STAYS } from '@/utils/constants';
import Container from './Container'
import SectionHeader from './SectionHeader';
import StayCard from './StayCard';

export type Stay = {
  src: string,
  name: string,
  place: string,
  desc: string,
  nightly: string
}

const Stays = () => {
  return (
    <section id="stays" className="bg-linen py-24 sm:py-28">
      <Container>
        <SectionHeader
          title='Where to go quiet'
          desc='Three houses. No talking.'
          containerStyles='mx-auto max-w-xl '
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STAYS.map((s) => (
            <StayCard stay={s} key={s.name} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Stays

