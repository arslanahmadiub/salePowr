import React from "react";
//import styled from "styled-components";
import Grid from "@material-ui/core/Grid"
import Input from "../CustomComponents/Input"
import Button from "../CustomComponents/Button"
import DatePicker from "../CustomComponents/DatePicker"
import PasswordInput from "../CustomComponents/PasswordInput";
import CustomLink from "../CustomComponents/CustomLink";

const ProfileForm = props => {


    const saveProfile = event => {
        event.preventDefault();
    }
    return <form onSubmit={saveProfile}>
        <Grid container direction="row" spacing={5}>
            <Grid item xs={12} sm={6}>
                <Input placeholder="Enter first name" label="First name" required />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input placeholder="Enter last name" label="Last Name" required />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input placeholder="Other name(s)" label="Other name(s)" required />
            </Grid>
            <Grid item xs={12} sm={6}>
                <DatePicker placeholder="Dadte of birth" label="Date of Birth" required />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input type="email" placeholder="Enter email address" label="Email address" required />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input placeholder="Phone number" label="Phone number" required type="tel" />
            </Grid>
            <Grid item xs={12}>
                <h2 style={{ fontSize: "22px", fontWeight: "500", padding: "0", margin: "0" }}>Change password</h2>
            </Grid>
            <Grid item xs={12} sm={6}>
                <PasswordInput placeholder="New password" label="New password" required />
            </Grid>
            <Grid item xs={12} sm={6}>
                <PasswordInput placeholder="Confirm password" label="Confirm password" required />
            </Grid>

            <Grid item xs={12}>
                <span style={{ textAlign: "center" }}>* By continuing, you agree to Powrsale's <CustomLink>terms</CustomLink> and  <CustomLink>privacy notice</CustomLink></span>
            </Grid>

            <Grid item xs={12}>
                <Button type="submit">{props.buttonText || "Submit"}</Button>
            </Grid>
        </Grid>

    </form>
}


export default ProfileForm;