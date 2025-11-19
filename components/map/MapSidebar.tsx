import React from 'react';
import { Location, Category, SuggestedRoute } from '@/types';
import CategoryFilter from '@/components/map/CategoryFilter';
import RouteToggle from '@/components/map/RouteToggle';
import LocationList from '@/components/map/LocationList';

interface MapSidebarProps {
  categories: Category[];
  locations: Location[];
  selectedCategory: string;
  selectedLocation: Location | null;
  showRoute: boolean;
  suggestedRoute: SuggestedRoute;
  onCategoryChange: (category: string) => void;
  onLocationSelect: (location: Location) => void;
  onRouteToggle: (show: boolean) => void;
}

const MapSidebar: React.FC<MapSidebarProps> = ({
  categories,
  locations,
  selectedCategory,
  selectedLocation,
  showRoute,
  suggestedRoute,
  onCategoryChange,
  onLocationSelect,
  onRouteToggle
}) => {
  return (
    <div className="lg:col-span-1 bg-gradient-to-b from-white to-blue-50 p-6 overflow-y-auto max-h-[calc(100vh-140px)]">
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />

      <RouteToggle
        showRoute={showRoute}
        suggestedRoute={suggestedRoute}
        onRouteToggle={onRouteToggle}
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