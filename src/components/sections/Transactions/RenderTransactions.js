import React from 'react'
import TransactionGroup from './TransactionGroup';
import { transactions } from '../../../DummyData/DummyData'


const RenderTransactions = props => {
    const [data, setData] = React.useState(null)
    const [dates, setDates] = React.useState(null)
    const [groups, setGroups] = React.useState(null)


    React.useEffect(() => {
        // fetch data here
        // then replace ...

        setData(transactions)
    }, [])

    React.useEffect(() => {
        if (data) {
            var list = []
            transactions.forEach(transaction => {
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
            list.push(transactions.filter(i => i.date === date))
        })

        setGroups(list)

    }, [dates])


    return <div>
        {
            groups && groups.map(group => {
                return <TransactionGroup
                    title={group[0].date}
                    transactions={group}
                    secondaryButtonText={props.secondaryButtonText}
                    primaryButtonText={props.primaryButtonText}
                />
            })
        }
    </div>

}

export default RenderTransactions;