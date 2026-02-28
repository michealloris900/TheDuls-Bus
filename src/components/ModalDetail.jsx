import React, { useEffect, useState } from 'react';

const ModalDetail = ({ armada, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const formatHarga = (harga) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(harga);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  // Ikon untuk spesifikasi
  const getIcon = (spesifikasi) => {
    if (spesifikasi.includes('AC')) return '❄️';
    if (spesifikasi.includes('Toilet')) return '🚽';
    if (spesifikasi.includes('TV')) return '📺';
    if (spesifikasi.includes('Karaoke')) return '🎤';
    if (spesifikasi.includes('Reclining')) return '💺';
    if (spesifikasi.includes('Bagasi')) return '🧳';
    if (spesifikasi.includes('WiFi')) return '📶';
    if (spesifikasi.includes('Audio')) return '🔊';
    if (spesifikasi.includes('Double')) return '🔄';
    return '✓';
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isVisible ? 'bg-black/70 backdrop-blur-sm' : 'bg-black/0 backdrop-blur-0'
      }`}
      onClick={handleClose}
    >
      {/* Modal Content */}
      <div 
        className={`bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-500 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header dengan Image */}
        <div className="relative h-72 md:h-96">
          <img 
            src={armada.foto} 
            alt={armada.nama}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 hover:rotate-90 border border-white/30"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Title di atas image */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {armada.tipe}
              </span>
              <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm">
                {armada.plat}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{armada.nama}</h2>
            <p className="text-blue-100 text-sm mt-2">{armada.deskripsi}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Info Grid - PAKAI DATA DARI ARMADA */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 rounded-xl p-4 text-center hover:bg-blue-100 transition-colors">
              <div className="text-2xl mb-1">👥</div>
              <div className="text-sm text-gray-500">Kapasitas</div>
              <div className="font-bold text-gray-800">{armada.kapasitas} Seat</div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center hover:bg-green-100 transition-colors">
              <div className="text-2xl mb-1">💰</div>
              <div className="text-sm text-gray-500">Harga/Hari</div>
              <div className="font-bold text-green-600">{formatHarga(armada.harga)}</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center hover:bg-purple-100 transition-colors">
              <div className="text-2xl mb-1">⏱️</div>
              <div className="text-sm text-gray-500">Min. Sewa</div>
              <div className="font-bold text-gray-800">{armada.minSewa || "6 Jam"}</div>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 text-center hover:bg-orange-100 transition-colors">
              <div className="text-2xl mb-1">⭐</div>
              <div className="text-sm text-gray-500">Rating</div>
              <div className="font-bold text-gray-800">
                {armada.rating}/5.0 • ({armada.totalUlasan})
              </div>
            </div>
          </div>

          {/* Spesifikasi Lengkap */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="bg-blue-600 w-1 h-6 rounded-full mr-3"></span>
              Spesifikasi Lengkap
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {armada.spesifikasi.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <span className="text-2xl mr-3 group-hover:scale-110 transition-transform">
                    {getIcon(item)}
                  </span>
                  <span className="text-gray-700">{item}</span>
                  <span className="ml-auto text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    ✓
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Fasilitas Unggulan - AMBIL DARI DATA ARMADA */}
          <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">✨ Fasilitas Unggulan</h3>
            <div className="flex flex-wrap gap-3">
              {armada.fasilitasUnggulan && armada.fasilitasUnggulan.map((item, index) => (
                <span 
                  key={index}
                  className="bg-white px-4 py-2 rounded-full shadow-sm text-gray-700 flex items-center hover:shadow-md transition-shadow"
                >
                  <span className="mr-2">{getIcon(item)}</span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Informasi Tambahan */}
          <div className="mb-8 grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500 mb-1">Sopir</p>
              <p className="font-semibold text-gray-800">{armada.sopir || "Termasuk"}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm text-gray-500 mb-1">Bahan Bakar</p>
              <p className="font-semibold text-gray-800">{armada.bahanBakar || "Tidak termasuk"}</p>
            </div>
          </div>

          {/* Harga & CTA */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-gray-500 mb-1">Total Harga per Hari</p>
                <p className="text-4xl font-bold text-blue-600">
                  {formatHarga(armada.harga)}
                  <span className="text-lg font-normal text-gray-500 ml-2">/hari</span>
                </p>
                <p className="text-sm text-gray-500 mt-1">*Belum termasuk bahan bakar & sopir</p>
              </div>
              
              <div className="flex gap-3 w-full md:w-auto">
                <button 
                  onClick={handleClose}
                  className="px-6 py-3 border border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Kembali
                </button>
                <a 
                  href={`https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20${armada.nama}%20(Plat%20${armada.plat})%20untuk%20sewa%20bus`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 md:flex-none bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.355.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.087.289.072.39-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087.159.058 1.003.473 1.175.559.172.086.287.13.332.202.043.072.043.419-.101.824z"/>
                  </svg>
                  Sewa Via WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Catatan */}
          <div className="mt-4 text-xs text-gray-400 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Harga dapat berubah sesuai musim dan durasi sewa
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetail;