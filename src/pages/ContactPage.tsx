import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactPage = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:info@needdesign.com';
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <section className="py-24 bg-brand-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl text-brand-950 mb-8">Kontaktirajte Nas</h1>
            <p className="font-poiret text-xl text-brand-800">
              <b>Razgovarajmo o vašem projektu</b>
            </p>
            
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.17701735631!2d20.482960075720385!3d44.777196379014505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70f5b9048b8d%3A0xf35d9178cc57534e!2z0J3QsNC00LUg0J3QsNGD0LzQvtCy0LjRmyA5LCDQkdC10L7Qs9GA0LDQtCAxMTAxMA!5e0!3m2!1ssr!2srs!4v1747833019974!5m2!1ssr!2srs"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NEED Design Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <motion.button
                onClick={handleEmailClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-start space-x-4 group w-full text-left"
              >
                <Mail className="h-6 w-6 text-brand-900 mt-1 group-hover:text-brand-700 transition-colors" />
                <div>
                  <h3 className="text-xl text-brand-950 mb-2 group-hover:text-brand-800 transition-colors">Email</h3>
                  <p className="font-poiret text-lg text-brand-800 group-hover:text-brand-600 transition-colors">
                   <b>info@needdesign.rs</b>
                  </p>
                </div>
              </motion.button>
              

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-brand-900 mt-1" />
                <div>
                  <h3 className="text-xl text-brand-950 mb-2">Telefon</h3>
                  <p className="font-poiret text-lg text-brand-800">
                    <b>+381 65 874 2121</b>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-brand-900 mt-1" />
                <div>
                  <h3 className="text-xl text-brand-950 mb-2">Adresa</h3>
                  <p className="font-poiret text-lg text-brand-800">
                    <b>Nade Naumović 9, 11010 Beograd</b><br />
                  </p>
                </div>
              </div>
            </motion.div>

          
          </div>

        </div>
      </section>
    </motion.main>
  );
};