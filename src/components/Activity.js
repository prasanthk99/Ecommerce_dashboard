import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
  ],
  datasets: [
    {
      label: "Activity",
      data: [
        4000, 12000, 5000, 3000, 5000, 5000, 4000, 4000, 3000, 2000, 4000, 4000,
        6000, 3000, 7000, 10000, 15000, 10000, 8000, 6000, 7000, 4000, 5000,
      ],
      backgroundColor: "#7394FF",
      borderRadius: 50
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: {
      beginAtZero: true,
    },
    y: {
      beginAtZero: true,
    },
  },
};

const Activity = () => {
  return (
    <section className="activity">
      <h2>Activity </h2>
      <Bar data={data} options={options}/>
    </section>
  );
};

export default Activity;
