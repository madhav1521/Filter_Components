import { useState } from "react";
import Card from "./Card"
import ExpenseDate from "./ExpenseDate";
import ExpenseForm from "./ExpenseForm";

let ExpenseList = (props) => {
    const [name, setName] = useState(props.name);
    const clickEvent = (event) => {
        setName(event.target.value);
    }

    return (
        <li style={{display:"block" }}>
            <Card className='expense-inside'>
                <ExpenseDate date={props.date.toISOString()} />
                <div>{props.name}</div>
                <div>{props.amount}</div>
                <button onClick={clickEvent}>click</button>
            </Card>
        </li>
    )
}

export default ExpenseList;