"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Typography } from "antd";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const isCatalogPage = pathname?.startsWith("/catalogo");

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks =
      pathname === "/"
        ? [
            { label: "Início", href: "#inicio" },
            { label: "Produto", href: "#produto" },
            { label: "Sobre", href: "#sobre" },
            { label: "Revenda", href: "#revenda" },
          ]
        : [
            { label: "Início", href: "/" },
            { label: "Catálogo", href: "/catalogo" },
          ];

  const headerSurface = isScrolled
    ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
    : "bg-[var(--background)]";

  if (isCatalogPage) {
    return null;
  }

  return (
    <>
      <motion.header
        className={`w-full px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between fixed top-0 left-0 z-50 transition-all duration-300 ${headerSurface}`}
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
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-26 md:w-26 object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800 tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group hover:text-black transition-colors"
            >
              <Typography.Text className="text-inherit">{link.label}</Typography.Text>
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4 text-gray-700">
          {pathname === "/" && (
            <Link
              href="/catalogo"
              className="inline-flex items-center rounded-full bg-white px-2.5 py-1.5 text-[11px] font-semibold text-[#2c2c2c] whitespace-nowrap transition-colors hover:bg-[#f4f1ea] sm:rounded-md sm:px-3 sm:py-2 sm:text-xs md:px-4 md:text-sm"
            >
              Catálogo
            </Link>
          )}
          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center rounded-md px-2.5 py-2 text-[#2c2c2c] hover:bg-[#f4f1ea] transition-colors"
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
            className="inline-flex items-center rounded-full bg-[#8B7355] px-2.5 py-1.5 text-[11px] font-medium text-white whitespace-nowrap transition-colors hover:bg-[#7a644c] sm:rounded-md sm:px-3 sm:py-2 sm:text-xs md:px-4 md:text-sm"
          >
            <span className="sm:hidden">Contato</span>
            <span className="hidden sm:inline">Entre em contato</span>
          </a>
        </div>
      </motion.header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={() => setIsMenuOpen(false)}>
          <div
            className="absolute right-4 top-20 w-[calc(100%-2rem)] rounded-2xl bg-white shadow-xl p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-col gap-4 text-[#2c2c2c]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-[0.2em]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {pathname === "/" && (
                <Link
                  href="/catalogo"
                  className="mt-2 inline-flex items-center justify-center rounded-md bg-white px-4 py-3 text-sm font-semibold text-[#2c2c2c] transition-colors hover:bg-[#f4f1ea]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Catálogo
                </Link>
              )}
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
