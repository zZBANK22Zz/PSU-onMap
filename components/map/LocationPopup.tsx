import React from 'react';
import { X, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Location } from '@/types';

interface LocationPopupProps {
  location: Location;
  onClose: () => void;
}

const LocationPopup: React.FC<LocationPopupProps> = ({ location, onClose }) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-2 border-blue-200 max-w-md mx-auto">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{location.image}</span>
          <div className="text-left">
            <h4 className="font-bold text-gray-800 text-lg">{location.name}</h4>
            <span className={`text-xs px-2 py-1 rounded-full bg-${location.color}-100 text-${location.color}-700`}>
              {location.category === 'academic' ? 'Academic' : 'Service'}
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      <p className="text-sm text-gray-600 mb-4 text-left">
        {location.description}
      </p>
      
      <div className="space-y-2 text-left">
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <Clock className="w-4 h-4 text-blue-500" />
          <span>{location.openingHours}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-700">
          <MapPin className="w-4 h-4 text-green-500" />
          <span>Lat: {location.lat}, Lng: {location.lng}</span>
        </div>
        <a
          href={location.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Visit Website</span>
        </a>
      </div>
    </div>
  );
};

export default LocationPopup;