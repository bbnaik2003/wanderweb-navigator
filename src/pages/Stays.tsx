
import Layout from '@/components/Layout';
import Homestay from '@/components/Homestay';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const Stays = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold flex items-center">
            <Home className="mr-2 h-6 w-6 text-primary" />
            Homestays
          </h1>
          <p className="text-muted-foreground">
            Discover authentic accommodations for an immersive experience
          </p>
        </motion.div>
        
        <Homestay />
      </div>
    </Layout>
  );
};

export default Stays;
