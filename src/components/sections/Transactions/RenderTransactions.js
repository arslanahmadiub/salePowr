import React from 'react'
import TransactionGroup from './TransactionGroup';


const RenderTransactions = props => {
    const transactions = props.transactions;
    return <div>
        {
            transactions && transactions.map(group => {
                return <TransactionGroup title={group.title} transactions={group.data} />
            })
        }
    </div>

}

export default RenderTransactions;