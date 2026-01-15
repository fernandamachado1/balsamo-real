import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/src/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

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
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        <Header />
        <main>{children}</main>
        <footer className="bg-[#D7D4BD] border-t border-[#e6dccb]">
          <div className="max-w-6xl mx-auto px-8 pt-20 pb-12">
            <div className="grid gap-12 md:grid-cols-4 text-[#2c2c2c] text-[15px] leading-relaxed">
              
              <div className="space-y-6">
                <div className="text-xs uppercase tracking-[0.2em] text-[#8B7355] font-medium">
                  Atendimento
                </div>
                <div className="space-y-2">
                  <div>FAQ</div>
                  <div>Envios e Devolucoes</div>
                  <div>Politica de Devolucao</div>
                </div>
                <div className="pt-2 text-sm text-[#4a4a4a]">
                  Postagem dos produtos realizada todas sextas-feiras.
                </div>
              </div>
              <div className="space-y-6">
                <div className="text-xs uppercase tracking-[0.2em] text-[#8B7355] font-medium">
                  Contato
                </div>
                <div className="space-y-2 text-[#4a4a4a]">
                  <div>
                    (41) 9684-9563
                  </div>
                  <div>
                    balsamo.real@gmail.com
                  </div>
                </div>
              </div>
             
              <div className="space-y-6">
                <div className="text-xs uppercase tracking-[0.2em] text-[#8B7355] font-medium">
                  Pagamentos Aceitos
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <img
                    src="/metodos_pagamentos.png"
                    alt="Bálsamo Real Background"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs uppercase tracking-[0.2em] text-[#8B7355] font-medium">
                  Redes sociais 
                </div>
                <div className="space-y-2">
                  <div>Insta</div>
                  
                </div>
                
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-[#e6dccb] text-xs tracking-[0.2em] uppercase text-[#8B7355] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>Balsamo Real</div>
              <div>Todos os direitos reservados</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
