import type { Metadata } from "next";
import Image from "next/image";
import { MenuList } from "@/components/menu/MenuList";
import { MenuNav } from "@/components/menu/MenuNav";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageIntro } from "@/components/ui/PageIntro";
import { media } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the FILFIL menu: shawarma sandwiches, meals, signature snack boxes, sides, and drinks in Sweifieh Village, Amman.",
};

export default function MenuPage() {
  return (
    <main>
      <PageIntro
        title="The good stuff."
        kicker="True Ingredients. Bold Flavours."
      >
        <p>
          Familiar Mediterranean favourites, reimagined with creativity and a fresh
          perspective.
        </p>
        <p className="mt-4">
          Explore the flavours, discover something new, and find your next favourite.
        </p>
      </PageIntro>

      <section className="bg-beige pb-24">
        <Container>
          <MenuNav />
          <MenuList />

          <Reveal className="mt-24 max-w-md">
            <p className="eyebrow mb-4">Official menu</p>
            <Image
              src={media.officialMenu.src}
              alt={media.officialMenu.alt}
              width={media.officialMenu.width}
              height={media.officialMenu.height}
              className="h-auto w-full border border-black/10"
              sizes="(min-width: 768px) 28rem, 100vw"
            />
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
