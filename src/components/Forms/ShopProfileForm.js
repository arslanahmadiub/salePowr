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
                <Grid container direction="row" spacing={3}>
                    <Grid item xs={12} sm={6} md={4} >
                        <Input />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Input />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Select />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction="row" spacing={3}>
                    <Grid item xs={12} sm={6} md={4} >
                        <Select />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Select options={banks} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} >
                        <Input />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction="row" spacing={3}>

                    <Grid item xs={12} sm={5}>
                        <Input />
                    </Grid>
                    <Grid item xs={12} sm={7}>
                        <Input />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction="row" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <TextArea rows={3} />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <FilePicker />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction="row" spacing={3}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Input />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Input />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Input />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Input />
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