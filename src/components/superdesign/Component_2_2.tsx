import { motion } from 'framer-motion';
import Component_2_2_1 from './Component_2_2_1';

function Component_2_2() {
  return (
    <section
      id="produto"
      className="relative overflow-hidden px-6 py-32 md:py-48 scroll-mt-28 border-y border-[#ddd3c2] bg-[radial-gradient(circle_at_85%_12%,rgba(139,115,85,0.16),transparent_42%),linear-gradient(180deg,#f7f4ed_0%,#f1ecdf_100%)]"
      data-component-id="Component_2_2"
    >
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")' }}
      ></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            className="w-full lg:w-1/2 order-1 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <Component_2_2_1 />
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 order-2 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <motion.div
              className="w-full max-w-[450px] aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-border/60"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <img
                src="/balsamo_1.jpg"
                alt="Detalhe do Bálsamo Real"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Component_2_2;
