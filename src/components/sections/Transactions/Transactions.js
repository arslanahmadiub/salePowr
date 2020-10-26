import Tabs from "../../CustomComponents/Tabs"
import React from "react"
import Styled from "styled-components";
import { transactionGroups } from "../../../DummyData/DummyData";
import FlatSelect from "../../CustomComponents/FlatSelect";
import { Hidden } from "@material-ui/core";
import RenderTransactions from "./RenderTransactions";
import InProgress from "./InProgress";
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


const Body = Styled.div`

`



const Transactions = props => {

    return <div>
        <Hidden smDown>
            <TopRow>
                <div>Transactions</div>
                <RenderButtons>
                    <FlatSelect bg />
                </RenderButtons>
            </TopRow>
        </Hidden>

        <Body>
            <Tabs headers={["In Progress", "History"]}>

                <InProgress />
                <RenderTransactions transactions={transactionGroups} />

            </Tabs>
        </Body>
    </div>
}


export default Transactions;