function Component_3_1() {
  return (
    <>
      <div className="lg:col-span-1" data-component-id="Component_3_1">
        <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-8">Navegação</h4>
        <ul className="space-y-4">
          {['Início', 'Loja', 'Sobre', 'Contato'].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors font-light italic">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-1">
        <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-8">Atendimento</h4>
        <div className="space-y-4 text-muted-foreground font-light leading-relaxed">
          <p>Postagem dos produtos realizada todas as sextas-feiras.</p>
          <p>Suporte via WhatsApp de Segunda a Sexta, das 9h às 18h.</p>
        </div>
      </div>

      <div className="lg:col-span-1">
        <Component_3_1_1 />
      </div>
    </>
  );
}

import Component_3_1_1 from './Component_3_1_1';
export default Component_3_1;
