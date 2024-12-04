import type { Metadata } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import * as Craft from "@/components/craft/layout";
import Nav from "@/components/craft/section/nav";
import Footer from "@/components/craft/section/footer";
import "./globals.css";
import careyRolls from "@/careyRolls.config";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: careyRolls.site_title,
    default: `Home | ${careyRolls.site_name}`,
    absolute: `Home | ${careyRolls.site_name}`,
  },
  description: careyRolls.site_description,
  generator: "Next.js",
  applicationName: careyRolls.site_name,
  referrer: "origin-when-cross-origin",
  keywords: careyRolls.keywords,
  authors: careyRolls.authors,
  metadataBase: new URL(careyRolls.site_domain),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    title: careyRolls.site_title,
    description: careyRolls.site_description,
    url: careyRolls.site_domain,
    siteName: careyRolls.site_name,
    images: [
      {
        url: `${careyRolls.site_domain}/og.png`, // Must be an absolute URL
        width: 800,
        height: 600,
        alt: careyRolls.site_description,
      },
      {
        url: `${careyRolls.site_domain}/og-alt.png`, // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: careyRolls.site_description,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // manifest: `${careyRolls.site_domain}/manifest.json`, // Must be an absolute URL
  twitter: {
    card: "summary_large_image",
    title: careyRolls.site_title,
    description: careyRolls.site_description,
    // siteId: "1467726470533754880",
    // creator: "@nextjs",
    // creatorId: "1467726470533754880",
    images: [`${careyRolls.site_domain}/og.png`], // Must be an absolute URL
  },
  icons: {
    icon: [
      { url: "/icon.png" },
      new URL("/icon.png", "https://example.com"),
      { url: "/icon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    shortcut: ["/shortcut-icon.png"],
    apple: [
      { url: "/apple-icon.png" },
      { url: "/apple-icon-x3.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Craft.Layout className={cn("flex-grow", `${manrope.variable}`)}>
      <Nav />
      {children}
      <Footer />
    </Craft.Layout>
  );
}
