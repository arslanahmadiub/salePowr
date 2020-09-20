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
import FlatSelect from "../CustomComponents/FlatSelect";
import SearchBox from "../CustomComponents/SearchBox";
import { Hidden } from "@material-ui/core";
import PurchaseSummary from "../CustomComponents/PurchaseSummary";



// const FlexContainer = Styled.div`
//     display: flex;
//     justify-content: space-between;
//     letter-spacing: 0.5px;

// `


const Title = Styled.div`
    font-size: 30px;
    font-weight: 600;
    float: left;
    text-align: left;
    margin:0 0 20px 0;
`
const SubTitle = Styled.div`
    font-size: 20px;
    font-weight: 600;
    float: left;
    text-align: left;
    margin:25px 0 5px 0;
    display: block;
`


const TransactionForm = props => {
    const [state, setState] = React.useState({ delivery: "24hrs" })
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
            <Hidden smDown>
                <Grid item xs={12}>
                    <Title>Transactions</Title>
                </Grid>
            </Hidden>
            <Grid item xs={12}>
                <Grid container direction="row" spacing={5}>
                    <Grid item xs={6}>
                        <FlatSelect bg list={["Selling", "Buying"]} />
                    </Grid>
                    <Grid item xs={6}>
                        <SearchBox placeholder="Search by Id" />
                    </Grid>

                </Grid>

            </Grid>

            <Grid item xs={12} md={6}>
                <SubTitle>Sellre info</SubTitle>
                <Grid container spacing={3} direction="row">

                    <Grid item xs={12} md={10} >
                        <Grid container spacing={3} direction="row">
                            <Grid item xs={12}>
                                <Input placeholder="Email address" type="email" required />
                            </Grid>

                            <Grid item xs={12}>
                                <Input placeholder="Phone number" type="tel" required />
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
                <SubTitle>Transaction info</SubTitle>
                <Grid container direction="row" spacing={3}>

                    <Grid item xs={12} sm={6}>
                        <Input placeholder="Item name" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Select placeholder="Item name" />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <TextArea placeholder="Description" />
            </Grid>

            <Grid item xs={12}>
                <FormControl component="fieldset">
                    <FormLabel component="legend"><SubTitle>Delivery Terms</SubTitle></FormLabel>
                    <RadioGroup aria-label="delivery options" name="delivery options" value={state.delivery} onChange={handleRadioChange} row>
                        <FormControlLabel value="24hrs" control={<Radio color="primary" />} label="24hrs" />
                        <FormControlLabel value="3days" control={<Radio color="primary" />} label="3 Days" />
                        <FormControlLabel value="5days" control={<Radio color="primary" />} label="5 Days" />
                    </RadioGroup>
                </FormControl>
            </Grid>

            <Grid item xs={12}>
                <PurchaseSummary data={{ item: "Apple", itemCost: 40, totalCost: "54", deliveryCharge: 14 }} />

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