import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import {
  catalogKits,
  formatMoney,
  kitOrderMessage,
  whatsappMessages,
  whatsappOrderLink,
} from "@/src/lib/catalog";

export const metadata: Metadata = {
  title: "Catálogo | Bálsamo Real",
  description:
    "Veja o Bálsamo Real, um hidratante para couro natural, e escolha o kit ideal pelo WhatsApp.",
};

export default function CatalogoPage() {
  const introLink = whatsappOrderLink(
    whatsappMessages.kits
  );

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-10 pt-6 lg:px-8">
        <div className="flex h-12 items-center">
          <Link
            href="/"
            aria-label="Voltar"
            className="inline-flex items-center justify-center rounded-full border border-[#d9ccba] bg-white/70 p-2 text-[#7a6248] transition-colors hover:bg-[#f7f2e8] hover:text-[#624e3a]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Voltar</span>
          </Link>
        </div>

        <div className="max-w-3xl">
          <span className="inline-flex items-center px-0 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7a6248]">
            Catálogo
          </span>
          <h1 className="mt-5 text-[clamp(2.2rem,1.4rem+2.2vw,4rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            Bálsamo Real, hidratante para couro natural.
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#5d564d]">
            Cada lata tem 25g e foi pensada para conservar, nutrir e manter artigos em couro natural.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href={introLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#7a6248] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#f4f1ea] transition-colors hover:bg-[#624e3a]"
          >
            <MessageCircle className="h-4 w-4" />
            Pedir no WhatsApp
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#1c1714] transition-colors hover:bg-[#f7f2e8]"
          >
            Ir para a página inicial
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">
        <div className="space-y-12">
          {catalogKits.map((kit) => (
            <article
              key={kit.slug}
              className="grid gap-0 overflow-hidden rounded-[8px] bg-[#eee4d5] shadow-[0_18px_40px_-30px_rgba(35,26,18,0.42)] lg:grid-cols-[300px_1fr]"
            >
              <div className="relative min-h-[220px]">
                <Image
                  src={kit.image}
                  alt={kit.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 300px"
                />
              </div>

              <div className="flex flex-col justify-between gap-6 px-6 py-6 sm:px-8 sm:py-8 lg:px-9">
                <div className="space-y-5">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-[#7b7267]">
                    <span>{kit.highlight}</span>
                    <span>{kit.units} unidades</span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-[clamp(1.55rem,1.1rem+1vw,2.15rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
                      {kit.title}
                    </h2>
                    <p className="max-w-[60ch] text-sm leading-6 text-[#5d564d]">{kit.summary}</p>
                  </div>

                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7b7267]">
                      Valor do kit
                    </div>
                    <div className="mt-2 text-3xl font-semibold">{formatMoney(kit.price)}</div>
                    <div className="mt-1 text-sm text-[#5d564d]">
                      {formatMoney(kit.perUnit)} por unidade
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/catalogo/${kit.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#1c1714] transition-colors hover:bg-[#f4ede3]"
                  >
                    Ver detalhes
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={whatsappOrderLink(
                      kitOrderMessage(kit.title)
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#7a6248] px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#f4f1ea] transition-colors hover:bg-[#624e3a]"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </section>
    </main>
  );
}
