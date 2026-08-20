import Container from './Container'

const STAYS = [
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
      <Container className="flex h-20 items-center justify-between">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-wine">
            Where to go quiet
          </p>
          <h2 className="mt-5 font-display text-4xl font-light text-ink sm:text-5xl">
            Three houses. No talking.
          </h2>
        </div>
      </Container>
    </section>
  )
}

export default Stays

const StayCard = () => {

}