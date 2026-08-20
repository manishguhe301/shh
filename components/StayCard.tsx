import Image from "next/image"
import { Stay } from "./Stays"

const StayCard = ({ stay }: {
  stay: Stay
}) => {
  return (
    <div
      className="flex flex-col rounded-2xl border border-ink/10 bg-linen-deep/40 p-7"
    >
      <Image
        src={stay.src}
        alt={stay.name[0]}
        width={1}
        height={1}
        className="h-24 w-full"
      />
      <h3 className="mt-6 font-display text-2xl font-light text-ink">
        {stay.name}
      </h3>
      <p className="text-xs uppercase tracking-[0.15em] text-stone">
        {stay.place}
      </p>
      <p className="mt-4 flex-1 text-sm text-ink/65">{stay.desc}</p>
      <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-5">
        <p className="font-display text-xl text-ink">
          {stay.nightly}
          <span className="ml-1 text-xs font-sans text-stone">
            / night
          </span>
        </p>
        <button className="rounded-full border border-ink/20 px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors hover:border-wine hover:text-wine">
          Reserve
        </button>
      </div>
    </div>
  )
}

export default StayCard