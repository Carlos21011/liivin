import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Baskervville } from "next/font/google";
import "./globals.css";

// Cargamos Plus Jakarta Sans (Tipografía Principal)
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // Light, Regular, Medium, Bold
  display: "swap",
});

const baskervville = Baskervville({
  variable: "--font-baskervville",
  subsets: ["latin"],
  weight: ["400"], 
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LIVIIN | El Arte de Liderar tu Hogar",
  description: "Una herramienta integral diseñada para la gestión eficiente del mantenimiento y cuidado del hogar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${baskervville.variable}`} suppressHydrationWarning>
      <body className="antialiased selection:bg-brand-olive selection:text-brand-offwhite" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}