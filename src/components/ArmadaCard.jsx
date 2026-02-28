import React, { useState } from 'react';
import ModalDetail from './ModalDetail';
import WAFormModal from './WAFormModal';

const ArmadaCard = ({ armada }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showWAForm, setShowWAForm] = useState(false);

  const formatHarga = (harga) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(harga);
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

  // Handle klik detail button
  const handleDetailClick = (e) => {
    e.stopPropagation();
    setShowModal(true);
  };

  // Handle submit form WA
  const handleWASubmit = (formData) => {
    // Format tanggal ke format Indonesia
    const tanggalFormatted = new Date(formData.tanggal).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const pesan = `Halo, saya *${formData.nama}* ingin menyewa *${armada.nama}* (${armada.tipe})

📅 Rencana Tanggal: *${tanggalFormatted}*

*DETAIL ARMADA:*
• Kapasitas: ${armada.kapasitas} Seat
• Harga: ${formatHarga(armada.harga)}/hari
• Plat Nomor: ${armada.plat}
• Rating: ${armada.rating} (${armada.totalUlasan} ulasan)
• Fasilitas: ${armada.spesifikasi.slice(0,5).join(', ')}

Mohon info ketersediaan.
Terima kasih.`;

    const encodedPesan = encodeURIComponent(pesan);
    window.open(`https://wa.me/6281234567890?text=${encodedPesan}`, '_blank');
    setShowWAForm(false);
  };

  return (
    <>
      <div 
        className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-300 ${
          isExpanded ? 'shadow-2xl scale-[1.02] z-10 ring-2 ring-blue-200' : 'shadow-lg hover:shadow-xl'
        }`}
        style={{
          background: 'linear-gradient(145deg, #ffffff, #f8fbff)'
        }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-50 rounded-full -ml-12 -mb-12 opacity-50"></div>

        {/* Badge Tipe Bus */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg shadow-blue-200/50 flex items-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse mr-1.5"></span>
            {armada.tipe}
          </span>
        </div>

        {/* Badge Kapasitas */}
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-white/95 backdrop-blur-sm text-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center border border-blue-100">
            <svg className="w-4 h-4 mr-1.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            {armada.kapasitas} Seat
          </span>
        </div>

        {/* Image Container */}
        <div className="relative overflow-hidden h-48 md:h-56">
          <img 
            src={armada.foto} 
            alt={armada.nama}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          
          {/* Gradient Overlay saat expanded */}
          <div className={`absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-500/20 to-transparent transition-opacity duration-300 ${
            isExpanded ? 'opacity-100' : 'opacity-0'
          }`}></div>
        </div>

        {/* Content */}
        <div className="p-5 relative">
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1 min-w-0 mr-2">
              <h3 className="text-xl font-bold text-gray-800 truncate">
                {armada.nama}
              </h3>
              <div className="flex items-center text-xs text-blue-400 mt-0.5">
                <svg className="w-4 h-4 mr-1 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
                <span>{armada.rating} • {armada.totalUlasan} ulasan</span>
              </div>
            </div>
            
            {/* Expand Icon - HANYA INI YANG BISA EXPAND */}
            <button 
              className={`expand-button w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                isExpanded ? 'rotate-180 bg-blue-100' : ''
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
            >
              <svg className={`w-5 h-5 transition-colors ${isExpanded ? 'text-blue-600' : 'text-blue-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          {/* Spesifikasi Icons */}
          <div className="flex flex-wrap gap-2 mb-4">
            {armada.spesifikasi.slice(0, 4).map((item, index) => (
              <div 
                key={index} 
                className="group/tooltip relative"
                title={item}
              >
                <span className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600 rounded-xl">
                  {getIcon(item)}
                </span>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 shadow-lg">
                  {item}
                </span>
              </div>
            ))}
            {armada.spesifikasi.length > 4 && (
              <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-xl text-sm font-medium border-2 border-white shadow-sm">
                +{armada.spesifikasi.length - 4}
              </span>
            )}
          </div>

          {/* Harga */}
          <div className="flex items-center justify-between mb-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 p-3 rounded-2xl">
            <div className="min-w-0 flex-1">
              <p className="text-xs text-blue-400 mb-0.5">Mulai dari</p>
              <p className="text-xl md:text-2xl font-bold text-blue-600 truncate">
                {formatHarga(armada.harga)}
                <span className="text-xs md:text-sm font-normal text-gray-400 ml-1">/hari</span>
              </p>
            </div>
            <div className="text-right flex-shrink-0 ml-2">
              <span className="text-[10px] md:text-xs bg-white px-2 md:px-3 py-1 md:py-1.5 rounded-full text-blue-600 font-medium shadow-sm border border-blue-100 whitespace-nowrap">
                {armada.plat}
              </span>
            </div>
          </div>

          {/* Expanded Content - Muncul saat tombol panah diklik */}
          <div className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-blue-100 pt-4">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {armada.deskripsi || `Bus ${armada.tipe.toLowerCase()} dengan kapasitas ${armada.kapasitas} seat. Dilengkapi dengan fasilitas premium untuk kenyamanan perjalanan Anda.`}
                </p>
                <p className="text-xs text-blue-600 mt-2">
                  👆 Klik tombol Detail untuk lihat semua fasilitas
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mt-4">
            <button 
              onClick={handleDetailClick}
              className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Detail
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowWAForm(true);
              }}
              className="flex-1 bg-gradient-to-r from-green-400 to-green-500 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-1 group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.355.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.087.289.072.39-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087.159.058 1.003.473 1.175.559.172.086.287.13.332.202.043.072.043.419-.101.824z"/>
              </svg>
              WA
            </button>
          </div>
        </div>
      </div>

      {/* Modal Detail */}
      {showModal && (
        <ModalDetail 
          armada={armada} 
          onClose={() => setShowModal(false)} 
        />
      )}

      {/* WA Form Modal */}
      <WAFormModal
        isVisible={showWAForm}
        onClose={() => setShowWAForm(false)}
        item={armada}
        tipe="armada"
        onSubmit={handleWASubmit}
      />
    </>
  );
};

export default ArmadaCard;