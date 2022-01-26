import ChartBar from "./ChartBar";
import './Chart.css';

const Chart=(props)=>{
   const dataPointValues=props.dataPoints.map(dataPoint=>dataPoint.value);
   const maximum=Math.max(...dataPointValues);
    return (
        <div className="chart">
            {
                props.dataPoints.map((dataPoint)=>(
                    <ChartBar
                    key={dataPoint.label}
                    label={dataPoint.label}
                    maxVal={maximum}
                    value={dataPoint.value}
                  />
                ))
            }
        </div>
    )
}
export default Chart;