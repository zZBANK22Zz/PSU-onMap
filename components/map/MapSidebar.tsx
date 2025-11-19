import React from 'react';
import { Location, Category } from '@/types';
import CategoryFilter from '@/components/map/CategoryFilter';
import LocationList from '@/components/map/LocationList';

interface MapSidebarProps {
  categories: Category[];
  locations: Location[];
  selectedCategory: string;
  selectedLocation: Location | null;
  onCategoryChange: (category: string) => void;
  onLocationSelect: (location: Location) => void;
}

const MapSidebar: React.FC<MapSidebarProps> = ({
  categories,
  locations,
  selectedCategory,
  selectedLocation,
  onCategoryChange,
  onLocationSelect
}) => {
  return (
    <div className="lg:col-span-1 bg-gradient-to-b from-white to-blue-50 p-6 overflow-y-auto max-h-[calc(100vh-140px)]">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />

      <LocationList
        locations={locations}
        selectedLocation={selectedLocation}
        onLocationSelect={onLocationSelect}
      />
    </div>
  );
};

export default MapSidebar;