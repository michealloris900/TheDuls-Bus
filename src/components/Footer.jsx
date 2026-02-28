import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const tahunSekarang = new Date().getFullYear();

  return (
    <footer className="bg-gray-800/90 backdrop-blur-sm text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
<div>
  <h3 className="text-xl font-bold mb-4">
    <span className="text-blue-400">TheDuls</span>Bus
  </h3>
  <p className="text-gray-300 text-sm leading-relaxed">
    Penyedia layanan bus pariwisata premium dengan armada terawat dan sopir profesional.
  </p>
</div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition">Beranda</Link>
              </li>
              <li>
                <Link to="/#armada" className="text-gray-300 hover:text-white transition">Armada</Link>
              </li>
              <li>
                <Link to="/#paket" className="text-gray-300 hover:text-white transition">Paket Wisata</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold mb-4">Informasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/tentang" className="text-gray-300 hover:text-white transition">Tentang Kami</Link>
              </li>
              <li>
                <Link to="/kontak" className="text-gray-300 hover:text-white transition">Kontak</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Jl. Wisata No. 123, Jakarta</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">info@TheDuls.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {tahunSekarang} Create by DulsInspirations. Semua Hak Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;