import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/src/components/Header";
import { Footer } from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Bálsamo Real",
  description: "Hidratante e Condicionador para Couro",
  icons: {
    icon: [{ url: "/icon.png", sizes: "64x64", type: "image/png" }],
    shortcut: "/icon.png",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
