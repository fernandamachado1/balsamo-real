"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, User } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button, Typography } from "antd";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      className={`w-full py-6 px-8 h-16 flex items-center justify-between fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent"
        }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/carimbo%20REAL.png"
          alt="Bálsamo Real"
          width={56}
          height={56}
          className="h-8 w-10 md:h-22 md:w-22 object-contain"
          priority
        />
      </Link>

      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800 tracking-wide">
        {[
          { label: "Início", href: "#inicio" },
          { label: "Loja", href: "#loja" },
          { label: "Como usar", href: "#como-usar" },
          { label: "Sobre", href: "#sobre" },
          { label: "Contato", href: "#contato" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative group hover:text-black transition-colors"
          >
            <Typography.Text className="text-inherit">{link.label}</Typography.Text>
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-6 text-gray-700">
        <a
          href="https://wa.me/5541987236228"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-md bg-[#8B7355] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#7a644c]"
        >
          Entre em contato
        </a>
      </div>
    </motion.header>
  );
}
