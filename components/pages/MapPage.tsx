'use client';

import React, { useState } from 'react';
import MapHeader from '@/components/map/MapHeader';
import MapSidebar from '@/components/map/MapSidebar';
import MapView from '@/components/map/MapView';
import { Location } from '@/types';
import { locations, categories, suggestedRoute } from '@/data/campusData';

interface MapPageProps {
  onBack: () => void;
}

const MapPage: React.FC<MapPageProps> = ({ onBack }) => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showRoute, setShowRoute] = useState<boolean>(true);

  const filteredLocations = selectedCategory === 'all' 
    ? locations 
    : locations.filter((loc: Location) => loc.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-emerald-50">
      <MapHeader onBack={onBack} />

      <div className="max-w-7xl mx-auto p-4 md:p-6">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            <MapSidebar
              categories={categories}
              locations={filteredLocations}
              selectedCategory={selectedCategory}
              selectedLocation={selectedLocation}
              showRoute={showRoute}
              suggestedRoute={suggestedRoute}
              onCategoryChange={setSelectedCategory}
              onLocationSelect={setSelectedLocation}
              onRouteToggle={setShowRoute}
            />
            
            <MapView
              locations={locations}
              selectedLocation={selectedLocation}
              showRoute={showRoute}
              suggestedRoute={suggestedRoute}
              onLocationClose={() => setSelectedLocation(null)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
