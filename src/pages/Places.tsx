
import Layout from '@/components/Layout';
import PlaceRecommendation from '@/components/PlaceRecommendation';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Places = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold flex items-center">
            <MapPin className="mr-2 h-6 w-6 text-primary" />
            Place Recommendations
          </h1>
          <p className="text-muted-foreground">
            Discover attractions, restaurants, and experiences near you
          </p>
        </motion.div>
        
        <PlaceRecommendation />
      </div>
    </Layout>
  );
};

export default Places;
