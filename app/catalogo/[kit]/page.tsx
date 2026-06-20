import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import {
  catalogKits,
  formatMoney,
  getKitBySlug,
  kitOrderMessage,
  whatsappOrderLink,
} from "@/src/lib/catalog";

type PageProps = {
  params: Promise<{ kit: string }>;
};

const usageNotes = [
  "Hidrate e condicione seus artigos de couro a cada 6 meses ou antes se perceber que o couro está ressecado ou foi excessivamente molhado ou lavado.",
  "Faça um teste em uma pequena área antes da aplicação para ver os resultados.",
  "Abra a lata e aplique em seu artigo de couro uma pequena quantidade de bálsamo com os dedos ou uma flanela de algodão fazendo movimentos circulares até a completa absorção.",
  "Apenas uma fina película do produto é suficiente para hidratação rotineira.",
  "O couro tende a escurecer um pouco com a aplicação retornando à cor original em 24h a 48h.",
];

export function generateStaticParams() {
  return catalogKits.map((kit) => ({ kit: kit.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { kit } = await params;
  const product = getKitBySlug(kit);

  if (!product) {
    return {
      title: "Catálogo | Bálsamo Real",
    };
  }

  return {
    title: `${product.title} | Bálsamo Real`,
    description: product.description,
  };
}

export default async function KitPage({ params }: PageProps) {
  const { kit } = await params;
  const product = getKitBySlug(kit);

  if (!product) {
    notFound();
  }

  const whatsappLink = whatsappOrderLink(kitOrderMessage(product.title));

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-7xl px-6 pb-14 pt-6 lg:px-8">
        <div className="flex h-12 items-center">
          <Link
            href="/catalogo"
            aria-label="Voltar ao catálogo"
            className="inline-flex items-center justify-center rounded-full border border-[#d9ccba] bg-white/70 p-2 text-[#6e665d] transition-colors hover:bg-[#f7f2e8] hover:text-[#1c1714]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Voltar ao catálogo</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="relative overflow-hidden min-h-[360px] sm:min-h-[500px] lg:h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex h-full flex-col justify-between gap-8">
            <div className="space-y-5">
              <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[#7b7267]">
                <span>{product.highlight}</span>
                <span>{product.units} unidades</span>
              </div>

              <div>
                <h1 className="text-[clamp(2rem,1.4rem+1.8vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
                  {product.title}
                </h1>
                <p className="mt-2 text-sm uppercase tracking-[0.16em] text-[#7b7267]">
                  Conteúdo: 25g
                </p>
              </div>

              {product.notes?.length ? (
                <div className="space-y-4 rounded-[4px] border border-[#e1d6c6] bg-[#f7f2e8] px-5 py-5">
                  <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7a6248]">
                    Sobre este kit
                  </h2>
                  <div className="space-y-3">
                    {product.notes.map((note) => (
                      <p key={note} className="text-sm leading-6 text-[#4e473f]">
                        {note}
                      </p>
                    ))}
                  </div>
                </div>
              ) : null}

              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#7b7267]">
                  Valor do kit
                </div>
                <div className="mt-2 text-4xl font-semibold">{formatMoney(product.price)}</div>
                <div className="mt-1 text-sm text-[#5d564d]">
                  {formatMoney(product.perUnit)} por unidade
                </div>
              </div>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#7a6248] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#f4f1ea] transition-colors hover:bg-[#624e3a]"
              >
                <MessageCircle className="h-4 w-4" />
                Pedir no WhatsApp
              </a>
              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#1c1714] transition-colors hover:bg-[#f7f2e8]"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                Ver outros kits
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7a6248]">
              Informações importantes
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[#2b2723]">
              {[
                "Uso externo.",
                "Indicado para couro natural.",
                "Recomenda-se testar em uma pequena área antes da aplicação.",
                "Manter em local seco e protegido do calor excessivo.",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7a6248]">
              Produção e envio
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#2b2723]">
              O Bálsamo Real é produzido em pequenos lotes. O prazo de produção e envio pode
              variar conforme a disponibilidade em estoque e a quantidade solicitada. O prazo
              estimado será informado durante o atendimento.
            </p>
            <p className="mt-3 text-sm leading-6 text-[#2b2723]">
              O valor do frete é calculado de acordo com o CEP de entrega. Para solicitar um
              orçamento, entre em contato informando a quantidade desejada e o CEP para envio.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7a6248]">
              Passo a passo de uso
            </h2>
            <div className="mt-4 space-y-4 text-sm leading-6 text-[#2b2723]">
              {usageNotes.map((note) => (
                <p key={note}>{note}</p>
              ))}
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
