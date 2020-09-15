import React from "react"
import VerticalBar from "./VerticalBar"
import Card from "../../CustomComponents/Card"
const TradingVolume = props => {

    return <Card>
        <VerticalBar percentage={props.percentage} />
    </Card>


}

export default TradingVolume;