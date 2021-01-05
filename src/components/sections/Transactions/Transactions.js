import Tabs from "../../CustomComponents/Tabs";
import React from "react";
import Styled from "styled-components";
import FlatSelect from "../../CustomComponents/FlatSelect";
import { Hidden } from "@material-ui/core";
import RenderTransactions from "./RenderTransactions";
const TopRow = Styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    font-weight: 500;
    color: #010101;
`;
const RenderButtons = Styled.div`
display: flex;
justify-content: space-between;
width: 35%;

`;

const Body = Styled.div`

`;

const Transactions = (props) => {
  return (
    <div>
      <Hidden smDown>
        <TopRow>
          <div>Transactions</div>
          <RenderButtons>
            <FlatSelect
              list={[
                "Jan - Feb, 2020",
                "Mar - Apr, 2020",
                "May - Jun, 2020",
                "Jul - Aug, 2020",
                "Sep - Oct, 2020",
              ]}
              bg
            />
          </RenderButtons>
        </TopRow>
      </Hidden>

      <Body>
        <Tabs headers={["In Progress", "History"]}>
          <RenderTransactions />
          <RenderTransactions history />
        </Tabs>
      </Body>
    </div>
  );
};

export default Transactions;
