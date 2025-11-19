'use client';

import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

// Module-level variable to track if Google Maps script is being loaded
let googleMapsScriptLoading = false;

const MapView: React.FC = () => {
  // Option 1: Google My Maps Embed (Easiest - No API key needed)
  // Replace this with your Google My Maps embed URL
  // To get the embed URL:
  // 1. Go to https://www.google.com/maps/d/
  // 2. Create or open your map
  // 3. Click the three dots menu → "Embed on my site"
  // 4. Copy the iframe src URL
  const GOOGLE_MY_MAPS_EMBED_URL = process.env.NEXT_PUBLIC_GOOGLE_MY_MAPS_URL || '';

  // Default center point for PSU Phuket Campus
  const mapCenter = { lat: 7.8912, lng: 98.3514 };

  // If Google My Maps URL is provided, use iframe embed
  if (GOOGLE_MY_MAPS_EMBED_URL) {
    return (
      <div className="relative bg-gray-100">
        <div className="w-full h-[400px] lg:h-[calc(100vh-140px)] relative">
          <iframe
            src={GOOGLE_MY_MAPS_EMBED_URL}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>
      </div>
    );
  }

  // Fallback: Google Maps JavaScript API (requires API key)
  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (GOOGLE_MAPS_API_KEY) {
    return (
      <GoogleMapsView mapCenter={mapCenter} />
    );
  }

  // Fallback: Placeholder with instructions
  return (
    <div className="lg:col-span-2 relative bg-gray-100">
      <div className="w-full h-[400px] lg:h-[calc(100vh-140px)] bg-gradient-to-br from-blue-100 via-green-100 to-teal-100 flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10 p-6 max-w-2xl">
          <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4 animate-bounce" />
          <h3 className="text-xl font-bold text-gray-800 mb-2">Interactive Campus Map</h3>
          <p className="text-gray-600 mb-4">
            To integrate Google My Maps, add your embed URL to environment variables
          </p>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg mb-4 text-left">
            <h4 className="font-semibold text-gray-800 mb-3 text-sm">Setup Instructions:</h4>
            <div className="text-xs text-gray-600 space-y-2">
              <div>
                <strong className="text-gray-800">Option 1: Google My Maps (Recommended)</strong>
                <ol className="list-decimal list-inside mt-1 ml-2 space-y-1">
                  <li>Go to <a href="https://www.google.com/maps/d/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google My Maps</a></li>
                  <li>Create a new map and add your locations</li>
                  <li>Click the three dots menu → "Embed on my site"</li>
                  <li>Copy the iframe src URL</li>
                  <li>Add to <code className="bg-gray-100 px-1 rounded">.env.local</code>: <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_GOOGLE_MY_MAPS_URL="your-url-here"</code></li>
                </ol>
              </div>
              <div>
                <strong className="text-gray-800">Option 2: Google Maps JavaScript API</strong>
                <ol className="list-decimal list-inside mt-1 ml-2 space-y-1">
                  <li>Get API key from <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Cloud Console</a></li>
                  <li>Add to <code className="bg-gray-100 px-1 rounded">.env.local</code>: <code className="bg-gray-100 px-1 rounded">NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="your-key-here"</code></li>
                </ol>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// Google Maps JavaScript API Component
const GoogleMapsView: React.FC<{
  mapCenter: { lat: number; lng: number };
}> = ({ mapCenter }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [map, setMap] = useState<any>(null);

  React.useEffect(() => {
    // Check if Google Maps is already loaded
    if (typeof window !== 'undefined' && (window as any).google?.maps) {
      setIsLoaded(true);
      return;
    }

    let checkInterval: NodeJS.Timeout | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    const scriptSrc = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    
    // Check if script with this src already exists in DOM
    const existingScript = Array.from(document.querySelectorAll('script')).find(
      (script) => script.src.includes('maps.googleapis.com/maps/api/js')
    );
    
    if (existingScript || googleMapsScriptLoading) {
      // Script exists or is being loaded, wait for it to load
      googleMapsScriptLoading = true;
      checkInterval = setInterval(() => {
        if ((window as any).google?.maps) {
          setIsLoaded(true);
          googleMapsScriptLoading = false;
          if (checkInterval) clearInterval(checkInterval);
        }
      }, 100);
      
      // Cleanup interval after 10 seconds
      timeoutId = setTimeout(() => {
        if (checkInterval) clearInterval(checkInterval);
        googleMapsScriptLoading = false;
      }, 10000);
      
      return () => {
        if (checkInterval) clearInterval(checkInterval);
        if (timeoutId) clearTimeout(timeoutId);
      };
    }

    // Mark as loading to prevent duplicate scripts
    googleMapsScriptLoading = true;

    // Create and add script
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setIsLoaded(true);
      googleMapsScriptLoading = false;
    };
    script.onerror = () => {
      googleMapsScriptLoading = false; // Reset on error so it can retry
    };
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (checkInterval) clearInterval(checkInterval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []); // Empty dependency array - only run once on mount

  React.useEffect(() => {
    if (!isLoaded || !(window as any).google?.maps) return;

    const mapElement = document.getElementById('google-map');
    if (!mapElement) return;

    const google = (window as any).google;
    
    // Create map
    if (!map) {
      const googleMap = new google.maps.Map(mapElement, {
        center: mapCenter,
        zoom: 15,
        mapTypeId: 'roadmap',
        styles: [
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'on' }]
          }
        ]
      });
      setMap(googleMap);
    } else {
      // Update map center when mapCenter changes
      map.setCenter(mapCenter);
    }
  }, [isLoaded, mapCenter, map]);

  return (
    <div className="relative bg-gray-100">
      <div className="w-full h-[400px] lg:h-[calc(100vh-140px)] relative">
        <div id="google-map" className="w-full h-full" />
      </div>
    </div>
  );
};

export default MapView;
