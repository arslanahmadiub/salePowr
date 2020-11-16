import React from 'react'
import Styled from "styled-components"
import RenderProducts from './Catalog/RenderProducts'
import { products } from '../../../DummyData/DummyData'
import { Hidden } from '@material-ui/core'
import TopRowMobile from './Catalog/TopRowMobile'
import TopRowDesktop from './Catalog/TopRowDesktop'

const Container = Styled.div`
padding: 50px 30px;
border-radius: 0;
background: #F5F8FD;
min-height: 80%;
@media (max-width: 960px){
    padding: 20px 10px;
}
`
const FlexContainer = Styled.div`
display: flex;
width: 100%;
justify-content:${p => p.justify ? p.justify : "space-between"};
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

export default function Catalog(props) {

    return <Container>


        <div style={{ marginBottom: "0px", position: "relative" }}>
            <FlexContainer>
                <div style={{
                    width: "100px",
                    right: "10px",
                    top: "-30px",
                    position: "absolute",
                }}>
                    <FlexContainer>
                        <BrandSlogan style={{ color: "#31BDF4", cursor: "pointer" }}>
                            All
                        </BrandSlogan>
                        <BrandSlogan style={{ cursor: "pointer" }}>
                            New
                    </BrandSlogan>
                    </FlexContainer>
                </div>
            </FlexContainer>
        </div>
        <RenderProducts products={products} />
    </Container>
}

