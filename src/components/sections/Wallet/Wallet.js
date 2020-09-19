import Grid from '@material-ui/core/Grid'
import React from 'react'
import Styled from "styled-components"
import Button from "../../CustomComponents/Button"
import BannerContainer from '../../CustomComponents/BannerContainer'
import BulletedText from '../../CustomComponents/BulletedText'
import CircularProgress from '../../CustomComponents/CircularProgress'
import WithdrawalForm from "../../Forms/WithdrawalForm"
import CreditCard, { MoMoCard } from './CreditCard'
import { creditCardInfo } from '../../../DummyData/DummyData'
import HorizontalScrollingContainer from '../../CustomComponents/HorizontalScrollingContainer'
import { Hidden } from '@material-ui/core'

const Container = Styled.div`
padding: 50px 30px;
border-radius: 0;
background: #E7EEFA;
min-height: 80vh;
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
    const balance = props.balance;
    var progressPercent = Math.abs(100 * (Number(balance.available) - Number(balance.escrow)) / (Number(balance.available) + Number(balance.escrow)))
    const value = progressPercent > 100 ? progressPercent - 100 : progressPercent

    const addnewCard = event => {
        alert("You can add new card soon");
    }

    const editWallet = event => {
        alert("Soon you can edit")
    }
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
                    <BulletedText title={"Available"} value={`${balance.currency} ${balance.available}`} primary />
                    <BulletedText title={"Funds in escrow"} value={`${balance.currency} ${balance.escrow}`} />
                    <Hidden smDown>
                        <CircularProgress thickness={15} radius={40} percent={Math.round(value)} />
                    </Hidden>
                </BannerContainer>
            </Grid>

            <Grid item xs={12} md={6}>
                <Title>Withdrawal Options</Title>
                <Grid direction="row" spacing={5} container>
                    <Grid item xs={7}>
                        <Button faded>Mobile Money (Ghana only)</Button>
                    </Grid>
                    <Grid item xs={5}>
                        <Button>Bank (Global)</Button>
                    </Grid>
                </Grid>
            </Grid>

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
    </Container>
}


export default Wallet;