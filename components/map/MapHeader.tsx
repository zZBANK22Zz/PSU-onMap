import React from 'react';
import { GraduationCap } from 'lucide-react';

interface MapHeaderProps {
  onBack: () => void;
}

const MapHeader: React.FC<MapHeaderProps> = ({ onBack }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">PSU Phuket</h1>
            <p className="text-xs text-gray-500 hidden md:block">Virtual Campus Tour</p>
          </div>
        </div>
        <button
          onClick={onBack}
          className="text-gray-600 hover:text-gray-800 transition-colors text-sm md:text-base px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          ← Back
        </button>
      </div>
    </header>
  );
};

export default MapHeader;