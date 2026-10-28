import Image from "next/image";
import { formatPrice, menuCategories } from "@/data/menu";
import { galleryForCategory } from "@/data/menu-images";

export function MenuList() {
  return (
    <div className="space-y-20 md:space-y-28">
      {menuCategories.map((category) => {
        const gallery = galleryForCategory(category.id);

        return (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-[7.5rem] md:scroll-mt-[8.5rem]"
          >
            <h2 className="headline mb-6 text-[clamp(2rem,5vw,4.5rem)] md:mb-8">
              {category.name}.
            </h2>
            <div className="mb-10 grid grid-cols-3 gap-2 md:mb-12 md:gap-4">
              {gallery.map((image) => (
                <div key={image.src} className="overflow-hidden rounded-2xl bg-black/5">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="aspect-[4/5] h-auto w-full object-cover"
                    sizes="(min-width: 1024px) 22vw, 30vw"
                  />
                </div>
              ))}
            </div>
            <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {category.items.map((item) => (
                <li key={item.id}>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg leading-snug md:text-xl">{item.name}</h3>
                    <p className="eyebrow shrink-0 pt-1">{formatPrice(item.price)}</p>
                  </div>
                  {item.description ? (
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-black/65 md:text-[15px]">
                      {item.description}
                    </p>
                  ) : null}
                  {item.dietary?.length ? (
                    <p className="eyebrow mt-3 text-black/40">{item.dietary.join(" · ")}</p>
                  ) : null}
                </li>
              ))}
            </ul>
            {category.note ? <p className="mt-8 text-sm text-black/60">{category.note}</p> : null}
          </section>
        );
      })}
    </div>
  );
}
