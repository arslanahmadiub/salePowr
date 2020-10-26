import React from 'react'
import { transactionGroups } from '../../../DummyData/DummyData';
import NoTransactionInProgressNote from './NoTransactionInProgressNote';
import RenderTransactions from './RenderTransactions';



export default function InProgress(props) {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        //pull data from api and replace the data;

        setTimeout(() => setData(transactionGroups),
            10000)
    }, [])

    return <div>
        {
            data && <RenderTransactions transactions={data} />
        }
        {
            !data && <NoTransactionInProgressNote />
        }
    </div>
}