import React from "react"
import VerticalBar from "./VerticalBar"


const BarChart = props => {
    const data = props.data;
    return data ?
        <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "space-between" }}>
            {
                data.map(item => {

                    return <div style={{ margin: "0 2px" }}>
                        <VerticalBar key={item.label} percentage={item.percentage} label={item.label} />
                    </div>
                })
            }
        </div>
        :
        <></>
}


export default BarChart;