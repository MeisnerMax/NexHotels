# NexHotels

Offizielle Website von **NexHotels – Profit Control für inhabergeführte Hotels**.

## Technik

- Next.js 16
- React 19
- TypeScript
- Vercel

## Lokale Entwicklung

```bash
npm install
npm run dev
```

## Qualitätsprüfung

```bash
npm run lint
npm run build
```

## Deployment

Der produktive Branch ist `main`. Nach der einmaligen Git-Verknüpfung in Vercel soll jeder Push auf `main` automatisch nach Produktion deployen. Pull Requests und andere Branches erzeugen Preview-Deployments.

## Wichtige Routen

- `/` – Startseite
- `/profit-control-check` – interaktiver, datensparsamer Selbstcheck
- `/impressum` – Anbieterkennzeichnung
- `/datenschutz` – Datenschutzhinweise
- `/robots.txt` und `/sitemap.xml` – SEO-Endpunkte

## Unternehmensdaten

Zentrale Pflichtdaten werden in `src/lib/company.ts` gepflegt. Keine Zugangsdaten, Tokens oder lokale `.env`-Dateien committen.
