import { useEffect, useState } from 'react'

import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";



interface ExampleChartProps {
  xAxis: string[],
  yAxis: number[],
}

export default function ExampleChart(props: ExampleChartProps) {
  let [chartCtx, setChartCtx] = useState<ApexOptions | null>(null);

  useEffect(() => {
    if (!chartCtx) {
      setChartCtx({
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: props.xAxis,
        },
        series: [
          {
            name: "series-1",
            data: props.yAxis,
          }
        ]
      });
    }
  })

  if (!chartCtx) return (<></>)

  return (
    <Chart 
      options={chartCtx}
      series={chartCtx.series}
      type="bar"
      width="500"
      height="500"
    />
  )
}
