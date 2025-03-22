
import Layout from '@/components/Layout';
import ExpenseSplitter from '@/components/ExpenseSplitter';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';

const Expenses = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold flex items-center">
            <Calculator className="mr-2 h-6 w-6 text-primary" />
            Expense Splitter
          </h1>
          <p className="text-muted-foreground">
            Keep track of shared expenses and see who owes what
          </p>
        </motion.div>
        
        <ExpenseSplitter />
      </div>
    </Layout>
  );
};

export default Expenses;
