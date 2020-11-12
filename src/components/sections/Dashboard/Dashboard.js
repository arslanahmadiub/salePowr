import React from 'react'
import Styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import BannerContainer from '../../CustomComponents/BannerContainer'
import TradingVolume from './TradingVolume'
import ActivityGraph from './ActivityGraph'
import PaymentLinkVisits from './PaymentLinkVisits.js'
import TransactionStatus from './TransactionStatus'
import NewOrders from './NewOrders'
import { activityData, barchartData, transactionStatusData, paymentLinkVisitsData, dashboardData } from '../../../DummyData/DummyData'
import Card from '../../CustomComponents/Card'
import FlatSelect from '../../CustomComponents/FlatSelect'
import { Hidden } from '@material-ui/core'
import ArcProgressBar from '../../CustomComponents/ArcProgressBar'



const TopRow = Styled.div`
    display: flex;
    justify-content: space-between;
    color: #010101;
`
const SubText = Styled.div`
    color: ${props => "#FFFFFF"};
    font-size: 18px;
     margin: 15px 0;
    @media (max-width: 960px){
        font-size: 12px;
    }
`
// const SmallLabel = Styled.text`
//     color: #979FAA;
//     font-size: 12px;
//     position: absolute;

// `

const Title = Styled.div`
    color: ${props => props.plain ? "#FFF" : "#010101"};
    font-size: 22px;
    font-weight: bold;
    margin: 0px 0;
    @media (max-width: 960px){
        font-size: 18px;
    };
`

const Dashboard = props => {
    const [data, setData] = React.useState(null)

    const {
        username,
        profilePercent,
        growth,
        newOrders,
    } = data || {};

    React.useEffect(() => {
        // Fet data from the server here
        // then update the data as follows
        setData(dashboardData)
    }, [data])

    return <>
        <Grid container direction='column' spacing={5}>
            <Hidden smDown>
                <Grid item>
                    <TopRow>
                        <Title>{profilePercent || 0} % completed</Title>
                        <FlatSelect list={["Jan - Feb, 2020", "Mar - Apr, 2020", "May - Jun, 2020", "Jul - Aug, 2020", "Sep - Oct, 2020"]} bg />
                    </TopRow>
                </Grid>
            </Hidden>

            <Grid item>
                <BannerContainer centered>
                    <div>
                        <Title plain>
                            Hi, {username && username}
                        </Title>
                        <SubText>
                            Welcome to Powrsale Dashboard. Setup your shop and make your first transaction.
                    </SubText>
                    </div>
                </BannerContainer>
            </Grid>

            <Grid item>
                <Grid container spacing={2} direction="row">
                    <Grid xs={12} md={6} item>
                        <ActivityGraph data={activityData} />
                    </Grid>
                    <Grid xs={12} md={3} item>
                        <PaymentLinkVisits data={paymentLinkVisitsData} />
                    </Grid>
                    <Grid xs={12} md={3} item>
                        <Grid container spacing={2} direction="row">
                            <Grid xs={6} md={12} item>
                                <Card>
                                    <ArcProgressBar label={"Growth this week"} thickness={10} percent={growth} SelectedShop secondary arc>
                                        {growth}
                                    </ArcProgressBar>
                                </Card>
                            </Grid>
                            <Grid xs={6} md={12} item>
                                <NewOrders value={newOrders} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container spacing={3} direction="row">
                    <Grid xs={12} md={6} item>
                        <TradingVolume data={barchartData} />
                    </Grid>
                    <Grid xs={12} md={6} item>
                        <TransactionStatus data={transactionStatusData} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item></Grid>
        </Grid>
    </>
}

export default Dashboard;