import React from 'react';
import NewExpForm from './NewExpForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseData = (newFormData) => {
        const newExp = {
            ...newFormData,
            id: Math.random().toString()
        }
        props.onAddExpense(newExp);
    };

    return (
        <div className="new-expense1">
            <NewExpForm onAddExpense={saveExpenseData} />
        </div>
    )
}

export default NewExpense;

