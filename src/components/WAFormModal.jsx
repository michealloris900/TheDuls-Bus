import React, { useState } from 'react';

const WAFormModal = ({ isVisible, onClose, item, tipe, onSubmit }) => {
  const [formData, setFormData] = useState({
    nama: '',
    tanggal: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  if (!isVisible) return null;

  // Format tanggal untuk display
  const formatTanggal = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-all duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-md w-full transform transition-all duration-500 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 rounded-t-3xl">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-white">Konfirmasi Pemesanan</h3>
            <button 
              onClick={onClose}
              className="text-white/80 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-blue-100 text-sm mt-1">
            {tipe === 'paket' ? item?.nama : item?.nama}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Nama Lengkap */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nama Lengkap <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              required
              placeholder="Masukkan nama Anda"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Rencana Tanggal - DATE PICKER */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rencana Tanggal <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="tanggal"
              value={formData.tanggal}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]} // Minimal hari ini
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formData.tanggal && (
              <p className="text-xs text-gray-500 mt-1">
                Tanggal dipilih: {formatTanggal(formData.tanggal)}
              </p>
            )}
          </div>

          {/* Informasi Data yang akan dikirim */}
          <div className="bg-blue-50 p-4 rounded-xl">
            <p className="text-xs text-blue-600 font-semibold mb-2">Ringkasan Pemesanan:</p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Nama:</span> {formData.nama || 'Belum diisi'}<br/>
              <span className="font-medium">Tanggal:</span> {formData.tanggal ? formatTanggal(formData.tanggal) : 'Belum diisi'}<br/>
              <span className="font-medium">{tipe === 'paket' ? 'Paket:' : 'Armada:'}</span> {item?.nama}<br/>
              {tipe === 'paket' ? (
                <><span className="font-medium">Tujuan:</span> {item?.tujuan}</>
              ) : (
                <><span className="font-medium">Tipe:</span> {item?.tipe}</>
              )}
            </p>
          </div>

          {/* Tombol Aksi */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              Batal
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-xl font-semibold hover:shadow-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.355.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.087.289.072.39-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087.159.058 1.003.473 1.175.559.172.086.287.13.332.202.043.072.043.419-.101.824z"/>
              </svg>
              Lanjut ke WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WAFormModal;