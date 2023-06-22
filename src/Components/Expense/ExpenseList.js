import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
    if (props.expenses.length === 0) {
        return <h2>No Expense</h2>
    }
    return (
        props.expenses.map((item) => <ExpenseItem key={item.id} item={item} />)
    );
}
export default ExpenseList;