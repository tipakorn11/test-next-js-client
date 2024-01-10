import React, { useState, useEffect } from "react"
import { Chart } from 'primereact/chart';

const BarChart = (props) => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
  
    useEffect(() => {
      const data = {
        labels: ['D1', 'D2', 'D3', 'D4','D5', 'D6', 'D7', 'D8', 'D9'],
        datasets: [
          {
            label: 'Sales',
            data: [540, 325, 702, 620, 340, 632, 252, 521, 326],

            backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0,0,0,200);
        
                gradient.addColorStop(0,"#44BFFF");
                gradient.addColorStop(1,"#4E6ACF");
                return gradient;
            },
            borderWidth: 1
          }
        ]
      };
      const options = {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
            x: {
              border: {
                color: "gray",
              },
              grid: {
                lineWidth: 0,
              },
            },
          y: {
            title: {
              display: true,
              text: 'THB',
              // color: "white",
            },
            grid: {
              color: "#CDC9C9",
            },
            border: {
              color: "gray",
            },
            ticks: {
              // color: "white",
              callback: function (value, index, ticks) {
                return value + "K";
              },
            },
            // beginAtZero: true
          },
         
        },
        // layout: {
        //   padding: {
        //     // top: 20, // Adjust top padding as needed
        //     left: 80,
        //   }
        // },
        barThickness: 20, // Set the desired bar thickness
      };
  
      setChartData(data);
      setChartOptions(options);
    }, []);
  
    return(
        <>
        <Chart type="bar" data={chartData} options={chartOptions} height={175} width={500}/>
        </>
    )
}

export default BarChart;