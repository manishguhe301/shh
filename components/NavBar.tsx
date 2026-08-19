import Image from 'next/image'
import Container from './Container'

const LINKS = [

]

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-linen/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src='/assets/moth.svg'
            alt='logo'
            width={36}
            height={28}
          />
          <span className="font-display text-2xl tracking-wide text-ink">
            Shh.
          </span>
        </a>


        <a
          href="#"
          className="rounded-full border border-ink/20 px-5 py-2 text-xs uppercase tracking-[0.18em] text-ink transition-colors hover:border-wine hover:text-wine"
        >
          Begin
        </a>
      </Container>
    </header>
  )
}

export default NavBar