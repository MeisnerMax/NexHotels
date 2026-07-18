import type { Metadata } from "next";
import Link from "next/link";
import { Brand } from "@/components/Brand";
import { company, companyAddress } from "@/lib/company";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von NexHotels.",
};

export default function Impressum() {
  return (
    <main className="legal-page">
      <header className="site-header check-header">
        <div className="shell nav-wrap">
          <Link href="/" aria-label="NexHotels Startseite"><Brand inverse /></Link>
          <Link className="text-link" href="/">Zur Hauptseite</Link>
        </div>
      </header>
      <div className="legal-shell">
        <span className="eyebrow">Pflichtangaben</span>
        <h1>Impressum</h1>
        <section>
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            {company.owner}<br />
            handelnd unter {company.brand}<br />
            {companyAddress}<br />
            Deutschland
          </p>
        </section>
        <section>
          <h2>Kontakt</h2>
          <p>E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a></p>
        </section>
        <section>
          <h2>Umsatzsteuer</h2>
          <p>Die Umsatzsteuer-Identifikationsnummer wird ergänzt, sobald sie für die Veröffentlichung vorliegt.</p>
        </section>
        <section>
          <h2>Verantwortlich für den Inhalt</h2>
          <p>{company.owner}, Anschrift wie oben.</p>
        </section>
        <section>
          <h2>Hinweis zur Tätigkeit</h2>
          <p>
            NexHotels erbringt betriebswirtschaftliche Analysen und operative Profit-Control-Leistungen für Beherbergungsbetriebe. Rechts-, Steuer- und Wirtschaftsprüfungsleistungen sind nicht Bestandteil des Angebots.
          </p>
        </section>
      </div>
    </main>
  );
}
