import './ExpenseDate.css';

const ExpenseDate = (props) => {
    const date = new Date(props.date);
    const year = date.toLocaleString('en-US', { year: 'numeric' });
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });

    return (
        < div className="expense-date" >
            <div className="date__day">{day}</div>
            <div className="date__month">{month}</div>
            <div className="date__year">{year}</div>
        </div >
    )
}
export default ExpenseDate;