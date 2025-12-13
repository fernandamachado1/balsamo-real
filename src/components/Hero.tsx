"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="w-full h-full bg-[#d4c5b0] relative">
                    <img
                        src="/background_home.png"
                        alt="Bálsamo Real Background"
                        className="object-cover w-full h-full"
                    />
                    {/* Dark overlay for better text contrast */}
                    <div className="absolute inset-0 bg-black/30" />
                </div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center text-white px-4 mt-20">
                <motion.h1
                    className="font-serif text-5xl md:text-7xl lg:text-9xl tracking-wider mb-6 drop-shadow-lg text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    BÁLSAMO REAL
                </motion.h1>
                <motion.p
                    className="text-lg md:text-2xl font-light tracking-[0.2em] mb-12 drop-shadow-md text-gray-100 uppercase"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Hidratante e Condicionador <br /> de Couro
                </motion.p>

                <motion.button
                    className="bg-white text-black px-10 py-4 text-sm md:text-base font-medium tracking-[0.2em] uppercase hover:bg-gray-200 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Compre agora
                </motion.button>
            </div>

            {/* Chat Widget Placeholder */}
            <motion.div
                className="absolute bottom-8 right-8 z-20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <button className="bg-[#1a1a1a] text-white p-4 rounded-full shadow-lg hover:bg-[#333] transition-colors hover:scale-110 transform duration-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-message-circle"
                    >
                        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                </button>
            </motion.div>
        </section>
    );
}
