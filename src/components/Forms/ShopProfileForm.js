import React from "react";
//import styled from "styled-components";
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import Sync from "@material-ui/icons/Sync"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormLabel from "@material-ui/core/FormLabel"
import RadioGroup from "@material-ui/core/RadioGroup"
import Radio from "@material-ui/core/Radio"
import Select from "../Select"
import Input from "../Input"
import TextArea from "../TextArea"
import Button from "../Button"

const ShopProfileForm = props => {
    const [state, setState] = React.useState({ delivery: "24hrs" })
    const transactionTypes = ["Sell", "Buy",]
    const banks = ["Ecobank", "Stanbick Bank", "First Atlantic", "Fidelity Bank", "First National Bank"]

    const uploadFile = event => {
        event.preventDefault();
    }


    const saveShopProfile = event => {
        event.preventDefault();
        event.stopPropagation();

    }
    return <form onSubmit={saveShopProfile}>
        <Grid container direction="row" spacing={5}>

            <Grid item xs={12} sm={6} md={4} >
                <Input />
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Input />
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Input />
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Input />
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Input />
            </Grid>
            <Grid item xs={12} sm={6} md={4} >
                <Input />
            </Grid>
            <Grid item xs={12} sm={5}>
                <Input />
            </Grid>
            <Grid item xs={12} sm={7}>
                <Input />
            </Grid>
            <Grid item xs={12} sm={7}>
                <TextArea rows={3} />
            </Grid>
            <Grid item xs={12} sm={5}>
                <Input type="file" />
            </Grid>
            <Grid item xs={12} sm={2} md={3}>
                <Input />
            </Grid>
            <Grid item xs={12} sm={2} md={3}>
                <Input />
            </Grid>
            <Grid item xs={12} sm={2} md={3}>
                <Input />
            </Grid>
            <Grid item xs={12} sm={2} md={3}>
                <Input />
            </Grid>



            <Grid item xs={12} sm={4} md={2}>
                <Button type="submit">
                    Save
                </Button>
            </Grid>
        </Grid>

    </form>
}

export default ShopProfileForm;