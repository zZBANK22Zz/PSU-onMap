import React from 'react';
import { MapPin } from 'lucide-react';

const MapLegend: React.FC = () => {
  return (
    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
      <h4 className="font-semibold text-gray-800 mb-3 text-sm flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        Map Legend
      </h4>
      <div className="space-y-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-gray-700">Academic Buildings (2)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-700">Student Services (4)</span>
        </div>
      </div>
    </div>
  );
};

export default MapLegend;