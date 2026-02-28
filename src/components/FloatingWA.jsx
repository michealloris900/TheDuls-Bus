import React from 'react';

const FloatingWA = () => {
  return (
    <a 
      href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20sewa%20bus"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all hover:scale-110 z-50"
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </a>
  );
};

export default FloatingWA;