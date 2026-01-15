"use client";

import Link from "next/link";
import { ShoppingBag, User } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

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
      className={`w-full py-6 px-8 flex items-center justify-between fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent"
        }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Empty div to balance the flex layout if needed, or just use justify-between */}
      <div className="hidden md:block w-1/12"></div>

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
            {link.label}
            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-6 text-gray-700">
        <button className="relative hover:text-black transition-colors hover:scale-105 transform duration-200">
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-[#8B7355] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
            0
          </span>
        </button>
        <Link
          href="/login"
          className="flex items-center gap-2 text-sm font-medium hover:text-black transition-colors hover:scale-105 transform duration-200"
        >
          <User className="w-5 h-5" />
          <span>Login</span>
        </Link>
      </div>
    </motion.header>
  );
}
