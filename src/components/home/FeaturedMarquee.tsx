"use client";

import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "motion/react";
import { featuredProducts } from "@/data/featured";
import { formatPrice } from "@/data/menu";
import { cn } from "@/lib/cn";

type FeaturedProduct = (typeof featuredProducts)[number];

function ProductCard({ product }: { product: FeaturedProduct }) {
  return (
    <figure className="mr-4 w-[168px] shrink-0 sm:mr-5 sm:w-[200px] lg:w-[220px]">
      <Link href={product.href} className="group block">
        <div className="overflow-hidden rounded-2xl bg-black/5">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            width={product.image.width}
            height={product.image.height}
            className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="220px"
          />
        </div>
        <figcaption className="mt-3 text-[15px] leading-snug tracking-tight text-black/60 sm:text-base">
          “{product.caption}”
          <span className="mt-1 block text-[15px] text-black sm:text-base">
            {formatPrice(product.price)}
          </span>
        </figcaption>
      </Link>
    </figure>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: readonly FeaturedProduct[];
  reverse?: boolean;
}) {
  const loop = [...items, ...items];

  return (
    <div className="filfil-marquee-wrap overflow-hidden">
      <div
        className={cn("flex w-max", reverse ? "filfil-marquee-reverse" : "filfil-marquee")}
      >
        {loop.map((product, index) => (
          <ProductCard key={`${product.id}-${index}`} product={product} />
        ))}
      </div>
    </div>
  );
}

export function FeaturedMarquee() {
  const reduced = useReducedMotion();
  const rowTwo = [...featuredProducts].reverse();

  if (reduced) {
    return (
      <div className="mt-14 flex gap-5 overflow-x-auto px-5 pb-2 sm:px-8 lg:px-10">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-14 flex flex-col gap-10">
      <MarqueeRow items={featuredProducts} />
      <MarqueeRow items={rowTwo} reverse />
    </div>
  );
}
