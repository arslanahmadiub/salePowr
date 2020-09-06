import React from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

const CardComponent = styled.div`
    background: #FFFFFF;
    border-radius: 25px;
    padding: 20px;
    position: relative;
    margin: auto;
    box-shadow:none;
    min-height:50px;
    color: #000000;
    position: relative;
    
    `;

const CardTitle = styled.h5`
        font-family: Inter, sans-serif;
        color: #00000;
        display: inline-block;
        font-size: 16px;
        float: left;
    `;

const CardAction = styled.div`
    float: right;
    display: inline-block;
    & {
       
    }
`

const CardHeader = styled.div`
    display: block;
    min-height: 10px;
    width: 98%;
    position: absolute;
    margin: 0 auto;
    top:0;
`



const CardBody = styled.div`
    margin: auto;
    display: block;
    position: relative;
    top: 15px;
    `;

const Card = props => {
    return <CardComponent>
        <CardHeader>
            <CardTitle>{props?.title}</CardTitle>
            <CardAction>{props?.action}</CardAction>
        </CardHeader>
        <br />

        <CardBody>{props?.children}</CardBody>
    </CardComponent>
};

export default Card;