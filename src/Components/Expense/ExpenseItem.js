import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = ({ item }) => {
    console.log(item);
    const date = new Date(item.date);
    const title = item.title;
    const amount = item.amount;
    return (
        // <div className="expense-item">
        //     <div>{props.date.toISOString()}</div>
        //     <div className="expense-item__description">
        //         <h2>{props.title}</h2>
        //         <div className="expense-item__price">{props.amount}</div>
        //     </div>
        // </div>
        <div className="expense-item">
            <div>{date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;