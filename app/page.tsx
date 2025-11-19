'use client';

import React, { useState } from 'react';
import WelcomePage from '@/components/pages/WelcomePage';
import MapPage from '@/components/pages/MapPage';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'map'>('welcome');

  return (
    <>
      {currentPage === 'welcome' && (
        <WelcomePage onStart={() => setCurrentPage('map')} />
      )}
      {currentPage === 'map' && (
        <MapPage onBack={() => setCurrentPage('welcome')} />
      )}
    </>
  );
}