import React from 'react'
import Styled from "styled-components"

const Container = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = Styled.h1`
    font-size: 30px;
    font-weight: 700;
    color:#000000;
    line-height: 26px;
`

const SecondaryElements = Styled.div`
    display: inline-block;
`


export default function ({ title, secondaryElements, ...props }) {
    alert(title)
    return <Container>
        <Title>
            {title && title}
        </Title>
        <SecondaryElements>
            {
                secondaryElements && secondaryElements.forEach(element => element)
            }
        </SecondaryElements>

    </Container>
}