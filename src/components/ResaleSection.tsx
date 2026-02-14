"use client";

import { motion } from "framer-motion";
import { Typography } from "antd";

export function ResaleSection() {
    const message = encodeURIComponent(
        "Olá! Tenho interesse em revender o Bálsamo Real. Vim pelo site."
    );
    const whatsappLink = `https://wa.me/5541987236228?text=${message}`;

    return (
        <section id="resale" className="py-24 px-6 bg-[#f4f1ea] border-y border-[#e9dfd1] overflow-hidden">
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
                                Revenda em seu ateliê
                            </Typography.Title>

                            <div className="space-y-4 max-w-xl">
                                <Typography.Paragraph
                                    className="text-[#4a4a4a] leading-relaxed"
                                    style={{ fontSize: 16 }}
                                >
                                    O Bálsamo Real também pode ser adquirido para uso profissional ou revenda livre, sem regras de preço ou formato de venda.
                                </Typography.Paragraph>
                                <Typography.Paragraph
                                    className="text-[#4a4a4a] leading-relaxed font-light"
                                    style={{ fontSize: 16 }}
                                >
                                    É uma opção pensada para quem trabalha com artigos em couro e quer oferecer um cuidado extra aos clientes, seja no acabamento final das peças ou como um produto complementar de manutenção.
                                </Typography.Paragraph>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-[#e3d8c8] max-w-xl">
                                <Typography.Text className="block uppercase tracking-[0.2em] text-xs text-[#7a6b54]">
                                    Como funciona
                                </Typography.Text>
                                <ul className="list-disc pl-5 space-y-2 text-[#4a4a4a] text-base">
                                    <li>Compra mínima para uso profissional ou revenda a partir de 4 unidades</li>
                                    <li>Produto pronto para uso e venda</li>
                                    <li>Reposição simples, feita diretamente pelo WhatsApp</li>
                                </ul>
                            </div>

                            <div className="max-w-md">
                                <a
                                    href={whatsappLink}
                                    style={{ borderRadius: 4 }}
                                    className="block w-full px-5 py-3 border border-[#8B7355] text-[#8B7355] uppercase tracking-[0.2em] text-xs hover:bg-[#8B7355] hover:text-white transition-colors text-center"
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
                            <div className="absolute h-[360px] w-[360px] rounded-full bg-[#dbe6d0]" />
                            <div className="relative h-[460px] w-[360px] overflow-hidden rounded-[36px] border border-[#e0d5c1] bg-[#f6f1e9] shadow-[0_20px_60px_-40px_rgba(0,0,0,0.45)]">
                                <img
                                    src="/IMG_5500.jpg"
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
