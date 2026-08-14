"use client";

import { motion } from "framer-motion";
import { Typography } from "antd";
import { whatsappMessages } from "@/src/lib/catalog";

export function ResaleSection() {
    const message = encodeURIComponent(whatsappMessages.resale);
    const whatsappLink = `https://wa.me/5541988691275?text=${message}`;

    return (
        <section id="resale" className="relative py-24 md:py-28 px-6 overflow-hidden bg-[#f4f1ea] border-y border-[#e9dfd1]">
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative max-w-4xl mx-auto"
            >
                <div className="text-center">
                    <Typography.Text className="block tracking-[0.08em] text-[11px] text-[#7a6b54]">
                        Programa de revenda
                    </Typography.Text>

                    <Typography.Title
                        level={2}
                        className="!mb-0 !mt-4 text-[#2c2c2c]"
                        style={{ fontSize: "clamp(2rem,1.5rem + 1.7vw,3.2rem)", lineHeight: 1.08 }}
                    >
                        Revenda em seu ateliê
                    </Typography.Title>

                    <div className="mt-7 space-y-4 max-w-xl mx-auto">
                        <Typography.Paragraph
                            className="!mb-0 text-[#4a4a4a] leading-relaxed"
                            style={{ fontSize: 16 }}
                        >
                            O Bálsamo Real também pode ser adquirido para uso profissional ou revenda livre, sem regras de preço ou formato de venda.
                        </Typography.Paragraph>
                        <Typography.Paragraph
                            className="!mb-0 text-[#4a4a4a] leading-relaxed font-light"
                            style={{ fontSize: 16 }}
                        >
                            É uma opção para quem trabalha com artigos em couro e quer oferecer um cuidado extra aos clientes, no acabamento das peças ou na manutenção.
                        </Typography.Paragraph>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 text-[#3f3f3f]">
                        <div className="py-3">
                            <Typography.Text className="text-[13px] leading-relaxed">
                                Compra mínima a partir de 4 unidades
                            </Typography.Text>
                        </div>
                        <div className="py-3 md:border-x md:border-[#d8cbb6] md:px-4">
                            <Typography.Text className="text-[13px] leading-relaxed">
                                Produto pronto para uso e venda
                            </Typography.Text>
                        </div>
                        <div className="py-3">
                            <Typography.Text className="text-[13px] leading-relaxed">
                                Reposição direta pelo WhatsApp
                            </Typography.Text>
                        </div>
                    </div>

                    <div className="mt-9 flex justify-center">
                        <a
                            href={whatsappLink}
                            className="cta-primary inline-flex items-center justify-center px-8 py-3"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Quero revender
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
