import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Project {
  category: string;
  images: string[];
  descriptions: string[];
  title: string;
}

export const GalleryPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Sve' },
    { id: 'kitchen', name: 'Kuhinje' },
    { id: 'commercial', name: 'Poslovni prostor' },
    { id: 'drawers', name: 'Komode i vitrine' },
    { id: 'wardrobes', name: 'Garderoberi' }
  ];

  const projects: Project[] = [
    {
      category: 'kitchen',
      title: 'Kuhinje',
      images: [
        '/images/kuhinje/slika1.JPG',
        '/images/kuhinje/slika2.JPG',
        '/images/kuhinje/slika3.JPG',
        '/images/kuhinje/slika4.JPG',
        '/images/kuhinje/slika5.JPG',
        '/images/kuhinje/slika6.JPG',
        '/images/kuhinje/slika7.JPG',
        '/images/kuhinje/slika8.jpg',
        '/images/kuhinje/slika9.jpg',
        '/images/kuhinje/slika10.jpg',
        '/images/kuhinje/slika11.JPG',
        '/images/kuhinje/slika12.JPG',
        '/images/kuhinje/slika13.JPG',
        '/images/kuhinje/slika14.JPG',
        '/images/kuhinje/slika15.JPG'
            ],
      descriptions: [
      ]
    },
    {
      category: 'commercial',
      title: 'Poslovni prostor',
      images: [
    '/images/poslovni prostor/slika1.JPG',
        '/images/poslovni prostor/slika2.JPG',
        '/images/poslovni prostor/slika3.JPG',
        '/images/poslovni prostor/slika4.JPG',
        '/images/poslovni prostor/slika5.JPG'
      ],
      descriptions: [
      ]
    },
    {
      category: 'drawers',
      title: 'Komode i vitrine',
      images: [
        '/images/komode i vitrine/slika1.JPG',
        '/images/komode i vitrine/slika2.jpg',
        '/images/komode i vitrine/slika3.JPG',
        '/images/komode i vitrine/slika4.jpg',
        '/images/komode i vitrine/slika5.jpg',
        '/images/komode i vitrine/slika6.JPG',
        '/images/komode i vitrine/slika7.JPG',
        '/images/komode i vitrine/slika8.jpg',
        '/images/komode i vitrine/slika9.JPG',
        '/images/komode i vitrine/slika10.JPG',
        '/images/komode i vitrine/slika11.JPG',
        '/images/komode i vitrine/slika12.JPG',
        '/images/komode i vitrine/slika13.JPG',
        '/images/komode i vitrine/slika14.JPG',
        '/images/komode i vitrine/slika15.JPG',
        '/images/komode i vitrine/slika16.JPG',
        '/images/komode i vitrine/slika17.jpg',
        '/images/komode i vitrine/slika18.jpg',
        '/images/komode i vitrine/slika19.jpg',
        '/images/komode i vitrine/slika20.JPG',
        '/images/komode i vitrine/slika21.JPG',
        '/images/komode i vitrine/slika22.jpg',
        '/images/komode i vitrine/slika23.JPG',
      ],
      descriptions: [
      ]
    },
    {
      category: 'wardrobes',
      title: 'Garderoberi',
      images: [
        '/images/garderoberi/slika1.jpg',
        '/images/garderoberi/slika2.jpg',
        '/images/garderoberi/slika3.JPG',
        '/images/garderoberi/slika4.jpg',
        '/images/garderoberi/slika5.JPG',
        '/images/garderoberi/slika6.JPG',
        '/images/garderoberi/slika7.JPG',
        '/images/garderoberi/slika8.JPG',
        '/images/garderoberi/slika9.jpg',
        '/images/garderoberi/slika10.jpg',
        '/images/garderoberi/slika11.jpg',
        '/images/garderoberi/slika12.jpg',
        '/images/garderoberi/slika13.JPG',
        '/images/garderoberi/slika14.JPG',
        '/images/garderoberi/slika15.JPG',
        '/images/garderoberi/slika16.JPG',
        '/images/garderoberi/slika17.JPG',
        '/images/garderoberi/slika18.JPG',
        '/images/garderoberi/slika19.JPG',
        '/images/garderoberi/slika20.JPG',
        '/images/garderoberi/slika21.JPG',
        '/images/garderoberi/slika22.JPG',
        '/images/garderoberi/slika23.JPG'
      ],
      descriptions: [
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

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
            <p className=" text-xl text-brand-800">
            U galeriji možete pogledati primere naših projekata.</p>
            <p className=" text-xl text-brand-800">
            Verujemo da će vam naši radovi pomoći da se inspirišete i odlučite na koji način želite da transformišete svoj prostor.
            </p>
          </motion.div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full  text-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-brand-900 text-white'
                    : 'bg-brand-100 text-brand-800 hover:bg-brand-200'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group relative cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={`${project.images[0]}?auto=format&fit=crop&w=800&q=80`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-brand-950/60 flex items-end p-6 rounded-lg"
                >
                  <div>
                    <h3 className=" text-white text-xl mb-2">{project.title}</h3>
                    <p className=" text-white/80 text-sm">
                      {categories.find(c => c.id === project.category)?.name}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white hover:text-brand-200 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="w-full max-w-6xl">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  prevEl: '.swiper-button-prev',
                  nextEl: '.swiper-button-next',
                }}
                pagination={{ clickable: true }}
                loop={true}
                className="relative"
              >
                {selectedProject.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <div className="aspect-[16/9]">
                      <img
                        src={`${image}?auto=format&fit=crop&w=1600&q=80`}
                        alt={selectedProject.descriptions[index]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center py-4">
                      <p className=" text-white text-lg">
                        {selectedProject.descriptions[index]}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
                <button className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-brand-200 transition-colors">
                  <ChevronLeft className="h-8 w-8" />
                </button>
                <button className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-brand-200 transition-colors">
                  <ChevronRight className="h-8 w-8" />
                </button>
              </Swiper>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-16"
      >
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-8 py-3 bg-brand-900 text-white  text-lg hover:bg-brand-800 transition-colors rounded-lg"
        >
          Započnite Vaš Projekat
        </Link>
      </motion.div>
    </motion.main>
  );
};