import { motion } from 'framer-motion';
import Component_2_3_1 from './Component_2_3_1';

/**
 * Section: Nossa História e Compromisso Natural
 * Aesthetic: Artisanal, heritage, textured.
 * Layout: Image with decorative frame + refined typography.
 */
function Component_2_3() {
  return (
    <section
      id="sobre"
      className="text-[#f4f1ea] relative overflow-hidden px-6 py-32 md:py-48 scroll-mt-28 border-y border-[#3a3126] bg-[radial-gradient(circle_at_80%_10%,rgba(201,157,100,0.22),transparent_42%),linear-gradient(180deg,#1b1612_0%,#292119_100%)]"
      data-component-id="Component_2_3"
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/leather.png")` }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            className="w-full lg:w-1/2 order-2 lg:order-1 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="w-full max-w-[420px]"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <div className="overflow-hidden aspect-[4/5] rounded-2xl shadow-2xl border border-white/15">
                <img
                  src="/IMG_5473.jpg"
                  alt="Textura natural do couro"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Component_2_3_1 />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Component_2_3;
