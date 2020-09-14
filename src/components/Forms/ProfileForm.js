import React from "react";
//import styled from "styled-components";
import Grid from "@material-ui/core/Grid"
import Select from "../Select"
import Input from "../Input"
import Button from "../Button"

const ProfileForm = props => {

    const countries = ["Ghana", "Nigeria", "Gambia", "Cameroon", "Togo"]
    const banks = ["Ecobank", "Stanbick Bank", "First Atlantic", "Fidelity Bank", "First National Bank"]

    const processWidrawal = event => {
        event.preventDefault();
    }
    return <form onSubmit={processWidrawal}>
        <Grid container direction="row" spacing={5}>
            <Grid item xs={12} sm={6}>
                <Input />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input type="date" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input type="email" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input type="tel" />
            </Grid>
            <Grid item xs={12}>
                <h2>Change password</h2>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input type="password" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input type="password" />
            </Grid>

            <Grid item xs={12}>
                <p>* By continuing, you agree to Powrsale's <a href="#">terms</a> and  <a href="#">privacy notice</a></p>
            </Grid>

            <Grid item xs={12}>
                <Button type="submit">Submit</Button>
            </Grid>
        </Grid>

    </form>
}


export default ProfileForm;