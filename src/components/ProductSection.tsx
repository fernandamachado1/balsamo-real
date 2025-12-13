"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function ProductSection() {
    return (
        <section className="py-24 px-8 bg-[#f4f1ea] overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-serif text-4xl md:text-5xl mb-8 text-[#2c2c2c]">
                            O Produto
                        </h2>
                        <p className="text-lg text-[#4a4a4a] leading-relaxed mb-6 font-light">
                            O <strong className="font-medium text-[#2c2c2c]">Bálsamo Real</strong>, produto 100% natural, é um
                            condicionador de couro. Ele hidrata, renova e protege o couro
                            naturalmente.
                        </p>
                        <p className="text-lg text-[#4a4a4a] leading-relaxed mb-8 font-light">
                            O óleo de amêndoas e a manteiga de cacau hidratam profundamente as
                            fibras do couro, enquanto a cera de abelha cria uma proteção
                            superficial que rejuvenesce e realça as cores do seu artigo.
                        </p>
                        <Link href="/sobre-o-produto">
                            <motion.button
                                className="border-b-2 border-black pb-1 text-sm uppercase tracking-widest hover:text-[#8B7355] hover:border-[#8B7355] transition-colors"
                                whileHover={{ x: 10 }}
                            >
                                Saiba mais
                            </motion.button>
                        </Link>
                    </motion.div>

                    <motion.div
                        className="relative h-[500px] w-full bg-[#e0d5c1]"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Placeholder for product detail image */}
                        <img
                            src="https://placehold.co/600x800/d4c5b0/333333?text=Detalhe+do+Produto"
                            alt="Detalhe do Bálsamo Real"
                            className="object-cover w-full h-full shadow-xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
