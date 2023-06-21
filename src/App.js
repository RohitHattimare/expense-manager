import './App.css';
import Expense from './Components/Expense';
import ExpenseFilter from './Components/Expense/ExpenseFilter';
import NewExpense from './Components/NewExpense/NewExpense';
import { items } from './Components/data';


function App() {


  const onAddExpense = (newData) => {
    console.log("inside App :", newData);
  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense onAddExpense={onAddExpense}></NewExpense>
      <ExpenseFilter />
      <Expense items={items} />
    </div >
  );
}

export default App;
