import './Chart.css';
import { ChartBar } from './ChartBar';

export const Chart = (props) => {
    const maxVal = Math.max(...props.dataPoints.map(dp => dp.value))

    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maxVal} label={dataPoint.label} />)}
        </div>
    )
}