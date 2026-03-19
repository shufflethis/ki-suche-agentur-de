import type { Metadata } from "next";
import "./globals.css";
import AuditCta from "./components/AuditCta";

export const metadata: Metadata = {
  title: "KI-Suche Agentur | GEO & LLMO Optimierung für KI-Suchmaschinen",
  description:
    "Ihre Experten für Generative Engine Optimization (GEO). Wir optimieren Ihre Sichtbarkeit in ChatGPT, Perplexity, Google AI Overviews und anderen KI-Suchsystemen. Mehr Leads durch AI-Sichtbarkeit.",
  keywords: [
    "KI-Suche Agentur",
    "GEO Agentur",
    "Generative Engine Optimization",
    "LLMO",
    "AEO",
    "ChatGPT Sichtbarkeit",
    "Perplexity Optimierung",
    "AI Search Optimization",
    "KI SEO",
    "AI Overviews",
  ],
  openGraph: {
    title: "KI-Suche Agentur | GEO & LLMO Optimierung",
    description:
      "Wir machen Ihr Unternehmen sichtbar in ChatGPT, Perplexity und Google AI Overviews.",
    url: "https://ki-suche-agentur.de",
    siteName: "KI-Suche Agentur",
    locale: "de_DE",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://ki-suche-agentur.de" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <script
          async
          src="https://analytics.polymarkt.de/js/pa-pqSC_eZKHSRVmppCqS3cA.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()`,
          }}
        />
      </head>
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {children}
        <AuditCta />
      </body>
    </html>
  );
}
