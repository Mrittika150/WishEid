import type { Metadata } from "next";
import { Playfair_Display, Quicksand } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Eid Card Studio",
  description: "Create beautiful Eid cards with ease",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${quicksand.variable}`}>
        {children}
      </body>
    </html>
  );
}