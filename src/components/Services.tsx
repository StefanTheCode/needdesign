import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

export const Services = () => {
  const services = [
    {
      title: 'kitchen Design',
      description: 'Creating harmonious living spaces'
    },
    {
      title: 'Commercial Design',
      description: 'Functional workspace solutions'
    },
    {
      title: 'Interior Consulting',
      description: 'Expert guidance and planning'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-24 bg-brand-100">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-brand-950 mb-8">Services</h2>
          <p className="font-poiret text-xl text-brand-800 text-balance">
            Comprehensive design solutions tailored to your needs
          </p>
        </AnimatedSection>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 bg-brand-50 hover:bg-brand-100 transition-colors"
            >
              <h3 className="text-2xl text-brand-900 mb-4">{service.title}</h3>
              <p className="font-poiret text-lg text-brand-700">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <AnimatedSection className="mt-24">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Interior design process" 
            className="w-full h-[60vh] object-cover"
          />
        </AnimatedSection>
      </div>
    </section>
  );
};