import React, { useEffect, useState } from "react";
import TransactionGroup from "./TransactionGroup";
import NoTransactionInProgressNote from "./NoTransactionInProgressNote";

import { Space, Spin } from "antd";

const RenderTransactions = (props) => {
  const [data, setData] = useState(null);
  const [dates, setDates] = useState(null);
  const [groups, setGroups] = useState(null);

  useEffect(() => {
    setData(null);
    setDates(null);
    setGroups(null);

    setTimeout(() => {
      if (props.transactions && props.transactions.length > 0) {
        setData(props.transactions);
      } else {
        setData(false);
      }
    }, 2000);
  }, [props.transactions]);

  useEffect(() => {
    if (data) {
      var list = [];
      data.forEach((transaction) => {
        if (!list.includes(transaction.date)) {
          list.push(transaction.date);
        }
      });

      setDates(list);
    }
  }, [data]);

  useEffect(() => {
    let list = [];
    if (data) {
      dates &&
        dates.forEach((date) => {
          list.push(data.filter((i) => i.date === date));
        });

      setGroups(list);
    }
  }, [dates, data]);

  return (
    <>
      {data === false && <NoTransactionInProgressNote />}
      {data === null && (
        <Space align="center">
          <Spin size="large" />
        </Space>
      )}

      {data &&
        data.length > 0 &&
        groups &&
        groups.map((group, index) => {
          return (
            <TransactionGroup
              key={group[0].date.toString() + index.toString()}
              title={group[0].date}
              transactions={group}
              primaryButtonText={
                props.history ? "Open Dispute" : "Update status"
              }
              secondaryButtonText={"Chat"}
              history={props.history}
            />
          );
        })}
    </>
  );
};

export default RenderTransactions;
