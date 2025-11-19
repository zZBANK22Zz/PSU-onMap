import { MapPin, Building2, Users } from 'lucide-react';
import { Location, Category, SuggestedRoute } from '@/types';

export const locations: Location[] = [
  {
    id: 1,
    name: 'Central Library',
    category: 'academic',
    lat: 7.8936240256334615,
    lng: 98.35342848104702,
    // 7.8936240256334615, 98.35342848104702
    description: 'Main library with extensive collection of books, digital resources, and study spaces',
    image: '📚',
    openingHours: 'Mon-Fri: 8:00-20:00, Sat-Sun: 9:00-17:00',
    website: 'https://library.psu.ac.th',
    color: 'blue'
  },
  {
    id: 2,
    name: 'Main Academic Building',
    category: 'academic',
    lat: 7.8944596973750265,
    lng: 98.35289476226701,
    //7.8944596973750265, 98.35289476226701
    description: 'Primary academic building with lecture halls, computer labs, and faculty offices',
    image: '🏛️',
    openingHours: 'Mon-Fri: 7:00-18:00',
    website: 'https://phuket.psu.ac.th',
    color: 'blue'
  },
  {
    id: 3,
    name: 'Student Cafeteria',
    category: 'service',
    lat: 7.89057176119858,
    lng: 98.35208852722519,
    //7.89057176119858, 98.35208852722519
    description: 'Main cafeteria offering various Thai and international cuisine at student-friendly prices',
    image: '🍽️',
    openingHours: 'Mon-Sun: 7:00-19:00',
    website: 'https://phuket.psu.ac.th/cafeteria',
    color: 'green'
  },
  {
    id: 4,
    name: 'Sports Complex',
    category: 'service',
    lat: 7.896540832787851,
    lng: 98.35263827604341,
    // 7.896540832787851, 98.35263827604341
    description: 'Multi-purpose sports facility with gym, swimming pool, basketball and volleyball courts',
    image: '⚽',
    openingHours: 'Mon-Sun: 6:00-21:00',
    website: 'https://phuket.psu.ac.th/sports',
    color: 'green'
  },
  {
    id: 5,
    name: '6th Building',
    category: 'service',
    lat: 7.89340267675603,
    lng: 98.35226205143121,
    // 7.89340267675603, 98.35226205143121
    description: '6th Building',
    image: '🏠',
    openingHours: '24/7',
    website: 'https://phuket.psu.ac.th/dorm',
    color: 'green'
  },
  {
    id: 6,
    name: 'Student Activity Center',
    category: 'service',
    lat: 7.8915,
    lng: 98.3518,
    description: 'Hub for student clubs, events, and cultural activities',
    image: '🎭',
    openingHours: 'Mon-Fri: 8:00-22:00, Sat-Sun: 10:00-20:00',
    website: 'https://phuket.psu.ac.th/activity',
    color: 'green'
  }
];

export const categories: Category[] = [
  { id: 'all', name: 'All Locations', icon: MapPin, color: 'gray' },
  { id: 'academic', name: 'Academic Buildings', icon: Building2, color: 'blue' },
  { id: 'service', name: 'Student Services', icon: Users, color: 'green' }
];

export const suggestedRoute: SuggestedRoute = {
  name: 'Campus Discovery Tour',
  description: 'A guided walking tour through the main attractions of PSU Phuket',
  stops: [1, 2, 6, 3, 4, 5],
  duration: '45 minutes',
  distance: '1.2 km'
};