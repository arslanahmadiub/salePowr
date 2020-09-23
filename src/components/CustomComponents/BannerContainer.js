import React from 'react'
import Styled from "styled-components";


const Container = Styled.div`
background: rgb(117,93,67);
background: linear-gradient(to right, #5B38CC 40%, #ed912b 2%, #5B38CC 40% ); 
padding: 16px 25px; 
border-radius: 20px;
display: flex;
align-items: center;
justify-content: ${props => props.even ? "space-evenly" : props.centered ? "center" : "space-between"};
@media (max-width: 960px){
    padding: 15px 20px; 
    border-radius: 10px;
    justify-content: space-evenly;
}
`


const BannerContainer = props => {
    return <Container centered={props.centered}>
        {props.children}

    </Container>
}

export default BannerContainer;