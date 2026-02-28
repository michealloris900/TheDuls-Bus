import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import FloatingWA from '../components/FloatingWA';
import BlogCard from '../components/BlogCard';
import { artikelData, beritaData } from '../data/blogData';
import Footer from '../components/Footer';

const Blog = () => {
  const [activeTab, setActiveTab] = useState('semua');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedKategori, setSelectedKategori] = useState('semua');

  // Gabungkan semua data
  const semuaData = [
    ...artikelData.map(item => ({ ...item, tipe: 'artikel' })),
    ...beritaData.map(item => ({ ...item, tipe: 'berita' }))
  ].sort((a, b) => new Date(b.tanggal) - new Date(a.tanggal));

  // Filter berdasarkan tab, search, dan kategori
  const filteredData = semuaData.filter(item => {
    // Filter tab
    if (activeTab === 'artikel' && item.tipe !== 'artikel') return false;
    if (activeTab === 'berita' && item.tipe !== 'berita') return false;
    
    // Filter search
    if (searchTerm && !item.judul.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    
    // Filter kategori
    if (selectedKategori !== 'semua' && item.kategori !== selectedKategori) return false;
    
    return true;
  });

  // Kategori unik untuk filter
  const semuaKategori = ['semua', ...new Set(semuaData.map(item => item.kategori))];

  return (
    <div className="relative min-h-screen" style={{
      background: 'linear-gradient(180deg, #b8e1fc 0%, #d4eafc 30%, #e9f2fa 70%, #f0f7ff 100%)'
    }}>
      {/* Awan bergerak */}
      <div className="cloud cloud-1"></div>
      <div className="cloud cloud-2"></div>
      <div className="cloud cloud-3"></div>
      <div className="cloud cloud-4"></div>
      <div className="cloud cloud-5"></div>
      <div className="cloud-right cloud-right-1"></div>
      <div className="cloud-right cloud-right-2"></div>
      <div className="cloud-right cloud-right-3"></div>

      <div className="relative z-10">
        <Navbar />

        {/* Hero Blog */}
        <section className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
              TheDuls <span className="text-blue-600">Bus</span>
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Artikel dan berita terbaru seputar wisata, tips perjalanan, dan informasi terbaru dari TheDuls Bus
            </p>
          </div>
        </section>

        {/* Search & Filter */}
        <section className="pb-8">
          <div className="container mx-auto px-4">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              {/* Search Bar */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Cari artikel atau berita..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-5 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80"
                />
                <svg className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => setActiveTab('semua')}
                  className={`px-5 py-2 rounded-full font-medium transition-all ${
                    activeTab === 'semua'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  Semua
                </button>
                <button
                  onClick={() => setActiveTab('artikel')}
                  className={`px-5 py-2 rounded-full font-medium transition-all ${
                    activeTab === 'artikel'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  Artikel
                </button>
                <button
                  onClick={() => setActiveTab('berita')}
                  className={`px-5 py-2 rounded-full font-medium transition-all ${
                    activeTab === 'berita'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  Berita
                </button>
              </div>

              {/* Filter Kategori */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-600 mr-2">Kategori:</span>
                {semuaKategori.map(kategori => (
                  <button
                    key={kategori}
                    onClick={() => setSelectedKategori(kategori)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      selectedKategori === kategori
                        ? 'bg-blue-100 text-blue-700 border border-blue-300'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {kategori === 'semua' ? 'Semua' : kategori}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            {filteredData.length === 0 ? (
              <div className="text-center py-16">
                <svg className="w-20 h-20 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-500">Tidak ada artikel atau berita yang ditemukan</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredData.map(item => (
                  <BlogCard 
                    key={`${item.tipe}-${item.id}`} 
                    item={item} 
                    tipe={item.tipe} 
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Pagination (Sederhana) */}
        {filteredData.length > 6 && (
          <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="flex justify-center gap-2">
                <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blue-50 transition">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-blue-600 text-white shadow-md flex items-center justify-center">1</button>
                <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blue-50 transition">2</button>
                <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blue-50 transition">3</button>
                <button className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blue-50 transition">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        )}

<Footer />
        <FloatingWA />
      </div>
    </div>
  );
};

export default Blog;