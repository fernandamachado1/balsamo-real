"use client";

import { motion } from "framer-motion";
import { Flex, Typography } from "antd";
export function ProductSection() {
    return (
        <section id="loja" className="py-24 px-6 bg-[#f6f1e9] border-y border-[#e9dfd1] overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-6 max-w-xl">
                            {/* <Typography.Text className="block uppercase tracking-[0.2em] text-xs text-[#7a6b54]">
                                O produto
                            </Typography.Text> */}
                            <Typography.Title level={2} className="!mt-0">
                                O cuidado certo para artigos em couro
                            </Typography.Title>

                            <Typography.Paragraph
                                className="text-[#4a4a4a]"
                                style={{ fontSize: 16 }}
                            >
                                Hidratante 100% natural para o acabamento final ou a revitalização de peças em couro, sem alterar a textura do material.</Typography.Paragraph>

                            <Typography.Paragraph
                                className="text-[#4a4a4a]"
                                style={{ fontSize: 16 }}
                            >
                                Com óleo de amêndoas, manteiga de cacau e cera de abelha, o Bálsamo Real hidrata as fibras, protege o couro e realça a cor de forma leve e natural.
                            </Typography.Paragraph>

                        </div>
                        <div className="mt-10 border-t border-[#e6dccb] pt-6 grid gap-4">
                            <Typography.Title level={2} className="!mt-0">
                                Benefícios
                            </Typography.Title>
                            <ul className="space-y-3 text-[#4a4a4a] text-[15px]">
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-[#8B7355]" />
                                    <span>Hidratação profunda com toque seco.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-[#8B7355]" />
                                    <span>Realce natural da cor sem deixar oleoso.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="mt-1 h-2 w-2 rounded-full bg-[#8B7355]" />
                                    <span>Seguro para bolsas, carteiras, sapatos e jaquetas.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="#contato"
                                className="px-6 py-3 border bg-[#e0d5c1]  border-[#2c2c2c] text-[#2c2c2c] uppercase tracking-[0.2em] text-xs hover:bg-[#2c2c2c] hover:text-[#f4f1ea] transition-colors"
                            >
                                <Typography.Text className="text-inherit uppercase tracking-[0.2em] text-xs">
                                    Comprar pelo WhatsApp
                                </Typography.Text>
                            </a>
                            <a
                                href="#contato"
                                className="px-6 py-3 border border-[#8B7355] text-[#8B7355] uppercase tracking-[0.2em] text-xs hover:bg-[#8B7355] hover:text-white transition-colors"
                            >
                                <Typography.Text className="text-inherit uppercase tracking-[0.2em] text-xs">
                                    Quero revender
                                </Typography.Text>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div>
                            <div className="relative h-[520px] w-full bg-[#e0d5c1] overflow-hidden">
                                <img
                                    src="/balsamo_1.jpg"
                                    alt="Detalhe do Bálsamo Real"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
