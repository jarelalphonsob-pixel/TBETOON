import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TBETOON — Tes histoires. Ton univers.",
  description:
    "TBETOON est une plateforme de webtoons, mangas et histoires illustrées.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
