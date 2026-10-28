import Link from "next/link";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-beige">
      <Container className="pt-20 pb-10 md:pt-28">
        <div className="grid gap-12 border-b border-beige/15 pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo variant="light" imageClassName="h-11 md:h-14" />
            <p className="headline mt-8 text-4xl md:text-5xl">{site.slogan}</p>
            <p className="mt-6 max-w-sm text-lg leading-snug text-beige/75">
              {site.tagline}
              <br />
              {site.messages.ingredients}
            </p>
          </div>

          <nav className="md:col-span-4" aria-label="Footer">
            <p className="eyebrow mb-5 text-beige/50">Explore</p>
            <ul className="grid gap-2 text-lg">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="nav-link inline-block py-1">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="eyebrow mb-5 text-beige/50">Visit</p>
            <p className="text-lg leading-snug">{site.location.display}</p>
            <div className="mt-6 flex flex-col gap-2">
              {site.instagram ? (
                <a href={site.instagram} className="nav-link inline-block w-fit" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              ) : (
                <span className="text-beige/45">Instagram</span>
              )}
              {site.tiktok ? (
                <a href={site.tiktok} className="nav-link inline-block w-fit" target="_blank" rel="noreferrer">
                  TikTok
                </a>
              ) : (
                <span className="text-beige/45">TikTok</span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-6 pt-8 text-sm text-beige/55">
          <p>© {year} FILFIL. All Rights Reserved.</p>
          <Link href="/privacy" className="nav-link">
            Privacy Policy
          </Link>
        </div>
      </Container>
    </footer>
  );
}
