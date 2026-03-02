"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Typography } from "antd";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Marca", href: "#marca" },
    { label: "Revenda", href: "#resale" },
  ];

  return (
    <>
      <motion.header
        className={`w-full py-6 px-8 h-16 flex items-center justify-between fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
            : "bg-[var(--background)]"
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
            className="h-12 w-12 md:h-26 md:w-26 object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800 tracking-wide">
          {navLinks.map((link) => (
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
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center rounded-md border border-[#cdbfa9] px-3 py-2 text-[#2c2c2c] hover:bg-[#f4f1ea] transition-colors"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1">
              <span className="h-[2px] w-5 bg-current" />
              <span className="h-[2px] w-5 bg-current" />
              <span className="h-[2px] w-5 bg-current" />
            </div>
          </button>
          <a
            href="https://wa.me/5541988691275"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center rounded-md bg-[#8B7355] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#7a644c]"
          >
            Entre em contato
          </a>
        </div>
      </motion.header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setIsMenuOpen(false)}>
          <div
            className="absolute right-4 top-20 w-[calc(100%-2rem)] rounded-2xl bg-white shadow-xl border border-[#e0d5c1] p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-col gap-4 text-[#2c2c2c]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-[0.2em]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5541988691275"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-md bg-[#8B7355] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-[#7a644c]"
                onClick={() => setIsMenuOpen(false)}
              >
                Entre em contato
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
