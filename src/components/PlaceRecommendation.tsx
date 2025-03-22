
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Coffee, Utensils, Camera, Landmark, Building } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import PlaceCard from './PlaceCard';
import { mockPlaces } from '@/utils/mockData';

const categories = [
  { id: 'all', name: 'All', icon: <Coffee className="h-4 w-4" /> },
  { id: 'restaurants', name: 'Restaurants', icon: <Utensils className="h-4 w-4" /> },
  { id: 'attractions', name: 'Attractions', icon: <Camera className="h-4 w-4" /> },
  { id: 'parks', name: 'Parks', icon: <Landmark className="h-4 w-4" /> },
  { id: 'museums', name: 'Museums', icon: <Building className="h-4 w-4" /> },
];

const PlaceRecommendation = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPlaces = mockPlaces.filter(place => {
    const matchesCategory = activeCategory === 'all' || place.type.toLowerCase().includes(activeCategory);
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          place.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="glass-card p-6">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search places..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex items-center overflow-x-auto pb-2 -mx-1">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              className="mx-1 flex-shrink-0"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon}
              <span className="ml-2">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlaces.map((place, index) => (
          <motion.div
            key={place.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <PlaceCard {...place} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PlaceRecommendation;
