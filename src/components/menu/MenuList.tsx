import Image from "next/image";
import { formatPrice, menuCategories, type MenuItem } from "@/data/menu";
import { imageForMenuItem } from "@/data/menu-images";
import { cn } from "@/lib/cn";

function MenuCard({
  item,
  categoryId,
  compact,
}: {
  item: MenuItem;
  categoryId: string;
  compact?: boolean;
}) {
  const image = imageForMenuItem(item.id, categoryId);

  return (
    <article className="group">
      <div className="overflow-hidden rounded-2xl bg-black/5">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={cn(
            "h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]",
            compact ? "aspect-square" : "aspect-[3/4]",
          )}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <h3 className={compact ? "text-base leading-snug md:text-lg" : "text-lg leading-snug md:text-xl"}>
          {item.name}
        </h3>
        <p className="eyebrow shrink-0 pt-1">{formatPrice(item.price)}</p>
      </div>
      {item.description ? (
        <p className="mt-2 text-sm leading-relaxed text-black/65 md:text-[15px]">{item.description}</p>
      ) : null}
      {item.dietary?.length ? (
        <p className="eyebrow mt-3 text-black/40">{item.dietary.join(" · ")}</p>
      ) : null}
    </article>
  );
}

export function MenuList() {
  return (
    <div className="space-y-24 md:space-y-32">
      {menuCategories.map((category) => {
        const compact = category.id === "sides-add-ons" || category.id === "beverages";

        return (
          <section key={category.id} id={category.id} className="scroll-mt-40">
            <h2 className="headline mb-10 text-[clamp(2rem,5vw,4.5rem)]">{category.name}.</h2>
            <div
              className={cn(
                "grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3",
                compact && "lg:grid-cols-4",
              )}
            >
              {category.items.map((item) => (
                <MenuCard
                  key={item.id}
                  item={item}
                  categoryId={category.id}
                  compact={compact}
                />
              ))}
            </div>
            {category.note ? <p className="mt-8 text-sm text-black/60">{category.note}</p> : null}
          </section>
        );
      })}
    </div>
  );
}
