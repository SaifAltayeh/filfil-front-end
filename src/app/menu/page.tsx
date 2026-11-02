import type { Metadata } from "next";
import { MenuList } from "@/components/menu/MenuList";
import { MenuNav } from "@/components/menu/MenuNav";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { getMessages } from "@/i18n/get-messages";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the filfil menu: shawarma sandwiches, meals, signature snack boxes, sides, and drinks in Sweifieh Village, Amman.",
};

export default async function MenuPage() {
  const t = await getMessages();

  return (
    <main>
      <PageIntro title={t.menu.title} kicker={t.menu.kicker}>
        {t.menu.intro.map((paragraph, index) => (
          <p key={paragraph} className={index === 0 ? undefined : "mt-4"}>
            {paragraph}
          </p>
        ))}
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
