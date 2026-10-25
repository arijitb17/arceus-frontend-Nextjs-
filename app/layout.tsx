import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/providers/app-providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arceus Platform",
  description: "Administration console and developer workspace for the Arceus backend infrastructure platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${poppins.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
