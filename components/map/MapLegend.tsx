import React from 'react';
import { MapPin } from 'lucide-react';

interface MapLegendProps {
  showRoute?: boolean;
}

const MapLegend: React.FC<MapLegendProps> = ({ showRoute = false }) => {
  return (
    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
      <h4 className="font-semibold text-gray-800 mb-3 text-sm flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        คำอธิบายแผนที่
      </h4>
      <div className="space-y-2 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-gray-700">อาคารเรียน (2)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-700">บริการนักศึกษา (4)</span>
        </div>
        {showRoute && (
          <div className="flex items-center gap-2 pt-2 border-t border-gray-200">
            <div className="w-8 h-0.5 bg-emerald-500" style={{ borderStyle: 'dashed' }}></div>
            <span className="text-gray-700">เส้นทางแนะนำ</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapLegend;