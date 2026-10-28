import Image from "next/image";
import { formatPrice, menuCategories, type MenuItem } from "@/data/menu";
import { imageForMenuItem } from "@/data/menu-images";
import { cn } from "@/lib/cn";

function MenuCard({
  item,
  categoryId,
}: {
  item: MenuItem;
  categoryId: string;
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
          className="aspect-square h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="(min-width: 1024px) 18vw, (min-width: 640px) 45vw, 100vw"
        />
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <h3 className="text-base leading-snug md:text-lg">{item.name}</h3>
        <p className="eyebrow shrink-0 pt-1">{formatPrice(item.price)}</p>
      </div>
      {item.description ? (
        <p className="mt-1.5 text-sm leading-relaxed text-black/65">{item.description}</p>
      ) : null}
      {item.dietary?.length ? (
        <p className="eyebrow mt-2 text-black/40">{item.dietary.join(" · ")}</p>
      ) : null}
    </article>
  );
}

export function MenuList() {
  return (
    <div className="space-y-20 md:space-y-28">
      {menuCategories.map((category) => {
        const compact = category.id === "sides-add-ons" || category.id === "beverages";

        return (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-[7.5rem] md:scroll-mt-[8.5rem]"
          >
            <h2 className="headline mb-8 text-[clamp(2rem,5vw,4.5rem)] md:mb-10">
              {category.name}.
            </h2>
            <div
              className={cn(
                "grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4",
                compact && "lg:grid-cols-5",
              )}
            >
              {category.items.map((item) => (
                <MenuCard key={item.id} item={item} categoryId={category.id} />
              ))}
            </div>
            {category.note ? <p className="mt-8 text-sm text-black/60">{category.note}</p> : null}
          </section>
        );
      })}
    </div>
  );
}
