
import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Users, Plus, Trash2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Expense {
  id: string;
  description: string;
  amount: number;
  paidBy: string;
  splitAmong: string[];
}

interface Person {
  id: string;
  name: string;
}

const ExpenseSplitter = () => {
  const [people, setPeople] = useState<Person[]>([
    { id: '1', name: 'You' },
    { id: '2', name: 'Alex' },
    { id: '3', name: 'Taylor' }
  ]);
  
  const [expenses, setExpenses] = useState<Expense[]>([
    { 
      id: '1', 
      description: 'Hotel Stay', 
      amount: 350, 
      paidBy: '1', 
      splitAmong: ['1', '2', '3'] 
    },
    { 
      id: '2', 
      description: 'Dinner', 
      amount: 120, 
      paidBy: '2', 
      splitAmong: ['1', '2', '3'] 
    },
    { 
      id: '3', 
      description: 'Car Rental', 
      amount: 210, 
      paidBy: '3', 
      splitAmong: ['1', '3'] 
    }
  ]);
  
  const [newPerson, setNewPerson] = useState('');
  const [newExpenseDesc, setNewExpenseDesc] = useState('');
  const [newExpenseAmount, setNewExpenseAmount] = useState('');
  const [newExpensePaidBy, setNewExpensePaidBy] = useState('1');
  const [newExpenseSplitAmong, setNewExpenseSplitAmong] = useState<string[]>(['1']);

  const calculateBalances = () => {
    const balances: Record<string, number> = {};
    
    // Initialize balances for all people
    people.forEach(person => {
      balances[person.id] = 0;
    });
    
    // Calculate who paid what and who owes what
    expenses.forEach(expense => {
      const paidBy = expense.paidBy;
      const splitAmong = expense.splitAmong;
      const amountPerPerson = expense.amount / splitAmong.length;
      
      // Add the full amount to the person who paid
      balances[paidBy] += expense.amount;
      
      // Subtract the split amount from each person who benefits
      splitAmong.forEach(personId => {
        balances[personId] -= amountPerPerson;
      });
    });
    
    return balances;
  };

  const balances = calculateBalances();
  
  const addPerson = () => {
    if (!newPerson.trim()) return;
    
    const newId = (people.length + 1).toString();
    setPeople([...people, { id: newId, name: newPerson }]);
    setNewPerson('');
  };
  
  const addExpense = () => {
    if (!newExpenseDesc.trim() || !newExpenseAmount || !newExpensePaidBy || newExpenseSplitAmong.length === 0) {
      return;
    }
    
    const newId = (expenses.length + 1).toString();
    setExpenses([
      ...expenses, 
      { 
        id: newId, 
        description: newExpenseDesc, 
        amount: parseFloat(newExpenseAmount), 
        paidBy: newExpensePaidBy, 
        splitAmong: newExpenseSplitAmong 
      }
    ]);
    
    setNewExpenseDesc('');
    setNewExpenseAmount('');
  };
  
  const removeExpense = (id: string) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };
  
  const togglePersonInSplit = (personId: string) => {
    if (newExpenseSplitAmong.includes(personId)) {
      setNewExpenseSplitAmong(newExpenseSplitAmong.filter(id => id !== personId));
    } else {
      setNewExpenseSplitAmong([...newExpenseSplitAmong, personId]);
    }
  };

  const getPersonName = (id: string) => {
    return people.find(p => p.id === id)?.name || 'Unknown';
  };

  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="glass-card p-6"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Users className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Trip Participants</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {people.map(person => (
            <div key={person.id} className="flex items-center p-3 rounded-lg bg-secondary/50">
              <div className="flex-1">
                <p className="font-medium">{person.name}</p>
                <p className="text-sm text-muted-foreground">
                  Balance: 
                  <span className={`ml-1 font-medium ${balances[person.id] >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                    ${balances[person.id].toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex space-x-2">
          <div className="flex-1">
            <Input 
              value={newPerson} 
              onChange={e => setNewPerson(e.target.value)} 
              placeholder="Add new person" 
            />
          </div>
          <Button onClick={addPerson} size="sm" variant="outline">
            <Plus className="h-4 w-4 mr-1" /> Add
          </Button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-card p-6"
      >
        <div className="flex items-center space-x-2 mb-4">
          <DollarSign className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-semibold">Expenses</h2>
        </div>
        
        <div className="space-y-4 mb-6">
          {expenses.map(expense => (
            <Card key={expense.id} className="p-4 flex justify-between items-center card-hover">
              <div>
                <p className="font-medium">{expense.description}</p>
                <p className="text-sm text-muted-foreground">
                  Paid by {getPersonName(expense.paidBy)}
                </p>
                <p className="text-xs text-muted-foreground">
                  Split among: {expense.splitAmong.map(id => getPersonName(id)).join(', ')}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <p className="font-semibold">${expense.amount.toFixed(2)}</p>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => removeExpense(expense.id)}
                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expenseDesc">Description</Label>
              <Input 
                id="expenseDesc"
                value={newExpenseDesc} 
                onChange={e => setNewExpenseDesc(e.target.value)} 
                placeholder="e.g. Dinner" 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expenseAmount">Amount</Label>
              <Input 
                id="expenseAmount"
                type="number" 
                value={newExpenseAmount} 
                onChange={e => setNewExpenseAmount(e.target.value)} 
                placeholder="0.00" 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Paid by</Label>
              <div className="grid grid-cols-3 gap-2">
                {people.map(person => (
                  <Button
                    key={person.id}
                    variant={newExpensePaidBy === person.id ? "default" : "outline"}
                    className="w-full"
                    onClick={() => setNewExpensePaidBy(person.id)}
                  >
                    {person.name}
                  </Button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Split among</Label>
              <div className="grid grid-cols-3 gap-2">
                {people.map(person => (
                  <Button
                    key={person.id}
                    variant={newExpenseSplitAmong.includes(person.id) ? "default" : "outline"}
                    className="w-full"
                    onClick={() => togglePersonInSplit(person.id)}
                  >
                    {person.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          <Button onClick={addExpense} className="w-full">
            <Plus className="h-4 w-4 mr-2" /> Add Expense
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ExpenseSplitter;
