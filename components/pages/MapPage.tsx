'use client';

import React from 'react';
import MapHeader from '@/components/map/MapHeader';
import MapView from '@/components/map/MapView';

interface MapPageProps {
  onBack: () => void;
}

const MapPage: React.FC<MapPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-emerald-50">
      <MapHeader onBack={onBack} />

      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <MapView />
        </div>
      </div>
    </div>
  );
};

export default MapPage;
