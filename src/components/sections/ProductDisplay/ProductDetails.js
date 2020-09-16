import React from 'react';
import Grid from "@material-ui/core/Grid"
import companyLogo from "../../../assets/images/company-logo.png"
import Styled from "styled-components";
import Button from "../../CustomComponents/Button"

import ShopBrand from './ShopBrand';



const Container = Styled.div`
    background: #F5F8FD;
    padding: 0 15px;
    height: 100vh;
`
const DetailsContainer = Styled.div`
    background: #F5F8FD;
    padding: 15px 0;
    min-height: 50vh;
`

const ProductName = Styled.div`
    font-size: 30px;
    font-weight: 600;
    margin: 20px 0;
`
const Description = Styled.div`
    font-size: 14px;
    font-weight: normal;
`
const Price = Styled.div`
    font-size: 20px;
    font-weight: 600;
    margin: 30px 0;
`
const Delivery = Styled.div`
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
    
`
const ContactLabel = Styled.div`
    font-size: 14px;
    color: #979FAA;
`
const Contact = Styled.div`
    font-size: 16px;
    color: #010101;
    font-weight: 600;
`

const TiledImage = Styled.img`
    height: 100px;
    width: 100px;
    background: #FFFFFF;
    border-radius: 15px;
    margin: auto;
`

const CoverImage = Styled.img`
    height: 330px;
    width: 350px;
    background: #FFFFFF;
    border-radius: 15px;
    margin: auto 0 0 5px;

`

const ProductDetails = props => {
    const tiles = props.product.tiles;
    const image = props.product.image;
    const details = props.product;

    return <Container>
        <div style={{ margin: "20px" }}>


            <Grid container direction="row" spacing={3}>
                <Grid item xs={4} md={1}>
                    <Grid container direction="column" spacing={1}>
                        <Grid item>
                            <TiledImage src={tiles.first_tile} alt="First tile" />
                        </Grid>
                        <Grid item>
                            <TiledImage src={tiles && tiles.first_tile} alt="First tile" />
                        </Grid>
                        <Grid item>
                            <TiledImage src={tiles.first_tile} alt="First tile" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={8} md={4}>
                    <CoverImage src={image && image} alt="First tile" />
                </Grid>
                <Grid item xs={12} md={5}>
                    <DetailsContainer>
                        <ProductName>
                            {details && details.name}
                        </ProductName>
                        <Description>
                            {details && details.description}
                        </Description>

                        <Price>
                            GHS {details && details.price}
                        </Price>
                        <Button noExpand slim>
                            Buy Now
                </Button>

                        <Delivery>
                            Delivery terms
                </Delivery>
                        <Description>
                            {details && details.delivery}
                        </Description>
                    </DetailsContainer>
                </Grid>

            </Grid>

        </div>

        <div style={{ margin: "30px 0 100px", borderTop: "0.5px solid" }}>

            <ShopBrand logo={companyLogo} name={"GoPare"} slogan={"Electronic"} shopid={"#3455354"} />
        </div>


    </Container>
}
export default ProductDetails;
