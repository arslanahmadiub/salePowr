import React from 'react'
import Styled from "styled-components"

const Container = Styled.div`
    overflow-y: hidden;
    overflow-x: scroll;
    width: 95vw;
    white-space: nowrap;
    display: flex;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    };
`

const Content = Styled.div`
        margin: 0 10px;
`


const HorizontalScrollingContainer = props => {
    return <Container>
        {props.children && props.children.map((item, index) => {
            return <Content key={index}>
                {item}
            </Content>;
        })}
    </Container>
}

export default HorizontalScrollingContainer;