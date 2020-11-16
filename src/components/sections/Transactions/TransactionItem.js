
import { Grid, Hidden } from '@material-ui/core';
import { ExpandLess, ExpandMore, FileCopy } from '@material-ui/icons';
import React from 'react'
import Styled from "styled-components";
import Button from '../../CustomComponents/Button';


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

const TranstionItem = props => {
    const [show, toggleShow] = React.useState(false)

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

            <div style={{ display: show ? "block" : "none", }}>

                <FlexContainer>
                    <TransactionId>{data.id && data.id}</TransactionId>
                    <TransactionStatus>{data.status && data.status}</TransactionStatus>
                </FlexContainer>


                <Grid container direction="row" spacing={3}>
                    <Grid item xs={6} sm={3}>
                        <Button onClick={() => { }}>{props && props.primaryButtonText}</Button>
                    </Grid>
                    <Grid item xs={3} sm={3}>
                        <Button secondary onClick={() => null}>{props && props.secondaryButtonText}</Button>
                    </Grid>
                </Grid>




            </div>
        </Container >
}

export default TranstionItem;