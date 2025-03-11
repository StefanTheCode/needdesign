import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactPage = () => {
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
            <h1 className="text-4xl md:text-5xl mb-8">Kontaktirajte Nas</h1>
            <p className="text-xl">
              Razgovarajmo o vašem projektu
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form className="space-y-8">
                <div>
                  <input
                    type="text"
                    placeholder="Ime"
                    className="w-full bg-transparent border-b py-4 font-poiret text-lg placeholder-brand-400 focus:outline-none focus:border-brand-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b py-4 font-poiret text-lg placeholder-brand-400 focus:outline-none focus:border-brand-600"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Poruka"
                    rows={4}
                    className="w-full bg-transparent border-b py-4 font-poiret text-lg  focus:outline-none resize-none"
                  ></textarea>
                </div>
                <div className="pt-8">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-brand-900 text-white py-4 font-poiret text-lg hover:bg-brand-800 transition-colors rounded-lg"
                  >
                    Pošaljite Poruku
                  </motion.button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-12"
            >
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-brand-900 mt-1" />
                <div>
                  <h3 className="text-xl text-brand-950 mb-2">Email</h3>
                  <p className="font-poiret text-lg text-brand-800">
                    info@needdesign.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-brand-900 mt-1" />
                <div>
                  <h3 className="text-xl text-brand-950 mb-2">Telefon</h3>
                  <p className="font-poiret text-lg text-brand-800">
                    +381 11 123 4567
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-brand-900 mt-1" />
                <div>
                  <h3 className="text-xl text-brand-950 mb-2">Adresa</h3>
                  <p className="font-poiret text-lg text-brand-800">
                    Bulevar Kralja Aleksandra 123<br />
                    11000 Beograd
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