import { LucideIcon } from 'lucide-react';

export interface Location {
  id: number;
  name: string;
  category: 'academic' | 'service';
  lat: number;
  lng: number;
  description: string;
  image: string;
  openingHours: string;
  website: string;
  color: 'blue' | 'green';
}

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  color: string;
}

export interface SuggestedRoute {
  name: string;
  description: string;
  stops: number[];
  duration: string;
  distance: string;
}

