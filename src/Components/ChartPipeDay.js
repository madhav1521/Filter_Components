import React from 'react'

export default function ChartPipeDay() {
  return (
    <div className='chartbar '>
      <div className='chartbar-inner  '>
        <div className='chartbar-fill-day ' style={{height:chartHeight}}></div>
      </div>
      <div className='chartbar-label '>
        {props.label}
      </div>
    </div>
  )
}
