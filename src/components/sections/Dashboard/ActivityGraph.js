import React from 'react'
import Styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Card from '../../CustomComponents/Card'
import Trends from './Trend'


const ActivityGraph = props => {
    return <Card>
        <Trends data={props?.data || []} />
        <div style={{ display: "flex", justifyContent: "space-evenly", fontSize: "12px", color: "#979FAA" }}>
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
        </div>
    </Card>
}

export default ActivityGraph