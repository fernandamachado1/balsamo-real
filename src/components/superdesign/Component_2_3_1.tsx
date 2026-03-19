/**
 * Content for the History section.
 * Focused on artisanal storytelling and clear legibility.
 */
function Component_2_3_1() {
  return (
    <div
      className="max-w-xl"
      data-component-id="Component_2_3_1"
    >
      <div className="flex items-center gap-3 mb-8">
        <span className="h-[1px] w-12 bg-[#8b7355]"></span>
        <span className="text-[#8b7355] text-xs font-bold tracking-[0.3em] uppercase">Nossa história</span>
      </div>

      <h2 className="text-white font-serif text-3xl md:text-4xl lg:text-5xl mb-8 leading-[1.1] tracking-tight">
        Feito por quem <br />
        <span className="italic">trabalha com couro</span>
      </h2>

      <div className="space-y-5 text-white/75 text-base leading-relaxed mb-12 font-light">
        <p>
          O couro é um material natural que, assim como a nossa pele, precisa de cuidado para manter sua flexibilidade, aparência e durabilidade ao longo do tempo.
        </p>
        <p>
          Desde 2014, já entendíamos a importância da hidratação no dia a dia de quem trabalha com couro. Na época, não encontrávamos um produto realmente natural e seguro no uso, sem odores fortes ou a necessidade de proteção ao aplicar.
        </p>
        <p>
          Foi assim que, em 2015, começamos a desenvolver nosso próprio bálsamo — algo comum entre artesãos que buscam o melhor cuidado para suas peças. Com o passar dos anos, nos unimos a outros artesãos que compartilhavam do mesmo objetivo.
        </p>
        <p>
          Dessa união entre ateliês nasceu o <span className="text-white font-medium">Bálsamo Real</span>, formulado com ingredientes naturais, sem aromatizantes ou químicos agressivos, pensado para o cuidado do couro natural no dia a dia de quem trabalha com o material.
        </p>
      </div>

      <a
        href="https://wa.me/5541988691275?text=Ol%C3%A1!%20Quero%20falar%20com%20a%20equipe%20do%20B%C3%A1lsamo%20Real.%20Vim%20pelo%20site."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-4 bg-[#8b7355] text-white px-10 py-5 rounded-sm text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#a68b6d] transition-all duration-500 shadow-xl group"
      >
        Falar no WhatsApp
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transform group-hover:translate-x-1 transition-transform"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </a>
    </div>
  );
}

export default Component_2_3_1;
