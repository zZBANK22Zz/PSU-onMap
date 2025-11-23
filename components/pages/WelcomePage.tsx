import React from 'react';
import { 
  MapPin, 
  GraduationCap, 
  ChevronRight, 
  Sparkles, 
  Building2, 
  Users, 
  Navigation 
} from 'lucide-react';
import FeatureCard from '@/components/ui/FeatureCard';

interface WelcomePageProps {
  onStart: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-emerald-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-emerald-200 rounded-full blur-3xl opacity-25 animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* University Logo/Icon */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-2xl opacity-40 animate-pulse"></div>
          <div className="relative bg-white/90 backdrop-blur-sm rounded-full p-6 shadow-2xl">
            <GraduationCap className="w-20 h-20 md:w-24 md:h-24 text-blue-600" strokeWidth={1.5} />
          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4 leading-tight">
            PSU Phuket Map
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-green-600" />
            <h2 className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Virtual Campus Tour WebMap App
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-2xl mx-auto leading-relaxed">
            Discover the beauty and sustainability of our campus through an interactive map experience
          </p>
          
          <div className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-500">
            <Sparkles className="w-4 h-4 text-yellow-500" />
            <span>Explore 6+ locations with virtual tour</span>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-4xl mx-auto w-full px-4">
          <FeatureCard
            icon={Building2}
            title="Academic Buildings"
            description="Explore lecture halls, libraries, and study spaces"
            gradient="from-blue-100 to-blue-200"
            iconColor="text-blue-600"
          />
          <FeatureCard
            icon={Users}
            title="Student Services"
            description="Find cafeterias, dormitories, and activity centers"
            gradient="from-green-100 to-green-200"
            iconColor="text-green-600"
          />
          <FeatureCard
            icon={Navigation}
            title="Suggested Routes"
            description="Follow guided tours around the campus"
            gradient="from-emerald-100 to-emerald-200"
            iconColor="text-emerald-600"
          />
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={onStart}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-green-600 to-emerald-600 hover:from-blue-700 hover:via-green-700 hover:to-emerald-700 text-white px-10 py-5 rounded-full text-lg md:text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Get Started</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-green-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          </button>
          
          <p className="mt-4 text-sm text-gray-500">
            Click to explore the interactive campus map
          </p>
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-16 flex items-center gap-2 text-gray-400">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <MapPin className="w-4 h-4" />
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 left-2/3 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-ping delay-1000"></div>
      </div>
    </div>
  );
};

export default WelcomePage;
