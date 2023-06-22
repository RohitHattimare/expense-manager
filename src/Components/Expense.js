import ExpenseItem from "./Expense/ExpenseItem";
import Card from "./Expense/Card";
import './Expense.css';
import ExpenseFilter from "./Expense/ExpenseFilter";
import { useState } from 'react';

const Expense = (props) => {
    const [selectedYear, setSelectedYear] = useState('2022');
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
            {filteredExpenses.length === 0 ? (
                <h2>No Expense Found</h2>) : (
                filteredExpenses.map((item) => <ExpenseItem key={item.id} item={item} />)
            )}
        </Card>
    )
}
export default Expense;
