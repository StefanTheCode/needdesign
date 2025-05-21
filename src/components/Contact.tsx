import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

export const Contact = () => {
  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } }
  };

  return (
    <section id="contact" className="py-24 bg-brand-100">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-brand-950 mb-8">Contact</h2>
          <p className="font-poiret text-xl text-brand-800 text-balance">
            Let's discuss your project
          </p>
        </AnimatedSection>

        <AnimatedSection className="max-w-xl mx-auto">
          <form className="space-y-8">
            <motion.div whileFocus="focus" variants={inputVariants}>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b border-brand-300 py-4 font-poiret text-lg text-brand-900 placeholder-brand-400 focus:outline-none focus:border-brand-600"
              />
            </motion.div>
            <motion.div whileFocus="focus" variants={inputVariants}>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-brand-300 py-4 font-poiret text-lg text-brand-900 placeholder-brand-400 focus:outline-none focus:border-brand-600"
              />
            </motion.div>
            <motion.div whileFocus="focus" variants={inputVariants}>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent border-b border-brand-300 py-4 font-poiret text-lg text-brand-900 placeholder-brand-400 focus:outline-none focus:border-brand-600 resize-none"
              ></textarea>
            </motion.div>
            <div className="pt-8">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-900 text-white py-4 font-poiret text-lg hover:bg-brand-800 transition-colors"
              >
                Send Message
              </motion.button>
            </div>
          </form>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <p className="font-poiret text-lg text-brand-800 mb-2">info@need.design.rs</p>
            <p className="font-poiret text-lg text-brand-800">+1 (555) 123-4567</p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};