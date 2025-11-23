import { MapPin, Building2, Users } from 'lucide-react';
import { Location, Category, SuggestedRoute } from '@/types';

export const locations: Location[] = [
  {
    id: 1,
    name: 'Central Library',
    category: 'service',
    lat: 7.8936240256334615,
    lng: 98.35342848104702,
    // 7.8936240256334615, 98.35342848104702
    description: 'Main library with extensive collection of books, digital resources, and study spaces',
    image: '📚',
    openingHours: 'Mon-Fri: 8:00-20:00, Sat-Sun: 9:00-17:00',
    website: 'https://library.psu.ac.th',
    color: 'green'
  },
  {
    id: 2,
    name: 'Main Academic Building',
    category: 'service',
    lat: 7.89446417925503,
    lng: 98.35289920804485,
    //7.89446417925503, 98.35289920804485
    description: 'Primary academic building with lecture halls, computer labs, and faculty offices',
    image: '🏛️',
    openingHours: 'Mon-Fri: 7:00-18:00',
    website: 'https://phuket.psu.ac.th',
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
    name: '6th Building, Prince of Songkhla University',
    category: 'academic',
    lat: 7.89340267675603,
    lng: 98.35226205143121,
    // 7.89340267675603, 98.35226205143121
    description: '6th Building, Prince of Songkhla University',
    image: '🏠',
    openingHours: '24/7',
    website: 'https://phuket.psu.ac.th/dorm',
    color: 'blue'
  },
  {
    id: 6,
    name: 'Faculty of Service and Tourism, Prince of Songkhla University',
    category: 'academic',
    lat: 7.894105512588895,
    lng: 98.35187460416918,
    // 7.894105512588895, 98.35187460416918
    description: 'Faculty of Service and Tourism, Prince of Songkhla University',
    image: '💼',
    openingHours: 'Mon-Fri: 8:00-22:00, Sat-Sun: 10:00-20:00',
    website: 'https://phuket.psu.ac.th/activity',
    color: 'blue'
  },
  {
    id: 7,
    name: 'Faculty of Technology and Environment, Prince of Songkhla University',
    category: 'academic',
    lat: 7.894905205992693,
    lng: 98.35201407904275,
    // 7.894905205992693, 98.35201407904275
    description: 'Faculty of Technology and Environment, Prince of Songkhla University',
    image: '🔬',
    openingHours: 'Mon-Fri: 8:00-22:00, Sat-Sun: 10:00-20:00',
    website: 'https://phuket.psu.ac.th/activity',
    color: 'blue'
  },
  {
    id: 8,
    name: 'Faculty of International Studies, Prince of Songkhla University',
    category: 'academic',
    lat: 7.893823604635755,
    lng: 98.35294329707587,
    // 7.893823604635755, 98.35294329707587
    description: 'Faculty of International Studies, Prince of Songkhla University',
    image: '🌍',
    openingHours: 'Mon-Fri: 8:00-22:00, Sat-Sun: 10:00-20:00',
    website: 'https://phuket.psu.ac.th/activity',
    color: 'blue'
  },
  {
    id: 9,
    name: 'College of Computing, Prince of Songkhla University',
    category: 'academic',
    lat: 7.893474572617563,
    lng: 98.35218716794022,
    // 7.893474572617563, 98.35218716794022
    description: 'College of Computing, Prince of Songkhla University',
    image: '💻',
    openingHours: 'Mon-Fri: 8:00-22:00, Sat-Sun: 10:00-20:00',
    website: 'https://phuket.psu.ac.th/activity',
    color: 'blue'
  }
];

export const categories: Category[] = [
  { id: 'all', name: 'All Locations', icon: MapPin, color: 'gray' },
  { id: 'academic', name: 'Academic Buildings', icon: Building2, color: 'blue' },
  { id: 'service', name: 'Student Services', icon: Users, color: 'green' }
];

export const suggestedRoute: SuggestedRoute = {
  name: 'เส้นทางเดินชมมหาวิทยาลัย',
  description: 'เส้นทางแนะนำ: ห้องสมุด → อาคารเรียนรวม → คณะเทคโนโลยีและสิ่งแวดล้อม → ศูนย์กีฬา → คณะการบริการและการท่องเที่ยว → อาคาร 6',
  stops: [1, 2, 7, 4, 6, 5],
  duration: '45 นาที',
  distance: '1.3 กม.'
};
