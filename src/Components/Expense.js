import ExpenseItem from "./Expense/ExpenseItem";
import Card from "./Expense/Card";
import './Expense.css';

const Expense = (props) => {
    console.log("Inside Expense");


    return (

        <Card className="expenses" >
            {props.items.map((item) => <ExpenseItem key={item.id} item={item} />)}

            {/* <ExpenseItem item={props.items[0]} />
            <ExpenseItem item={props.items[1]} />
            <ExpenseItem item={props.items[2]} />
            <ExpenseItem item={props.items[3]} /> */}

            {/* <ExpenseItem
                title={item1.title}
                amount={item1.amount}
                id={item1.id}
                date={item1.date}
            />
            <ExpenseItem
                title={item2.title}
                amount={item2.amount}
                id={item2.id}
                date={item2.date}
            />
            <ExpenseItem
                title={item3.title}
                amount={item3.amount}
                id={item3.id}
                date={item3.date}
            />

            <ExpenseItem
                title={item4.title}
                amount={item4.amount}
                id={item4.id}
                date={item4.date}
            /> */}
        </Card>
    )
}





export default Expense;
