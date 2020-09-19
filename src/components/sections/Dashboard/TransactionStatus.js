import React from 'react'
import Styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import Card from '../../CustomComponents/Card'
import Trends from './Trend'

const Title = Styled.div`
    font-size: 14px;
    font-weight: 500;
    text-align: left;
`
const Value = Styled.div`
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    padding: 15px;
`

const TransactionStatus = props => {
    const { shipped, completed, delivered } = props?.data || {}
    return <Card>
        <Title>Transaction Status</Title>
        <Grid container direction="row" spacing={0}>
            <Grid xs={4} item>
                <Value>{shipped && shipped.total}</Value>
                <Trends data={shipped && shipped.data} height={80} />
            </Grid>
            <Grid xs={4} item>
                <Value>{completed && completed.total}</Value>
                <Trends data={completed && completed.data} height={80} />
            </Grid>
            <Grid xs={4} item>
                <Value>{delivered && delivered.total}</Value>
                <Trends data={delivered && delivered.data} height={80} />
            </Grid>
        </Grid>
        <div style={{ display: "flex", justifyContent: "space-evenly", fontSize: "12px", color: "#979FAA" }}>
            <div>Shipped</div>
            <div>Delivered</div>
            <div>Completed</div>
        </div>
    </Card>
}

export default TransactionStatus;