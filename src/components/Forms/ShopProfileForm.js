import React from "react";
//import styled from "styled-components";
import Grid from "@material-ui/core/Grid"
import TextArea from "../CustomComponents/TextArea"
import Button from "../CustomComponents/Button"
import Input from "../CustomComponents/Input"
import Select from "../CustomComponents/Select"
import FilePicker from "../CustomComponents/FilePicker";
import { banks } from "../../DummyData/DummyData";

const ShopProfileForm = props => {

    const uploadFile = event => {
        event.preventDefault();
    }


    const saveShopProfile = event => {
        event.preventDefault();
        event.stopPropagation();

    }
    return <form onSubmit={saveShopProfile}>
        <Grid container direction="column" spacing={6}>

            <Grid item>
                <Grid container direction="row" spacing={1}>
                    <Grid item xs={12} sm={6} md={4} >
                        <Input placeholder="Enter shop name" label="Business/Shop name" required />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Input placeholder="Enter Shop ID" label="Shop ID" required />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Select placeholder="Select business type" label="Business type" required />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction="row" spacing={1}>
                    <Grid item xs={12} sm={6} md={4} >
                        <Select placeholder="Select country" label="Country" required />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Select placeholder="Select City" label="City" required options={banks} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Input placeholder="Enter Shop Address" label="Address" required />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction="row" spacing={1}>

                    <Grid item xs={12} sm={5}>
                        <Input type="tel" placeholder="Enter phone number" label="Business Phone" required />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Input type="email" placeholder="Enter Email address" label="Business email" required />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction="row" spacing={1}>
                    <Grid item xs={12} sm={7}>
                        <TextArea placeholder="Enter shop bio" label="Shop bio" required rows={3} />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <FilePicker />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction="row" spacing={1}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Input placeholder="Enter username" label="Instagram" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Input placeholder="Enter username" label="Facebook" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Input placeholder="Enter username" label="Twitter" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Input placeholder="Enter username" label="Whatsapp" />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid item xs={12} sm={4} md={3}>
                    <Button type="submit">
                        Save
                    </Button>
                </Grid>
            </Grid>




        </Grid>

    </form>
}

export default ShopProfileForm;