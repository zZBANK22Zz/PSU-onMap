import React from 'react';
import { MapPin } from 'lucide-react';
import type { Location } from '@/types';
import LocationCard from '@/components/map/LocationCard';

interface LocationListProps {
  locations: Location[];
  selectedLocation: Location | null;
  onLocationSelect: (location: Location) => void;
}

const LocationList: React.FC<LocationListProps> = ({
  locations,
  selectedLocation,
  onLocationSelect
}) => {
  return (
    <div>
      <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <MapPin className="w-5 h-5 text-blue-600" />
        Locations ({locations.length})
      </h2>
      <div className="space-y-3">
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            location={location}
            isSelected={selectedLocation?.id === location.id}
            onSelect={() => onLocationSelect(location)}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationList;