import React from "react";
import Moment from "moment";

function ExpenseDate(props) {
    var date = Moment(props.date)
    var day = date.format('dddd');
    var month = date.format('MMMM');
    var year = date.format('YYYY');
    return (
        <div>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>
    )
}

export default ExpenseDate;