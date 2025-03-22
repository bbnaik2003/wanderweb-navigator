
import { motion } from 'framer-motion';
import { ArrowRight, Search, Map, Calculator, Home, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      title: 'Interactive Travel Map',
      description: 'Explore destinations on our interactive 3D globe with points of interest.',
      icon: <Map className="h-8 w-8 text-primary" />,
      link: '/map'
    },
    {
      title: 'Expense Splitting',
      description: 'Split travel expenses easily among your trip companions.',
      icon: <Calculator className="h-8 w-8 text-primary" />,
      link: '/expenses'
    },
    {
      title: 'Place Recommendations',
      description: 'Discover hidden gems and popular attractions at your destination.',
      icon: <Search className="h-8 w-8 text-primary" />,
      link: '/places'
    },
    {
      title: 'Vehicle Rentals',
      description: 'Find the perfect vehicle for your adventure from our curated selection.',
      icon: <Car className="h-8 w-8 text-primary" />,
      link: '/rentals'
    },
    {
      title: 'Homestay Discovery',
      description: 'Experience authentic living with our handpicked homestay options.',
      icon: <Home className="h-8 w-8 text-primary" />,
      link: '/stays'
    }
  ];

  return (
    <Layout>
      <div className="py-12 md:py-24 space-y-24">
        {/* Hero Section */}
        <section className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              Your Ultimate Travel Companion
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Travel Smarter, Experience More
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              All-in-one travel companion to plan trips, split expenses, find places,
              and discover exceptional vehicles and accommodations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button asChild size="lg" className="h-12 px-6">
              <Link to="/map">
                Explore Map <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6">
              <Link to="/places">
                Discover Places <Search className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Everything You Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive travel tools help you manage every aspect of your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={feature.link} className="block h-full">
                  <div className="h-full glass-card p-6 flex flex-col card-hover">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground flex-grow">{feature.description}</p>
                    <div className="mt-4 flex items-center text-primary font-medium">
                      Explore <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-12 text-center space-y-6"
          >
            <h2 className="text-3xl font-bold">Ready to Begin Your Journey?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start planning your perfect trip with our suite of travel tools.
            </p>
            <Button asChild size="lg" className="h-12 px-8">
              <Link to="/map">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
