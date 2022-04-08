import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "CurrencyChart - Multi Axis",
      },
    },
    scales: {
      y0: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const labels = ["January", "February", "March", "April", "May", "June"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
        yAxisID: "y0",
      },
      {
        label: "Dataset 2",
        data: [15000, 5000, 20000, 15000, 60000, 80000],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(255, 99, 132)",
        yAxisID: "y1",
      },
    ],
  };

  const config = {
    type: "line",
    data: data,
    options: {},
  };

  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
};
export default Chart;
