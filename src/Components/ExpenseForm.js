import { useState } from "react";

const ExpenseForm = (props) => {
    const [enterName, setEnterName] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');
    const [editForm, setEditForm] = useState(false);

    const changeName = (event) => {
        setEnterName(event.target.value);
    }

    const changeAmount = (event) => {
        setEnterAmount(event.target.value);
    }

    const changeDate = (event) => {
        setEnterDate(event.target.value);
    };

    const submitFormHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            name: enterName,
            amount: enterAmount,
            date: new Date(enterDate),
        }
        props.onAddExpense(expenseData);
        setEnterAmount('');
        setEnterDate('');
        setEnterName('');
        // setEditForm(false);
    };

    const openFormHandler = () => {
        setEditForm(true);
        document.getElementById('formsss').className='withform';
    }
    const cancelFormHandler = () => {
        setEditForm(false);
        document.getElementById('formsss').className='withoutform';
    }

    return (
        <div id="formsss">
            {!editForm && <button className="form-btn" onClick={openFormHandler}>Add New Expense</button>}
            
            {editForm && <form className="form row" onSubmit={submitFormHandler} >
                <div className="form-content col-6">
                    <label>Name: </label>
                    <input type='text' value={enterName} onChange={changeName} />
                </div>
                <div className="form-content col-6">
                    <label>Amount: </label>
                    <input type='number' value={enterAmount} min='20' max='2000' onChange={changeAmount} />
                </div>
                <div className="form-content col-6">
                    <label>Date: </label>
                    <input type='date' value={enterDate} min='2019-01-01' max='2023-12-31' onChange={changeDate} />
                </div>
                <button type="submit" className="form-btn col" >Add Expense</button>
                <button type="button" className="form-btn col" onClick={cancelFormHandler}>Cancel</button>
            </form>}
        </div>
    )
}
export default ExpenseForm;