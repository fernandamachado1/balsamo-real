"use client";

import { motion } from "framer-motion";
import { Typography } from "antd";

export function HistorySection() {
  const message = encodeURIComponent(
    "Olá! Quero falar com a equipe do Bálsamo Real. Vim pelo site."
  );
  const whatsappLink = `https://wa.me/5541987236228?text=${message}`;

  return (
    <section id="sobre" className="py-24 px-6 bg-[#D7D4BD] border-y border-[#e0d5c1] overflow-hidden">
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
              <div className="relative h-[460px] w-[360px] overflow-hidden rounded-[36px] border border-[#e0d5c1] bg-[#f6f1e9] shadow-[0_20px_60px_-40px_rgba(0,0,0,0.45)]">
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
                <li className="pl-4 border-l border-[#d7c9b4]">
                  Somos resultado do conhecimento de 6 artesãos com experiência em produzir e cuidar do couro.
                </li>
                <li className="pl-4 border-l border-[#d7c9b4]">
                  Ingredientes locais e de altíssima qualidade para entregar o melhor condicionador natural.
                </li>
                <li className="pl-4 border-l border-[#d7c9b4]">
                  Feito para calçados, móveis, carteiras, bolsas, jaquetas e acessórios.
                </li>
              </ul>
              <div className="max-w-md">
                <a
                  href={whatsappLink}
                  style={{ borderRadius: 4 }}
                  className="block w-full px-5 py-3 border border-[#2c2c2c] bg-[#2c2c2c] text-[#f4f1ea] uppercase tracking-[0.2em] text-xs hover:bg-[#1f1f1f] hover:border-[#1f1f1f] transition-colors text-center"
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
