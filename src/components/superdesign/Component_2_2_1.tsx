function Component_2_2_1() {
  return (
    <div
      className="max-w-xl"
      data-component-id="Component_2_2_1"
    >
      <div className="flex items-center gap-2 mb-6">
        <div className="h-px w-8 bg-primary"></div>
        <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Formulado para o ateliê</span>
      </div>

      <h2 className="text-foreground font-serif text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
        Desenvolvido para couro natural
      </h2>

      <div className="space-y-6 text-base text-muted-foreground leading-relaxed mb-10 font-light">
        <p>
          O Bálsamo Real é um condicionador formulado para hidratar, nutrir e preservar couro natural, muito utilizado em peças como carteiras, bolsas e cintos.
        </p>
        <p>
          Com o tempo, o couro perde seus óleos naturais. O bálsamo atua na reposição dessa nutrição, ajudando a manter a <span className="text-foreground font-medium">flexibilidade e evitar o ressecamento</span>.
        </p>
        <p className="text-sm text-muted-foreground/70 italic border-l-2 border-primary/30 pl-4">
          Indicado para couro natural. Pode não ter o mesmo efeito em materiais sintéticos ou couros com acabamento mais fechado.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="https://wa.me/5541988691275?text=Ol%C3%A1!%20Tenho%20interesse%20em%20revender%20o%20B%C3%A1lsamo%20Real.%20Vim%20pelo%20site."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-8 py-4 rounded-sm text-sm font-bold tracking-widest uppercase text-center hover:opacity-90 transition-all shadow-lg"
        >
          Quero revender
        </a>
      </div>
    </div>
  );
}

export default Component_2_2_1;
