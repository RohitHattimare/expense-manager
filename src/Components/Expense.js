import Card from "./Expense/Card";
import './Expense.css';
import ExpenseFilter from "./Expense/ExpenseFilter";
import { useState } from 'react';
import ExpenseList from "./Expense/ExpenseList";
import ExpensesChart from "./Expense/ExpensesChart";

const Expense = (props) => {
    const [selectedYear, setSelectedYear] = useState('2023');
    function yearChnageFilter(year) {
        setSelectedYear(year);
    }
    //Filtered Expenses array using slected year
    const filteredExpenses = props.items.filter(expense => {
        return (expense.date.getFullYear().toString() === selectedYear)
    })
    // console.log("expenses", filteredExpenses);

    return (
        <Card className="expenses" >
            <ExpenseFilter onYearFilter={yearChnageFilter} selectedYear={selectedYear} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList expenses={filteredExpenses} />
        </Card>
    )
}
export default Expense;
