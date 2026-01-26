"use client";

import { motion } from "framer-motion";
import { Typography } from "antd";

export function HistorySection() {
  return (
    <section id="sobre" className="py-24 px-6 bg-[#efe6d8] border-y border-[#e0d5c1] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Typography.Title
          level={2}
          className="font-serif text-[#2c2c2c] mb-8 !mt-0 text-center md:text-left"
        >
          NOSSA HISTÓRIA E FILOSOFIA
        </Typography.Title>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="">
              <img
                src="/IMG_5473.jpg"
                alt="Textura natural do couro"
                className="object-cover w-full h-[520px]"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="max-w-xl space-y-6">
              <Typography.Text className="block uppercase tracking-[0.2em] text-xs text-[#7a6b54]">
                Artesanato e cuidado
              </Typography.Text>
              <Typography.Paragraph
                className="text-[#4a4a4a] leading-relaxed font-light"
                style={{ fontSize: 16 }}
              >
                Nascemos da necessidade de um produto 100% natural para quem cria e usa artigos em couro.
              </Typography.Paragraph>
              <ul className="space-y-4 text-[#4a4a4a] leading-relaxed font-light text-[16px]">
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
              <div className="pt-2">
                <a
                  href="#contato"
                  className="inline-flex items-center justify-center px-6 py-3 border border-[#2c2c2c] text-[#2c2c2c] uppercase tracking-[0.2em] text-xs hover:bg-[#2c2c2c] hover:text-[#f4f1ea] transition-colors"
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
