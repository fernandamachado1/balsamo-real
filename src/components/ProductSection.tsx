"use client";

import { motion } from "framer-motion";
import { Typography } from "antd";

export function ProductSection() {
    return (
        <section id="loja" className="py-24 px-8 bg-[#f4f1ea] overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Typography.Title level={2} className="font-serif text-4xl md:text-5xl mb-8 text-[#2c2c2c] !mt-0">
                            O Produto
                        </Typography.Title>
                        <Typography.Paragraph className="text-lg text-[#4a4a4a] leading-relaxed mb-6 font-light">
                            O <Typography.Text className="font-medium text-[#2c2c2c]">Bálsamo Real</Typography.Text>, produto 100% natural, é um
                            condicionador de couro. Ele hidrata, renova e protege o couro
                            naturalmente.
                        </Typography.Paragraph>
                        <Typography.Paragraph className="text-lg text-[#4a4a4a] leading-relaxed mb-8 font-light">
                            O óleo de amêndoas e a manteiga de cacau hidratam profundamente as
                            fibras do couro, enquanto a cera de abelha cria uma proteção
                            superficial que rejuvenesce e realça as cores do seu artigo.
                        </Typography.Paragraph>
                        <a href="#sobre">
                            <motion.button
                                className="border-b-2 border-black pb-1 text-sm uppercase tracking-widest hover:text-[#8B7355] hover:border-[#8B7355] transition-colors"
                                whileHover={{ x: 10 }}
                            >
                                Saiba mais
                            </motion.button>
                        </a>
                    </motion.div>

                    <motion.div
                        className="group"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative h-[500px] w-full bg-[#e0d5c1] overflow-hidden">
                            <img
                                src="/balsamo_1.jpg"
                                alt="Detalhe do Bálsamo Real"
                                className="object-cover w-full h-full shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="absolute inset-0 flex items-end justify-center p-6">
                                <motion.button
                                    className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] font-medium text-white border-b-2 border-white pb-2"
                                    whileHover={{ x: 6 }}
                                >
                                    Compre agora
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
