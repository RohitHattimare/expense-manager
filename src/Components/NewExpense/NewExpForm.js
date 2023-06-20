import React, { useState } from 'react';

import "./NewExpForm.css"
const NewExpForm = () => {
    const [newTitle, setNewTitle] = useState("");
    const [newDate, setNewDate] = useState("");
    const [newPrice, setNewPrice] = useState("");

    const setTitleHandler = (event) => {
        setNewTitle(event.target.value);
        console.log(newTitle);
    }
    const setDateHandler = (event) => {
        setNewDate(event.target.value);
        console.log(newDate);
    }
    const setPriceHandler = (event) => {
        setNewPrice(event.target.value);
        console.log(newPrice);
    }


    return (
        <form className="newExpense_form">
            <div className="expenses-filter__control">
                <div className="expenses-filter">
                    <label for="title">Title </label>
                    <input type="text" onChange={setTitleHandler} name="title" />
                </div>
                <div className="expenses-filter">
                    <label for="Price">Price </label>
                    <input type="number" min='0.5' step='10' name="price" onChange={setPriceHandler} />
                </div>
                <div className="expenses-filter">
                    <label for="Date">Date </label>
                    <input type="date" name="date" min="2023-02-14" max="2023-10-04" onChange={setDateHandler} />
                </div>
            </div>
            <div className="newExpense_action"></div>
            <button type="submit" className="btn" >New Expense</button>
        </form>
    )
}

export default NewExpForm
