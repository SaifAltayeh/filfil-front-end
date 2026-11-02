import type { Metadata } from "next";
import { Alexandria, Archivo_Black, Archivo_Narrow } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { site } from "@/data/site";
import { getLocale } from "@/i18n/get-locale";
import { getMessages } from "@/i18n/get-messages";
import { I18nProvider } from "@/i18n/provider";
import { localeMeta } from "@/i18n/locale";
import { media } from "@/lib/assets";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
});

const archivoNarrow = Archivo_Narrow({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-archivo-narrow",
  display: "swap",
});

const alexandria = Alexandria({
  subsets: ["latin", "arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-alexandria",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Next Level Food`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "en_JO",
    siteName: site.name,
    title: `${site.name} — Next Level Food`,
    description: site.description,
    images: [
      {
        url: media.og.src,
        width: media.og.width,
        height: media.og.height,
        alt: media.og.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Next Level Food`,
    description: site.description,
    images: [media.og.src],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: site.name,
  description: site.description,
  servesCuisine: ["Mediterranean", "Levantine"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sweifieh Village",
    addressLocality: "Amman",
    addressCountry: "JO",
  },
  url: site.url,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  const meta = localeMeta(locale);

  return (
    <html
      lang={meta.code}
      dir={meta.dir}
      className={`${archivoBlack.variable} ${archivoNarrow.variable} ${alexandria.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-beige font-sans text-black">
        <I18nProvider locale={locale} messages={messages}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
          />
          <SkipLink label={messages.common.skip} />
          <Header />
          <div id="main" className="flex min-h-full flex-col">
            {children}
          </div>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
