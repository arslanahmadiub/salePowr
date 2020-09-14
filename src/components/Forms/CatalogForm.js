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

const CatalogForm = props => {
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
    return <div>
        <form onSubmit={processWidrawal}>
            <Grid container direction="column" spacing={5}>
                <Grid item xs={12}>
                    <Input type="file" />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3} direction="row">
                        <Grid item xs={12} md={4}>
                            <Grid container spacing={5} direction="column">
                                <Grid item xs={12}>
                                    <Input />
                                </Grid>
                                <Grid item xs={12}>
                                    <Input />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <TextArea />
                        </Grid>
                    </Grid>

                </Grid>
                <Grid container direction="column" spacing={-5}>
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

                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Button type="submit">
                        SEND REQUEST
                </Button>

                </Grid>


            </Grid>

        </form>
        <Grid container direction="column">
            <Grid item xs={12}>
                <hr />
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={5} direction="row">
                    <Grid item xs={6} md={3}>
                        <Button white>
                            Shop Preview
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Button >
                            Publish a shop
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>


}

export default CatalogForm;