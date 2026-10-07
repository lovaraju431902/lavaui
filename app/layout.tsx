import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/navbar";
import { Plus_Jakarta_Sans, Lora, IBM_Plex_Mono } from "next/font/google";
import localFont from "next/font/local";

const calSans = localFont({
  src: "./fonts/CalSans-SemiBold.woff2",
  variable: "--font-calsans",
  weight: "600",
  display: "swap",
});

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});
import Footer from "@/components/footer";
import "./globals.css";
import { inject } from "@vercel/analytics";
import { auth } from "@/auth";
import { siteConfig } from "@/config/site";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { Toaster } from "@/components/ui/sonner";
import { LinkPrefetch } from "@/components/seo/link-prefetch";

import { JsonLd } from "@/components/seo/json-ld";
import { generateSiteStructuredData } from "@/lib/site-structured-data";

inject();

export const metadata: Metadata = {
  title: {
    default: "Lava UI — Animated React Components & Blocks",
    template: "%s | Lava UI",
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "Lava UI",
      url: siteConfig.url,
    },
    {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  ],
  creator: "Arihant Jain",
  publisher: "Lava UI",
  alternates: {
    canonical: "/",
    languages: {
      "en-US": siteConfig.url,
    },
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "llms.txt" },
        { url: "/llms-full.txt", title: "llms-full.txt" },
      ],
    },
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: "Lava UI — Animated React Components & Blocks",
    description: siteConfig.description,
    siteName: "Lava UI",
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lava UI — Animated React Components & Blocks",
    description: siteConfig.description,
    images: [siteConfig.ogImage.url],
    creator: "@arihantcodes",
    site: "@lava",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    // The next/font variables must live on <html>, not <body>. Tailwind v4
    // resolves @theme entries like `--font-mono: var(--font-geist-mono), …` at
    // :root; if the font variables are only declared on <body> they are empty
    // at :root, every font-* utility becomes invalid, and text silently falls
    // back to the system stack.
    <html
      lang={siteConfig.locale.split("-")[0]}
      className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} ${calSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://api.github.com" />
        <link rel="dns-prefetch" href="https://api.github.com" />
        <JsonLd
          id="lavaui-structured-data"
          data={generateSiteStructuredData()}
        />
      </head>
      <body className="font-regular" suppressHydrationWarning>
        <Providers>
          <Analytics />
          <LinkPrefetch />

          <SiteHeader session={session} />
          <main className="flex flex-1 flex-col">
            {" "}
            {children}
          </main>

          <Toaster />
        
          <Footer />
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
