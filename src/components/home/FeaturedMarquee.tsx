"use client";

import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "motion/react";
import { featuredProducts } from "@/data/featured";
import { useI18n } from "@/i18n/provider";
import { cn } from "@/lib/cn";

type FeaturedProduct = (typeof featuredProducts)[number];

function ProductCard({
  product,
  caption,
}: {
  product: FeaturedProduct;
  caption: string;
}) {
  return (
    <figure className="mr-4 w-[200px] shrink-0 sm:mr-5 sm:w-[220px] lg:w-[240px]">
      <Link href={product.href} className="group block">
        <div className="overflow-hidden rounded-2xl bg-black/5">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            width={product.image.width}
            height={product.image.height}
            className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="240px"
          />
        </div>
        <figcaption className="mt-3 min-h-[2.6em] text-[13px] leading-5 text-black/60 sm:text-sm">
          {caption}
        </figcaption>
      </Link>
    </figure>
  );
}

function MarqueeRow({
  items,
  captions,
  reverse = false,
}: {
  items: readonly FeaturedProduct[];
  captions: Record<string, string>;
  reverse?: boolean;
}) {
  const loop = [...items, ...items];

  return (
    <div className="filfil-marquee-wrap overflow-hidden" dir="ltr">
      <div
        className={cn(
          "flex w-max flex-nowrap",
          reverse ? "filfil-marquee-reverse" : "filfil-marquee",
        )}
      >
        {loop.map((product, index) => (
          <ProductCard
            key={`${product.id}-${index}`}
            product={product}
            caption={captions[product.id] ?? product.caption}
          />
        ))}
      </div>
    </div>
  );
}

export function FeaturedMarquee() {
  const reduced = useReducedMotion();
  const { t } = useI18n();
  const captions = t.home.featuredCaptions;
  const rowTwo = [...featuredProducts].reverse();

  if (reduced) {
    return (
      <div className="mt-14 flex gap-5 overflow-x-auto px-5 pb-2 sm:px-8 lg:px-10">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            caption={captions[product.id] ?? product.caption}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-14 flex flex-col gap-10">
      <MarqueeRow items={featuredProducts} captions={captions} />
      <MarqueeRow items={rowTwo} captions={captions} reverse />
    </div>
  );
}
