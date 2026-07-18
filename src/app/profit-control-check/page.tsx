import type { Metadata } from "next";
import CheckClient from "./CheckClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Profit-Control-Check",
  description:
    "Sieben Fragen zur wirtschaftlichen Steuerung inhabergeführter Hotels – ohne Datenupload und ohne Verpflichtung.",
  alternates: { canonical: "/profit-control-check" },
};

type CheckPageProps = {
  searchParams: Promise<{ ref?: string }>;
};

export default async function ProfitControlCheckPage({ searchParams }: CheckPageProps) {
  const params = await searchParams;
  const rawReference = params.ref || "NH-CHECK";
  const reference = /^[A-Z0-9-]{3,40}$/i.test(rawReference)
    ? rawReference.toUpperCase()
    : "NH-CHECK";

  return <CheckClient reference={reference} />;
}
