import React from 'react';
import NewExpForm from './NewExpForm';
import './NewExpense.css';
import { useState } from 'react';

const NewExpense = (props) => {

    const [formVisibility, setFormVisibility] = useState(false);

    const saveExpenseData = (newFormData) => {
        const newExp = {
            ...newFormData,
            id: Math.random().toString()
        }
        props.onAddExpense(newExp);
    };

    const changeFormVisible = () => {
        setFormVisibility(true);
    }

    const changeFormNotVisible = () => {
        setFormVisibility(false);
    }

    return (
        <div className="new-expense_wrapper">
            {!formVisibility ?
                <button onClick={changeFormVisible}> Add New Expense </button> :
                <NewExpForm onChangeVisibility={changeFormNotVisible} onAddExpense={saveExpenseData} />}
        </div>
    )
}

export default NewExpense;

