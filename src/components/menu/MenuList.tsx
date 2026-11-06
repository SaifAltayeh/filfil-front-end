import Image from "next/image";
import { formatPrice, menuCategories, type MenuItem } from "@/data/menu";
import { imageForMenuItem } from "@/data/menu-images";
import { getLocale } from "@/i18n/get-locale";
import { getMessages } from "@/i18n/get-messages";
import { cn } from "@/lib/cn";

function MenuCard({
  item,
  categoryId,
  arabic,
  vegetarian,
  vegan,
}: {
  item: MenuItem;
  categoryId: string;
  arabic: boolean;
  vegetarian: string;
  vegan: string;
}) {
  const image = imageForMenuItem(item.id, categoryId);
  const name = arabic ? item.nameAr : item.name;
  const description = arabic ? item.descriptionAr : item.description;
  const dietaryLabels = {
    vegetarian,
    vegan,
  };

  return (
    <article className="group">
      <div className="overflow-hidden rounded-2xl bg-black/5">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="aspect-square h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          sizes="270px"
        />
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <h3 className="text-base leading-snug md:text-lg">{name}</h3>
        <p className="eyebrow shrink-0 pt-1">{formatPrice(item.price, arabic)}</p>
      </div>
      {description ? (
        <p className="mt-1.5 text-sm leading-relaxed text-black/65">{description}</p>
      ) : null}
      {item.dietary?.length ? (
        <p className="eyebrow mt-2 text-black/40">
          {item.dietary.map((tag) => dietaryLabels[tag]).join(" · ")}
        </p>
      ) : null}
    </article>
  );
}

export async function MenuList() {
  const locale = await getLocale();
  const t = await getMessages();
  const arabic = locale === "ar";

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
              {arabic ? category.nameAr : category.name}.
            </h2>
            <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 scroll-ps-5 [scrollbar-width:none] md:-mx-10 md:gap-5 md:px-10 md:scroll-ps-10 lg:-mx-16 lg:px-16 lg:scroll-ps-16 [&::-webkit-scrollbar]:hidden">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className={cn(
                    "w-[min(70vw,16.5rem)] shrink-0 snap-start",
                    compact && "w-[min(58vw,14rem)]",
                  )}
                >
                  <MenuCard
                    item={item}
                    categoryId={category.id}
                    arabic={arabic}
                    vegetarian={t.common.vegetarian}
                    vegan={t.common.vegan}
                  />
                </div>
              ))}
            </div>
            {category.note ? (
              <p className="mt-8 text-sm font-bold text-black">
                {arabic ? t.menu.upgrade : category.note}
              </p>
            ) : null}
          </section>
        );
      })}
    </div>
  );
}
