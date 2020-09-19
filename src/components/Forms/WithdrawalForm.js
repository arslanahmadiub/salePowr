import React from "react";
//import styled from "styled-components";
import Grid from "@material-ui/core/Grid"
import Select from "../CustomComponents/Select"
import Input from "../CustomComponents/Input"
import Button from "../CustomComponents/Button"

const WithdrawalForm = props => {

    const countries = ["Ghana", "Nigeria", "Gambia", "Cameroon", "Togo"]
    const banks = ["Ecobank", "Stanbick Bank", "First Atlantic", "Fidelity Bank", "First National Bank"]

    const processWidrawal = event => {
        event.preventDefault();
    }
    return <form onSubmit={processWidrawal}>
        <Grid container direction="row" spacing={5}>
            <Grid item xs={12} sm={6}>
                <Select options={countries} label="Country" placeholder="Select country" required />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Select options={banks} label="Bank name" placeholder="Select bank" required />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input type={"number"} label="Bank account number" placeholder="Enter bank account number" required />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input type={"number"} label="Bank branch" placeholder="Enter bank branch" required />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Button type="submit">Submit</Button>
            </Grid>

        </Grid>

    </form>
}


export default WithdrawalForm;