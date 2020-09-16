import React from "react";
import Styled from "styled-components"
import apple from "../../../assets/images/apple.png"

const Container = Styled.div`
 
`
const ImageContainer = Styled.div`
    height: 170px;
    width: 170px;
    background: #F3F3F3;
    border-radius: 15px;
`
const Img = Styled.img`
    height: 150px;
    width: 150px;
    margin: auto;
`
const Price = Styled.div`
    font-size: 20px;
    font-weight: 600;
    
`
const Description = Styled.div`
    font-size: 14px;
    width: 170px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Product = props => {
    const description = props.description;
    const price = props.price;
    const image = props.image;
    return <Container>
        <ImageContainer>
            <Img src={image} alt="apple" />
        </ImageContainer>

        <Description>
            {description && description}
        </Description>
        <Price>
            $ {price && price}
        </Price>

    </Container>
}

export default Product;