import React from 'react';
import { MapPin } from 'lucide-react';
import { Category } from '@/types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-semibold text-gray-600 mb-3 flex items-center gap-2">
        <MapPin className="w-4 h-4" />
        ประเภทสถานที่
      </h3>
      <div className="space-y-2">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.id;
          // Use pink color for "All Locations" when active
          const activeBgColor = cat.id === 'all' 
            ? 'bg-pink-500' 
            : cat.color === 'blue' 
              ? 'bg-blue-500' 
              : cat.color === 'green' 
                ? 'bg-green-500' 
                : 'bg-gray-500';
          
          return (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 ${
                isActive
                  ? `${activeBgColor} text-white shadow-lg`
                  : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{cat.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;