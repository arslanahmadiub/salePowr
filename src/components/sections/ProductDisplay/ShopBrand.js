import { Facebook, Instagram, Twitter, WhatsApp } from '@material-ui/icons'
import React from 'react'
import Styled from "styled-components"


const Container = Styled.div`
padding: 50px 30px;
border-radius: 0;
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
    font-size: 18px;

`

const ContactLabel = Styled.div`
    font-size: 16px;
    color: #979FAA;
    margin-bottom: 15px;
`

const ShopBrand = props => {
    const companyLogo = props.logo;
    const name = props.name;
    const slogan = props.slogan;
    const shopid = props.shopid;
    return <Container>
        <div style={{ display: "flex" }}>
            <img src={companyLogo} style={{ height: "150px", width: "150px", marginRight: "25px" }} alt="company logo" />
            <div style={{ margin: "25px 15px" }}>
                <BrandName>
                    {name && name}
                </BrandName>
                <BrandSlogan>
                    {slogan && slogan}
                </BrandSlogan>
                <ShopId>
                    shop Id: {shopid}
                </ShopId>


                <div style={{ width: "100px", marginTop: "50px" }}>
                    <ContactLabel>
                        Social Media
                    </ContactLabel>
                    <FlexContainer>
                        <Facebook />
                        <Instagram />
                        <Twitter />
                        <WhatsApp />
                    </FlexContainer>
                </div>
            </div>
        </div>


    </Container>
}

export default ShopBrand;