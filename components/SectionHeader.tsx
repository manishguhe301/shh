import React from 'react'

const SectionHeader = ({ title, desc, containerStyles }: {
  title: string,
  desc: string,
  containerStyles?: string
}) => {
  return (
    <div className={`text-center ${containerStyles}`}>
      <p className="text-xs uppercase tracking-[0.3em] text-wine">
        {title}
      </p>
      <h2 className="mt-5 font-display text-4xl font-light text-ink sm:text-5xl">
        {desc}
      </h2>
    </div >
  )
}

export default SectionHeader