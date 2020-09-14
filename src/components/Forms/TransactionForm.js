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
import Select from "../CustomComponents/Select"
import Input from "../CustomComponents/Input"
import TextArea from "../TextArea"
import Button from "../CustomComponents/Button"

const TransactionForm = props => {
    const [state, setState] = React.useState({ delivery: "24hrs" })
    const transactionTypes = ["Sell", "Buy",]
    const banks = ["Ecobank", "Stanbick Bank", "First Atlantic", "Fidelity Bank", "First National Bank"]

    const processWidrawal = event => {
        event.preventDefault();
    }

    const refreshSellerInfo = event => {
        event.preventDefault();
        event.stopPropagation();
    }
    const handleRadioChange = event => {
        event.preventDefault();
        event.stopPropagation();

        setState({ ...state, delivery: event.target.value })
    }
    return <form onSubmit={processWidrawal}>
        <Grid container direction="row" spacing={2}>

            <Grid item xs={12}>
                <Grid container spacing={3} direction>
                    <Grid item xs={12} sm={3}>
                        <Select options={transactionTypes} />
                    </Grid>
                    <Grid item xs={12} sm={3}>

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input />
                    </Grid>
                </Grid>

            </Grid>

            <Grid item xs={6}>
                <Grid container spacing={3} direction="row">
                    <Grid item xs={12}><h4>Sellre info</h4></Grid>
                    <Grid item xs={10} >
                        <Grid container spacing={3} direction="row">
                            <Grid item xs={12}>
                                <Input />
                            </Grid>

                            <Grid item xs={12}>
                                <Input />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={2} >
                        <IconButton onClick={refreshSellerInfo}>
                            <Sync fontSize="large" />
                        </IconButton>
                    </Grid>

                </Grid>

            </Grid>

            <Grid item xs={12}>
                <Grid container direction="row" spacing={1}>

                    <Grid item xs={12}>
                        <h4>Transaction info</h4>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Select placehoder="item name" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextArea />
                    </Grid>

                </Grid>
            </Grid>

            <Grid item xs={12}>
                <FormControl component="fieldset">
                    <FormLabel component="legend"><h4>Delivery Terms</h4></FormLabel>
                    <RadioGroup aria-label="delivery options" name="delivery options" value={state.delivery} onChange={handleRadioChange} row>
                        <FormControlLabel value="24hrs" control={<Radio color="primary" />} label="24hrs" />
                        <FormControlLabel value="3days" control={<Radio color="primary" />} label="3 Days" />
                        <FormControlLabel value="5days" control={<Radio color="primary" />} label="5 Days" />
                    </RadioGroup>
                </FormControl>
            </Grid>

            <Grid item xs={12}>
                <Grid container direction="row" spacing={3}>
                    <Grid item xs={8} sm={5}>
                        <small><b>Note: </b> Powrsale service charge is 2%</small>
                    </Grid>
                    <Grid item xs={4} sm={3}>
                        <h4>$10.00</h4>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction="row" spacing={3}>
                    <Grid item xs={8} sm={5}>
                        <p>Delivery charge</p>
                    </Grid>
                    <Grid item xs={4} sm={3}>
                        <h4>$20.00</h4>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container direction="row" spacing={3}>
                    <Grid item xs={8} sm={5}>
                        <h3>Total amount payable</h3>
                    </Grid>
                    <Grid item xs={4} sm={3}>
                        <h4>$210.00</h4>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
                <Button type="submit">
                    SEND REQUEST
                </Button>
            </Grid>
        </Grid>

    </form>
}

export default TransactionForm;