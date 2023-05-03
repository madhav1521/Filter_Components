import ExpenseList from "./ExpenseList";

const ExpenseItem = (props) => {
    if(props.filterItems.length === 0) {
       return <h2>No expanses in this year</h2>
    }
    return (
        <ul style={{padding:"0 40px"}}>
            {props.filterItems.map((expense, index) => (
                <ExpenseList
                    key={index}
                    date={expense.date}
                    name={expense.name}
                    amount={expense.amount}
                />
            ))}
        </ul>
    )
}

export default ExpenseItem;