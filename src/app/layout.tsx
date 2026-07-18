import type { Metadata } from "next";
import { Sora, Source_Sans_3 } from "next/font/google";
import { company } from "@/lib/company";
import "./globals.css";

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(company.website),
  title: {
    default: "NexHotels – Profit Control für inhabergeführte Hotels",
    template: "%s | NexHotels",
  },
  description:
    "NexHotels verbindet Hotelkennzahlen, Verträge, Abrechnungen und operative Kosten zu einem belegten Maßnahmenplan.",
  keywords: [
    "Hotel Controlling",
    "Profit Control Hotel",
    "Hotel Kostenanalyse",
    "Profit Leak Audit Hotel",
  ],
  openGraph: {
    title: "NexHotels – Profit Control für inhabergeführte Hotels",
    description: "Mehr Ergebnis aus dem Umsatz, den Ihr Hotel bereits macht.",
    type: "website",
    locale: "de_DE",
    url: company.website,
    siteName: "NexHotels",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  name: company.brand,
  legalName: company.legalName,
  url: company.website,
  email: company.email,
  founder: { "@type": "Person", name: company.owner },
  parentOrganization: {
    "@type": "Organization",
    name: company.parentBrand,
    url: company.parentWebsite,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: company.street,
    postalCode: "96450",
    addressLocality: "Coburg",
    addressCountry: "DE",
  },
  areaServed: "DE",
  serviceType: "Profit Control und betriebswirtschaftliche Analyse für inhabergeführte Hotels",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Zum Inhalt springen</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
