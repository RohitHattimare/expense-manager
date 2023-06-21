import React from 'react';
import NewExpForm from './NewExpForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseData = (newFormData) => {
        const newExp = {
            ...newFormData,
            id: Math.random().toString()
        }
        console.log("newExp :", newExp);
        props.onAddExpense(newExp);
    };

    return (
        <div className="new-expense">
            <NewExpForm onAddExpense={saveExpenseData} />
        </div>
    )
}

export default NewExpense;

