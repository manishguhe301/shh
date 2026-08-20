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

const STAYS: Stay[] = [
  {
    src: '/assets/ridge.svg',
    name: "The Ridge House",
    place: "Himalayan foothills",
    desc: "Stone cabins above the treeline. No wifi past the front desk. Meals arrive without a knock.",
    nightly: "₹6,800",
  },
  {
    src: '/assets/grove.svg',
    name: "Deep Grove",
    place: "Western Ghats",
    desc: "Single-room huts spaced far enough apart that you forget anyone else is staying too.",
    nightly: "₹5,200",
  },
  {
    src: '/assets/coast.svg',
    name: "The Low Tide",
    place: "Konkan coast",
    desc: "A row of quarters facing the water. The only sound approved here is the sea's.",
    nightly: "₹7,400",
  },
];


const Stays = () => {
  return (
    <section id="stays" className="bg-linen py-24 sm:py-28">
      <Container>
        {/* <div className="mx-auto max-w-xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-wine">
            Where to go quiet
          </p>
          <h2 className="mt-5 font-display text-4xl font-light text-ink sm:text-5xl">
            Three houses. No talking.
          </h2>
        </div> */}

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

