"use client";

import { motion } from "framer-motion";
import { Typography } from "antd";
import { whatsappMessages } from "@/src/lib/catalog";
export function ProductSection() {
    const resaleMessage = encodeURIComponent(whatsappMessages.resale);
    const whatsappResaleLink = `https://wa.me/5541988691275?text=${resaleMessage}`;

    return (
        <section id="sobre" className="py-24 px-6 bg-[#f4f1ea] border-y border-[#e9dfd1] overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-8">
                          
                            <Typography.Title level={2} className="!mt-0 text-[#2c2c2c] text-left">
                                O cuidado certo para artigos em couro
                            </Typography.Title>
                            <div className="space-y-4 max-w-xl">
                                <Typography.Paragraph
                                    className="text-[#4a4a4a] leading-relaxed"
                                    style={{ fontSize: 16 }}
                                >
                                    Hidratante 100% natural para o acabamento final ou a revitalização de peças em couro, sem alterar a textura do material.
                                </Typography.Paragraph>
                                <Typography.Paragraph
                                    className="text-[#4a4a4a] leading-relaxed"
                                    style={{ fontSize: 16 }}
                                >
                                    Com óleo de amêndoas, manteiga de cacau e cera de abelha, o Bálsamo Real hidrata as fibras, protege o couro e realça a cor de forma leve e natural.
                                </Typography.Paragraph>
                            </div>
                            <div className="max-w-md space-y-3">
                                <a
                                    href={whatsappResaleLink}
                                    className="cta-primary block w-full px-5 py-3 text-center"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Quero revender
                                </a>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                    >
                        <div className="relative flex items-center justify-center">
                            <div className="absolute h-[360px] w-[360px] rounded-sm bg-[#dbe6d0]" />
                            <div className="relative h-[460px] w-[360px] overflow-hidden border border-[#e0d5c1] bg-[#f6f1e9] shadow-[0_20px_60px_-40px_rgba(0,0,0,0.45)]">
                                <img
                                    src="/balsamo_1.jpg"
                                    alt="Detalhe do Bálsamo Real"
                                    className="object-cover w-full h-full scale-[1.02]"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
