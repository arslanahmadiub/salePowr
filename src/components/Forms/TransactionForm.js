import React from "react";
import Styled from "styled-components";
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
import TextArea from "../CustomComponents/TextArea"
import Button from "../CustomComponents/Button"



const FlexContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    letter-spacing: 0.5px;
`


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
                <FlexContainer>
                    <div style={{ width: "180px" }}>
                        <Select options={transactionTypes} />
                    </div>
                    <div style={{ width: "150px" }}>
                        <Input />
                    </div>

                </FlexContainer>
            </Grid>

            <Grid item xs={12} md={6}>
                <Grid container spacing={3} direction="row">
                    <Grid item xs={12}><h4>Sellre info</h4></Grid>
                    <Grid item xs={12} md={10} >
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
                        <IconButton onClick={refreshSellerInfo} style={{ background: "#F18F6C" }}>
                            <Sync fontSize="large" style={{ color: "#FFF" }} />
                        </IconButton>
                    </Grid>

                </Grid>

            </Grid>

            <Grid item xs={12}>
                <Grid container direction="row" spacing={3}>

                    <Grid item xs={12}>
                        <h4>Transaction info</h4>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Input />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Select placehoder="item name" />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <TextArea />
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
                <Grid container direction="column" spacing={0}>
                    <Grid item>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <small style={{ fontWeight: "normal", fontSize: "12px" }}><span style={{ color: "#979FAA" }}>Note: </span> Powrsale service charge is 2%</small>
                            <div>$210.00</div>
                        </div>
                    </Grid>
                    <Grid item>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "20px", margin: "10px 0" }}>
                            <div style={{ fontWeight: "500" }}>Delivery Charge</div>
                            <div style={{ fontWeight: "600", border: "1px #010101 solid", borderRadius: "10px", padding: "3px" }}>$210.00</div>
                        </div>
                    </Grid>
                    <Grid item>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "24px", fontWeight: "bold", margin: "10px 0" }}>
                            <div>
                                Total amount payable
                                </div>
                            <div>
                                $210.00
                                </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button>
                    Send Request
                </Button>
            </Grid>
        </Grid>

    </form>
}

export default TransactionForm;