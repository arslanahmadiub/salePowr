import React from 'react'
import { transactions } from '../../../DummyData/DummyData';
import NoTransactionInProgressNote from './NoTransactionInProgressNote';
import RenderTransactions from './RenderTransactions';



export default function InProgress(props) {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        //pull data from api and replace the data;

        setTimeout(() => setData(transactions),
            1000)
    }, [])

    return <div>
        {
            data && <RenderTransactions primaryButtonText="Update Status" secondaryButtonText="Chat" transactions={data} />
        }
        {
            !data && <NoTransactionInProgressNote />
        }
    </div>
}