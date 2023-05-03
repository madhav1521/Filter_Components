// import React from "react";
// import Card from "../Components/Card";
// import ExpenseList from "../Components/ExpenseList";
// import ExpenseForm from "../Components/ExpenseForm";
// import ExpenseFilter from "../Components/ExpenseFilter";
// import Expenses from "../Components/Expenses";

// const First = (props) => {
//     const expenses = [
//         {
//             date: new Date(2012, 5, 12),
//             name: 'madhav',
//             amount: 234,
//         },
//         {
//             date: new Date(2022, 15, 2),
//             name: 'uttam',
//             amount: 434,
//         },
//         {
//             date: new Date(2021, 4, 6),
//             name: 'yash',
//             amount: 334,
//         },
//     ]
//     const expenseDataToBeAdded = (saveExpense) => {
//         const expenseData = {
//             ...saveExpense,
//             id: Math.random().toString()
//         };
//         props.onAddExpense(expenseData);

//     };

    
//     return (
//         <>

//             <Card className='form-card'>
//                 <ExpenseForm onAddExpense={expenseDataToBeAdded} />
//             </Card>
//             <hr></hr>
//             <Card className='form-card'>
//                 <ExpenseFilter />
//             </Card>
//             <hr></hr>
//             <Card className='cardbg'>
//                 <div>Happy to be coded!</div>
//                 {/* <Expenses items={expenses}/> */}

//                 {props.expenses?.map((expense) => (
//                     <ExpenseList 
//                         date={expense.date} 
//                         name={expense.name} 
//                         amount={expense.amount} 
//                     />

//                 ))}
//                 {/* <ExpenseList
//                     date={expenses[0].date}
//                     name={expenses[0].name}
//                     amount={expenses[0].amount}
//                 />
//                 <ExpenseList
//                     date={expenses[1].date}
//                     name={expenses[1].name}
//                     amount={expenses[1].amount}
//                 />
//                 <ExpenseList
//                     date={expenses[2].date}
//                     name={expenses[2].name}
//                     amount={expenses[2].amount}
//                 /> */}
//             </Card>
//         </>
//     )
// }
// export default First;
