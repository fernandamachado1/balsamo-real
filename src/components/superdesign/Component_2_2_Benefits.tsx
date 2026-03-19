import { motion } from 'framer-motion';

const benefits = [
  'Aumenta a durabilidade do couro',
  'Mantém a aparência e flexibilidade',
  'Permite oferecer manutenção ao cliente',
  'Gera uma venda adicional no ateliê',
];

function Component_2_2_Benefits() {
  return (
    <section
      className="relative overflow-hidden px-6 py-32 md:py-48 scroll-mt-28 border-y border-[#3a3126] bg-[radial-gradient(circle_at_20%_80%,rgba(201,157,100,0.18),transparent_40%),linear-gradient(180deg,#232016_0%,#1b1612_100%)]"
      data-component-id="Component_2_2_Benefits"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-10 bg-[#8b7355]"></span>
            <span className="text-[#8b7355] text-xs font-bold tracking-[0.3em] uppercase">Para o artesão</span>
            <span className="h-px w-10 bg-[#8b7355]"></span>
          </div>

          <h2 className="text-white font-serif text-3xl md:text-4xl lg:text-5xl mb-14 leading-tight">
            Mais valor para suas peças
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-4 border border-white/10 rounded-xl px-6 py-5 bg-white/5 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#8b7355] flex items-center justify-center">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="text-white/80 text-base font-light leading-relaxed">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Component_2_2_Benefits;
