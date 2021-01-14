import React, { useState, useEffect } from "react";
import { transactions as transactionsData } from "../DummyData/DummyData";
import { getProgressTransistion } from "../services/transistionServices";
import moment from "moment";

export const TransactionsContext = React.createContext();

export default function TransactionsContextProvider(props) {
  const [transactions, setTransactions] = React.useState([]);
  let userToken = localStorage.getItem("token");

  function updateTransactionStatus(transaction, status) {
    let newTransactionsList = transactions;
    newTransactionsList[
      newTransactionsList
        .map((item, index) => [index, item])
        .filter((item) => item[1].id === transaction.id)[0][0]
    ] = { ...transaction, status };
    setTransactions(newTransactionsList);
    return true;
  }
  function deleteTransaction(transactionId) {
    // make the api call to delete Transaction
    // then update the local
  }

  let getTransistion = async () => {
    let { data } = await getProgressTransistion(userToken);
    let transistionData = [];
    const m2 = moment();
    if (data.Success) {
      data.Details.map((item) => {
        const m2 = moment(item.created_at);
        let time = m2.format("h:mm");
        let date = m2.format("YYYY MM DD");

        let newTransistion = {
          id: item.txID,
          title: item.shop_name,
          description: item.shop_description,
          amount: item.amount,
          date: date,
          time: time,
          status: item.payment_status,
        };
        transistionData.push(newTransistion);
      });
      setTransactions(transistionData);
    }
  };

  useEffect(() => {
    getTransistion();
  }, []);

  // useEffect(() => {
  //   /* Load transactions here then update the status like so... */

  //   setTransactions(transactionsData);
  // }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        setTransactions,
        updateTransactionStatus,
        deleteTransaction,
      }}
    >
      {props.children}
    </TransactionsContext.Provider>
  );
}
