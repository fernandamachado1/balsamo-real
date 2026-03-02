"use client";

import { motion } from "framer-motion";
import { Typography } from "antd";

export function HistorySection() {
  const message = encodeURIComponent(
    "Olá! Quero falar com a equipe do Bálsamo Real. Vim pelo site."
  );
  const whatsappLink = `https://wa.me/5541988691275?text=${message}`;

  return (
    <section id="marca" className="py-24 px-6 bg-[#d7d4bd] border-y border-[#cec8b2] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute h-[360px] w-[360px] rounded-full bg-[#dbe6d0]" />
              <div className="relative h-[460px] w-[360px] overflow-hidden border border-[#d5cbb8] bg-[#f6f1e9] shadow-[0_16px_36px_-34px_rgba(0,0,0,0.55)]">
                <img
                  src="/IMG_5473.jpg"
                  alt="Textura natural do couro"
                  className="object-cover w-full h-full scale-[1.02]"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="space-y-8">
              <Typography.Title level={2} className="!mt-0 text-[#2c2c2c] text-left">
                Nossa história e filosofia
              </Typography.Title>
              <Typography.Paragraph
                className="text-[#4a4a4a] leading-relaxed font-light"
                style={{ fontSize: 16 }}
              >
                Nascemos da necessidade de um produto 100% natural para quem cria e usa artigos em couro.
              </Typography.Paragraph>
              <ul className="space-y-4 text-[#4a4a4a] leading-relaxed font-light text-[16px] max-w-xl">
                <li className="pl-4 border-l border-[#cdbda5]">
                  Somos resultado do conhecimento de 6 artesãos com experiência em produzir e cuidar do couro.
                </li>
                <li className="pl-4 border-l border-[#cdbda5]">
                  Ingredientes locais e de altíssima qualidade para entregar o melhor condicionador natural.
                </li>
                <li className="pl-4 border-l border-[#cdbda5]">
                  Feito para calçados, móveis, carteiras, bolsas, jaquetas e acessórios.
                </li>
              </ul>
              <div className="max-w-md">
                <a
                  href={whatsappLink}
                  className="cta-primary block w-full px-5 py-3 text-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  Falar com a equipe
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
