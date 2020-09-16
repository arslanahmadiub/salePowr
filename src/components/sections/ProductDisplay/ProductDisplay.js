import React from 'react'
import Styled from "styled-components"
import Grid from "@material-ui/core/Grid"
import { Facebook, Instagram, Twitter, WhatsApp } from '@material-ui/icons'
import Product from './Product'
import companyLogo from "../../../assets/images/company-logo.png"
import RenderProducts from './RenderProducts'
import { products } from '../../../DummyData/DummyData'

const Container = Styled.div`
padding: 50px 30px;
border-radius: 0;
background: #E7EEFA;
min-height: 80%;
`
const FlexContainer = Styled.div`
display: flex;
justify-content: space-between;
`
const Brand = Styled.div`

`


const BrandName = Styled.div`
    font-size: 30px;
    font-weight: bold;
    color: #010101;
`

const BrandSlogan = Styled.div`
    font-size: 18px; 
    color: #979FAA;
    
`

const ShopId = Styled.div`
    color: #31BDF4;
    font-size: 12px;
`

const BrandBrief = Styled.div`
    font-size: 16px;
    color: #010101;
    margin: 15px 0;
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

const ProductDisplayTopRow = props => {

    return <div>

        <FlexContainer>
            <Brand>
                <BrandName>
                    GoPare
        </BrandName>
                <BrandSlogan>
                    Electronic Gadgets
        </BrandSlogan>
            </Brand>

            <ShopId>
                shop id: #325655
        </ShopId>
        </FlexContainer>
        <BrandBrief>
            In consequat officia duis Lorem culpa aliqua tempor proident incididunt magna est fugiat dolore eu. Qui esse eu sit amet velit eiusmod velit. Quis enim aute enim consequat nulla labore aute consequat non dolor deserunt qui reprehenderit. Lorem id laborum cupidatat commodo dolor consectetur qui veniam.
        </BrandBrief>

        <Grid container direction="row" spacing={3}>
            <Grid item xs={6} md={3}>
                <ContactLabel>
                    Address
                </ContactLabel>

                <Contact>
                    some address here
                </Contact>
            </Grid>
            <Grid item xs={6} md={3}>
                <ContactLabel>
                    Address
                </ContactLabel>

                <Contact>
                    some address here
                </Contact>
            </Grid>
            <Grid item xs={6} md={3}>
                <ContactLabel>
                    Address
                </ContactLabel>

                <Contact>
                    some address here
                </Contact>
            </Grid>
            <Grid item xs={6} md={3}>
                <ContactLabel>
                    Address
                </ContactLabel>

                <Contact>
                    <FlexContainer style={{ width: "100px" }}>
                        <Facebook />
                        <Twitter />
                        <Instagram />
                        <WhatsApp />

                    </FlexContainer>
                </Contact>
            </Grid>

        </Grid>
    </div>
}


const ProductDisplayProductLine = props => {



    return (
        <div style={{
            margin: "15px 0"
        }}>
            <FlexContainer>
                <BrandName>
                    Product
            </BrandName>
                <div style={{
                    width: "100px"
                }}>
                    <FlexContainer>
                        <BrandSlogan>
                            All
                </BrandSlogan>
                        <BrandSlogan>
                            New
                </BrandSlogan>
                    </FlexContainer>
                </div>
            </FlexContainer>
        </div>
    );
}


const ProductDisplay = props => {

    return <Container>
        <div style={{ borderBottom: "0.5px solid", paddingBottom: "20px" }}>
            <FlexContainer>
                <img src={companyLogo} style={{ height: "150px", width: "300px", marginRight: "25px" }} alt="company logo" />
                <ProductDisplayTopRow />
            </FlexContainer>
        </div>



        <ProductDisplayProductLine />

        <RenderProducts products={products} />
    </Container>
}

export default ProductDisplay;