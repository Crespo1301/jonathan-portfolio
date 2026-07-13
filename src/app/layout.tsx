import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://jczdripp.com";

const description =
  "Jonathan Crespo is a high-end automotive paint specialist based in Bellevue, Washington. Fourteen years in the trade, from collision repair to full restoration on exotic and million-dollar cars, finished in Glasurit 100 Line to an OEM standard or better.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Jonathan Crespo | Automotive Paint Specialist",
    template: "%s | Jonathan Crespo",
  },
  description,
  applicationName: "Jonathan Crespo",
  authors: [{ name: "Jonathan Crespo" }],
  creator: "Jonathan Crespo",
  keywords: [
    "Jonathan Crespo",
    "automotive paint specialist",
    "auto body painter",
    "automotive refinishing",
    "Glasurit 100 Line",
    "color matching",
    "collision repair",
    "automotive restoration",
    "paint correction",
    "exotic car paint",
    "Bellevue",
    "Seattle",
    "Pacific Northwest",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: "Jonathan Crespo",
    title: "Jonathan Crespo | Automotive Paint Specialist",
    description,
    url: SITE_URL,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonathan Crespo | Automotive Paint Specialist",
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// Person structured data so he is findable as a professional (not a local shop).
// hasOccupation is the signal that carries the actual goal here: this person does
// this job, in this region, with these skills, and is discoverable for it.
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.owner,
  jobTitle: site.role,
  description,
  url: SITE_URL,
  image: `${SITE_URL}/images/jonathan-portrait.webp`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bellevue",
    addressRegion: "WA",
    addressCountry: "US",
  },
  knowsAbout: [
    "Automotive refinishing",
    "Glasurit 100 Line",
    "Automotive color matching and custom color",
    "Collision repair",
    "Automotive restoration",
    "Paint correction",
    "Paint shop and prepper management",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: site.role,
    occupationLocation: {
      "@type": "City",
      name: "Bellevue, Washington",
    },
    skills: site.experience.skills,
    description: site.experience.credibility,
  },
  sameAs: site.socials.map((s) => s.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-background"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
