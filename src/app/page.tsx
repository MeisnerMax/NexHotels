import Link from "next/link";
import { Brand } from "@/components/Brand";
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
];

const audience = [
  "inhabergeführte Hotels und kleine Hotelgruppen",
  "20 bis 80 Zimmer und bis zu drei Standorte",
  "Hotel plus Gastronomie, Tagung, Wellness oder Veranstaltungen",
  "mehrere Systeme, Verträge und operative Verantwortliche",
  "mindestens sechs Monate exportierbare Betriebsdaten",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="shell nav-wrap">
          <a href="#top" aria-label="NexHotels Startseite"><Brand inverse /></a>
          <nav className="desktop-nav" aria-label="Hauptnavigation">
            <a href="#leistung">Leistung</a>
            <a href="#prozess">Ablauf</a>
            <a href="#zielgruppe">Für wen</a>
            <a href="#netzwerk">Unternehmen</a>
          </nav>
          <div className="header-actions">
            <a className="parent-link" href={company.parentWebsite}>NexGen Consulting <Arrow /></a>
            <Link className="button button-small" href="/profit-control-check">Profit-Control-Check</Link>
          </div>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-grid-pattern" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light"><i /> Profit Control für inhabergeführte Hotels</p>
              <h1>Mehr Ergebnis.<br /><span>Weniger blinde Flecken.</span></h1>
              <p className="hero-lead">
                NexHotels verbindet Hotelkennzahlen, Verträge, Abrechnungen und operative Kosten zu einem belegten, priorisierten Maßnahmenplan.
              </p>
              <div className="hero-actions">
                <Link className="button" href="/profit-control-check">3-Minuten-Check starten <Arrow /></Link>
                <a className="button button-ghost" href={`mailto:${company.email}?subject=20-Minuten-Diagnose`}>Diagnose anfragen</a>
              </div>
              <ul className="trust-list">
                {facts.map((fact) => <li key={fact}>{fact}</li>)}
              </ul>
            </div>

            <div className="control-visual" role="img" aria-label="Beispielhafte Profit-Control-Auswertung mit fiktiven Daten">
              <div className="control-window">
                <div className="control-topbar">
                  <div><i /><i /><i /></div>
                  <span>Profit Control Board</span>
                  <small><i /> Beispieldaten</small>
                </div>
                <div className="control-body">
                  <div className="control-heading">
                    <div><span>Wirtschaftliche Gesamtsicht</span><strong>Hotel Morgenrot</strong></div>
                    <small>Mai 2026</small>
                  </div>
                  <div className="metric-grid">
                    <article><span>ADR</span><strong>142 €</strong><small>+ 3,4 %</small></article>
                    <article><span>RevPAR</span><strong>108 €</strong><small>+ 2,1 %</small></article>
                    <article className="metric-alert"><span>Prüfhinweise</span><strong>7</strong><small>3 priorisiert</small></article>
                  </div>
                  <div className="control-lower">
                    <article className="trend-card">
                      <div><strong>Ergebnisentwicklung</strong><span>Umsatz · Kosten</span></div>
                      <div className="chart" aria-hidden="true">
                        {[46, 64, 52, 78, 69, 88].map((height, index) => (
                          <i key={height} style={{ height: `${height}%` }}><b style={{ height: `${Math.max(24, height - 19 + index * 2)}%` }} /></i>
                        ))}
                      </div>
                      <div className="chart-labels"><span>Dez</span><span>Jan</span><span>Feb</span><span>Mär</span><span>Apr</span><span>Mai</span></div>
                    </article>
                    <article className="finding-card">
                      <strong>Priorisierte Befunde</strong>
                      <div><i className="risk-high" /><span><b>OTA-Abweichung</b><small>Abgleich erforderlich</small></span></div>
                      <div><i /><span><b>Softwarevertrag</b><small>Kündigungsfrist prüfen</small></span></div>
                      <div><i className="risk-ok" /><span><b>Wäschekosten</b><small>im Zielkorridor</small></span></div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="float-note float-note-top"><span>01</span><div><strong>Belegt</strong><small>Quelle je Befund</small></div></div>
              <div className="float-note float-note-bottom"><span>✓</span><div><strong>30-Tage-Plan</strong><small>klar priorisiert</small></div></div>
            </div>
          </div>
          <div className="hero-ticker" aria-label="Prüfbereiche">
            <div><span>PMS</span><i /><span>OTA</span><i /><span>Verträge</span><i /><span>Abrechnungen</span><i /><span>Kosten</span><i /><span>Maßnahmen</span></div>
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

        <section className="section intro" id="leistung">
          <div className="shell">
            <div className="section-heading section-heading-split reveal">
              <div><p className="eyebrow">Profit Leak Audit</p><h2>Sechs Perspektiven.<br />Eine wirtschaftliche Sicht.</h2></div>
              <p>Der Audit prüft keine abstrakten Möglichkeiten, sondern konkrete Schnittstellen in Ihren vorhandenen Daten und Unterlagen.</p>
            </div>
            <div className="service-grid">
              {services.map(([number, eyebrow, title, text]) => (
                <article className="service-card reveal" key={number}>
                  <div className="service-top"><span>{eyebrow}</span><strong>{number}</strong></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <i aria-hidden="true">↗</i>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process" id="prozess">
          <div className="shell">
            <div className="section-heading section-heading-split reveal">
              <div><p className="eyebrow eyebrow-light">Klar begrenzter Prozess</p><h2>Von der Diagnose<br />zur Entscheidung.</h2></div>
              <p>Keine offene Beratungsschleife, sondern ein kontrollierter Prüfauftrag mit klaren Gates.</p>
            </div>
            <div className="step-rail">
              {steps.map(([number, title, text]) => (
                <article className="step-card reveal" key={number}>
                  <span>{number}</span><div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
            <div className="process-note reveal">
              <span className="process-note-mark">NH</span>
              <div><small>Kontrollierte Methodik</small><strong>Potenzial bleibt Potenzial, bis es belegt und realisiert ist.</strong></div>
              <p>Prüfvolumen, bestätigte Abweichung und tatsächlich umgesetzter Nutzen werden getrennt dokumentiert.</p>
            </div>
          </div>
        </section>

        <section className="section audience" id="zielgruppe">
          <div className="shell audience-grid">
            <div className="audience-copy reveal">
              <p className="eyebrow">Ideales Kundenprofil</p>
              <h2>Für Häuser, die operativ nah geführt werden.</h2>
              <p>Passend, wenn die Einzelsysteme funktionieren, aber eine gemeinsame wirtschaftliche Sicht fehlt.</p>
            </div>
            <div className="audience-list reveal">
              {audience.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong><i aria-hidden="true">✓</i></div>)}
            </div>
          </div>
        </section>

        <section className="section network" id="netzwerk">
          <div className="shell network-grid">
            <div className="founder-card reveal">
              <span className="founder-mark">MM</span>
              <div><p className="eyebrow">Founder-led</p><h2>Verantwortung bleibt sichtbar.</h2><p>NexHotels wird von Max Meisner geführt. Die Perspektive verbindet praktische Hotelsteuerung, Kostenkontrolle, Vertragsarbeit und Asset Management.</p></div>
            </div>
            <div className="network-copy reveal">
              <p className="eyebrow eyebrow-light">Teil von NexGen Consulting</p>
              <h2>Spezialisiert im Markt.<br />Verbunden in der Umsetzung.</h2>
              <p>NexHotels ist ein spezialisiertes Unternehmen im NexGen-Netzwerk. Prozessverständnis, digitale Werkzeuge und wirtschaftliche Steuerung greifen über Branchengrenzen hinweg zusammen.</p>
              <div className="network-links">
                <a href={company.parentWebsite}><span>NexGen Consulting<small>Digitalisierung & Prozessautomatisierung</small></span><Arrow /></a>
                <a href={company.siblingWebsite}><span>NexImmo<small>Immobilien Asset Management Software</small></span><Arrow /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta section">
          <div className="shell final-cta-box reveal">
            <div className="cta-orb" aria-hidden="true" />
            <p className="eyebrow eyebrow-light">Ohne Datenupload</p>
            <h2>Wie geschlossen ist Ihre<br /><span>wirtschaftliche Hotelsicht?</span></h2>
            <p>Sieben Fragen zeigen in drei Minuten, ob Kennzahlen, Verträge, Abrechnungen und Maßnahmen bereits verlässlich zusammenlaufen.</p>
            <div><Link className="button" href="/profit-control-check">Profit-Control-Check öffnen <Arrow /></Link><a className="button button-ghost" href={`mailto:${company.email}`}>E-Mail schreiben</a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <div className="footer-top">
            <div><Brand inverse /><p>Profit Control für inhabergeführte Hotels.<br />Ein Unternehmen von NexGen Consulting.</p></div>
            <div><span>Leistung</span><a href="#leistung">Profit Leak Audit</a><a href="#prozess">Ablauf</a><Link href="/profit-control-check">Selbstcheck</Link></div>
            <div><span>Netzwerk</span><a href={company.parentWebsite}>NexGen Consulting</a><a href={company.siblingWebsite}>NexImmo</a><a href={`mailto:${company.email}`}>{company.email}</a></div>
            <div><span>Rechtliches</span><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} NexHotels. Alle Rechte vorbehalten.</span><span>Made in Coburg · Germany</span></div>
        </div>
      </footer>
    </>
  );
}
