import React from "react";
import Styled from "styled-components";
import Grid from "@material-ui/core/Grid"
import Input from "../CustomComponents/Input"
import TextArea from "../CustomComponents/TextArea"
import Button from "../CustomComponents/Button"
import apple from "../../assets/images/apple.png"
import MiniFilePicker from "../CustomComponents/MiniFilePicker";

const ImageContainer = Styled.div`
    height: 100px;
    border: 1px grey dashed;
    padding: 2px;
    position: relative;
`
const Img = Styled.img`
    height: 100px;
    width: 100px;
`

const CatalogForm = props => {
    //const [state, setState] = React.useState({ delivery: "24hrs" })

    const processWidrawal = event => {
        event.preventDefault();
    }

    // const refreshSellerInfo = event => {
    //     event.preventDefault();
    //     event.stopPropagation();
    // }
    // const handleRadioChange = event => {
    //     event.preventDefault();
    //     event.stopPropagation();

    //     setState({ ...state, delivery: event.target.value })
    // }
    return <div>
        <form onSubmit={processWidrawal}>
            <Grid container direction="column" spacing={4}>
                <Grid item xs={12}>
                    <ImageContainer>
                        <Img src={apple} />
                        <Img src={apple} />
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
                            <TextArea placeholder="Enter description" label="Description" rows={3} required />
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item>
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
                <Grid item xs={12} sm={6} md={4}>
                    <Button type="submit">
                        SEND REQUEST
                </Button>

                </Grid>


            </Grid>

        </form>
        <Grid container direction="column">
            <Grid item xs={12}>
                <hr style={{ border: ".31px solid", margin: "25px 0" }} />
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={2} direction="row">
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