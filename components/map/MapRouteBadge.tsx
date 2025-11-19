import React from 'react';
import { Navigation } from 'lucide-react';
import { SuggestedRoute } from '@/types';

interface MapRouteBadgeProps {
  suggestedRoute: SuggestedRoute;
}

const MapRouteBadge: React.FC<MapRouteBadgeProps> = ({ suggestedRoute }) => {
  return (
    <div className="absolute top-4 right-4 bg-emerald-500 text-white rounded-xl p-3 shadow-lg">
      <div className="flex items-center gap-2 mb-1">
        <Navigation className="w-4 h-4" />
        <span className="font-semibold text-sm">Campus Tour Active</span>
      </div>
      <p className="text-xs opacity-90">{suggestedRoute.duration} • {suggestedRoute.distance}</p>
    </div>
  );
};

export default MapRouteBadge;