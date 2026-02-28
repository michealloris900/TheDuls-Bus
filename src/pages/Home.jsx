import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ArmadaCard from '../components/ArmadaCard';
import PaketCard from '../components/PaketCard';
import BlogCard from '../components/BlogCard';
import Footer from '../components/Footer'; // Import Footer
import FloatingWA from '../components/FloatingWA';
import { armadaData } from '../data/armadaData';
import { paketData } from '../data/paketData';
import { artikelData, beritaData } from '../data/blogData';

const Home = () => {
  // Ambil 1 artikel terbaru dan 1 berita terbaru
  const artikelTerbaru = artikelData[0];
  const beritaTerbaru = beritaData[0];

  return (
    <div className="relative min-h-screen" style={{
      background: 'linear-gradient(180deg, #b8e1fc 0%, #d4eafc 30%, #e9f2fa 70%, #f0f7ff 100%)'
    }}>


      <div className="relative z-10">
        <Navbar />
        <Hero />
        
        {/* Armada Section */}
        <section id="armada" className="container mx-auto px-4 py-16 scroll-mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">ARMADA KAMI</h2>
          <p className="text-center text-gray-600 mb-12">Pilih armada sesuai kebutuhan perjalanan Anda</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {armadaData.map(armada => (
              <ArmadaCard key={armada.id} armada={armada} />
            ))}
          </div>
        </section>

        {/* Paket Wisata Section */}
        <section id="paket" className="container mx-auto px-4 py-16 scroll-mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">PAKET WISATA POPULER</h2>
          <p className="text-center text-gray-600 mb-12">Liburan seru dengan paket all-include hemat</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paketData.map(paket => (
              <PaketCard key={paket.id} paket={paket} />
            ))}
          </div>
        </section>

        {/* Blog Section - 1 Artikel & 1 Berita */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">ARTIKEL & BERITA</h2>
              <p className="text-gray-600">Informasi terbaru seputar wisata dan layanan TheDuls Bus</p>
            </div>
            <Link 
              to="/blog" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg flex items-center gap-2 group"
            >
              <span>Lihat Semua</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Artikel Terbaru */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="w-1.5 h-6 bg-blue-600 rounded-full mr-3"></span>
                <h3 className="text-xl font-semibold text-gray-800">Artikel Terbaru</h3>
                <span className="ml-auto bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                  {artikelTerbaru.kategori}
                </span>
              </div>
              <BlogCard item={artikelTerbaru} tipe="artikel" />
            </div>

            {/* Berita Terbaru */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <span className="w-1.5 h-6 bg-green-600 rounded-full mr-3"></span>
                <h3 className="text-xl font-semibold text-gray-800">Berita Terbaru</h3>
                <span className="ml-auto bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                  {beritaTerbaru.kategori}
                </span>
              </div>
              <BlogCard item={beritaTerbaru} tipe="berita" />
            </div>
          </div>

          {/* Banner Promo */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-16 -mb-16"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Ikuti Blog Kami!</h3>
                <p className="text-blue-100">Dapatkan informasi terbaru, tips wisata, dan promo spesial</p>
              </div>
              <Link 
                to="/blog" 
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Kunjungi Blog →
              </Link>
            </div>
          </div>
        </section>

        <Footer />
        <FloatingWA />
      </div>
    </div>
  );
};

export default Home;