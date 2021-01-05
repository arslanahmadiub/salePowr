import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

function NewActivityGraph(props) {
  const [graphData, setgraphData] = useState([]);

  let graphDataFromProps = () => {
    if (props.data.length > 0) {
      let activityData = [];

      props.data.map((item) => {
        let y = item.y;
        activityData.push(y);
      });
      setgraphData(activityData);
    }
  };

  useEffect(() => {
    graphDataFromProps();
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
  console.log(graphData);
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
                    min: graphData.length < 1 ? 0 : Math.min(...graphData),
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

export default NewActivityGraph;
