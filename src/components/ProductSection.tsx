"use client";

import { motion } from "framer-motion";
import { Typography } from "antd";
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
                            <Typography.Text className="block uppercase tracking-[0.2em] text-xs text-[#7a6b54]">
                                O produto
                            </Typography.Text>
                            <Typography.Title level={1} className="!mt-0">
                                Bálsamo Real
                            </Typography.Title>
                            <Typography.Paragraph className="text-[#4a4a4a] leading-relaxed font-light" style={{ fontSize: 16 }}>
                                Condicionador natural para couro que hidrata, renova e protege sem agredir a textura.
                            </Typography.Paragraph>
                            <Typography.Paragraph className="text-[#4a4a4a] leading-relaxed font-light" style={{ fontSize: 16 }}>
                                Óleo de amêndoas e manteiga de cacau nutrem as fibras, enquanto a cera de abelha realça
                                brilho e cor.
                            </Typography.Paragraph>
                        </div>
                        <div className="mt-10 border-t border-[#e6dccb] pt-6 grid gap-4">
                            <Typography.Title level={2} className="!mt-0">
                                Benefícios
                            </Typography.Title>
                            <div className="grid gap-4 md:grid-cols-3">
                                <div className="border border-[#eadfcd] bg-[#fbf7f0] p-4">
                                    <Typography.Text className="text-[#4a4a4a] font-light block font-serif">
                                        Hidratação profunda com toque seco.
                                    </Typography.Text>
                                </div>
                                <div className="border border-[#eadfcd] bg-[#fbf7f0] p-4">
                                    <Typography.Text className="text-[#4a4a4a] font-light block font-serif">
                                        Realce natural da cor sem deixar oleoso.
                                    </Typography.Text>
                                </div>
                                <div className="border border-[#eadfcd] bg-[#fbf7f0] p-4">
                                    <Typography.Text className="text-[#4a4a4a] font-light block font-serif">
                                        Seguro para bolsas, sapatos, jaquetas e estofados.
                                    </Typography.Text>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="#contato"
                                className="px-6 py-3 border border-[#2c2c2c] text-[#2c2c2c] uppercase tracking-[0.2em] text-xs hover:bg-[#2c2c2c] hover:text-[#f4f1ea] transition-colors"
                            >
                                <Typography.Text className="text-inherit uppercase tracking-[0.2em] text-xs">
                                    Comprar no WhatsApp
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
