import Tabs from "../../CustomComponents/Tabs"
import React from "react"
import Styled from "styled-components";
import TransactionHistory from "./TransactionHistory"
import { transactionGroups } from "../../../DummyData/DummyData";
const TopRow = Styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    font-weight: 500;
    color: #010101;
`
const RenderButtons = Styled.div`
display: flex;
justify-content: space-between;
width: 35%;

`

const Container = Styled.div`
padding: 50px 30px;
border-radius: 0;
background: #E7EEFA;
min-height: 80%;
`

const Body = Styled.div`

`



const Transactions = props => {

    return <Container>
        <TopRow>
            <div>Transactions</div>
            <RenderButtons>
                Date range
            </RenderButtons>
        </TopRow>

        <Body>
            <Tabs headers={["History", "Upcoming"]}>

                <TransactionHistory transactions={transactionGroups} />
                <h1>Upcoming</h1>
            </Tabs>
        </Body>
    </Container>
}


export default Transactions;