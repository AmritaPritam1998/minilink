import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const ApexChart = () => {
    const [state, setState] = React.useState({
      
        series: [{
          data: [200,400,600,800]
        }],
        options: {
          chart: {
            type: 'bar',
            height: 20,
          },
          plotOptions: {
            bar: {
              borderRadius: 2,
              borderRadiusApplication: 'end',
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: [ "19-01-2025","20-01-2025","21-01-2015"
            ],
          }
        },
      
      
    });

    

    return (
      <div>
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
          </div>
        <div id="html-dist"></div>
      </div>
    );
  }
  export default ApexChart;