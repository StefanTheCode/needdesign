import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-brand-950 mb-8">About Us</h2>
          <p className="font-poiret text-xl text-brand-800 mb-16 text-balance">
            We create thoughtful, minimalist spaces that blend functionality with aesthetic harmony.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <AnimatedSection>
              <div>
                <h3 className="text-2xl text-brand-900 mb-4">Our Approach</h3>
                <p className="font-poiret text-lg text-brand-700">
                  Simplicity, functionality, and attention to detail guide our design philosophy.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div>
                <h3 className="text-2xl text-brand-900 mb-4">Our Vision</h3>
                <p className="font-poiret text-lg text-brand-700">
                  Creating spaces that reflect your personality while maintaining a timeless aesthetic.
                </p>
              </div>
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.img 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Interior design project" 
              className="w-full aspect-[3/4] object-cover"
            />
            <motion.img 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Interior design project" 
              className="w-full aspect-[3/4] object-cover mt-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};