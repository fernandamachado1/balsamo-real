"use client";

import { motion } from 'framer-motion';
import Component_1 from './Component_1';
import Component_2 from './Component_2';
import Component_3 from './Component_3';

export default function Component() {
  return (
    <div className="bg-background text-foreground leading-relaxed selection:bg-primary selection:text-primary-foreground min-h-screen">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Component_1 />
      </motion.div>
      <main>
        <Component_2 />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <Component_3 />
        </motion.div>
      </main>
    </div>
  );
}
