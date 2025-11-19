import React from 'react';
import { Navigation, Clock } from 'lucide-react';
import { SuggestedRoute } from '@/types';

interface RouteToggleProps {
  showRoutes: boolean;
  suggestedRoute: SuggestedRoute;
  onRouteToggle: (show: boolean) => void;
}

const RouteToggle: React.FC<RouteToggleProps> = ({
  showRoutes,
  suggestedRoute,
  onRouteToggle
}) => {
  return (
    <div className="mb-6 p-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-800 flex items-center gap-2">
          <Navigation className="w-4 h-4 text-emerald-600" />
          Suggested Route
        </h3>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={showRoutes}
            onChange={(e) => onRouteToggle(e.target.checked)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600"></div>
        </label>
      </div>
      <p className="text-xs text-gray-600 mb-2">{suggestedRoute.description}</p>
      <div className="flex items-center gap-4 text-xs text-gray-600">
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" /> {suggestedRoute.duration}
        </span>
        <span>📍 {suggestedRoute.stops.length} stops</span>
      </div>
    </div>
  );
};

export default RouteToggle;