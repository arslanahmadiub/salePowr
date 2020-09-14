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
                <Select options={countries} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Select options={banks} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input type={"number"} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Input type={"number"} />
            </Grid>
            <Grid item xs={12} sm={3}>
                <Button type="submit">Submit</Button>
            </Grid>

        </Grid>

    </form>
}


export default WithdrawalForm;