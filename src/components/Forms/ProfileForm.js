import React from "react";
//import styled from "styled-components";
import Grid from "@material-ui/core/Grid"
import Select from "../CustomComponents/Select"
import Input from "../CustomComponents/Input"
import Button from "../CustomComponents/Button"
import DatePicker from "../CustomComponents/DatePicker"
import PasswordInput from "../CustomComponents/PasswordInput";

const ProfileForm = props => {

    const countries = ["Ghana", "Nigeria", "Gambia", "Cameroon", "Togo"]
    const banks = ["Ecobank", "Stanbick Bank", "First Atlantic", "Fidelity Bank", "First National Bank"]

    const saveProfile = event => {
        event.preventDefault();
    }
    return <form onSubmit={saveProfile}>
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
                <DatePicker />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input type="email" />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input type="tel" />
            </Grid>
            <Grid item xs={12}>
                <h2 style={{ fontSize: "22px", fontWeight: "500", padding: "0", margin: "0" }}>Change password</h2>
            </Grid>
            <Grid item xs={12} sm={6}>
                <PasswordInput />
            </Grid>
            <Grid item xs={12} sm={6}>
                <PasswordInput />
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