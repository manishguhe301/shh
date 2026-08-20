import Image from "next/image";
import Container from "./Container";
import { FOOTER_LINKS } from "@/utils/constants";

export default function Footer() {
  return (
    <footer className="mt-auto bg-linen py-14">
      <Container className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <Image
            src='/assets/moth.svg'
            alt='logo'
            width={32}
            height={24}
            className="mt-1"
          />
          <div>
            <span className="font-display text-xl text-ink">Shh.</span>
            <p className="mt-2 max-w-xs text-sm text-ink/60">
              A daily practice of saying less, built on the mechanics of an
              app built to make you say more.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm text-ink/70 sm:grid-cols-3">
          {
            FOOTER_LINKS.map((link) => {
              return (
                <div key={link.section}>
                  <p className="mb-3 font-medium text-ink">{link.section}</p>
                  <ul className="space-y-2">
                    {link.content.map((c) => {
                      return <li key={c}>{c}</li>
                    })}
                  </ul>
                </div>
              )
            })
          }
        </div>
      </Container>

      <Container className="mt-10 border-t border-ink/10 pt-6 text-xs text-ink/50">
        <p>
          Shh. is a fictional concept brand created for a design exercise
          and is not affiliated with, endorsed by, or a product of any
          real language-learning company.
        </p>
        <p className="mt-3">© {new Date().getFullYear()} Shh. All rights reserved.</p>
      </Container>
    </footer>
  );
}
