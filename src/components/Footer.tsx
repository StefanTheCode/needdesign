import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-brand-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <img src="/logo.png" alt="NEED Design" className="h-16 mx-auto mb-8" />
          <div className="space-y-2 mb-8">
            <p>Nade Naumović 9</p>
            <p>11010 Beograd</p>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} NEED Design. Sva prava zadržana.
          </p>
        </div>
      </div>
    </footer>
  );
};