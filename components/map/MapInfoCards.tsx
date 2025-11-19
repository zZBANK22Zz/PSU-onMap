import React from 'react';
import { Building2, Users, Navigation } from 'lucide-react';

const MapInfoCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <div className="bg-white rounded-xl p-4 shadow-md">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-blue-100 p-2 rounded-lg">
            <Building2 className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="font-semibold text-gray-800">Academic Areas</h3>
        </div>
        <p className="text-sm text-gray-600">2 locations including library and lecture halls</p>
      </div>
      
      <div className="bg-white rounded-xl p-4 shadow-md">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-green-100 p-2 rounded-lg">
            <Users className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="font-semibold text-gray-800">Student Services</h3>
        </div>
        <p className="text-sm text-gray-600">4 locations for dining, sports, and accommodation</p>
      </div>
      
      <div className="bg-white rounded-xl p-4 shadow-md">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-emerald-100 p-2 rounded-lg">
            <Navigation className="w-5 h-5 text-emerald-600" />
          </div>
          <h3 className="font-semibold text-gray-800">Guided Tours</h3>
        </div>
        <p className="text-sm text-gray-600">1 suggested route covering main campus highlights</p>
      </div>
    </div>
  );
};

export default MapInfoCards;