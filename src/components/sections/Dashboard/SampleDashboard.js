import React from "react";
import { Line } from "react-chartjs-2";

function SampleDashboard() {
  const state = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Rainfall",
        fill: true,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        data: [65, 59, 80, 81, 70, 80, 70],
      },
      //   {
      //     label: "Skyfall",
      //     fill: false,
      //     lineTension: 0.5,
      //     backgroundColor: "rgba(30,60,250,1)",
      //     borderColor: "rgba(99,256,25,1)",
      //     borderWidth: 2,
      //     data: [70, 40, 30, 100, 60],
      //   },
    ],
  };
  return (
    <div>
      <Line
        data={state}
        options={{
          legend: {
            display: false,
            position: "right",
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  default: 0,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default SampleDashboard;

// options={{
//     legend: {
//       display: false,
//       position: "right",
//     },
//   }}
