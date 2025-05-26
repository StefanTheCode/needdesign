import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { path: '/', label: 'Početna' },
    { path: '/services', label: 'Usluge' },
    { path: '/gallery', label: 'Galerija' },
    { path: '/contact', label: 'Kontakt' }
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-100/80 backdrop-blur-sm py-2' : 'bg-transparent py-4'
          }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <motion.img
                src="/logo.png"
                alt="NEED Design"
                className="h-12"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative text-lg transition-colors ${location.pathname === item.path
                      ? 'text-brand-950'
                      : 'text-brand-800 hover:text-brand-950'
                    }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 h-0.5 bg-brand-950 bottom-0"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-brand-800 hover:text-brand-950"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu OUTSIDE container */}
      <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 h-screen w-screen z-50 bg-brand-50 md:hidden flex flex-col px-6 py-8 space-y-6 overflow-y-auto"
    >
      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={() => setIsOpen(false)}
          className="text-lg font-poiret text-brand-900 hover:text-brand-800"
        >
          {item.label}
        </Link>
      ))}
    </motion.div>
  )}
</AnimatePresence>




    </>
  );
};
