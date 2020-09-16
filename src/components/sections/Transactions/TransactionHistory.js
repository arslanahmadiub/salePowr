import React from 'react'
import TransactionGroup from './TransactionGroup';


const TransactionHistory = props => {
    const transactions = props.transactions;
    return transactions && transactions.map(group => {
        return <TransactionGroup title={group.title} transactions={group.data} />
    })

}

export default TransactionHistory;