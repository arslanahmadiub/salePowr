import React from "react"
import BarChart from "./BarChart"
import Card from "@material-ui/core/Card"
const TradingVolume = props => {

    return <Card style={{ height: "100%", width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontSize: "16px", color: "#010101", fontWeight: "600", minWidth: "40%" }}>
                Transaction Volume
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>last 7 days</div>
                <div> V</div>
            </div>
        </div>
        <div style={{ height: "80%", width: "100%", position: "absolute", bottom: 0 }}>
            <BarChart data={props.data} />
        </div>
    </Card>

    // <VerticalBar percentage={props.percentage} />


}

export default TradingVolume;