
import { Hidden } from '@material-ui/core';
import { ExpandLess, ExpandMore, FileCopy } from '@material-ui/icons';
import { Button as AntButton, Modal, Space, Typography } from 'antd';
import React from 'react'
import Styled from "styled-components";
import Button from '../../CustomComponents/Button'
import { TransactionsContext } from '../../../contexts/TransactionsContext';


const FlexContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    letter-spacing: 0.5px;
    @media (min-width: 960px){
        
    }
`

const Title = Styled.div`
    font-weight: 600;
    color: #010101;
    font-size: 16px;
    letter-spacing: 0.5px;
`
const Description = Styled.div`
    font-weight: normal;
    color: #979FAA;
    font-size: 18px;
    letter-spacing: 0.5px;
    @media (max-width: 960px){
        margin: 15px 0;
        font-size: 12px;
    }
`
const Amount = Styled.div`
    font-weight: 600;
    color: #010101;
    font-size: 16px;
    letter-spacing: 0.5px;
`
const Container = Styled.div`

`
const DateRow = Styled.div`
    font-weight: normal;
    color: #979FAA;
    font-size: 14px;
    letter-spacing: 0.5px;
    position: relative;
    top: 5px;
    margin-left: 25px;
`

const TransactionId = Styled.div`
    color: #F18F6C;
    fontSize: 14px;
    fontWeight: 600; 
    padding: 12px 0;
`
const TransactionStatus = Styled.div`
    color: #31BDF4;
    font-size: 14px;
    right: 10px;
    padding: 12px 0;
`

export default function TranstionItem(props) {
    const [show, toggleShow] = React.useState(false)
    const [showModal, setShowModal] = React.useState(false)



    function primaryAction() {
        if (props.history) {

        } else {
            setShowModal(!showModal)
        }

    }
    function secondaryAction() {

    }
    const data = props.data;

    return !data ? <></> :
        <Container>
            <FlexContainer onClick={() => toggleShow(!show)} style={{ cursor: "pointer" }}>
                <FlexContainer>
                    <FileCopy style={{ height: "20px", width: "20px", marginRight: "10px" }} />
                    <Title>{data.title && data.title}</Title>
                </FlexContainer>
                <Hidden smDown>
                    <Description>{data.description && data.description}</Description>
                </Hidden>
                <FlexContainer>
                    <Amount>{data.amount && data.amount}</Amount>
                    <div>
                        {
                            show ?
                                <ExpandLess style={{ height: "20px", width: "20px", marginLeft: "10px", color: "#979FAA" }} />
                                :
                                <ExpandMore style={{ height: "20px", width: "20px", marginLeft: "10px", color: "#979FAA" }} />
                        }

                    </div>

                </FlexContainer>
            </FlexContainer>
            <DateRow>{data.date && data.date} at {data.time && data.time}</DateRow>
            <Hidden mdUp>
                <Description>{data.description && data.description}</Description>
            </Hidden>

            <div style={{ display: show ? "block" : "none", marginLeft: '25px' }}>

                <FlexContainer>
                    <TransactionId>{data.id && data.id}</TransactionId>
                    <TransactionStatus>{data.status && data.status}</TransactionStatus>
                </FlexContainer>

                <Space>
                    <Button slim onClick={primaryAction} type="primary" size="large">{props && props.primaryButtonText}</Button>
                    <Button slim onClick={secondaryAction} size="large" type="secondary">{props && props.secondaryButtonText}</Button>
                </Space>

                <UpdateTransaction data={data} showModal={showModal} setShowModal={setShowModal} />

            </div>
        </Container >
}




export function UpdateTransaction({ data, showModal, setShowModal }) {
    const [errorMessage, setErrorMessage] = React.useState('')
    const [loading, setLoading] = React.useState(false)
    const [selected, setSelected] = React.useState(false)
    const [status, setStatus] = React.useState('');


    const { updateTransactionStatus } = React.useContext(TransactionsContext)


    function toggleSelected(idx) {
        setSelected(idx);
        setErrorMessage('')
        switch (idx) {
            case 0:
                return setStatus('shipped')
            case 1:
                return setStatus('delivered')
            case 2:
                return setStatus('cancelled')
            default: return;
        }
    }


    function updateStatus() {


        if (status !== '') {
            setLoading(true);

            const state = updateTransactionStatus(data, status)

            setTimeout(() => { if (state) setLoading(false); setShowModal(false) }, 2500)


        } else {
            setErrorMessage('Please select applicable status')
        }

    }

    const { Title } = Typography;


    return (
        <Modal
            title="Update Transaction Status"
            visible={showModal}
            centered
            closable
            destroyOnClose={true}
            onCancel={() => setShowModal(false)}
            confirmLoading={loading}
            onOk={updateStatus}
        >
            <Space size="large" align="center">
                <AntButton onClick={() => toggleSelected(0)} type={selected === 0 ? 'primary' : 'default'}>Shipped </AntButton>
                <AntButton onClick={() => toggleSelected(1)} type={selected === 1 ? 'primary' : 'default'}>Delivered </AntButton>
                <AntButton onClick={() => toggleSelected(2)} type={selected === 2 ? 'primary' : 'default'}>Cancelled </AntButton>

            </Space>
            <br />
            <Title level={4} type="danger">{errorMessage}</Title>

        </Modal>
    )
}

