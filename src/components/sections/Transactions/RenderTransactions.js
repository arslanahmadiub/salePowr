import React from 'react'
import TransactionGroup from './TransactionGroup';
import NoTransactionInProgressNote from './NoTransactionInProgressNote'
import { TransactionsContext } from '../../../contexts/TransactionsContext';


const RenderTransactions = props => {
    const [data, setData] = React.useState(null)
    const [dates, setDates] = React.useState(null)
    const [groups, setGroups] = React.useState(null)

    const { transactions } = React.useContext(TransactionsContext);

    React.useEffect(() => {
        setTimeout(() => {
            if (transactions.length === 0) {
                setData(false);
            } else {
                setData(transactions);
            }
        }, 2000)
    }, [transactions])

    React.useEffect(() => {
        if (data) {
            var list = []
            data.forEach(transaction => {
                if (!list.includes(transaction.date)) {
                    list.push(transaction.date)
                }
            })

            setDates(list)
        }

    }, [data])

    React.useEffect(() => {
        let list = [];
        dates && dates.forEach(date => {
            list.push(data.filter(i => i.date === date))
        })

        setGroups(list)

    }, [dates, data])

    return (<>
        {
            data === false && <NoTransactionInProgressNote />

        }
        {
            data === null && <h4>Loading transactions...</h4>
        }


        {
            data && data.length > 0 && groups && groups.map((group, index) => {
                return <TransactionGroup
                    key={group[0].date.toString() + index.toString()}
                    title={group[0].date}
                    transactions={group}
                    primaryButtonText={props.history ? "Open Dispute" : "Update status"}
                    secondaryButtonText={"Chat"}
                    history={props.history}

                />
            })
        }
    </>
    )

}

export default RenderTransactions;