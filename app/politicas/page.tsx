import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Políticas | Bálsamo Real",
  description:
    "Políticas de compra, envio e troca do Bálsamo Real, com informações de atendimento, privacidade e revenda.",
};

const sections = [
  {
    id: "compra",
    title: "Compra",
    text: "Os pedidos são concluídos por meio do WhatsApp. Durante o atendimento são confirmados os produtos, quantidades, disponibilidade e valores antes da finalização da compra.",
  },
  {
    id: "producao-e-envio",
    title: "Produção e Envio",
    text: "O prazo de produção pode variar conforme a disponibilidade de estoque e a quantidade solicitada. O valor do frete é calculado de acordo com o CEP de entrega informado pelo cliente e apresentado antes da confirmação do pedido.",
  },
  {
    id: "trocas-devolucoes-e-arrependimento",
    title: "Trocas, Devoluções e Arrependimento",
    text: "Caso ocorra qualquer problema com o produto recebido, o cliente deverá entrar em contato com nossa equipe de atendimento para análise da situação. Para compras realizadas à distância, o cliente poderá exercer o direito de arrependimento em até 7 (sete) dias corridos após o recebimento do pedido, conforme previsto no artigo 49 do Código de Defesa do Consumidor.",
  },
  {
    id: "atendimento",
    title: "Atendimento",
    text: "O atendimento é realizado por meio do WhatsApp, onde prestamos suporte sobre produtos, formas de pagamento, revenda, acompanhamento de pedidos e demais dúvidas.",
  },
  {
    id: "privacidade-e-seguranca",
    title: "Privacidade e segurança",
    text: "Os dados fornecidos pelo cliente são utilizados exclusivamente para atendimento, processamento do pedido, emissão de documentos quando aplicável e envio dos produtos. Não comercializamos ou compartilhamos dados pessoais, exceto quando necessário para viabilizar pagamentos, entregas ou obrigações legais.",
  },
  {
    id: "revenda",
    title: "Revenda",
    text: "Os produtos do Bálsamo Real podem ser adquiridos para uso próprio ou revenda. Os revendedores possuem autonomia para definir os valores praticados em suas vendas, respeitando a legislação aplicável.",
  },
  {
    id: "formas-de-pagamento",
    title: "Formas de pagamento",
    text: "As formas de pagamento disponíveis são informadas durante o atendimento e podem incluir Pix, cartão de crédito por meio de link de pagamento e outras modalidades eventualmente disponibilizadas.",
  },
];

export default function PoliticasPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-5xl px-6 pb-20 pt-6 lg:px-8">
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

        <div className="mt-8 max-w-3xl">
          <span className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7a6248]">
            Políticas
          </span>
          <h1 className="mt-5 text-[clamp(2.2rem,1.4rem+2.2vw,4rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            Termos e políticas do Bálsamo Real.
          </h1>
        </div>

        <div className="mt-14 space-y-10">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="border-t border-[#ded2c0] pt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#7a6248]">
                {section.title}
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#2b2723]">{section.text}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-3 border-t border-[#ded2c0] pt-8">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#1c1714] transition-colors hover:bg-[#f7f2e8]"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Voltar ao catálogo
          </Link>
        </div>
      </section>
    </main>
  );
}
