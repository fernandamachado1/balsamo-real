"use client";

import { Typography } from "antd";

export function FooterContact() {
  const bodySize = { fontSize: "clamp(1.125rem, 1rem + 0.35vw, 1.5rem)" };
  const titleSize = { fontSize: "clamp(2rem, 1.7rem + 0.8vw, 2.75rem)" };

  return (
    <section id="contato" className="py-24 px-8 bg-[#f4f1ea]">
      <div className="max-w-4xl mx-auto text-center">
        <Typography.Title level={2} className="font-serif text-[#2c2c2c] mb-6 !mt-0" style={titleSize}>
          Fale com a gente
        </Typography.Title>
        <Typography.Paragraph className="text-[#4a4a4a] leading-relaxed font-light mb-8" style={bodySize}>
          Tire suas dúvidas, peça uma recomendação ou faça seu pedido direto com nossa equipe.
        </Typography.Paragraph>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-xs tracking-[0.25em] uppercase text-[#2c2c2c]">
          <Typography.Text className="border-b border-[#2c2c2c] pb-2 text-inherit">
            contato@balsamoreal.com
          </Typography.Text>
          <Typography.Text className="border-b border-[#2c2c2c] pb-2 text-inherit">
            +55 11 99999-9999
          </Typography.Text>
          <Typography.Text className="border-b border-[#2c2c2c] pb-2 text-inherit">
            @balsamoreal
          </Typography.Text>
        </div>
      </div>
    </section>
  );
}
