import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/src/components/Header";
import { Typography } from "antd";

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
        className="antialiased font-sans"
      >
        <Header />
        <main>{children}</main>
        <footer className="bg-[#D7D4BD] border-t border-[#e6dccb]">
          <div className="max-w-6xl mx-auto px-8 pt-20 pb-12">
            <div className="grid gap-12 md:grid-cols-4 text-[#2c2c2c] text-[15px] leading-relaxed">
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
                <div className="pt-2 text-sm text-[#4a4a4a]">
                  Postagem dos produtos realizada todas sextas-feiras.
                </div>
              </div>
              {/* <section id="contato" className="py-24 px-8 bg-[#f4f1ea]">
                <div className="max-w-4xl mx-auto text-center">
                  <Typography.Title level={2} className="font-serif text-3xl text-[#2c2c2c] mb-6 !mt-0">
                    Fale com a gente
                  </Typography.Title>
                  <Typography.Paragraph className="text-lg text-[#4a4a4a] leading-relaxed font-light mb-6">
                    Tire suas dúvidas, peça uma recomendação ou faça seu pedido direto com nossa equipe.
                  </Typography.Paragraph>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm tracking-widest uppercase">
                    <span className="border-b-2 border-black pb-1">contato@balsamoreal.com</span>
                    <span className="border-b-2 border-black pb-1">+55 11 99999-9999</span>
                    <span className="border-b-2 border-black pb-1">@balsamoreal</span>
                  </div>
                </div>
              </section> */}
             

              {/* <div className="space-y-6">
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
              </div> */}
            </div>
            <div className="mt-12 border-t border-[#e6dccb] text-xs tracking-[0.2em] uppercase text-[#8B7355] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>Balsamo Real</div>
              <div>Todos os direitos reservados</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
