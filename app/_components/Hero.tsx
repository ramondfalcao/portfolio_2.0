// Loading.js

import Image from 'next/image';
import React from 'react';
import logo from '@/public/assets/logo_ramond_falcao.svg';
import logoBlack from '@/public/assets/logo_ramond_falcao_black.svg';

const Hero = () => {
  return (
    <div className="top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div>
          <Image
            src={logo} // Coloque o caminho para a sua imagem/logo
            alt="Logo"
            width={200}  // Ajuste o tamanho conforme necessário
            height={1501}  // Ajuste o tamanho conforme necessário
          />
        </div>
        <nav className="flex items-center text-slate-50 space-x-6">
          <a href="/" className=" hover:text-gray-600">Home</a>
          <a href="/about" className=" hover:text-gray-600">About</a>
          <a href="/projects" className=" hover:text-gray-600">Projects</a>
        </nav>

        <button 
            onClick={() => window.location.href = '/contact'}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Get In Touch
          </button>
      </div>
    </div>
  );
};

export default Hero;
