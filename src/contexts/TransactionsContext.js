import React from 'react'
import { transactions as transactionsData } from '../DummyData/DummyData';




export const TransactionsContext = React.createContext();


export default function TransactionsContextProvider(props) {
    const [transactions, setTransactions] = React.useState([]);


    function updateTransactionStatus(transaction, status) {
        let newTransactionsList = transactions;
        newTransactionsList[newTransactionsList.map((item, index) => [index, item]).filter((item) => item[1].id === transaction.id)[0][0]] = { ...transaction, status };
        setTransactions(newTransactionsList)
        console.table(newTransactionsList)
        return true;
    }
    function deleteTransaction(transactionId) {

    }

    console.table(transactions)

    React.useEffect(() => {
        /* Load transactions here then update the status like so... */

        setTransactions(transactionsData)

    }, [])


    return <TransactionsContext.Provider value={{ transactions, setTransactions, updateTransactionStatus, deleteTransaction }}>
        {props.children}
    </TransactionsContext.Provider>
}