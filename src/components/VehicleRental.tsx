
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Filter, MapPin, Calendar } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { mockVehicles } from '@/utils/mockData';

const vehicleTypes = ['All', 'Economy', 'Compact', 'SUV', 'Luxury'];

const VehicleRental = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [location, setLocation] = useState('');
  
  const filteredVehicles = mockVehicles.filter(vehicle => {
    const matchesType = selectedType === 'All' || vehicle.type === selectedType;
    const matchesPrice = vehicle.pricePerDay >= priceRange[0] && vehicle.pricePerDay <= priceRange[0] + priceRange[1];
    const matchesLocation = !location || vehicle.location.toLowerCase().includes(location.toLowerCase());
    return matchesType && matchesPrice && matchesLocation;
  });

  return (
    <div className="space-y-6">
      <motion.div 
        className="glass-card p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold mb-4">Find Your Ideal Rental Vehicle</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="space-y-2">
            <Label className="text-sm">Location</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Pickup location" 
                className="pl-9"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm">Pickup Date</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="date" 
                className="pl-9"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label className="text-sm">Return Date</Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="date" 
                className="pl-9"
              />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2 w-full sm:w-1/3">
            <Label className="text-sm">Vehicle Type</Label>
            <div className="flex flex-wrap gap-2">
              {vehicleTypes.map(type => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="space-y-2 w-full sm:w-2/3">
            <div className="flex justify-between items-center">
              <Label className="text-sm">Price Range</Label>
              <span className="text-sm font-medium">
                ${priceRange[0]} - ${priceRange[0] + priceRange[1]}
              </span>
            </div>
            <Slider
              defaultValue={[0, 100]}
              max={100}
              step={5}
              value={priceRange}
              onValueChange={setPriceRange}
              className="py-4"
            />
          </div>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredVehicles.map((vehicle, index) => (
          <motion.div
            key={vehicle.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden card-hover">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 relative">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name} 
                    className="h-48 sm:h-full w-full object-cover"
                  />
                </div>
                
                <div className="sm:w-2/3 p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-lg">{vehicle.name}</h3>
                      <p className="text-sm text-muted-foreground">{vehicle.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">${vehicle.pricePerDay}</p>
                      <p className="text-xs text-muted-foreground">per day</p>
                    </div>
                  </div>
                  
                  <div className="my-3 flex flex-wrap gap-2">
                    {vehicle.features.map((feature, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 rounded-full bg-secondary"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{vehicle.location}</span>
                  </div>
                  
                  <Button className="w-full">
                    <Car className="mr-2 h-4 w-4" /> Book Now
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VehicleRental;
