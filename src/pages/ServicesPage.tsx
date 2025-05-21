import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const ServicesPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Production Section */}
      <section className="py-24 bg-brand-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* <h2 className="text-3xl md:text-4xl  mb-8">Produkcija</h2> */}
              <p className=" text-lg text-brand-800 mb-8">
              Kroz naše usluge, klijentima nudimo sve, od idejnog rešenja i 3D vizualizacija, pa sve do izrade i montaže nameštaja. Koristimo visoko kvalitetne mehanizme, pločaste materijale u raznim dezenima i  ručice koje odišu stilom kako bismo obezbedili savršen rezultat.
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center hover:text-brand-800 transition-colors"
              >
                <span className=" text-lg">Pogledajte više</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src=".\images\services1.JPG"
                alt="Proces produkcije"
                className="w-full rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="py-24 bg-brand-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:order-2"
            >
              <h2 className="text-3xl md:text-4xl text-brand-950 mb-8">"Ručice kao nakit nameštaja"</h2>
              <p className=" text-lg text-brand-800 mb-8">
              Svaka ideja, svaki zahtev, svaki detalj je za nas važan i trudimo se da ga realizujemo na najbolji mogući način. Ponosimo se brzim rokovima izrade, jer verujemo da je važno da vaš prostor bude gotov na vreme, bez kompromisa u kvalitetu.
              </p>
              <Link
                to="/gallery"
                className="inline-flex items-center text-brand-950 hover:text-brand-800 transition-colors"
              >
                <span className=" text-lg">Pogledajte više</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:order-1"
            >
              <img
                src="\images\services2.JPG"
                alt="Proces dizajna"
                className="w-full rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-brand-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl text-brand-950 mb-8">
            Započnite svoj projekat ili besplatnu konsultaciju
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-brand-900 text-white  text-lg hover:bg-brand-800 transition-colors rounded-lg"
            >
              Kontaktirajte nas
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};