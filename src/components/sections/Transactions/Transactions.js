import Tabs from "../../CustomComponents/Tabs"
import React from "react"
import Styled from "styled-components";
import TransactionHistory from "./RenderTransactions"
import { transactionGroups } from "../../../DummyData/DummyData";
import FlatSelect from "../../CustomComponents/FlatSelect";
import { Hidden } from "@material-ui/core";
import RenderTransactions from "./RenderTransactions";
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
// padding: 50px 30px;
// border-radius: 0;
// background: #E7EEFA;
// min-height: 80%;
`

const Body = Styled.div`

`



const Transactions = props => {

    return <Container>
        <Hidden smDown>
            <TopRow>
                <div>Transactions</div>
                <RenderButtons>
                    <FlatSelect bg />
                </RenderButtons>
            </TopRow>
        </Hidden>

        <Body>
            <Tabs headers={["History", "Upcoming"]}>

                <RenderTransactions transactions={transactionGroups} />
                <RenderTransactions transactions={transactionGroups} />

            </Tabs>
        </Body>
    </Container>
}


export default Transactions;