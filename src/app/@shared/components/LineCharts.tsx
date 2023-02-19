import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';


ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const options = {
  plugins: {
  subtitle: {
    display: true,
    text: 'Custom Chart Subtitle'
  },
  tooltip: {
    backgroundColor: "#FFFFFF",
    titleColor: "#2B2B2B",
    bodyColor: "#2B2B2B",
    padding: 10,
    borderColor: "#8A62D7",
    cornerRadius: 13,
    borderWidth: 1,
  },
          font: {
              color: "#2B2B2B",
              size: 10,
              family: '"IBM Plex Sans Thai", sans-serif',
          }


          }
        };
  



const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      type: 'line' as const,
      label: 'Значение 1',
      borderColor: '#8A62D7',
      borderWidth: 2,
      fill: false,
      data: [ 3, 4, 5, 9, 2, 1],
    },
    {
      type: 'bar' as const,
      label: 'Значение 2',
      backgroundColor: '#A8F2A2',
      data: [ 3, 1, 9, 2, 6, 1],
    },
  ],
};

export function LineCharts () {
    return (<>
 <Chart type='bar' data={data} options={options}/>;

    </>)
}