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
import moment from "moment";
import "chartjs-adapter-moment";
import styled from "styled-components";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ chartData }) => {
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
        text: "Coin Price & Market Cap",
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
  // const dateTo = moment().format('YYYY-MM-DD');
  // const dateFrom = moment().subtract(7,'d').format('YYYY-MM-DD');
  const SevenDaysAgo = moment().subtract(7, "days");
  console.log(SevenDaysAgo);

  const labels = ["1", "2", "3", "4", "5", "6", "7"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Coin Market Price",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: chartData.chartPrices,
        yAxisID: "y0",
      },
      {
        label: "Coin Market Cap",
        data: chartData.chartCaps,
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
    <Wrapper>
      <Line options={options} data={data} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 70%;
  height: 100%;
`;
export default Chart;
