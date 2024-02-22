import './Chart.css';
import ChartBar from './ChartBar';
const Chart = (props) => {


    const maxArray = props.dataPoints.map(dataPoint => dataPoint.value)
    const maxData = Math.max(...maxArray);
    return (
        <div className="chart">
            {props.dataPoints.map(chartbar =>
                <ChartBar
                    key={chartbar.label}
                    value={chartbar.value}
                    label={chartbar.label}
                    maxValue={maxData}
                />)}
        </div>
    )
}
export default Chart; 