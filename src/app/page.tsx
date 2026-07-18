import Link from "next/link";
import { company } from "@/lib/company";

const services = [
  ["01", "Kennzahlen", "PMS & wirtschaftliche Steuerung", "Umsatz, Auslastung, ADR und RevPAR werden mit den tatsächlichen Kostentreibern verbunden."],
  ["02", "Distribution", "OTA & Abrechnungen", "Provisionen, Kanalzuordnung, Reklamationen und Abweichungen werden strukturiert nachvollziehbar."],
  ["03", "Fixkosten", "Verträge & Software", "Laufzeiten, Altverträge, Überschneidungen und wiederkehrende Systemkosten werden transparent erfasst."],
  ["04", "Kontrolle", "Rechnungen & Zahlungen", "Dubletten, Mahnungen, Betragssprünge und unklare Zahlungsstände werden priorisiert und belegt."],
  ["05", "Betrieb", "Variable Kosten", "Wäsche, Energie und Einkauf werden – soweit möglich – je belegtem Zimmer vergleichbar."],
  ["06", "Umsetzung", "Maßnahmensteuerung", "Jeder relevante Befund erhält eine nächste Handlung, einen Verantwortlichen und einen Termin."],
];

const steps = [
  ["01", "Diagnose", "In 20 Minuten klären wir, ob Problem, Datenlage und wirtschaftlicher Umfang zusammenpassen."],
  ["02", "Daten-Gate", "Nur notwendige, lesbare und freigegebene Unterlagen werden in die Prüfung aufgenommen."],
  ["03", "Analyse", "Prüfvolumen, bestätigtes Potenzial und realisierter Nutzen bleiben konsequent getrennt."],
  ["04", "30-Tage-Plan", "Sie erhalten Prioritäten, Verantwortliche und einen realistischen Maßnahmenplan."],
];

const facts = [
  "klar begrenzter Audit statt offener Beratung",
  "keine garantierten Einsparungen",
  "kein unnötiger Systemwechsel",
  "aggregierte Daten statt ungefilterter Gästedaten",
  "Lieferung grundsätzlich binnen 14 Tagen nach Daten-Gate",
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <div className="shell nav-wrap">
          <a className="brand" href="#top" aria-label="NexHotels Startseite">
            <span className="brand-mark" aria-hidden="true">N</span>
            <span>NexHotels</span>
          </a>
          <nav className="desktop-nav" aria-label="Hauptnavigation">
            <a href="#leistung">Leistung</a>
            <a href="#prozess">Ablauf</a>
            <a href="#zielgruppe">Für wen</a>
            <a href="#ueber-uns">Über NexHotels</a>
          </nav>
          <Link className="button button-small" href="/profit-control-check">Profit-Control-Check</Link>
        </div>
      </header>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Profit Control für inhabergeführte Hotels</span>
            <h1>Mehr Ergebnis aus dem Umsatz, den Ihr Hotel bereits macht.</h1>
            <p className="hero-lead">
              NexHotels verbindet Hotelkennzahlen, Verträge, Abrechnungen und operative Kosten zu einem belegten, priorisierten Maßnahmenplan.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/profit-control-check">3-Minuten-Check starten</Link>
              <a className="text-link" href={`mailto:${company.email}?subject=20-Minuten-Diagnose`}>Diagnosegespräch anfragen</a>
            </div>
            <ul className="trust-list">
              {facts.slice(0, 3).map((fact) => <li key={fact}>{fact}</li>)}
            </ul>
          </div>
          <aside className="hero-panel">
            <span className="panel-label">Das Problem</span>
            <h2>Die wirtschaftliche Lücke liegt oft zwischen den Berichten.</h2>
            <p>PMS, OTA, Buchhaltung, Verträge und operative Kosten können jeweils korrekt sein – ohne gemeinsam eine belastbare Entscheidung zu ermöglichen.</p>
            <div className="panel-rule" />
            <strong>Das Ergebnis</strong>
            <p>Ein Befundregister mit Quellen, Prioritäten, Verantwortlichen und einem 30-Tage-Plan.</p>
          </aside>
        </div>
      </section>

      <section className="proof-strip" aria-label="Leistungsmerkmale">
        <div className="shell proof-grid">
          <div><strong>20–80</strong><span>Zimmer im Kernprofil</span></div>
          <div><strong>14 Tage</strong><span>nach bestandenem Daten-Gate</span></div>
          <div><strong>0</strong><span>unbelegte Einsparversprechen</span></div>
          <div><strong>1</strong><span>priorisierter Maßnahmenplan</span></div>
        </div>
      </section>

      <section className="section" id="leistung">
        <div className="shell">
          <div className="section-heading">
            <span className="eyebrow">Profit Leak Audit</span>
            <h2>Sechs Perspektiven. Eine wirtschaftliche Sicht.</h2>
            <p>Der Audit prüft keine abstrakten Möglichkeiten, sondern konkrete Schnittstellen in Ihren vorhandenen Daten und Unterlagen.</p>
          </div>
          <div className="service-grid">
            {services.map(([number, eyebrow, title, text]) => (
              <article className="service-card" key={number}>
                <div className="service-top"><span>{eyebrow}</span><strong>{number}</strong></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="prozess">
        <div className="shell">
          <div className="section-heading light">
            <span className="eyebrow">Klar begrenzter Prozess</span>
            <h2>Von der Diagnose zur Entscheidung.</h2>
            <p>Keine offene Beratungsschleife, sondern ein kontrollierter Prüfauftrag mit klaren Gates.</p>
          </div>
          <div className="step-grid">
            {steps.map(([number, title, text]) => (
              <article className="step-card" key={number}>
                <span>{number}</span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="zielgruppe">
        <div className="shell split-grid">
          <div>
            <span className="eyebrow">Ideales Kundenprofil</span>
            <h2>Für Häuser, die operativ nah geführt werden – aber keine gemeinsame wirtschaftliche Sicht haben.</h2>
          </div>
          <div className="check-list">
            <p>Besonders passend für:</p>
            <ul>
              <li>inhabergeführte Hotels und kleine Hotelgruppen</li>
              <li>20 bis 80 Zimmer und bis zu drei Standorte</li>
              <li>Hotel plus Gastronomie, Tagung, Wellness oder Veranstaltungen</li>
              <li>mehrere Systeme, Verträge und operative Verantwortliche</li>
              <li>mindestens sechs Monate exportierbare Betriebsdaten</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="ueber-uns">
        <div className="shell founder-grid">
          <div className="founder-mark">MM</div>
          <div>
            <span className="eyebrow">Founder-led</span>
            <h2>Verantwortung bleibt sichtbar.</h2>
            <p>NexHotels wird von Max Meisner geführt. Die Perspektive verbindet praktische Hotelsteuerung, Kostenkontrolle, Vertragsarbeit und Asset Management.</p>
            <p>Das Ziel ist keine theoretische Präsentation, sondern eine nachvollziehbare Grundlage für die nächsten wirtschaftlichen Entscheidungen.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="shell cta-grid">
          <div>
            <span className="eyebrow">Ohne Datenupload</span>
            <h2>Wie geschlossen ist Ihre wirtschaftliche Hotelsicht?</h2>
            <p>Sieben Fragen zeigen in drei Minuten, ob Kennzahlen, Verträge, Abrechnungen und Maßnahmen bereits verlässlich zusammenlaufen.</p>
          </div>
          <Link className="button button-light" href="/profit-control-check">Profit-Control-Check öffnen</Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div><strong>NexHotels</strong><p>Profit Control für inhabergeführte Hotels.</p></div>
          <div><a href={`mailto:${company.email}`}>{company.email}</a><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div>
        </div>
      </footer>
    </main>
  );
}
