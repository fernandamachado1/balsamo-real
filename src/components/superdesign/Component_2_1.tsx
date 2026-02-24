import { motion } from 'framer-motion';
import Image from 'next/image';

function Component_2_1() {
  const buyMessage = encodeURIComponent("Olá! Quero comprar o Bálsamo Real. Vim pelo site 😊");
  const whatsappBuyLink = `https://wa.me/5541987236228?text=${buyMessage}`;
  const titleSize = { fontSize: "clamp(2.75rem, 2rem + 3vw, 5.5rem)" };

  return (
    <section
      id="inicio"
      className="w-full h-screen min-h-[700px] relative overflow-hidden flex items-center justify-center pt-20"
      data-component-id="Component_2_1"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/background_home.png"
          alt="Bálsamo Real Background"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-[#17130f]/70 backdrop-blur-[1px]"></div>
      </div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="inline-block mb-6 py-1 px-4 border border-white/30 rounded-full backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <span className="text-white text-xs font-bold tracking-[0.3em] uppercase">Hidratante de couro</span>
        </motion.div>

        <motion.h1
          className="tracking-[0.25em] mb-6 !text-white !mt-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={titleSize}
        >
          Bálsamo Real
        </motion.h1>

        <motion.p
          className="text-white/90 font-sans text-base md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-wide uppercase italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          A excelência no cuidado do seu couro, <br className="hidden md:block" /> preservando tradição e qualidade.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <motion.a
            href={whatsappBuyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-primary/90 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Comprar Agora
          </motion.a>
          <motion.a
            href="#sobre"
            className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white/20 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Saiba Mais
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}

export default Component_2_1;
