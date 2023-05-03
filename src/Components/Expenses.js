import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpenseChart from "./ExpenseChart";
import ExpenseChartDay from "./ExpenseChartDay";

function Expenses(props) {
    let [filterYear,setFilterYear] = useState('2020');
    let filterChangeHandler = selectedYear => {
        setFilterYear(selectedYear.target.value)
        console.log('selected!!' , selectedYear.target.value)
    }
    let filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    return (
        <>
            <Card className='form-card'>
                <ExpenseFilter selected={filterYear} onChange={filterChangeHandler} />
            </Card>
            <ExpenseChart expenses={filteredExpenses} />
            <ExpenseChartDay expenses={filteredExpenses} />
            <ExpenseItem filterItems={filteredExpenses} />
        </>
    )
};

export default Expenses;