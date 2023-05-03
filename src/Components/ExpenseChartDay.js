import React from 'react'
import Chart from './Chart';
import Moment from 'moment';

export default function ExpenseChartDay(props) {
    var chartDataPoints =
    [
    
        {label: 'Monday', value:0},
        {label: 'Tuesday', value:0},
        {label: 'Wednesday', value:0},
        {label: 'Thursday', value:0},
        {label: 'Friday', value:0},
        {label: 'Saturday', value:0},
        {label: 'Sunday', value:0},
        
    ]

    for (const expense of props.expenses ) {
        const expenseDay = Moment(expense.date).format('dddd');
        chartDataPoints.find(x => x.label === expenseDay).value += expense.amount;
    }

  return (
    <>
      <Chart datapoints={chartDataPoints}/>
    </>
  )
}
