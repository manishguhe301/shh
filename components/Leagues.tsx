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

const LEAGUES: Tier[] = [
  {
    name: "Whisper",
    price: "₹0",
    period: "free, forever",
    desc: "One guided quiet hour a week. Learn to notice how much you say without meaning to.",
    perks: ["Weekly quiet hour", "Silence streak tracking", "Community leaderboard"],
    featured: false,
  },
  {
    name: "Hush",
    price: "₹1,499",
    period: "per month",
    desc: "A daily practice. Morning and evening sits, plus one weekend retreat a quarter.",
    perks: [
      "Daily silence sessions",
      "Quarterly weekend retreat",
      "Personal quiet-streak coach",
      "Priority Still League invite",
    ],
    featured: true,
  },
  {
    name: "Still",
    price: "₹4,200",
    period: "per month",
    desc: "For the committed. Live-in retreat access, unlimited stays, a lifetime streak record.",
    perks: [
      "Unlimited retreat stays",
      "Private quarters at any location",
      "Lifetime streak record, framed",
      "Entry into the Silence League",
    ],
    featured: false,
  },
];

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