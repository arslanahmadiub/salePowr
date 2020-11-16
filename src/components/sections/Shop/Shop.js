import Button from '../../CustomComponents/Button';
import ShopProfileForm from '../../Forms/ShopProfileForm';
import AddProductForm from '../../Forms/AddProductForm';
import Tabs from '../../CustomComponents/Tabs'
import React from 'react'
import Styled from 'styled-components';
import { Hidden, } from '@material-ui/core';
import Catalog from './Catalog';


const TopRow = Styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 30px;
    font-weight: 500;
    color: #010101;
`

const Container = Styled.div`

`

const Body = Styled.div`

`



export default function Shop() {

    return <Container>
        <Hidden smDown>
            <TopRow>
                <div>Shop</div>

                <div direction='row' spacing={2}>

                    <Button white noExpand onClick={() => true}>
                        Shop Preveiw
                    </Button>

                    <span style={{ width: '15px', margin: '15px' }}></span>
                    <Button noExpand onClick={() => true}>
                        Publish a Shop
                    </Button>

                </div>

            </TopRow>
        </Hidden>

        <Body>
            <Tabs headers={['Shop Profile', 'Catalog', 'Add Product']}>
                <ShopProfileForm />
                <Catalog />
                <AddProductForm />
            </Tabs>
        </Body>
    </Container>
}