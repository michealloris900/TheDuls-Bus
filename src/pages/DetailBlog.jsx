import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FloatingWA from '../components/FloatingWA';
import { artikelData, beritaData } from '../data/blogData';
import Footer from '../components/Footer';


const DetailBlog = () => {
  const { tipe, slug } = useParams();
  const [item, setItem] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    // Cari data berdasarkan tipe dan slug
    const data = tipe === 'artikel' ? artikelData : beritaData;
    const found = data.find(item => item.slug === slug);
    setItem(found);

    // Cari related posts (kategori sama)
    if (found) {
      const related = data
        .filter(item => item.kategori === found.kategori && item.slug !== found.slug)
        .slice(0, 3);
      setRelatedPosts(related);
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [tipe, slug]);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

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

        {/* Hero Detail */}
        <section className="pt-32 pb-8">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 group">
              <svg className="w-5 h-5 mr-1 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Kembali ke Blog
            </Link>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden">
              {/* Gambar */}
              <div className="relative h-96">
                <img 
                  src={item.gambar} 
                  alt={item.judul}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badge */}
                <div className="absolute bottom-6 left-6">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {item.kategori}
                  </span>
                </div>
              </div>

              {/* Meta Info */}
              <div className="p-8">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {item.tanggal}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {item.penulis || 'Tim TheDuls Bus'}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {item.views} views
                  </span>
                  {item.waktuBaca && (
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {item.waktuBaca} menit
                    </span>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  {item.judul}
                </h1>

                {/* Konten HTML */}
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: item.konten }}
                />

                {/* Share Buttons */}
                <div className="border-t border-gray-200 mt-8 pt-8">
                  <p className="text-sm text-gray-600 mb-3">Bagikan artikel ini:</p>
                  <div className="flex gap-2">
                    <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition">
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-8">Artikel Terkait</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map(related => (
                  <div key={related.id} className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                    <Link to={`/${tipe}/${related.slug}`}>
                      <img src={related.gambar} alt={related.judul} className="w-full h-40 object-cover" />
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{related.judul}</h3>
                        <p className="text-xs text-gray-500">{related.tanggal}</p>
                      </div>
                    </Link>
                  </div>
                ))}
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

export default DetailBlog;