
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Calendar, Users, Search, Wifi, Bath, Coffee, Tv } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import PlaceCard from './PlaceCard';
import { mockHomestays } from '@/utils/mockData';

const filters = [
  { id: 'wifi', name: 'Wifi', icon: <Wifi className="h-4 w-4" /> },
  { id: 'privateBath', name: 'Private Bath', icon: <Bath className="h-4 w-4" /> },
  { id: 'breakfast', name: 'Breakfast', icon: <Coffee className="h-4 w-4" /> },
  { id: 'tv', name: 'TV', icon: <Tv className="h-4 w-4" /> },
];

const Homestay = () => {
  const [location, setLocation] = useState('');
  const [guests, setGuests] = useState('2');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  const toggleFilter = (filterId: string) => {
    if (activeFilters.includes(filterId)) {
      setActiveFilters(activeFilters.filter(id => id !== filterId));
    } else {
      setActiveFilters([...activeFilters, filterId]);
    }
  };
  
  const filteredHomestays = mockHomestays.filter(homestay => {
    const matchesLocation = !location || homestay.location.toLowerCase().includes(location.toLowerCase());
    const matchesGuests = parseInt(guests) <= homestay.maxGuests;
    const matchesFilters = activeFilters.length === 0 || 
                          activeFilters.every(filter => 
                            homestay.amenities.map(a => a.toLowerCase()).includes(filter.toLowerCase())
                          );
    return matchesLocation && matchesGuests && matchesFilters;
  });

  return (
    <div className="space-y-6">
      <motion.div 
        className="glass-card p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold mb-4">Find Your Home Away From Home</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="space-y-2">
            <Label className="text-sm">Location</Label>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Where are you going?" 
                className="pl-9"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm">Check-in / Check-out</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Add dates"
                className="pl-9"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm">Guests</Label>
            <div className="relative">
              <Users className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="number" 
                min="1"
                max="10"
                placeholder="2 guests" 
                className="pl-9"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <Label className="text-sm">Amenities</Label>
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <Button
                key={filter.id}
                variant={activeFilters.includes(filter.id) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleFilter(filter.id)}
                className="flex items-center space-x-1"
              >
                {filter.icon}
                <span>{filter.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHomestays.map((homestay, index) => (
          <motion.div
            key={homestay.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <PlaceCard 
              id={homestay.id}
              name={homestay.name}
              type={`${homestay.type} • ${homestay.beds} beds`}
              image={homestay.image}
              rating={homestay.rating}
              location={homestay.location}
              price={`$${homestay.pricePerNight}/night`}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Homestay;
