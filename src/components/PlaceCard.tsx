
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface PlaceCardProps {
  id: string;
  name: string;
  type: string;
  image: string;
  rating: number;
  location: string;
  distance?: string;
  price?: string;
}

const PlaceCard = ({ name, type, image, rating, location, distance, price }: PlaceCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <Card className="overflow-hidden card-hover h-full">
        <div className="relative h-48 w-full">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-secondary animate-pulse" />
          )}
          <img
            src={image}
            alt={name}
            className={`h-full w-full object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center bg-black/40 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="w-3 h-3 text-yellow-400 mr-1" />
            <span className="text-xs font-medium text-white">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-medium text-base">{name}</h3>
              <p className="text-xs text-muted-foreground">{type}</p>
            </div>
            {price && (
              <span className="text-sm font-semibold">{price}</span>
            )}
          </div>
          
          <div className="flex items-center text-xs text-muted-foreground">
            <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
            <span className="truncate">{location}</span>
            {distance && (
              <span className="ml-2 pl-2 border-l border-border">{distance}</span>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default PlaceCard;
