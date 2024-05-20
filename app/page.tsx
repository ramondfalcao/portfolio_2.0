'use client'

import React, { useState, useEffect } from 'react';
import Loading from '@/app/_components/Loading';
import { Progress } from '@/components/ui/progress';
import Header from './_components/Header';

const Home = () => {
  const [progress, setProgress] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProgress(55);
      setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setProgress(100);
          setLoading(false);
        }, 800);
      }, 800);
    }, 800);
  }, []);

  return (
    <main className='main-container w-full h-full relative'>
      {/* {loading ? (
        <div className='flex items-center justify-center w-full min-h-screen'>
          <Progress value={progress} className="w-[40%]" />
        </div>
      ) : ( */}
        <div>
          <Header />
          <div>
            <h1>Página principal</h1>
            <p>Bem-vindo à minha página Next.js!</p>
          </div>
        </div>
      {/* )} */}
    </main>
  );
};

export default Home;
