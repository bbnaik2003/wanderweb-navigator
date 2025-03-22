
// Mock data for places, vehicles, and homestays

export const mockPlaces = [
  {
    id: '1',
    name: 'Crystal Blue Lake',
    type: 'Natural Attraction',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
    rating: 4.7,
    location: 'Blue Mountain National Park',
    distance: '15 km away'
  },
  {
    id: '2',
    name: 'Historic Town Square',
    type: 'Cultural Site',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86',
    rating: 4.5,
    location: 'Oakville Historic District',
    distance: '3 km away'
  },
  {
    id: '3',
    name: 'Mountain View Restaurant',
    type: 'Restaurant',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    rating: 4.8,
    location: 'Alpine Heights',
    distance: '8 km away'
  },
  {
    id: '4',
    name: 'Sunset Beach',
    type: 'Beach',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    rating: 4.9,
    location: 'Golden Coast',
    distance: '20 km away'
  },
  {
    id: '5',
    name: 'Forest Trail Hike',
    type: 'Parks',
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
    rating: 4.6,
    location: 'Evergreen Forest',
    distance: '12 km away'
  },
  {
    id: '6',
    name: 'Contemporary Art Museum',
    type: 'Museum',
    image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67',
    rating: 4.4,
    location: 'Downtown Arts District',
    distance: '5 km away'
  }
];

export const mockVehicles = [
  {
    id: '1',
    name: 'Toyota Corolla',
    type: 'Economy',
    image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3',
    pricePerDay: 45,
    location: 'Downtown Rental Center',
    features: ['Automatic', 'AC', '5 Seats', 'Fuel Efficient']
  },
  {
    id: '2',
    name: 'Honda Civic',
    type: 'Compact',
    image: 'https://images.unsplash.com/photo-1458668383970-8ddd3927deed',
    pricePerDay: 50,
    location: 'Airport Terminal Rental',
    features: ['Automatic', 'AC', '5 Seats', 'Bluetooth']
  },
  {
    id: '3',
    name: 'Ford Explorer',
    type: 'SUV',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    pricePerDay: 85,
    location: 'Mountain View Rental',
    features: ['Automatic', 'AC', '7 Seats', '4WD', 'Roof Rack']
  },
  {
    id: '4',
    name: 'Mercedes C-Class',
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
    pricePerDay: 120,
    location: 'Premium Downtown Location',
    features: ['Automatic', 'Leather Seats', 'Navigation', 'Bluetooth', 'Premium Sound']
  }
];

export const mockHomestays = [
  {
    id: '1',
    name: 'Cozy Mountain Cabin',
    type: 'Entire cabin',
    beds: 2,
    maxGuests: 4,
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb',
    rating: 4.8,
    location: 'Mountain Pine Ridge',
    pricePerNight: 120,
    amenities: ['Wifi', 'Kitchen', 'Heating', 'Fireplace', 'Parking']
  },
  {
    id: '2',
    name: 'Lakeside Retreat',
    type: 'Entire house',
    beds: 3,
    maxGuests: 6,
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    rating: 4.9,
    location: 'Blue Lake Region',
    pricePerNight: 210,
    amenities: ['Wifi', 'Kitchen', 'Pool', 'TV', 'Laundry', 'PrivateBath']
  },
  {
    id: '3',
    name: 'Urban Loft Apartment',
    type: 'Entire apartment',
    beds: 1,
    maxGuests: 2,
    image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb',
    rating: 4.7,
    location: 'Downtown Arts District',
    pricePerNight: 95,
    amenities: ['Wifi', 'Kitchen', 'AC', 'TV', 'PrivateBath', 'Breakfast']
  },
  {
    id: '4',
    name: 'Beachfront Villa',
    type: 'Entire villa',
    beds: 4,
    maxGuests: 8,
    image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843',
    rating: 5.0,
    location: 'Sandy Beach Cove',
    pricePerNight: 350,
    amenities: ['Wifi', 'Kitchen', 'Pool', 'Beachfront', 'TV', 'PrivateBath', 'Breakfast']
  },
  {
    id: '5',
    name: 'Historic Townhouse',
    type: 'Entire townhouse',
    beds: 2,
    maxGuests: 4,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07',
    rating: 4.6,
    location: 'Old Town District',
    pricePerNight: 145,
    amenities: ['Wifi', 'Kitchen', 'Garden', 'TV', 'PrivateBath', 'Breakfast']
  },
  {
    id: '6',
    name: 'Country Farmhouse',
    type: 'Entire house',
    beds: 3,
    maxGuests: 6,
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    rating: 4.8,
    location: 'Rolling Hills Countryside',
    pricePerNight: 180,
    amenities: ['Wifi', 'Kitchen', 'Farm Animals', 'Breakfast', 'Parking']
  }
];
