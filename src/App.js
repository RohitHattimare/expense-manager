import { useState } from 'react';
import './App.css';
import Expense from './Components/Expense';
import NewExpense from './Components/NewExpense/NewExpense';
import { items } from './Components/data';


function App() {
  const [expences, setExpenses] = useState(items);

  const onAddExpense = (newData) => {
    setExpenses(prevExpenses => {
      return [newData, ...prevExpenses,]
    });
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense onAddExpense={onAddExpense}></NewExpense>
      <Expense items={expences} />
    </div >
  );
}

export default App;
