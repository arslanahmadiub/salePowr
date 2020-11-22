import Button from '../../CustomComponents/Button';
import ShopProfileForm from '../../Forms/ShopProfileForm';
import AddProductForm from '../../Forms/AddProductForm';
import Tabs from '../../CustomComponents/Tabs'
import React from 'react'
import Catalog from './Catalog';
import DesktopHeaderRow from '../../CustomComponents/DesktopHeaderRow';


export default function Shop() {


    return <>
        <DesktopHeaderRow title="Shop">
            <Button onClick={() => true} outlined> SHOP PREVIEW</Button>
            <Button onClick={() => true}>PUBLISH A SHOP</Button>
        </DesktopHeaderRow>

        <Tabs headers={['Shop Profile', 'Catalog', 'Add Product']}>
            <ShopProfileForm />
            <Catalog />
            <AddProductForm />
        </Tabs>
    </>
}