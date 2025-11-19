import React from 'react';
import { Location } from '@/types';

interface LocationCardProps {
  location: Location;
  isSelected: boolean;
  onSelect: () => void;
}

const LocationCard: React.FC<LocationCardProps> = ({
  location,
  isSelected,
  onSelect
}) => {
  return (
    <button
      onClick={onSelect}
      className={`w-full text-left p-4 rounded-xl transition-all ${
        isSelected
          ? `bg-${location.color}-500 text-white shadow-lg scale-105`
          : 'bg-white hover:bg-gray-50 hover:shadow-md border border-gray-200'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className={`text-3xl flex-shrink-0 ${isSelected ? '' : 'opacity-80'}`}>
          {location.image}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold mb-1 ${isSelected ? 'text-white' : 'text-gray-800'}`}>
            {location.name}
          </h3>
          <p className={`text-xs line-clamp-2 ${isSelected ? 'text-white/90' : 'text-gray-600'}`}>
            {location.description}
          </p>
        </div>
      </div>
    </button>
  );
};

export default LocationCard;
