// Loading.js

import React from 'react';

const Loading = () => {
  return (
    <div className='flex items-center justify-center w-full min-h-screen'>
      <div className="loading">
        <h2>Carregando...</h2>
        {/* Adicione aqui sua animação de carregamento */}
      </div>
    </div>

  );
};

export default Loading;
