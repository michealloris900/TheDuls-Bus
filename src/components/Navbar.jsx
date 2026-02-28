import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Deteksi scroll untuk mengubah background navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tutup mobile menu ketika klik link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Fungsi untuk handle klik link home
  const handleHomeClick = (e, sectionId) => {
    if (isHomePage) {
      // Jika di home, scroll ke section
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Jika tidak di home, Link akan membawa ke /#sectionId
    handleLinkClick();
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-gradient-to-r from-blue-50/90 to-indigo-50/90 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          
          {/* Logo dengan animasi - Link ke home */}
          <Link 
  to="/" 
  className="flex items-center group"
  onClick={handleLinkClick}
>
  <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105">
    TheDuls<span className="text-gray-800 group-hover:text-blue-600 transition-colors">Bus</span>
  </span>
</Link>

          {/* Menu Desktop - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Beranda - Link ke home dengan scroll jika di home */}
            {isHomePage ? (
              <a
                href="#beranda"
                onClick={(e) => handleHomeClick(e, 'beranda')}
                className="relative px-4 py-2 text-gray-700 font-medium group overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                  Beranda
                </span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
                <span className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-0"></span>
              </a>
            ) : (
              <Link
                to="/#beranda"
                className="relative px-4 py-2 text-gray-700 font-medium group overflow-hidden"
                onClick={handleLinkClick}
              >
                <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                  Beranda
                </span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
                <span className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-0"></span>
              </Link>
            )}

            {/* Armada - Link ke home dengan scroll ke section armada */}
            {isHomePage ? (
              <a
                href="#armada"
                onClick={(e) => handleHomeClick(e, 'armada')}
                className="relative px-4 py-2 text-gray-700 font-medium group overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                  Armada
                </span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
                <span className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-0"></span>
              </a>
            ) : (
              <Link
                to="/#armada"
                className="relative px-4 py-2 text-gray-700 font-medium group overflow-hidden"
                onClick={handleLinkClick}
              >
                <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                  Armada
                </span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
                <span className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-0"></span>
              </Link>
            )}

            {/* Paket Wisata - Link ke home dengan scroll ke section paket */}
            {isHomePage ? (
              <a
                href="#paket"
                onClick={(e) => handleHomeClick(e, 'paket')}
                className="relative px-4 py-2 text-gray-700 font-medium group overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                  Paket Wisata
                </span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
                <span className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-0"></span>
              </a>
            ) : (
              <Link
                to="/#paket"
                className="relative px-4 py-2 text-gray-700 font-medium group overflow-hidden"
                onClick={handleLinkClick}
              >
                <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                  Paket Wisata
                </span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
                <span className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-0"></span>
              </Link>
            )}
            <Link
  to="/blog"
  className="relative px-4 py-2 text-gray-700 font-medium group overflow-hidden"
  onClick={handleLinkClick}
>
  <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
    Blog
  </span>
  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
  <span className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-0"></span>
</Link>

            {/* Tentang Kami - Link ke halaman terpisah */}
            <Link
              to="/tentang"
              className="relative px-4 py-2 text-gray-700 font-medium group overflow-hidden"
              onClick={handleLinkClick}
            >
              <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                Tentang Kami
              </span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
              <span className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-0"></span>
            </Link>

            {/* Kontak - Link ke halaman terpisah */}
            <Link
              to="/kontak"
              className="relative px-4 py-2 text-gray-700 font-medium group overflow-hidden"
              onClick={handleLinkClick}
            >
              <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">
                Kontak
              </span>
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out"></span>
              <span className="absolute inset-0 bg-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg -z-0"></span>
            </Link>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Link
              to="/kontak"
              className="relative bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2.5 rounded-full font-semibold overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">Hubungi Kami</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              <span className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine"></span>
            </Link>
          </div>

          {/* Mobile Menu Button dengan animasi hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 focus:outline-none bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className={`w-6 h-0.5 bg-blue-600 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-blue-600 mt-1.5 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-blue-600 mt-1.5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu dengan animasi slide down */}
        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl py-4 px-2 border border-blue-100">
            {/* Beranda */}
            {isHomePage ? (
              <a
                href="#beranda"
                onClick={(e) => handleHomeClick(e, 'beranda')}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-2"
                style={{
                  animation: isOpen ? `slideIn 0.3s ease-out 0s both` : 'none'
                }}
              >
                <span className="flex items-center">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
                  Beranda
                </span>
              </a>
            ) : (
              <Link
                to="/#beranda"
                onClick={handleLinkClick}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-2"
                style={{
                  animation: isOpen ? `slideIn 0.3s ease-out 0s both` : 'none'
                }}
              >
                <span className="flex items-center">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
                  Beranda
                </span>
              </Link>
            )}

            {/* Armada */}
            {isHomePage ? (
              <a
                href="#armada"
                onClick={(e) => handleHomeClick(e, 'armada')}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-2"
                style={{
                  animation: isOpen ? `slideIn 0.3s ease-out 0.1s both` : 'none'
                }}
              >
                <span className="flex items-center">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
                  Armada
                </span>
              </a>
            ) : (
              <Link
                to="/#armada"
                onClick={handleLinkClick}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-2"
                style={{
                  animation: isOpen ? `slideIn 0.3s ease-out 0.1s both` : 'none'
                }}
              >
                <span className="flex items-center">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
                  Armada
                </span>
              </Link>
            )}

            {/* Paket Wisata */}
            {isHomePage ? (
              <a
                href="#paket"
                onClick={(e) => handleHomeClick(e, 'paket')}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-2"
                style={{
                  animation: isOpen ? `slideIn 0.3s ease-out 0.2s both` : 'none'
                }}
              >
                <span className="flex items-center">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
                  Paket Wisata
                </span>
              </a>
            ) : (
              <Link
                to="/#paket"
                onClick={handleLinkClick}
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-2"
                style={{
                  animation: isOpen ? `slideIn 0.3s ease-out 0.2s both` : 'none'
                }}
              >
                <span className="flex items-center">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
                  Paket Wisata
                </span>
              </Link>
            )}

<Link
  to="/blog"
  onClick={handleLinkClick}
  className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-2"
  style={{
    animation: isOpen ? `slideIn 0.3s ease-out 0.25s both` : 'none'
  }}
>
  <span className="flex items-center">
    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
    Blog
  </span>
</Link>

            {/* Tentang Kami */}
            <Link
              to="/tentang"
              onClick={handleLinkClick}
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-2"
              style={{
                animation: isOpen ? `slideIn 0.3s ease-out 0.3s both` : 'none'
              }}
            >
              <span className="flex items-center">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
                Tentang Kami
              </span>
            </Link>

            {/* Kontak */}
            <Link
              to="/kontak"
              onClick={handleLinkClick}
              className="block px-4 py-3 text-gray-700 hover:text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-2"
              style={{
                animation: isOpen ? `slideIn 0.3s ease-out 0.4s both` : 'none'
              }}
            >
              <span className="flex items-center">
                <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
                Kontak
              </span>
            </Link>
            
            {/* CTA Button Mobile */}
            <div className="px-4 mt-4 pt-4 border-t border-blue-100">
              <Link
                to="/kontak"
                onClick={handleLinkClick}
                className="block w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center px-4 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animasi keyframes */}
      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes shine {
          100% {
            left: 200%;
          }
        }
        
        .animate-shine {
          animation: shine 1.5s infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;