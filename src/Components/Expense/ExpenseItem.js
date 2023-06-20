import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ item: { date, title, amount } }) => {
    // console.log('id ', id);

    // const date = new Date(item.date);
    // const title = item.title;
    // const amount = item.amount;
    return (
        <div className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;