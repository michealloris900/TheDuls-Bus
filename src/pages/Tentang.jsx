import React from 'react';
import Navbar from '../components/Navbar';
import FloatingWA from '../components/FloatingWA';
import Footer from '../components/Footer';

const Tentang = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      {/* Hero Tentang */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
            TENTANG <span className="text-blue-600">KAMI</span>
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Mitra perjalanan terpercaya Anda sejak 2010
          </p>
        </div>
      </section>

      {/* Sejarah Perusahaan */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Tim TheDuls"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Perjalanan Kami</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                TheDuls Travel didirikan pada tahun 2010 dengan visi menjadi penyedia layanan transportasi pariwisata terdepan di Indonesia. Berawal dari 3 unit bus, kini kami telah berkembang memiliki lebih dari 50 armada yang tersebar di berbagai kota.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Selama 15 tahun, kami telah melayani lebih dari 10.000 pelanggan, mulai dari wisata keluarga, corporate gathering, hingga tur mancanegara.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Armada</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10k+</div>
                  <div className="text-gray-600">Pelanggan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-3xl mr-2">🎯</span> Visi Kami
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Menjadi perusahaan transportasi pariwisata terdepan yang memberikan pengalaman perjalanan tak terlupakan dengan standar keselamatan dan kenyamanan tertinggi.
              </p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-3xl mr-2">⭐</span> Misi Kami
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Menyediakan armada berkualitas dengan perawatan rutin
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Mengutamakan keselamatan dan kenyamanan penumpang
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Memberikan pelayanan profesional dan ramah
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  Terus berinovasi dalam layanan pariwisata
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWA />
    </div>
  );
};

export default Tentang;