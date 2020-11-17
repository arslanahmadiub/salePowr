import Grid from '@material-ui/core/Grid'
import React from 'react'
import Styled from "styled-components"
import Button from "../../CustomComponents/Button"
import BannerContainer from '../../CustomComponents/BannerContainer'
import BulletedText from '../../CustomComponents/BulletedText'
import CircularProgress from '../../CustomComponents/CircularProgress'
import WithdrawalForm from "../../Forms/WithdrawalForm"
import { MoMoCard } from './CreditCard'
import { creditCardInfo, walletBalance } from '../../../DummyData/DummyData'
import HorizontalScrollingContainer from '../../CustomComponents/HorizontalScrollingContainer'
import { Hidden } from '@material-ui/core'
import { Space } from 'antd'

const Container = Styled.div`

`

const Title = Styled.div`
    font-size: 22px;
    font-weight: 500;
    margin: 20px 0;
`

const NewCardButton = Styled.div`
    width: 250px;
    height: 150px;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
    color: #979FAA;
    background: #fff;
    border-radius: 12px;
`

const TopRow = Styled.div`
    display: flex;
    justify-content: space-between;
    color: #010101;
`
const PageTitle = Styled.div`
    font-size: 30px;
    font-weight: bold;
    
`

const Edit = Styled.div`
    color: #31BDF4;
    font-size: 16px;
    cursor: pointer;
`



const Wallet = props => {

    const [balance, setBalance] = React.useState(null);
    const [cards, setCards] = React.useState(null);

    var progressPercent = balance ? Math.abs(100 * (Number(balance.available) - Number(balance.escrow)) / (Number(balance.available) + Number(balance.escrow))) : 0;
    const value = progressPercent > 100 ? progressPercent - 100 : progressPercent

    const addnewCard = event => {
        alert("You can add new card soon");
    }

    const editWallet = event => {
        alert("Soon you can edit")
    }

    React.useEffect(() => {
        // MAKE YOU API CALL HERE THEN
        // SET BALANCE AS follows
        setBalance(walletBalance)
    }, [balance])
    React.useEffect(() => {
        // MAKE YOU API CALL HERE THEN
        // TO GET THE EXISTING PAYMENT METHODS
        // THEN SET THE CARDS LIKE THIS
        setCards(walletBalance)
    }, [cards])

    return <Container>
        <Grid container spacing={8} direction="column">
            <Hidden smDown>
                <Grid item>
                    <TopRow>
                        <PageTitle>Wallet</PageTitle>
                        <Edit onClick={editWallet}>Edit</Edit>
                    </TopRow>

                </Grid>
            </Hidden>
            <Grid item>
                <BannerContainer>
                    <BulletedText title={"Available"} value={balance ? `${balance.currency} ${balance.available}` : 0} primary />
                    <Hidden smDown>
                        <CircularProgress thickness={15} radius={40} percent={Math.round(value)} />
                    </Hidden>
                    <BulletedText title={"Funds in escrow"} value={balance ? `${balance.currency} ${balance.escrow}` : 0} />

                </BannerContainer>
            </Grid>


            <Title>Withdrawal Options</Title>

            <Space size="large">

                <Button>Mobile Money</Button>


                <Button>Bank</Button>

            </Space>

            <Grid item xs={12}>
                <HorizontalScrollingContainer>
                    <MoMoCard data={creditCardInfo} />
                    <MoMoCard data={creditCardInfo} />

                    <NewCardButton onClick={addnewCard}>
                        <div style={{ top: "50%", position: "relative" }}>
                            Add new payment Card
                        </div>
                    </NewCardButton>

                </HorizontalScrollingContainer>


            </Grid>

            <Grid item>
                <WithdrawalForm />
            </Grid>
            <Grid item></Grid>

        </Grid>
    </Container >
}


export default Wallet;