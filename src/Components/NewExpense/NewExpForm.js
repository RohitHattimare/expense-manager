import React, { useState } from 'react';

import "./NewExpForm.css"
const NewExpForm = () => {
    // const [newTitle, setNewTitle] = useState("");
    // const [newDate, setNewDate] = useState("");
    // const [newPrice, setNewPrice] = useState("");

    const [newData, setNewData] = useState({
        title: "",
        date: "",
        price: ""
    });

    const setTitleHandler = (event) => {
        setNewData((prevState) => {
            return { ...prevState, title: event.target.value }
        })
    }
    const setDateHandler = (event) => {
        setNewData((prevState) => {
            return { ...prevState, date: event.target.value }
        })
    }
    const setPriceHandler = (event) => {
        setNewData((prevState) => {
            return { ...prevState, price: event.target.value }
        })
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const newExpenseData = {
            title: newData.title,
            date: newData.date,
            price: newData.price
        }
        console.log(newExpenseData);
    }
    return (
        <form className="newExpense_form" onSubmit={formSubmitHandler}>
            <div className="expenses-filter__control">
                <div className="expenses-filter">
                    <label for="title">Title </label>
                    <input type="text" onChange={setTitleHandler} name="title" />
                </div>
                <div className="expenses-filter">
                    <label for="Price">Price </label>
                    <input type="number" min='0' step='10' name="price" onChange={setPriceHandler} />
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
