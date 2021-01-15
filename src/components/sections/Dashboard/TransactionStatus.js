import React from "react";
import Styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Card from "../../CustomComponents/Card";
import Trends from "./Trend";
import NewTransactionStatus from "./NewTransactionStatus";

const Title = Styled.div`
    font-size: 14px;
    font-weight: 500;
    text-align: left;
`;
const Value = Styled.div`
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    padding: 15px;
`;

const TransactionStatus = (props) => {
  const { shipped, completed, delivered } = props?.data || {};

  return (
    <Card>
      <Title>Transaction Status</Title>
      <Grid container direction="row" spacing={5}>
        <Grid xs={4} item>
          <Value>{shipped && shipped.total}</Value>

          <NewTransactionStatus
            data={props.data ? props.data.shipped.data : []}
            color="rgba(241,143,108,1)"
          />
        </Grid>
        <Grid xs={4} item>
          <Value>{completed && completed.total}</Value>

          <NewTransactionStatus
            data={props.data ? props.data.completed.data : []}
            color="rgba(145,220,249,1)"
          />
        </Grid>
        <Grid xs={4} item>
          <Value>{delivered && delivered.total}</Value>

          <NewTransactionStatus
            data={props.data ? props.data.delivered.data : []}
            color="rgba(167,148,228,1)"
          />
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "12px",
          color: "#979FAA",
          marginTop: "15px",
          padding: "10px",
        }}
      >
        <div>Shipped</div>
        <div>Delivered</div>
        <div>Completed</div>
      </div>
    </Card>
  );
};

export default TransactionStatus;
