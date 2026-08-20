import React from 'react'

const SectionHeader = ({ title, desc, containerStyles, isLeagues = false }: {
  title: string,
  desc: string,
  containerStyles?: string,
  isLeagues?: boolean
}) => {
  return (
    <div className={`text-center ${containerStyles}`}>
      <p className={`text-xs uppercase tracking-[0.3em] ${isLeagues ? 'text-wine-soft' : 'text-wine'}`}>
        {title}
      </p>
      <h2 className={`mt-5 font-display text-4xl font-light ${!isLeagues ? 'text-ink' : ''} sm:text-5xl`}>
        {desc}
      </h2>
      {
        isLeagues &&
        <p className="mt-4 text-linen/60">
          Four leagues, same as any gamified streak app — except you rank
          up by saying less, and the top league doesn&apos;t have a
          leaderboard at all. Nobody left to read it.
        </p>
      }
    </div >
  )
}

export default SectionHeader