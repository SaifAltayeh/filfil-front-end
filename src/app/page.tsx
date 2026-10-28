import { Experience } from "@/components/home/Experience";
import { FaqSection } from "@/components/home/FaqSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <FeaturedProducts />
      <Experience />
      <FaqSection />
    </main>
  );
}
