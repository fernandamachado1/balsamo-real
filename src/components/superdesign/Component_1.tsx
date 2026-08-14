import Link from 'next/link';
import { motion } from 'framer-motion';

function Component_1() {
  return (
    <motion.header
      className="bg-background/80 backdrop-blur-md w-full h-18 fixed z-50 flex justify-between items-center px-8 md:px-12 left-0 top-0 border-b border-border transition-all duration-300"
      data-component-id="Component_1"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Link href="/" className="flex items-center group">
        <img
          alt="Bálsamo Real"
          src="/carimbo%20REAL.png"
          className="w-24 md:w-28 h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        {/* <span className="ml-3 font-serif text-xl tracking-tight hidden sm:block">Bálsamo Real</span> */}
      </Link>
      
      <nav className="hidden md:flex items-center gap-x-10">
        {[
          { label: 'Início', href: '#inicio' },
          { label: 'Produto', href: '#produto' },
          { label: 'Catálogo', href: '/catalogo' },
          { label: 'Sobre', href: '#sobre' },
          { label: 'Revenda', href: '#revenda' },
          { label: 'Contato', href: '#contato' },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors tracking-wide"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-x-4">
        <motion.a
          href="https://wa.me/5541988691275"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-primary-foreground px-6 py-2.5 rounded-sm text-sm font-semibold tracking-[0.04em] hover:opacity-90 transition-all shadow-sm hover:shadow-md active:scale-95"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Falar Conosco
        </motion.a>
      </div>
    </motion.header>
  );
}

export default Component_1;
