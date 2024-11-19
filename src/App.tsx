import { useEffect, useRef, useState } from 'react';
import './App.css';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';
import ExpenseList from './expense-tracker/components/ExpenseList';
import ProductList from './expense-tracker/components/ProductList';

function AppTemp() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 11, category: 'Utilities' },
    { id: 2, description: 'bbb', amount: 12, category: 'Groceries' },
    { id: 3, description: 'ccc', amount: 13, category: 'Entertainment' },
    { id: 4, description: 'ddd', amount: 14, category: 'Utilities' },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className='mb-5'>
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className='mb-3'>
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

function App() {
  const [category, setCategory] = useState('');

  return (
    <div>
      <select
        className='form-select'
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=''></option>
        <option value='Clothing'>Clothing</option>
        <option value='Household'>Household</option>
      </select>
      <ProductList category={category} />
    </div>
  );
}

export default App;
