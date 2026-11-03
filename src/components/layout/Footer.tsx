import Link from "next/link";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { LanguageSwitch } from "@/components/i18n/LanguageSwitch";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { getMessages } from "@/i18n/get-messages";

export async function Footer() {
  const year = new Date().getFullYear();
  const t = await getMessages();

  return (
    <footer className="bg-black text-beige">
      <Container className="pt-20 pb-10 md:pt-28">
        <div className="grid gap-12 border-b border-beige/15 pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo variant="light" imageClassName="h-11 md:h-14" />
            <p className="headline mt-8 text-4xl md:text-5xl">{t.site.slogan}</p>
            <p className="mt-6 max-w-sm text-lg leading-snug text-beige/75">
              {t.site.tagline}
              <br />
              {t.site.ingredients}
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <p className="eyebrow mb-5 text-beige/50">{t.common.visit}</p>
            <p className="text-lg leading-snug">{t.site.location}</p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={site.instagram}
                className="nav-link inline-block w-fit"
                target="_blank"
                rel="noreferrer"
              >
                {t.common.instagram}
              </a>
              {site.tiktok ? (
                <a
                  href={site.tiktok}
                  className="nav-link inline-block w-fit"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.common.tiktok}
                </a>
              ) : null}
              {site.spotify ? (
                <a
                  href={site.spotify}
                  className="nav-link inline-block w-fit"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.common.spotify}
                </a>
              ) : null}
            </div>
          </div>

          <nav className="md:col-span-3 md:col-start-10" aria-label={t.common.explore}>
            <p className="eyebrow mb-5 text-beige/50">{t.common.explore}</p>
            <ul className="grid gap-2 text-lg">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="nav-link inline-block py-1">
                    {t.nav[item.href]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 pt-8 text-sm text-beige/55">
          <LanguageSwitch />
          <div className="flex flex-wrap items-center gap-6">
            <p>
              © {year} filfil. {t.common.rights}
            </p>
            <Link href="/privacy" className="nav-link">
              {t.common.privacy}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
