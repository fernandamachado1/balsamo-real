import { motion } from 'framer-motion';
import Component_2_4_1 from './Component_2_4_1';

/**
 * Section: Revenda
 * Design: Warm light background to harmonize with surrounding sections.
 */
function Component_2_4() {
  return (
    <section
      id="revenda"
      className="overflow-hidden px-6 py-32 md:py-48 scroll-mt-28 border-y border-[#d6ccb8] relative bg-[radial-gradient(circle_at_20%_10%,rgba(139,115,85,0.12),transparent_42%),linear-gradient(180deg,#efe7d8_0%,#e9dfcd_100%)]"
      data-component-id="Component_2_4"
    >
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/paper-fibers.png")` }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid items-center gap-16 lg:gap-24 grid-cols-1 lg:grid-cols-2">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <Component_2_4_1 />
          </motion.div>
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <motion.div className="w-full max-w-[450px] mx-auto" whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
              <div className="overflow-hidden aspect-[4/5] rounded-2xl shadow-2xl border border-[#d2c7b2]">
                <img
                  src="/IMG_5500.jpg"
                  alt="Bálsamo Real em Ateliê"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Component_2_4;
