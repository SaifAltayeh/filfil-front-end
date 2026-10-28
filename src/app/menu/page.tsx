import type { Metadata } from "next";
import { MenuList } from "@/components/menu/MenuList";
import { MenuNav } from "@/components/menu/MenuNav";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";

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
        </Container>
      </section>
    </main>
  );
}
