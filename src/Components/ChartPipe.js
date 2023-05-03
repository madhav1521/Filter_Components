import React from 'react'

export default function ChartPipe(props) {
    var chartHeight = '0%'
    if(props.maxValue > 20) {
        chartHeight = Math.round((props.value / props.maxValue) * 100 ) + '%' ;
    }
  return (
    <div className='chartbar '>
      <div className='chartbar-inner  '>
        <div className='chartbar-fill ' style={{height:chartHeight}}></div>
      </div>
      <div className='chartbar-label '>
        {props.label}
      </div>
    </div>
  )
}
