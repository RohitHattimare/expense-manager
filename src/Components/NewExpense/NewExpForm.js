import React, { useState } from 'react';

import "./NewExpForm.css"
const NewExpForm = (props) => {
    // const [newTitle, setNewTitle] = useState("");
    // const [newDate, setNewDate] = useState("");
    // const [newPrice, setNewPrice] = useState("");

    const [newData, setNewData] = useState({
        title: "",
        date: "",
        amount: ""
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
            return { ...prevState, amount: event.target.value }
        })
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        const newExpenseData = {
            title: newData.title,
            date: new Date(newData.date),
            amount: Number(newData.amount)
        }

        //To check the data is empty or not
        if (newExpenseData.amount === 0 || newExpenseData.title === "" || newExpenseData.date === "") {
            alert("Please fill the form");
            return;
        }
        else
            props.onAddExpense(newExpenseData);
        setNewData({
            title: "",
            date: "",
            amount: ""
        });
    }
    return (
        <form className="newExpense_form" onSubmit={formSubmitHandler}>
            <div className="expenses-filter__control">
                <div className="expenses-filter_form">
                    <label>Title </label>
                    <input
                        type="text"
                        required
                        onChange={setTitleHandler}
                        name="title"
                        value={newData.title} />
                </div>
                <div className="expenses-filter_form">
                    <label >Price </label>
                    <input
                        type="number"
                        required min='0'
                        step='1'
                        name="price"
                        onChange={setPriceHandler}
                        value={newData.amount} 
                        />
                </div>
                <div className="expenses-filter_form">
                    <label >Date </label>
                    <input
                        type="date"
                        required
                        name="date"
                        min="2019-02-14"
                        max="2023-10-04"
                        onChange={setDateHandler}
                        value={newData.date} />
                </div>
            </div>
            <div className="newExpense_action">
                <button type="button" onClick={props.onChangeVisibility}>Cancel</button>
                <button type="submit" className="btn" >New Expense</button>
            </div>
        </form >
    )
}

export default NewExpForm
