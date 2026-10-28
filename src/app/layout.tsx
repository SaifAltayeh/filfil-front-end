import type { Metadata } from "next";
import { Archivo_Black, Archivo_Narrow } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { IntroLoader } from "@/components/layout/IntroLoader";
import { SkipLink } from "@/components/layout/SkipLink";
import { site } from "@/data/site";
import { locale } from "@/i18n/locale";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "FILFIL — Next Level Food",
    template: "%s — FILFIL",
  },
  description: site.description,
  applicationName: "FILFIL",
  openGraph: {
    type: "website",
    locale: "en_JO",
    siteName: "FILFIL",
    title: "FILFIL — Next Level Food",
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
    title: "FILFIL — Next Level Food",
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
  name: "FILFIL",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={locale.code}
      dir={locale.dir}
      className={`${archivoBlack.variable} ${archivoNarrow.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-beige font-sans text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <SkipLink />
        <IntroLoader />
        <Header />
        <div id="main" className="flex min-h-full flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
