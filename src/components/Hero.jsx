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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Bubbles */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}></div>
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
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
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
              <span className="relative inline-block">
                <span className="text-gray-800">Terpercaya Anda</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-200 -z-10 animate-width origin-left"></span>
              </span>
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
                className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center">
                  ✨ Lihat Armada
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              </a>
              
              <a 
                href="/kontak" 
                className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
              >
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hubungi Kami
                </span>
              </a>
            </div>

            {/* Stats */}
            <div 
              className={`grid grid-cols-3 gap-8 pt-8 transition-all duration-700 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform">500+</div>
                <div className="text-sm text-gray-500">Pelanggan Puas</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform">50+</div>
                <div className="text-sm text-gray-500">Armada</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform">15+</div>
                <div className="text-sm text-gray-500">Tahun</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image with floating cards (24/7 Support dan Rating Badge tetap ada) */}
          <div 
            className={`lg:w-1/2 relative mt-12 lg:mt-0 transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-20 opacity-0 scale-95'
            }`}
          >
            {/* Main Image */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="TheDuls Bus Pariwisata"
                  className="rounded-3xl shadow-2xl w-full transform group-hover:scale-[1.02] transition-transform duration-700"
                />
                
                

                <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 animate-float animation-delay-2000">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">24/7 Support</p>
                      <p className="font-bold">Siaga</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rating Badge - TETAP ADA */}
            <div className="absolute -bottom-4 right-12 bg-white rounded-full shadow-xl px-4 py-2 animate-float animation-delay-1000">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[1,2,3,4,5].map(star => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold">4.9 (1.2k reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add global styles for animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-width {
          animation: width 1s ease-out forwards;
        }
        
        @keyframes width {
          0% { width: 0; }
          100% { width: 100%; }
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Hero;