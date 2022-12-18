import { useState } from 'react'
import './App.css'

import CurveView from "./components/curveView"

interface UsTreasuryCurve {
  date: string
  one_month: number
  two_month: number
  three_month: number
  four_month: number
  six_month: number
  one_year: number
  two_year: number
  three_year: number
  five_year: number
  seven_year: number
  ten_year: number
  twenty_year: number
  thirty_year: number
}

function App() {
  const [count, setCount] = useState(0)
  const sampleData: UsTreasuryCurve[] = [
    {date: "12/01/2022",  one_month: 4.04, two_month:	4.24, three_month:	4.33, four_month:	4.52, six_month:	4.65, one_year:	4.66, two_year:	4.25, three_year:	3.98, five_year: 3.68, seven_year:	3.62, ten_year:	3.53, twenty_year:	3.85, thirty_year:	3.64},
    {date: "12/02/2022",	one_month: 3.91, two_month:	4.25, three_month:	4.34, four_month:	4.52, six_month:	4.65, one_year:	4.69, two_year:	4.28, three_year:	3.99,	five_year: 3.67, seven_year:	3.61, ten_year:	3.51, twenty_year:	3.79, thirty_year:	3.56},
    {date: "12/05/2022",	one_month: 3.93, two_month:	4.25, three_month:	4.36, four_month:	4.56, six_month:	4.73, one_year:	4.77, two_year:	4.41, three_year:	4.13,	five_year: 3.80, seven_year:	3.72, ten_year:	3.60, twenty_year:	3.84, thirty_year:	3.62},
    {date: "12/06/2022",	one_month: 3.87, two_month:	4.19, three_month:	4.37, four_month:	4.54, six_month:	4.74, one_year:	4.73, two_year:	4.34, three_year:	4.07,	five_year: 3.73, seven_year:	3.64, ten_year:	3.51, twenty_year:	3.77, thirty_year:	3.52},
    {date: "12/07/2022",	one_month: 3.79, two_month:	4.10, three_month:	4.29, four_month:	4.53, six_month:	4.72, one_year:	4.67, two_year:	4.26, three_year:	3.97,	five_year: 3.62, seven_year:	3.54, ten_year:	3.42, twenty_year:	3.66, thirty_year:	3.42},
    {date: "12/08/2022",	one_month: 3.75, two_month:	4.11, three_month:	4.28, four_month:	4.53, six_month:	4.71, one_year:	4.71, two_year:	4.31, three_year:	4.04,	five_year: 3.71, seven_year:	3.63, ten_year:	3.48, twenty_year:	3.71, thirty_year:	3.44},
    {date: "12/09/2022",	one_month: 3.81, two_month:	4.13, three_month:	4.31, four_month:	4.54, six_month:	4.72, one_year:	4.72, two_year:	4.33, three_year:	4.07,	five_year: 3.75, seven_year:	3.69, ten_year:	3.57, twenty_year:	3.82, thirty_year:	3.56},
    {date: "12/12/2022",	one_month: 3.86, two_month:	4.18, three_month:	4.38, four_month:	4.60, six_month:	4.78, one_year:	4.75, two_year:	4.39, three_year:	4.10,	five_year: 3.80, seven_year:	3.73, ten_year:	3.61, twenty_year:	3.84, thirty_year:	3.57},
    {date: "12/13/2022",	one_month: 3.89, two_month:	4.16, three_month:	4.35, four_month:	4.58, six_month:	4.70, one_year:	4.64, two_year:	4.22, three_year:	3.96,	five_year: 3.66, seven_year:	3.60, ten_year:	3.51, twenty_year:	3.74, thirty_year:	3.53},
    {date: "12/14/2022",	one_month: 3.91, two_month:	4.14, three_month:	4.33, four_month:	4.58, six_month:	4.68, one_year:	4.64, two_year:	4.23, three_year:	3.94,	five_year: 3.64, seven_year:	3.59, ten_year:	3.49, twenty_year:	3.74, thirty_year:	3.52},
    {date: "12/15/2022",	one_month: 3.95, two_month:	4.24, three_month:	4.34, four_month:	4.56, six_month:	4.70, one_year:	4.65, two_year:	4.23, three_year:	3.96,	five_year: 3.62, seven_year:	3.56, ten_year:	3.44, twenty_year:	3.69, thirty_year:	3.48},
    {date: "12/16/2022",	one_month: 3.94, two_month:	4.22, three_month:	4.31, four_month:	4.54, six_month:	4.68, one_year:	4.61, two_year:	4.17, three_year:	3.91,	five_year: 3.61, seven_year:	3.58, ten_year:	3.48, twenty_year:	3.73, thirty_year:	3.53},
  ]
  console.log(Object.keys(sampleData[0]).filter((key) => key != "date"));
  console.log(Object.values(sampleData[0]).filter((val) => typeof(val) == "number"));

  return (
    <div className="App">
      <div>
        <CurveView
          xAxis={Object.keys(sampleData[0]).filter((key) => key != "date")}
          yAxis={Object.values(sampleData[0]).filter((val) => typeof(val) == "number")}
        />
      </div>
    </div>
  )
}

export default App
