"use client";

import { motion } from "framer-motion";
import { Typography } from "antd";

export function Hero() {
    const MotionTitle = motion.create(Typography.Title);
    const MotionParagraph = motion.create(Typography.Paragraph);
    const message = encodeURIComponent(
        "Olá! Quero comprar o Bálsamo Real. Vim pelo site 😊"
    );

    const whatsappLink = `https://wa.me/5541987236228?text=${message}`;
    const titleSize = { fontSize: "clamp(2.75rem, 2rem + 3vw, 5.5rem)" };
    const subtitleSize = { fontSize: "clamp(1rem, 0.9rem + 0.6vw, 1.75rem)" };

    return (
        <section id="inicio" className="relative w-full h-screen min-h-[620px] overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[#d4c5b0] relative">
                    <img
                        src="/background_home.png"
                        alt="Bálsamo Real Background"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>
            </div>

            <div className="absolute inset-x-0 bottom-20 md:bottom-24 z-10 flex flex-col items-center text-center text-white px-6">
                <MotionTitle
                    className="tracking-[0.25em] mb-6 !text-white !mt-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    style={titleSize}
                >
                    Bálsamo Real
                </MotionTitle>
                <MotionParagraph
                    className="tracking-[0.25em] uppercase mb-12 !text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    style={subtitleSize}
                >
                    Hidratante e Condicionador de Couro
                </MotionParagraph>

                <motion.button
                    onClick={() => window.open(whatsappLink, "_blank")}
                    className="bg-white text-[#2c2c2c] px-10 py-4 text-xs md:text-sm font-medium tracking-[0.3em] uppercase hover:bg-[#f4f1ea] transition-colors"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Comprar pelo WhatsApp
                </motion.button>
            </div>
        </section>
    );
}
