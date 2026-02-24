import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/src/components/Header";

export const metadata: Metadata = {
  title: "Bálsamo Real",
  description: "Hidratante e Condicionador de Couro",
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
        <main>{children}</main>
       
      </body>
    </html>
  );
}
