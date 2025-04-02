import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const HomePage = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-brand-950/30" />
          <img
            src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Moderan enterijer"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl text-white mb-8">
              Stvaramo prostore koji inspirišu
            </h1>
            <p className="text-xl text-white/90 mb-12">
            Dobrodošli u NEED design
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-brand-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl text-brand-950 mb-8">O nama</h2>
              <div className="space-y-6 text-lg">
                <p>
                Mi se bavimo proizvodnjom nameštaja od pločastog materijala, dizajnom i opremanjem prostora, sa posebnim naglaskom na kreiranje unikatnih enterijera.
                </p>
                <p>
                Bez obzira na to da li opremate svoj dom, kancelariju ili neki drugi poslovni prostor, mi ćemo vam omogućiti da ostvarite željeni estetski dojam i maksimalnu funkcionalnost.
                </p>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center mt-8 text-brand-950 hover:text-brand-800 transition-colors"
              >
                <span className=" text-lg">Saznajte više</span>
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
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Proces produkcije"
                className="w-full rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Motto Section */}
      <section className="py-24 bg-brand-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl mb-6">
              "Lepota doma počinje savršenim nameštajem."
            </h2>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};