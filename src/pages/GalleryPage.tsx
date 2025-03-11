import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const GalleryPage = () => {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87',
      description: 'Moderan minimalistički dnevni boravak sa prirodnim osvetljenjem'
    },
    {
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
      description: 'Savremeni dizajn kuhinje sa čistim linijama'
    },
    {
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
      description: 'Elegantna spavaća soba'
    },
    {
      image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
      description: 'Luksuzno kupatilo sa nameštajem po meri'
    },
    {
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
      description: 'Moderan kancelarijski prostor'
    },
    {
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea',
      description: 'Otvoreni koncept trpezarije'
    }
  ];

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
            <h1 className="text-4xl md:text-5xl text-brand-950 mb-8">Naši Projekti</h1>
            <p className="font-poiret text-xl text-brand-800">
              Izbor naših najboljih radova
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={`${project.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={project.description}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-brand-950/60 flex items-end p-6 rounded-lg"
                >
                  <p className="font-poiret text-white text-lg">
                    {project.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-brand-900 text-white font-poiret text-lg hover:bg-brand-800 transition-colors rounded-lg"
            >
              Započnite Vaš Projekat
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};