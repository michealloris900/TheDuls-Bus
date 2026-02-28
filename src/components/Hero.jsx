import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="beranda" 
      className="relative pt-20 min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
    >
      {/* Background Elements - Tanpa Animasi */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background blur - static */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative container mx-auto px-4 h-full">
        <div className="flex flex-col lg:flex-row items-center min-h-[calc(100vh-80px)] py-12 lg:py-0">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8 z-10">
            {/* Badge */}
            <div 
              className={`inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-blue-100 transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span className="text-sm font-medium text-gray-700">#1 Bus Pariwisata Terpercaya</span>
            </div>

            {/* Main Heading */}
            <h1 
              className={`text-4xl lg:text-6xl font-bold leading-tight transition-all duration-700 delay-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                TheDuls Bus
              </span>
              <br />
              <span className="text-gray-800">Partner Perjalanan</span>
              <br />
              <span className="text-gray-800">Terpercaya Anda</span>
            </h1>

            {/* Description */}
            <p 
              className={`text-lg text-gray-600 max-w-lg leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              Bus pariwisata premium dengan armada terawat & sopir profesional. 
              Siap antar Anda ke destinasi impian dengan aman dan nyaman.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <a 
                href="#armada" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl"
              >
                <span className="flex items-center">
                  ✨ Lihat Armada
                </span>
              </a>
              
              <a 
                href="/kontak" 
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-50 shadow-lg flex items-center"
              >
                <span className="flex items-center">
                  📞 Hubungi Kami
                </span>
              </a>
            </div>

            {/* Stats */}
            <div 
              className={`grid grid-cols-3 gap-8 pt-8 transition-all duration-700 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-500">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-500">Armada</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-gray-500">Tahun</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image Only */}
          <div 
            className={`lg:w-1/2 relative mt-12 lg:mt-0 transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=70&auto=format" 
                alt="TheDuls Bus Pariwisata"
                className="rounded-3xl shadow-2xl w-full"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;