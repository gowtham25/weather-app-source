import React from 'react';
import { VictoryChart, VictoryLine, VictoryScatter } from "victory";

const LineChart = ({ data, title }) => {
    return (
        <div className='chart-container'>
            <span className='title'>{title}</span>
            <VictoryChart polar={false} height={390}>
                <VictoryLine
                    interpolation='linear'
                    data={data}
                    style={{ data: { stroke: "#c43a31" } }}
                    labels={({ datum }) => datum.y}
                />
                <VictoryScatter
                    data={data}
                    size={5}
                    style={{ data: { fill: "#c43a31" } }}
                />
            </VictoryChart>
        </div>
    )
}

export default LineChart;