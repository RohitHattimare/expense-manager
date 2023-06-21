import React, { useState } from 'react';

import "./NewExpForm.css"
const NewExpForm = (props) => {
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
        props.onAddExpense(newExpenseData);
        setNewData({
            title: "",
            date: "",
            price: ""
        });
    }
    return (
        <form className="newExpense_form" onSubmit={formSubmitHandler}>
            <div className="expenses-filter__control">
                <div className="expenses-filter">
                    <label htmlFor="title">Title </label>
                    <input type="text" onChange={setTitleHandler} name="title" value={newData.title} />
                </div>
                <div className="expenses-filter">
                    <label >Price </label>
                    <input type="number" min='0' step='1' name="price" onChange={setPriceHandler} value={newData.price} />
                </div>
                <div className="expenses-filter">
                    <label >Date </label>
                    <input type="date" name="date" min="2019-02-14" max="2023-10-04" onChange={setDateHandler} value={newData.date} />
                </div>
            </div>
            <div className="newExpense_action"></div>
            <button type="submit" className="btn" >New Expense</button>
        </form>
    )
}

export default NewExpForm
