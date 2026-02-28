import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tentang from './pages/Tentang';
import Kontak from './pages/Kontak';
import Blog from './pages/Blog';
import DetailBlog from './pages/DetailBlog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tentang" element={<Tentang />} />
      <Route path="/kontak" element={<Kontak />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/:tipe/:slug" element={<DetailBlog />} />
    </Routes>
  );
}

export default App;