import React from 'react'
import { transactions as transactionsData } from '../DummyData/DummyData';




export const TransactionsContext = React.createContext();


export default function TransactionsContextProvider(props) {
    const [transactions, setTransactions] = React.useState([]);


    function updateTransactionStatus(transaction, status) {
        let newTransactionsList = transactions;
        newTransactionsList[newTransactionsList.map((item, index) => [index, item]).filter((item) => item[1].id === transaction.id)[0][0]] = { ...transaction, status };
        setTransactions(newTransactionsList)
        return true;
    }
    function deleteTransaction(transactionId) {
        // make the api call to delete Transaction
        // then update the local

    }

    React.useEffect(() => {
        /* Load transactions here then update the status like so... */

        setTransactions(transactionsData)

    }, [])


    return <TransactionsContext.Provider value={{ transactions, setTransactions, updateTransactionStatus, deleteTransaction }}>
        {props.children}
    </TransactionsContext.Provider>
}