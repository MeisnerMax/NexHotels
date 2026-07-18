"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Brand } from "@/components/Brand";

const questions = [
  ["Gemeinsamer Monatsabgleich", "PMS, OTA-Abrechnungen, Payment und Bank werden regelmäßig in einer gemeinsamen Sicht abgeglichen."],
  ["Vertragsübersicht", "Software-, Dienstleistungs- und Versorgungsverträge sind mit Kosten, Laufzeit und Kündigungsfrist vollständig erfasst."],
  ["Kosten je belegtem Zimmer", "Wäsche, Reinigung, Frühstück, Energie und weitere variable Kosten werden je belegtem Zimmer beobachtet."],
  ["Abrechnungsauffälligkeiten", "Provisionen, Dubletten, Gutschriften, Chargebacks und Betragssprünge werden gebündelt geprüft."],
  ["Klare Betragslogik", "Prüfvolumen, bestätigtes Potenzial und tatsächlich realisierter Nutzen werden getrennt ausgewiesen."],
  ["Verantwortung und Frist", "Jede wirtschaftlich relevante Maßnahme hat einen Verantwortlichen und einen konkreten Termin."],
  ["30-Tage-Follow-up", "Nach Entscheidungen wird geprüft, was umgesetzt wurde und welche Wirkung tatsächlich eingetreten ist."],
];

export default function CheckClient({ reference }: { reference: string }) {
  const [answers, setAnswers] = useState<boolean[]>(() => questions.map(() => false));
  const [started, setStarted] = useState(false);
  const score = useMemo(() => answers.filter(Boolean).length, [answers]);

  const result = score >= 6
    ? {
        title: "Starke Steuerungsbasis",
        text: "Ihre Grundlagen wirken bereits strukturiert. Ein externer Audit ist vor allem bei einem konkreten Anlass sinnvoll – etwa Systemwechsel, Kostenanstieg oder mehreren Betrieben.",
      }
    : score >= 4
      ? {
          title: "Teilweise transparent",
          text: "Mehrere Grundlagen sind vorhanden, aber an den Schnittstellen können relevante Fragen offenbleiben. Eine kurze Diagnose kann klären, ob sich eine vertiefte Prüfung lohnt.",
        }
      : {
          title: "Erhöhte Transparenzlücke",
          text: "Die wichtigsten Informationen liegen vermutlich verteilt. Genau hier kann ein begrenzter Profit Leak Audit eine belastbare Entscheidungsgrundlage schaffen.",
        };

  const subject = encodeURIComponent(`Profit-Control-Check | ${reference}`);
  const body = encodeURIComponent(
    `Guten Tag Herr Meisner,\n\nich habe den Profit-Control-Check mit ${score} von 7 Punkten abgeschlossen.\n\nReferenz: ${reference}\nHotel:\nName / Funktion:\nTelefon (optional):\n\nBitte melden Sie sich für eine kurze Einordnung.`,
  );

  function toggle(index: number) {
    setStarted(true);
    setAnswers((current) => current.map((value, itemIndex) => itemIndex === index ? !value : value));
  }

  return (
    <main className="check-page">
      <header className="site-header check-header">
        <div className="shell nav-wrap">
          <Link href="/" aria-label="NexHotels Startseite"><Brand inverse /></Link>
          <Link className="text-link" href="/">Zur Hauptseite</Link>
        </div>
      </header>

      <section className="check-hero">
        <div className="shell check-hero-grid">
          <div>
            <span className="eyebrow">3-Minuten-Selbstcheck</span>
            <h1>Wie geschlossen ist Ihre wirtschaftliche Hotelsicht?</h1>
            <p className="hero-lead">
              Sieben Fragen zeigen, ob Kennzahlen, Verträge, Abrechnungen und Maßnahmen bereits verlässlich zusammenlaufen. Der Check speichert und übermittelt keine Antworten.
            </p>
            <div className="reference-chip">Referenz: {reference}</div>
          </div>
          <aside className="check-score-card" aria-live="polite">
            <span className="eyebrow">Aktueller Stand</span>
            <strong>{score}<small>/7</small></strong>
            <p>{started ? result.title : "Noch nicht begonnen"}</p>
          </aside>
        </div>
      </section>

      <section className="section check-section">
        <div className="shell check-layout">
          <div className="question-list">
            {questions.map(([title, text], index) => (
              <label className={`check-question ${answers[index] ? "is-checked" : ""}`} key={title}>
                <input type="checkbox" checked={answers[index]} onChange={() => toggle(index)} />
                <span className="check-question-index">{String(index + 1).padStart(2, "0")}</span>
                <span><strong>{title}</strong><small>{text}</small></span>
              </label>
            ))}
          </div>

          <aside className="check-result-panel">
            <span className="eyebrow">Einordnung</span>
            <h2>{started ? result.title : "Sie behalten die Kontrolle"}</h2>
            <p>{started ? result.text : "Markieren Sie jede Aussage, die heute nachweisbar und regelmäßig erfüllt ist. Ihre Angaben bleiben ausschließlich in diesem Browserfenster."}</p>
            <div className="score-scale" aria-hidden="true"><span style={{ width: `${(score / 7) * 100}%` }} /></div>
            <div className="result-actions">
              <a className="button" href={`mailto:kontakt@nexhotels.de?subject=${subject}&body=${body}`}>Ergebnis kurz einordnen lassen</a>
              <Link className="text-link" href="/">Methodik von NexHotels ansehen</Link>
            </div>
            <p className="check-privacy-note">Keine Datenübertragung im Check. Erst beim bewussten Öffnen Ihres E-Mail-Programms wird eine Nachricht vorbereitet.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
