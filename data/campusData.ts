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
    lat: 7.89446417925503,
    lng: 98.35289920804485,
    //7.89446417925503, 98.35289920804485
    description: 'Primary academic building with lecture halls, computer labs, and faculty offices',
    image: '🏛️',
    openingHours: 'Mon-Fri: 7:00-18:00',
    website: 'https://phuket.psu.ac.th',
    color: 'blue'
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
    name: 'คณะการบริการและการท่องเที่ยว มหาวิทยาลัยสงขลานครินทร์',
    category: 'academic',
    lat: 7.894105512588895,
    lng: 98.35187460416918,
    // 7.894105512588895, 98.35187460416918
    description: 'Hub for student clubs, events, and cultural activities',
    image: '🎭',
    openingHours: 'Mon-Fri: 8:00-22:00, Sat-Sun: 10:00-20:00',
    website: 'https://phuket.psu.ac.th/activity',
    color: 'green'
  },
  {
    id: 7,
    name: 'คณะเทคโนโลยีและสิ่งแวดล้อม มหาวิทยาลัยสงขลานครินทร์',
    category: 'academic',
    lat: 7.894905205992693,
    lng: 98.35201407904275,
    // 7.894905205992693, 98.35201407904275
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
  name: 'เส้นทางเดินชมมหาวิทยาลัย',
  description: 'เส้นทางแนะนำ: ห้องสมุด → อาคารเรียนรวม → คณะเทคโนโลยีและสิ่งแวดล้อม → ศูนย์กีฬา → คณะการบริการและการท่องเที่ยว → อาคาร 6',
  stops: [1, 2, 7, 4, 6, 5],
  duration: '45 นาที',
  distance: '1.3 กม.'
};