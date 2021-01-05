import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function NewTransactionStatus(props) {
  const [graphData, setGraphData] = useState([]);

  let defectorData = () => {
    let newData = [];
    props.data.map((item) => {
      let y = item.y;
      newData.push(y);
    });
    setGraphData(newData);
  };

  useEffect(() => {
    defectorData();
  }, [props.data]);

  const state = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        fill: true,
        lineTension: 0.5,
        backgroundColor: "rgba(49,189,244,1)",
        borderColor: "rgba(49,189,244,1)",
        borderWidth: 1,
        data: graphData,
      },
    ],
  };

  return (
    <div>
      <div>
        <Line
          data={state}
          options={{
            legend: {
              display: false,
              position: "right",
            },
            scales: {
              xAxes: [
                {
                  display: false,

                  gridLines: {
                    display: false,
                  },
                  scaleLabel: {
                    display: false,
                  },
                },
              ],
              yAxes: [
                {
                  display: false,
                  gridLines: {
                    display: false,
                  },
                  ticks: {
                    min: 0,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
}

export default NewTransactionStatus;
