import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ item, tipe }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <Link to={`/${tipe}/${item.slug}`} className="block">
        {/* Gambar */}
        <div className="relative overflow-hidden h-48">
          <img 
            src={item.gambar} 
            alt={item.judul}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Badge Kategori */}
          <span className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {item.kategori}
          </span>
          {tipe === 'artikel' && item.waktuBaca && (
            <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {item.waktuBaca} min
            </span>
          )}
        </div>

        {/* Konten */}
        <div className="p-5">
          <div className="flex items-center text-xs text-gray-500 mb-2">
            <span>{item.tanggal}</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {item.views}
            </span>
          </div>

          <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {item.judul}
          </h3>

          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
            {item.cuplikan}
          </p>

          <div className="flex items-center text-blue-600 font-semibold text-sm">
            Baca Selengkapnya
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;