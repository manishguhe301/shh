import { Tier } from './Leagues'

const LeaguesCard = ({ tier }: { tier: Tier }) => {
  return (
    <div
      key={tier.name}
      className={`flex flex-col rounded-2xl p-8 ${tier.featured
        ? "border-2 border-wine-soft bg-linen/4 lg:-translate-y-4"
        : "border border-linen/15 bg-linen/2"
        }`}
    >
      {tier.featured && (
        <span className="mb-4 w-fit rounded-full bg-wine-soft px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-linen">
          Most chosen
        </span>
      )}
      <h3 className="font-display text-2xl font-light">
        {tier.name} League
      </h3>
      <p className="mt-4 font-display text-3xl">{tier.price}</p>
      <p className="text-xs uppercase tracking-[0.15em] text-linen/50">
        {tier.period}
      </p>
      <p className="mt-5 text-sm text-linen/70">{tier.desc}</p>
      <ul className="mt-6 flex-1 space-y-2.5 text-sm text-linen/70">
        {tier.perks.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="text-wine-soft">—</span>
            {p}
          </li>
        ))}
      </ul>
      <button
        className={`mt-8 rounded-full px-5 py-3 text-xs uppercase tracking-[0.15em] transition-colors ${tier.featured
          ? "bg-linen text-ink hover:bg-wine-soft hover:text-linen"
          : "border border-linen/25 hover:border-linen"
          }`}
      >
        Join {tier.name}
      </button>
    </div>
  )
}

export default LeaguesCard