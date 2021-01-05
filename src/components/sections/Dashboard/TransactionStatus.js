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
  console.log(props);
  return (
    <Card>
      <Title>Transaction Status</Title>
      <Grid container direction="row" spacing={5}>
        <Grid xs={4} item>
          <Value>{shipped && shipped.total}</Value>
          {/* <Trends data={shipped && shipped.data} height={80} color="#F18FC6" /> */}
          <NewTransactionStatus
            data={props.data ? props.data.shipped.data : []}
          />
        </Grid>
        <Grid xs={4} item>
          <Value>{completed && completed.total}</Value>
          {/* <Trends
            data={completed && completed.data}
            height={80}
            color="#31BDF4"
          /> */}
          <NewTransactionStatus
            data={props.data ? props.data.completed.data : []}
          />
        </Grid>
        <Grid xs={4} item>
          <Value>{delivered && delivered.total}</Value>
          {/* <Trends
            data={delivered && delivered.data}
            height={80}
            color="#5A36CC"
          /> */}
          <NewTransactionStatus
            data={props.data ? props.data.delivered.data : []}
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
