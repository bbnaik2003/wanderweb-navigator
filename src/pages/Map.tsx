
import Layout from '@/components/Layout';
import MapComponent from '@/components/Map';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const Map = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div>
            <h1 className="text-3xl font-bold flex items-center">
              <Globe className="mr-2 h-6 w-6 text-primary" />
              Interactive Travel Map
            </h1>
            <p className="text-muted-foreground">
              Explore destinations and discover points of interest
            </p>
          </div>
        </motion.div>
        
        <MapComponent />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-6"
        >
          <p className="text-sm text-muted-foreground">
            This is a placeholder for an interactive map. In a production application, this would be implemented with
            Mapbox GL JS or Google Maps API to provide a rich, interactive mapping experience. Features would include:
          </p>
          
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
            <li>Interactive 3D globe or map visualization</li>
            <li>Points of interest with detailed information</li>
            <li>Route planning and distance calculations</li>
            <li>Location search and filtering</li>
            <li>User location tracking</li>
            <li>Custom map styles and themes</li>
          </ul>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Map;
