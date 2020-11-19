import React from 'react';
import Styled from 'styled-components';
import Button from '../../CustomComponents/Button';
import BannerContainer from '../../CustomComponents/BannerContainer';
import BulletedText from '../../CustomComponents/BulletedText';
import CircularProgress from '../../CustomComponents/CircularProgress';
import WithdrawalForm from '../../Forms/WithdrawalForm';
import { MoMoCard } from './CreditCard'
import { creditCardInfo, walletBalance } from '../../../DummyData/DummyData';
import HorizontalScrollingContainer from '../../CustomComponents/HorizontalScrollingContainer';
import { Row, Col, Space } from 'antd';


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
    cursor: pointer;
`

const Wallet = props => {

    const [balance, setBalance] = React.useState(null);
    const [cards, setCards] = React.useState(null);
    const [stage, setStage] = React.useState(0);
    const [type, setType] = React.useState('');


    function advanceStage() {
        if (stage < 3) {
            setStage(stage + 1);
        }
    }

    var progressPercent = balance ? Math.abs(100 * (Number(balance.available) - Number(balance.escrow)) / (Number(balance.available) + Number(balance.escrow))) : 0;
    const value = progressPercent > 100 ? progressPercent - 100 : progressPercent

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

    return <Space direction="vertical" size="large">
        <Row gutter={[0, 24]}>

            <Col span={24}>
                <BannerContainer>
                    <BulletedText title={"Available"} value={balance ? `${balance.currency} ${balance.available}` : 0} primary />

                    <CircularProgress thickness={15} radius={40} percent={Math.round(value)} />

                    <BulletedText title={"Funds in escrow"} value={balance ? `${balance.currency} ${balance.escrow}` : 0} />

                </BannerContainer>
            </Col>
        </Row>

        <Row gutter={[0, 24]}>
            <Col span={24}>
                <HorizontalScrollingContainer>
                    <MoMoCard data={creditCardInfo} />
                    <MoMoCard data={creditCardInfo} />

                    <NewCardButton onClick={advanceStage}>
                        <div style={{ top: "40%", position: "relative" }}>
                            Add new payment Card
                        </div>
                    </NewCardButton>

                </HorizontalScrollingContainer>
            </Col>
        </Row>

        {
            stage > 0 && (
                <>
                    <Row gutter={[0, 16]}>
                        <Col span={24}>
                            <Title>Payout Options</Title>
                        </Col>
                    </Row>

                    <Row gutter={[16, 24]}>

                        <Space size='large'>
                            <Button onClick={() => { setType('momo'); advanceStage() }} faded={type !== 'momo'}>Mobile Money</Button>
                            <Button onClick={() => { setType('bank'); advanceStage() }} faded={type !== 'bank'}>Bank</Button>
                        </Space>

                    </Row>
                </>
            )
        }

        {
            stage > 1 && (
                <>
                    <Row gutter={[0, 16]}>
                        <Col span={24}>
                            <WithdrawalForm externalFunction={setStage} type={type} />
                        </Col>
                    </Row>
                </>
            )
        }
    </Space >
}


export default Wallet;