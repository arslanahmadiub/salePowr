import React from 'react'
import Button from '../../CustomComponents/Button';
import ShopProfileForm from '../../Forms/ShopProfileForm';
import AddProductForm from '../../Forms/AddProductForm';
import Tabs from '../../CustomComponents/Tabs'
import Catalog from './Catalog';
import DesktopHeaderRow from '../../CustomComponents/DesktopHeaderRow';
import Grid from '@material-ui/core/Grid'
import { Dialog, DialogActions } from '@material-ui/core';
import ProductDisplay from './ProductDisplay/ProductDisplay';

export default function Shop() {
    const [preview, togglePreview] = React.useState(false)
    const [publish, togglePublish] = React.useState(false)


    return <>
        <DesktopHeaderRow title="Shop">
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Button onClick={() => togglePreview(true)} outlined> SHOP PREVIEW</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button onClick={() => togglePublish(true)}>PUBLISH A SHOP</Button>
                </Grid>
            </Grid>
        </DesktopHeaderRow>

        <Tabs headers={['Shop Profile', 'Catalog', 'Add Product']}>
            <ShopProfileForm />
            <Catalog />
            <AddProductForm />
        </Tabs>

        {/* Preveiw version */}
        <Dialog open={preview} fullScreen onClose={() => togglePreview(false)}>
            <DialogActions>
                <Button onClick={() => togglePreview(false)}>Exit PREVIEW</Button>
            </DialogActions>
            <ProductDisplay />
        </Dialog>

        {/* The published version */}
        <Dialog open={publish} fullScreen onClose={() => togglePublish(false)}>
            <DialogActions>
                <Button onClick={() => togglePublish(false)}>Exit PREVIEW</Button>
            </DialogActions>
            <ProductDisplay />
        </Dialog>
    </>
}