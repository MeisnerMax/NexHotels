import type { Metadata } from "next";
import Link from "next/link";
import { company, companyAddress } from "@/lib/company";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzhinweise der NexHotels-Website.",
};

export default function Datenschutz() {
  return (
    <main className="legal-page">
      <header className="site-header check-header">
        <div className="shell nav-wrap">
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true">N</span>
            <span>NexHotels</span>
          </Link>
          <Link className="text-link" href="/">Zur Hauptseite</Link>
        </div>
      </header>
      <div className="legal-shell">
        <span className="eyebrow">Datenschutzhinweise</span>
        <h1>Datenschutz</h1>
        <section>
          <h2>1. Verantwortlicher</h2>
          <p>
            {company.owner}, handelnd unter {company.brand}<br />
            {companyAddress}<br />
            E-Mail: <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
        </section>
        <section>
          <h2>2. Hosting und technische Protokolldaten</h2>
          <p>
            Die Website wird über Vercel bereitgestellt. Beim Aufruf können technisch erforderliche Daten wie IP-Adresse, Zeitpunkt, angeforderte Ressource, Browser- und Geräteinformationen sowie Sicherheits- und Fehlerdaten verarbeitet werden. Die Verarbeitung dient der sicheren, stabilen und performanten Bereitstellung der Website und erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </section>
        <section>
          <h2>3. Profit-Control-Check</h2>
          <p>
            Die Antworten des interaktiven Checks werden ausschließlich lokal im Browser verarbeitet und weder gespeichert noch an NexHotels übermittelt. Erst wenn Sie bewusst den E-Mail-Link auswählen, wird in Ihrem eigenen E-Mail-Programm eine Nachricht vorbereitet.
          </p>
        </section>
        <section>
          <h2>4. Kontaktaufnahme per E-Mail</h2>
          <p>
            Bei einer Kontaktaufnahme verarbeiten wir die von Ihnen übermittelten Angaben zur Bearbeitung der Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vorvertraglichen oder vertraglichen Anliegen und im Übrigen Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </section>
        <section>
          <h2>5. Cookies und Reichweitenmessung</h2>
          <p>
            NexHotels setzt derzeit keine Analyse-, Marketing- oder Retargetingdienste und keine nicht technisch erforderlichen Cookies ein. Leadquellen werden intern und nicht über personenbezogenes Website-Tracking dokumentiert.
          </p>
        </section>
        <section>
          <h2>6. Ihre Rechte</h2>
          <p>
            Betroffene Personen haben nach Maßgabe der gesetzlichen Voraussetzungen insbesondere Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem besteht ein Beschwerderecht bei einer Datenschutzaufsichtsbehörde.
          </p>
        </section>
      </div>
    </main>
  );
}
