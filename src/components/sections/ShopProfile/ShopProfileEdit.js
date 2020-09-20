import Button from "../../CustomComponents/Button";
import ShopProfileForm from "../../Forms/ShopProfileForm";
import CatalogEdit from "./CatalogEdit";
import Tabs from "../../CustomComponents/Tabs"
import React from "react"
import Styled from "styled-components";
import { Hidden } from "@material-ui/core";

const TopRow = Styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    font-weight: 500;
    color: #010101;
`
const RenderButtons = Styled.div`
display: flex;
justify-content: space-between;
width: 35%;

`

const Container = Styled.div`
//padding: 50px 30px;
border-radius: 25px;
min-height: 80%;
@media (max-width: 960px){
    padding: 20px 10px;
}
`

const Body = Styled.div`

`



const ShopProfileEdit = props => {

    return <Container>
        <Hidden msDown>
            <TopRow>
                <div>Shop</div>
                <RenderButtons>
                    <Button noExpand white>
                        Shop Preveiw
                </Button>
                    <Button noExpand>
                        Publish a Shop
                </Button>
                </RenderButtons>
            </TopRow>
        </Hidden>

        <Body>
            <Tabs headers={["Shop Profile", "Catalog"]}>
                <ShopProfileForm />
                <CatalogEdit />
            </Tabs>
        </Body>
    </Container>
}


export default ShopProfileEdit;