'use client';

import React, { useState, useMemo } from 'react';
import { MapPin } from 'lucide-react';
import { Location, SuggestedRoute } from '@/types';
import MapLegend from '@/components/map/MapLegend';
import LocationPopup from '@/components/map/LocationPopup';

// Module-level variable to track if Google Maps script is being loaded
let googleMapsScriptLoading = false;

interface MapViewProps {
  locations: Location[];
  selectedLocation: Location | null;
  showRoute: boolean;
  suggestedRoute: SuggestedRoute;
  onLocationClose: () => void;
}

const MapView: React.FC<MapViewProps> = ({
  locations,
  selectedLocation,
  showRoute,
  suggestedRoute,
  onLocationClose
}) => {
  // Option 1: Google My Maps Embed (Easiest - No API key needed)
  const GOOGLE_MY_MAPS_EMBED_URL = process.env.NEXT_PUBLIC_GOOGLE_MY_MAPS_URL || '';

  // Calculate center point from locations
  const mapCenter = useMemo(() => {
    if (locations.length === 0) return { lat: 7.8912, lng: 98.3514 };
    const avgLat = locations.reduce((sum, loc) => sum + loc.lat, 0) / locations.length;
    const avgLng = locations.reduce((sum, loc) => sum + loc.lng, 0) / locations.length;
    return { lat: avgLat, lng: avgLng };
  }, [locations]);

  // If Google My Maps URL is provided, use iframe embed
  if (GOOGLE_MY_MAPS_EMBED_URL) {
    return (
      <div className="lg:col-span-2 relative bg-gray-100">
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
          
          {selectedLocation && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
              <LocationPopup
                location={selectedLocation}
                onClose={onLocationClose}
              />
            </div>
          )}
        </div>

        <MapLegend showRoute={showRoute} />
      </div>
    );
  }

  // Fallback: Google Maps JavaScript API (requires API key)
  const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (GOOGLE_MAPS_API_KEY) {
    return (
      <GoogleMapsView
        locations={locations}
        selectedLocation={selectedLocation}
        showRoute={showRoute}
        suggestedRoute={suggestedRoute}
        mapCenter={mapCenter}
        onLocationClose={onLocationClose}
      />
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
  locations: Location[];
  selectedLocation: Location | null;
  showRoute: boolean;
  suggestedRoute: SuggestedRoute;
  mapCenter: { lat: number; lng: number };
  onLocationClose: () => void;
}> = ({ locations, selectedLocation, showRoute, suggestedRoute, mapCenter, onLocationClose }) => {
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

  const markersRef = React.useRef<any[]>([]);
  const directionsRendererRef = React.useRef<any>(null);
  const directionsServiceRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (!isLoaded || !(window as any).google?.maps) return;

    const mapElement = document.getElementById('google-map');
    if (!mapElement) return;

    const google = (window as any).google;
    
    // Create map if it doesn't exist
    let currentMap = map;
    if (!currentMap) {
      currentMap = new google.maps.Map(mapElement, {
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
      setMap(currentMap);
      console.log('🗺️ Map created with center:', mapCenter);
    } else {
      // Update map center when mapCenter changes
      currentMap.setCenter(mapCenter);
      console.log('📍 Updated map center to:', mapCenter);
    }

    // Clear existing markers
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    // Clear existing route
    if (directionsRendererRef.current) {
      directionsRendererRef.current.setMap(null);
      directionsRendererRef.current = null;
    }

    // Create bounds to fit all markers
    const bounds = new google.maps.LatLngBounds();

    // Add markers for each location
    locations.forEach((location) => {
      const position = { lat: location.lat, lng: location.lng };
      const latLng = new google.maps.LatLng(location.lat, location.lng);
      
      // Debug: Log position to console
      console.log(`📍 Marker: ${location.name}`, {
        lat: location.lat,
        lng: location.lng,
        position: position
      });
      
      bounds.extend(latLng);

      const marker = new google.maps.Marker({
        position: position,
        map: currentMap,
        title: location.name,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: location.color === 'blue' ? '#3b82f6' : '#10b981',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2,
        },
      });
      
      // Verify marker position after creation
      const markerPosition = marker.getPosition();
      if (markerPosition) {
        console.log(`✅ Marker created at:`, {
          lat: markerPosition.lat(),
          lng: markerPosition.lng()
        });
      }

      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="padding: 8px; min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; font-weight: bold; font-size: 16px;">${location.name}</h3>
            <p style="margin: 0 0 8px 0; font-size: 12px; color: #666;">${location.description}</p>
            <div style="margin: 4px 0; font-size: 11px; color: #888;">
              <strong>เวลาเปิด-ปิด:</strong> ${location.openingHours}
            </div>
            <a href="${location.website}" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; text-decoration: none; font-size: 12px;">
              ดูเว็บไซต์ →
            </a>
          </div>
        `,
      });

      marker.addListener('click', () => {
        infoWindow.open(currentMap, marker);
      });

      markersRef.current.push(marker);
    });

    // Add route using Google Directions API if showRoute is true
    if (showRoute && suggestedRoute.stops.length > 1) {
      const routeStops = suggestedRoute.stops
        .map((stopId) => {
          const location = locations.find((loc) => loc.id === stopId);
          return location ? { lat: location.lat, lng: location.lng } : null;
        })
        .filter((stop): stop is { lat: number; lng: number } => stop !== null);

      if (routeStops.length > 1) {
        // Initialize Directions Service and Renderer
        if (!directionsServiceRef.current) {
          directionsServiceRef.current = new google.maps.DirectionsService();
        }

        if (!directionsRendererRef.current) {
          directionsRendererRef.current = new google.maps.DirectionsRenderer({
            map: currentMap,
            suppressMarkers: true, // Don't show default markers, use our custom ones
            polylineOptions: {
              strokeColor: '#10b981',
              strokeWeight: 4,
              strokeOpacity: 0.8,
            },
          });
        } else {
          directionsRendererRef.current.setMap(currentMap);
        }

        // Prepare waypoints (all stops except first and last)
        const waypoints = routeStops.slice(1, -1).map(stop => ({
          location: new google.maps.LatLng(stop.lat, stop.lng),
          stopover: true,
        }));

        // Request directions
        directionsServiceRef.current.route(
          {
            origin: new google.maps.LatLng(routeStops[0].lat, routeStops[0].lng),
            destination: new google.maps.LatLng(
              routeStops[routeStops.length - 1].lat,
              routeStops[routeStops.length - 1].lng
            ),
            waypoints: waypoints,
            travelMode: google.maps.TravelMode.WALKING, // Use walking mode for campus tour
            optimizeWaypoints: false, // Keep the order we specified
          },
          (result: any, status: any) => {
            if (status === google.maps.DirectionsStatus.OK && directionsRendererRef.current) {
              directionsRendererRef.current.setDirections(result);
              console.log('✅ Route calculated successfully');
              
              // Log route information
              if (result.routes && result.routes[0]) {
                const route = result.routes[0];
                const leg = route.legs[0];
                console.log('📍 Route info:', {
                  distance: leg.distance?.text,
                  duration: leg.duration?.text,
                });
              }
            } else {
              console.error('❌ Directions request failed:', status);
              // Fallback to simple polyline if Directions API fails
              const fallbackPath = routeStops.map(stop => 
                new google.maps.LatLng(stop.lat, stop.lng)
              );
              const fallbackPolyline = new google.maps.Polyline({
                path: fallbackPath,
                geodesic: true,
                strokeColor: '#10b981',
                strokeOpacity: 0.8,
                strokeWeight: 4,
              });
              fallbackPolyline.setMap(currentMap);
            }
          }
        );
      }
    }

    // Fit map to show all markers with padding
    if (locations.length > 0) {
      console.log('🗺️ Fitting bounds to show all markers');
      console.log('Bounds:', {
        north: bounds.getNorthEast().lat(),
        south: bounds.getSouthWest().lat(),
        east: bounds.getNorthEast().lng(),
        west: bounds.getSouthWest().lng()
      });
      
      currentMap.fitBounds(bounds, { padding: 80 });
      
      // Set minimum zoom level and log center
      google.maps.event.addListenerOnce(currentMap, 'bounds_changed', () => {
        const currentCenter = currentMap.getCenter();
        const currentZoom = currentMap.getZoom();
        console.log('📍 Map center after fitBounds:', {
          lat: currentCenter?.lat(),
          lng: currentCenter?.lng(),
          zoom: currentZoom
        });
        
        if (currentZoom && currentZoom > 18) {
          currentMap.setZoom(16);
        }
      });
    } else {
      // If no locations, use default center
      console.log('📍 No locations, using default center:', mapCenter);
      currentMap.setCenter(mapCenter);
      currentMap.setZoom(15);
    }
  }, [isLoaded, locations, showRoute, suggestedRoute, mapCenter, map]);

  return (
    <div className="lg:col-span-2 relative bg-gray-100">
      <div className="w-full h-[400px] lg:h-[calc(100vh-140px)] relative">
        <div id="google-map" className="w-full h-full" />
        
        {selectedLocation && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
            <LocationPopup
              location={selectedLocation}
              onClose={onLocationClose}
            />
          </div>
        )}
      </div>

      <MapLegend showRoute={showRoute} />
    </div>
  );
};

export default MapView;
