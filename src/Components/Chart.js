import React from 'react'
import ChartPipe from './ChartPipe'

const Chart = (props) => {
    const datapointvalues = props.datapoints.map(datapoint => datapoint.value);
    const totalMaximum = Math.max(...datapointvalues);
    return (
        <div className='chart'>
            {props.datapoints.map((datapoint) =>
                <ChartPipe key={datapoint.label} label={datapoint.label} maxValue={totalMaximum} value={datapoint.value} />
            )}
        </div>
    )
};

export default Chart;
