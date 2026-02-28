import React, { useState } from 'react';
import ModalDetailPaket from './ModalDetailPaket';
import WAFormModal from './WAFormModal';

const PaketCard = ({ paket }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [showWAForm, setShowWAForm] = useState(false);

  const formatHarga = (harga) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(harga);
  };

  // Ikon untuk include items
  const getIcon = (item) => {
    if (item.includes('Bus')) return '🚌';
    if (item.includes('Hotel')) return '🏨';
    if (item.includes('Guide')) return '👨‍🏫';
    if (item.includes('Makan')) return '🍽️';
    if (item.includes('Tiket')) return '🎫';
    if (item.includes('Jeep')) return '🚙';
    if (item.includes('Tour')) return '🗺️';
    return '✓';
  };

  // Handle klik detail button
  const handleDetailClick = (e) => {
    e.stopPropagation();
    setShowDetail(true);
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

    const pesan = `Halo, saya *${formData.nama}* ingin memesan *${paket.nama}* ke *${paket.tujuan}*

📅 Rencana Tanggal: *${tanggalFormatted}*

*DETAIL PAKET:*
• Durasi: ${paket.durasi}
• Hotel: ${paket.hotel}
• Armada: ${paket.armada}
• Harga: ${formatHarga(paket.harga)}/group
• Include: ${paket.include.slice(0,4).join(', ')} dll.

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

        {/* Badge Durasi */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg shadow-blue-200/50 flex items-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse mr-1.5"></span>
            {paket.durasi}
          </span>
        </div>

        {/* Badge Rating */}
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-white/95 backdrop-blur-sm text-blue-600 px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg flex items-center border border-blue-100">
            <svg className="w-4 h-4 mr-1.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
            {paket.rating} • {paket.totalUlasan}
          </span>
        </div>

        {/* Image Container */}
        <div className="relative overflow-hidden h-48 md:h-56">
          <img 
            src={paket.foto} 
            alt={paket.nama}
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
                {paket.nama}
              </h3>
              <p className="text-xs text-blue-400 mt-0.5 flex items-center">
                <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="truncate">{paket.tujuan}</span>
              </p>
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
          
          {/* Info Penting */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm">
              <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l14-7 14 7z" />
              </svg>
              <span className="text-gray-600 truncate">Hotel: <span className="font-semibold text-gray-800">{paket.hotel}</span></span>
            </div>
            <div className="flex items-center text-sm">
              <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-600 truncate">Armada: <span className="font-semibold text-gray-800">{paket.armada}</span></span>
            </div>
          </div>

          {/* Include Icons */}
          <div className="mb-4">
            <p className="text-xs text-blue-400 mb-2">Termasuk:</p>
            <div className="flex flex-wrap gap-2">
              {paket.include.slice(0, 4).map((item, index) => (
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
              {paket.include.length > 4 && (
                <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-600 rounded-xl text-sm font-medium border-2 border-white shadow-sm">
                  +{paket.include.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Harga */}
          <div className="flex items-center justify-between mb-4 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 p-3 rounded-2xl">
            <div className="min-w-0 flex-1">
              <p className="text-xs text-blue-400 mb-0.5">Harga spesial grup</p>
              <p className="text-xl md:text-2xl font-bold text-blue-600 truncate">
                {formatHarga(paket.harga)}
                <span className="text-xs md:text-sm font-normal text-gray-400 ml-1">/group</span>
              </p>
            </div>
            <div className="text-right flex-shrink-0 ml-2">
              <span className="text-[10px] md:text-xs bg-white px-2 md:px-3 py-1 md:py-1.5 rounded-full text-blue-600 font-medium shadow-sm border border-blue-100 whitespace-nowrap">
                {paket.kapasitasGroup || "up to 50 org"}
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
                  {paket.deskripsi || `Paket wisata ${paket.tujuan} selama ${paket.durasi.toLowerCase()} dengan akomodasi hotel ${paket.hotel} dan armada ${paket.armada}.`}
                </p>
                <p className="text-xs text-blue-600 mt-2">
                  👆 Klik tombol Detail untuk lihat itinerary lengkap
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

      {/* Modal Detail Paket */}
      {showDetail && (
        <ModalDetailPaket 
          paket={paket} 
          onClose={() => setShowDetail(false)} 
        />
      )}

      {/* WA Form Modal */}
      <WAFormModal
        isVisible={showWAForm}
        onClose={() => setShowWAForm(false)}
        item={paket}
        tipe="paket"
        onSubmit={handleWASubmit}
      />
    </>
  );
};

export default PaketCard;