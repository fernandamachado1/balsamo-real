function Component_3() {
  return (
    <footer
      id="contato"
      className="relative scroll-mt-28 text-[#f4f1ea] border-t border-[#3a3126] pt-20 pb-10 bg-[radial-gradient(circle_at_80%_10%,rgba(201,157,100,0.22),transparent_42%),linear-gradient(180deg,#1b1612_0%,#292119_100%)]"
      data-component-id="Component_3"
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/leather.png")' }}
      ></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 pb-12">
          <div>
            <div className="mb-6">
              <img
                alt="Bálsamo Real"
                src="/carimbo%20REAL.png"
                className="w-12 h-12 object-contain brightness-0 invert contrast-125 opacity-95"
              />
              <span className="mt-3 block font-serif text-lg tracking-tight">Bálsamo Real</span>
            </div>
            <p className="text-sm text-white/75 font-light leading-relaxed max-w-sm">
              Preservando a beleza e a durabilidade do couro com ingredientes 100% naturais.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6">Navegação</h4>
            <ul className="space-y-3">
                {[
                  { label: 'Início', href: '#inicio' },
                  { label: 'Produto', href: '#produto' },
                  { label: 'Sobre', href: '#sobre' },
                  { label: 'Revenda', href: '#revenda' }
                ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-white/75 hover:text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6">Contato</h4>
            <div className="space-y-3 text-sm text-white/75">
              <p>(41) 98869-1275</p>
              <a href="mailto:balsamo.real@gmail.com" className="block hover:text-primary transition-colors">
                balsamo.real@gmail.com
              </a>
              <a
                href="https://www.instagram.com/balsamo.real/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-primary transition-colors"
              >
                @balsamo.real
              </a>
            </div>
            <a
              href="https://wa.me/5541988691275?text=Ol%C3%A1!%20Quero%20falar%20com%20a%20equipe%20do%20B%C3%A1lsamo%20Real.%20Vim%20pelo%20site."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-6 bg-primary text-primary-foreground px-6 py-3 rounded-full text-[11px] font-bold tracking-[0.16em] uppercase hover:opacity-90 transition-all"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[11px] text-white/65 tracking-[0.18em] uppercase font-medium">
            &copy; {new Date().getFullYear()} Bálsamo Real. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/balsamo.real/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white/65 hover:text-primary transition-colors tracking-[0.18em] uppercase font-medium"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5541988691275"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white/65 hover:text-primary transition-colors tracking-[0.18em] uppercase font-medium"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Component_3;
