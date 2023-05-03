import './App.css';
import React, { useState } from 'react';
import Card from "./Components/Card";
import ExpenseList from "./Components/ExpenseList";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseFilter from "./Components/ExpenseFilter";
import Expenses from "./Components/Expenses";

const dummy_expenses = [
  {
    id: 'id1',
    date: new Date(2020, 5, 12),
    name: 'madhav',
    amount: 234,
  },
  {
    id: 'id2',
    date: new Date(2022, 15, 2),
    name: 'uttam',
    amount: 434,
  },
  {
    id: 'id3',
    date: new Date(2021, 4, 6),
    name: 'yash',
    amount: 334,
  },
]
function App(props) {
  const [expenses, setExpenses] = useState(dummy_expenses);


  const expenseDataToBeAdded = (saveExpense) => {
    const expenseData = {
      ...saveExpense,

      id: Math.random().toString(),
    };
    setExpenses(prevExpenses => {
      return [saveExpense, ...prevExpenses]
    })
    console.log(expenseData);

  };


  return (
    <div className="App">

      <Card className='cardbg'>
        <div>Happy to be coded!</div>
        <Card className='form-card'>
          <ExpenseForm onAddExpense={expenseDataToBeAdded} />
        </Card> 

        <Expenses items={expenses} />

      </Card>





    </div>
  );
}

export default App;
