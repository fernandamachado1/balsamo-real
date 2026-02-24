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
        <span className="text-[#8b7355] text-xs font-bold tracking-[0.3em] uppercase">Mãos que Criam</span>
      </div>

      <h2 className="text-white font-serif text-3xl md:text-4xl lg:text-5xl mb-8 leading-[1.1] tracking-tight">
        Nossa história e <br /> 
        <span className="italic">compromisso natural</span>
      </h2>
      
      <div className="space-y-6 text-white/75 text-base leading-relaxed mb-12 font-light">
        <p>
          Nascemos da necessidade de um produto <span className="text-white font-medium underline decoration-[#8b7355]/30 underline-offset-4">100% natural</span> para quem cria, restaura e valoriza a longevidade de artigos em couro.
        </p>
        <p>
          Cada lote é preparado com o rigor de quem entende que o couro é um material vivo, que respira e conta histórias através do tempo.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        {[
          { title: 'Tradição', desc: 'Conhecimento de 6 artesãos experientes.' },
          { title: 'Pureza', desc: 'Ingredientes locais selecionados.' }
        ].map((item, i) => (
          <div key={i} className="group border-l border-[#8b7355]/30 pl-6 hover:border-[#8b7355] transition-colors">
            <h4 className="text-white font-serif text-xl mb-2">{item.title}</h4>
            <p className="text-sm text-[#d3b48f] font-light leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <a
        href="https://wa.me/5541987236228?text=Ol%C3%A1!%20Quero%20falar%20com%20a%20equipe%20do%20B%C3%A1lsamo%20Real.%20Vim%20pelo%20site."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-4 bg-[#8b7355] text-white px-10 py-5 rounded-sm text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#a68b6d] transition-all duration-500 shadow-xl group"
      >
        Conheça nossa equipe
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
