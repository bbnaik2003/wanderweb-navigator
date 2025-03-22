
import Layout from '@/components/Layout';
import VehicleRental from '@/components/VehicleRental';
import { motion } from 'framer-motion';
import { Car } from 'lucide-react';

const Rentals = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold flex items-center">
            <Car className="mr-2 h-6 w-6 text-primary" />
            Vehicle Rentals
          </h1>
          <p className="text-muted-foreground">
            Find the perfect vehicle for your journey
          </p>
        </motion.div>
        
        <VehicleRental />
      </div>
    </Layout>
  );
};

export default Rentals;
