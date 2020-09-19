import React from "react"
import Styled from "styled-components"

const Container = Styled.div`
    border-radius: 12px;
    padding: 10px 12px;
    min-height: 100px;
    color: #fff;
    position: relative;
    background: #000;
    max-width:250px;
    
`

const Name = Styled.div`
    font-size: 20px;
    font-weight: 500;
    color: #fff;
    width: 180px;
    white-space: nowrap;
    overflow: hidden;
  text-overflow: ellipsis;
`

const Type = Styled.div`
    font-size: 10px;
    font-weight: 500;
    line-height: 21px;
`
const Country = Styled.div`
    font-size: 10px;
    font-weight: 500;
    margin: 10px 0;    
`

const Number = Styled.div`
    letter-spacing: 3px;
    font-weight: 500;
    margin: 10px 0;
`
const Date = Styled.div`
    font-size: 20px;
    font-weight: 500;
    margin: 10px 0;
`

const HeaderRow = Styled.div`
    display: flex;
    margin: 10px 0 20px 0;
    justify-content: space-between;
`
const Circle = Styled.div`
    width: 20px;
    position: ;
    z-index: 10;
    height: 20px;
    border: solid 0.52px black;
    background: #979FAA;
    border-radius: 50px;
`
const Circle1 = Styled.div`
    width: 20px;
    position:relative;
    right: -10px;
    z-index: 100;
    height: 20px;
    background: #F5F8FD;
    border-radius: 50px;
`

const IntersectingCircle = Styled.div`
    display: flex;
    position: absolute;
    bottom: 10px;
    right: 10px;
    float: right;
`




const CreditCard = props => {

    const { name, type, country, number, date } = props.data || {};
    return <Container>
        <HeaderRow>
            <Name>{name && name}</Name>
            <Type>{type && type}</Type>
        </HeaderRow>
        <Country>{country && country}</Country>
        <Number>{number && number}</Number>
        <Date>{date && date}</Date>
        <IntersectingCircle>
            <Circle1 />
            <Circle />
        </IntersectingCircle>
    </Container>
}

const MoMoCard = props => {
    const { name, country, number, date } = props.data;
    return <Container>
        <HeaderRow>
            <Name>{name && name}</Name>
            <Type>MTN MoMo</Type>
        </HeaderRow>
        <Country>{country && country}</Country>
        <Number>{number && number}</Number>
        <Date>{date && date}</Date>
        <IntersectingCircle>
            <Circle1 />
            <Circle />
        </IntersectingCircle>
    </Container>
}
export { CreditCard, MoMoCard }
export default CreditCard;