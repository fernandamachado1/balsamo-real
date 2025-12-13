"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; // Assuming lucide-react is available, or I'll use standard SVG

export default function ProductDetailsPage() {
    return (
        <div className="min-h-screen bg-[#f4f1ea] py-24 px-8">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center text-[#8B7355] hover:text-[#5e4d35] mb-8 transition-colors">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Voltar para Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-5xl md:text-6xl text-[#2c2c2c] mb-12 leading-tight">
                        A Essência do <br />
                        <span className="text-[#8B7355]">Cuidado com Couro</span>
                    </h1>
                </motion.div>

                <div className="space-y-24">
                    {/* Section 1: Introduction */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[400px] w-full bg-[#e0d5c1] rounded-lg overflow-hidden shadow-lg"
                        >
                            <img
                                src="https://placehold.co/600x800/d4c5b0/333333?text=Textura+Natural"
                                alt="Textura e Aplicação"
                                className="object-cover w-full h-full"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="font-serif text-3xl text-[#2c2c2c] mb-6">Renovação Natural</h2>
                            <p className="text-lg text-[#4a4a4a] leading-relaxed font-light mb-4">
                                O Bálsamo Real não é apenas um produto de limpeza, é um tratamento de rejuvenescimento para seus itens mais estimados. Desenvolvido com uma mistura exclusiva de ingredientes 100% naturais.
                            </p>
                            <p className="text-lg text-[#4a4a4a] leading-relaxed font-light">
                                A combinação perfeita de cera de abelha, óleo de amêndoas e manteiga de cacau garante que o couro respire, mantendo-se flexível e resistente ao tempo.
                            </p>
                        </motion.div>
                    </section>

                    {/* Section 2: Benefits */}
                    <section>
                        <motion.h2
                            className="font-serif text-3xl text-[#2c2c2c] mb-12 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Benefícios Exclusivos
                        </motion.h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Hidratação Profunda", desc: "Penetra nas fibras do couro, prevenindo rachaduras e ressecamento." },
                                { title: "Proteção Duradoura", desc: "Cria uma barreira natural contra umidade e poeira sem bloquear os poros." },
                                { title: "Brilho Natural", desc: "Devolve o brilho acetinado original sem deixar a superfície gordurosa." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/50 p-8 rounded-xl border border-[#e0d5c1]"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    <h3 className="font-serif text-xl text-[#8B7355] mb-4">{item.title}</h3>
                                    <p className="text-[#4a4a4a] font-light leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Section 3: Usage */}
                    <section className="bg-[#2c2c2c] text-[#f4f1ea] -mx-8 px-8 py-24 md:rounded-3xl">
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="font-serif text-3xl mb-8 text-[#e0d5c1]">Ritual de Aplicação</h2>
                                <ol className="space-y-6 font-light">
                                    <li className="flex gap-4">
                                        <span className="text-[#8B7355] font-serif text-xl">01</span>
                                        <p>Limpe a superfície do couro com um pano seco para remover a poeira.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-[#8B7355] font-serif text-xl">02</span>
                                        <p>Com uma esponja ou pano macio, aplique uma pequena quantidade do bálsamo.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-[#8B7355] font-serif text-xl">03</span>
                                        <p>Espalhe em movimentos circulares até que o produto seja absorvido.</p>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-[#8B7355] font-serif text-xl">04</span>
                                        <p>Aguarde alguns minutos e dê o polimento final com um pano limpo.</p>
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
                </div>
            </div>
        </div>
    );
}
