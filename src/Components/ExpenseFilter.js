import React from "react";

const ExpenseFilter = (props) => {
    return (
        <>
            <div className="expenses-filter" >
                <label >Filter by year</label>
                <select className="select-dropdown"  value={props.selected} onChange={props.onChange}>
                    <option value='2020' >2020</option>
                    <option value='2021' >2021</option>
                    <option value='2022' >2022</option>
                    <option value='2023' >2023</option>
                </select>
            </div>
        </>
    )
}

export default ExpenseFilter;