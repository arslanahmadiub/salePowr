import React from "react";
import Styled from "styled-components";
import Grid from "@material-ui/core/Grid"
import Input from "../CustomComponents/Input"
import TextArea from "../CustomComponents/TextArea"
import Button from "../CustomComponents/Button"
import apple from "../../assets/images/apple.png"
import MiniFilePicker from "../CustomComponents/MiniFilePicker";
import PurchaseSummary from "../CustomComponents/PurchaseSummary";
import { purchaseSummaryData } from "../../DummyData/DummyData";

const ImageContainer = Styled.div`
    height: 100px;
    border: 1px grey dashed;
    padding: 2px;
    position: relative;
`
const Img = Styled.img`
    height: 70px;
    width: 70px;
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
        <form onSubmit={processWidrawal} style={{ paddingBottom: "60px", borderBottom: "0.5 solid grey" }}>
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
                    <PurchaseSummary data={purchaseSummaryData} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Button type="submit">
                        SEND REQUEST
                </Button>

                </Grid>


            </Grid>

        </form>

    </div>


}

export default CatalogForm;