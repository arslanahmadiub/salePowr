import React from "react";
import Styled from "styled-components";
import Grid from "@material-ui/core/Grid"
import Input from "../CustomComponents/Input"
import TextArea from "../CustomComponents/TextArea"
import Button from "../CustomComponents/Button"
import MiniFilePicker from "../CustomComponents/MiniFilePicker";
import Select from "../CustomComponents/Select";
import FlexContainer from "../CustomComponents/FlexContainer";
import { Switch } from "antd";
import { DataContext } from '../../contexts/DataContext';
import { WalletContext } from "../../contexts/WalletContext";

const ImageContainer = Styled.div`
    height: 100px;
    border: 1px grey dashed;
    padding: 2px;
    position: relative;
`

export default function AddProductForm(props) {
    const [state, setState] = React.useState({ delivery: "24hrs" })

    const { countryList, currencies } = React.useContext(DataContext);
    const { currency } = React.useContext(WalletContext);

    const processWidrawal = event => {
        event.preventDefault();
    };

    function ToggleInstagram() {
        setState('')

    }

    function ToggleFacebook() {

    }

    function ToggleTwitter() {

    }

    return <div>
        <form onSubmit={processWidrawal} style={{ paddingBottom: "60px", borderBottom: "0.5 solid grey" }}>
            <Grid container direction="row" spacing={4}>
                <Grid item xs={12}>
                    <ImageContainer>
                        <MiniFilePicker />
                    </ImageContainer>

                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3} direction="row">
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2} direction="column">
                                <Grid item xs={12}>
                                    <Input placeholder="Enter product name" label="Name of product" required />
                                </Grid>
                                <Grid item xs={12}>
                                    <Input placeholder="Price" label="Price" required />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextArea placeholder="Enter description" label="Description" rows={5} required />
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <h4>Delivery Terms</h4>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Select placeholder="Select country" list={countryList} label="Country" rows={5} required />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Input placeholder="Enter a city" label="City/Location" rows={5} required />
                </Grid>
                <Grid item xs={12} md={4}>
                    <Select list={currencies} placeholder="Currency" label="Currency" rows={5} required />
                </Grid>

                <Grid item xs={12}>
                    <FlexContainer>
                        <div>
                            Note: Powrsale service charge is 5%
                        </div>
                        <div style={{ fontWeight: "600", fontSize: "22px" }}>
                            {`${currency} 0`}
                        </div>
                    </FlexContainer>

                    <FlexContainer>
                        <div style={{ fontWeight: 600, fontSize: "24px" }}>
                            Total amount payable
            </div>
                        <div style={{ fontWeight: "600", fontSize: "24px" }}>
                            {`${currency} 0`}
                        </div>
                    </FlexContainer>
                    <hr />
                    <p>Also share on social media</p>
                    <FlexContainer>
                        <span>Instagram</span>
                        <Switch size='small' onChange={ToggleInstagram} />
                    </FlexContainer>
                    <FlexContainer>
                        <span>Facebook</span>
                        <Switch size='small' onChange={ToggleFacebook} />
                    </FlexContainer>
                    <FlexContainer>
                        <span>Twitter</span>
                        <Switch size='small' onChange={ToggleTwitter} />
                    </FlexContainer>

                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Button type="submit">
                        SEND REQUEST
                    </Button>

                </Grid>


            </Grid>

        </form>

    </div>;


}

