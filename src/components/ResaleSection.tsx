"use client";

import { motion } from "framer-motion";
import { Flex, Typography } from "antd";

export function ResaleSection() {
    return (
        <section id="resale" className="py-24 px-6 bg-[#f6f1e9] border-y border-[#e9dfd1] overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div>
                            <div className="relative h-[520px] w-full bg-[#e0d5c1] overflow-hidden">
                                <img
                                    src="/IMG_5500.jpg"
                                    alt="Detalhe do Bálsamo Real"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </motion.div>
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
                                Revenda no seu ateliê
                            </Typography.Title>

                            <Typography.Paragraph
                                className="text-[#4a4a4a]"
                                style={{ fontSize: 16 }}
                            >
                                O Bálsamo Real também pode ser adquirido para uso profissional ou revenda livre, sem regras de preço ou formato de venda.
                            </Typography.Paragraph>

                            <Typography.Paragraph
                                className="text-[#4a4a4a]"
                                style={{ fontSize: 16 }}
                            >
                                É uma opção pensada para quem trabalha com artigos em couro e quer oferecer um cuidado extra aos clientes — seja no acabamento final das peças ou como um produto complementar de manutenção.
                            </Typography.Paragraph>

                            <div className="space-y-3">
                                <Typography.Text className="block uppercase tracking-[0.2em] text-xs text-[#7a6b54]">
                                    Como funciona
                                </Typography.Text>
                                <ul className="list-disc pl-5 space-y-2 text-[#4a4a4a] text-base">
                                    <li>Compra mínima para uso profissional ou revenda a partir de 4 unidades</li>
                                    <li>Produto pronto para uso e venda</li>
                                    <li>Reposição simples, feita diretamente pelo WhatsApp</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-10 flex flex-wrap gap-4">
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


                </div>
            </div>
        </section>
    );
}
