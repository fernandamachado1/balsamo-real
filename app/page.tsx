"use client";

import { Hero } from "@/src/components/Hero";
import { ProductSection } from "@/src/components/ProductSection";
import { motion } from "framer-motion";
import { Typography } from "antd";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-[#f4f1ea]">
      <Hero />
      <ProductSection />
      <section id="sobre" className="py-24 px-8 bg-[#f4f1ea]">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="bg-[#d4c5b0]">
              <img
                src="https://placehold.co/600x800/d4c5b0/333333?text=Textura+Natural"
                alt="Textura natural do couro"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <Typography.Title level={2} className="font-serif text-3xl text-[#2c2c2c] mb-6 !mt-0">
                NOSSA HISTÓRIA E FILOSOFIA
              </Typography.Title>
              <Typography.Paragraph className="text-lg text-[#4a4a4a] leading-relaxed font-light mb-4">
                Nascemos da necessidade de um produto 100% natural e que atenda à quem produz ou consome artigos em
                couro, seja calçados, móveis, carteiras, bolsas, jaquetas ou qualquer acessório feito nesse material
                nobre.
              </Typography.Paragraph>
              <Typography.Paragraph className="text-lg text-[#4a4a4a] leading-relaxed font-light mb-4">
                Somos resultado do conhecimento de 6 artesãos com experiência na arte de produzir e cuidar de artigos
                em couro.
              </Typography.Paragraph>
              <Typography.Paragraph className="text-lg text-[#4a4a4a] leading-relaxed font-light">
                Usamos ingredientes locais de altíssima qualidade, buscando entregar o melhor condicionador natural
                para couro.
              </Typography.Paragraph>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-8 bg-[#f4f1ea]">
        <div className="max-w-6xl mx-auto">
          <Typography.Title level={2} className="font-serif text-3xl text-[#2c2c2c] mb-10 !mt-0">
            Benefícios Exclusivos
          </Typography.Title>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Hidratação Profunda", desc: "Penetra nas fibras do couro, prevenindo rachaduras e ressecamento." },
              { title: "Proteção Duradoura", desc: "Cria uma barreira natural contra umidade e poeira sem bloquear os poros." },
              { title: "Brilho Natural", desc: "Devolve o brilho acetinado original sem deixar a superfície gordurosa." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="bg-white/50 p-8 rounded-xl border border-[#e0d5c1]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Typography.Title level={3} className="font-serif text-xl text-[#8B7355] mb-4 !mt-0">
                  {item.title}
                </Typography.Title>
                <Typography.Paragraph className="text-[#4a4a4a] font-light leading-relaxed mb-0">
                  {item.desc}
                </Typography.Paragraph>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-usar" className="bg-[#2c2c2c] text-[#f4f1ea] px-8 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Typography.Title level={2} className="font-serif text-3xl mb-8 text-[#e0d5c1] !mt-0">
              Ritual de Aplicação
            </Typography.Title>
            <ol className="space-y-6 font-light">
              <li className="flex gap-4">
                <Typography.Text className="text-[#8B7355] font-serif text-xl">01</Typography.Text>
                <Typography.Paragraph className="mb-0">
                  Limpe a superfície do couro com um pano seco para remover a poeira.
                </Typography.Paragraph>
              </li>
              <li className="flex gap-4">
                <Typography.Text className="text-[#8B7355] font-serif text-xl">02</Typography.Text>
                <Typography.Paragraph className="mb-0">
                  Com uma esponja ou pano macio, aplique uma pequena quantidade do bálsamo.
                </Typography.Paragraph>
              </li>
              <li className="flex gap-4">
                <Typography.Text className="text-[#8B7355] font-serif text-xl">03</Typography.Text>
                <Typography.Paragraph className="mb-0">
                  Espalhe em movimentos circulares até que o produto seja absorvido.
                </Typography.Paragraph>
              </li>
              <li className="flex gap-4">
                <Typography.Text className="text-[#8B7355] font-serif text-xl">04</Typography.Text>
                <Typography.Paragraph className="mb-0">
                  Aguarde alguns minutos e dê o polimento final com um pano limpo.
                </Typography.Paragraph>
              </li>
            </ol>
          </motion.div>
          <div className="relative h-[400px] bg-[#3a3a3a] rounded-lg overflow-hidden">
            <img
              src="https://placehold.co/600x800/2c2c2c/e0d5c1?text=Aplica%C3%A7%C3%A3o"
              alt="Processo de Aplicação"
              className="object-cover w-full h-full opacity-80"
            />
          </div>
        </div>
      </section>

      <section id="contato" className="py-24 px-8 bg-[#f4f1ea]">
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
      </section>
    </div>
  );
}
