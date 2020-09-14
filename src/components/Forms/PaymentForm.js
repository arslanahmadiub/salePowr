import React from "react";
//import styled from "styled-components";
import Grid from "@material-ui/core/Grid"
import Add from "@material-ui/icons/Add"
import Remove from "@material-ui/icons/Remove"
import Input from "../Input"
import Button from "../CustomComponents/Button"

const PaymentForm = props => {
    const [state, setState] = React.useState({ quantity: 1 })

    const processPayment = event => {
        event.preventDefault();
    }

    const changeQuanty = value => event => setState({ ...state, quantity: state.quantity + value || 1 })

    return <Grid container direction="column" spacing={5}>
        <Grid item xs={12} sm={6} md={4}>
            <Grid container direction="row" spacing={2}>
                <Grid item xs={4}><Button onClick={changeQuanty(-1)} grey><Remove fontSize="large" /></Button></Grid>
                <Grid item xs={4}><h2>{state.quantity}</h2></Grid>
                <Grid item xs={4}><Button onClick={changeQuanty(1)} grey><Add fontSize="large" /></Button></Grid>
            </Grid>
        </Grid>
        <Grid item >
            <form onSubmit={processPayment}>
                <Grid container direction="row" spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <Input />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input type={"email"} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input type={"tel"} />
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                        <Button type="submit">Submit</Button>
                    </Grid>

                </Grid>

            </form>
        </Grid>
        <Grid item >
            <hr />
        </Grid>
        <Grid item >

            <Grid container direction="row" spacing={3}>
                <Grid item xs={8} sm={5}>
                    <small><b>Note: </b> Powrsale service charge is 2%</small>
                </Grid>
                <Grid item xs={4} sm={3}>
                    <h4>$10.00</h4>
                </Grid>
            </Grid>


            <Grid container direction="row" spacing={3}>
                <Grid item xs={8} sm={5}>
                    <p>Delivery charge</p>
                </Grid>
                <Grid item xs={4} sm={3}>
                    <h4>$20.00</h4>
                </Grid>
            </Grid>

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
}


export default PaymentForm;