import Button from "../../CustomComponents/Button";
import ShopProfileForm from "../../Forms/ShopProfileForm";
import CatalogEdit from "./CatalogEdit";
import TopRowDesktop from "../ProductDisplay/TopRowDesktop"
import TopRowMobile from "../ProductDisplay/TopRowMobile"
import Tabs from "../../CustomComponents/Tabs"
import React from "react"
import Styled from "styled-components";
import { Dialog, DialogContent, DialogTitle, Grid, Hidden, IconButton, } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import { brandDetails } from "../../../DummyData/DummyData";
import ProductDisplay from "../ProductDisplay/ProductDisplay";

const TopRow = Styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 30px;
    font-weight: 500;
    color: #010101;
`

const Container = Styled.div`
//padding: 50px 30px;
// border-radius: 25px;
// min-height: 80%;
// @media (max-width: 960px){
//     //padding: 20px 10px;
// }
`

const Body = Styled.div`

`



const ShopProfileEdit = props => {
    const [mobileDialog, setMobileDialog] = React.useState(false);
    const [desktopDialog, setDesktopDialog] = React.useState(false);
    const [displayDialog, setDisplayDialog] = React.useState(false);

    return <Container>
        <Hidden smDown>
            <TopRow>
                <div>Shop</div>

                <div container direction="row" spacing={2}>

                    <Button white noExpand onClick={() => setDesktopDialog(true)}>
                        Shop Preveiw
                    </Button>

                    <span style={{ width: "15px", margin: "15px" }}></span>
                    <Button noExpand onClick={() => setDisplayDialog(true)}>
                        Publish a Shop
                    </Button>

                </div>

            </TopRow>
        </Hidden>

        <Body>
            <Tabs headers={["Shop Profile", "Catalog"]}>
                <ShopProfileForm />
                <CatalogEdit />
            </Tabs>
        </Body>
        <Hidden mdUp>
            <div style={{ paddingTop: "50px", borderTop: "0.5px solid grey" }}>
                <Grid container direction="row" spacing={3}>
                    <Grid xs={6} item>
                        <Button white onClick={() => setMobileDialog(true)}>
                            Shop Preveiw
                        </Button>
                    </Grid>
                    <Grid xs={6} item onClick={() => setDisplayDialog(true)}>
                        <Button>
                            Publish a Shop
                </Button>
                    </Grid>

                </Grid>
            </div>
        </Hidden>

        <Dialog open={mobileDialog || desktopDialog} onClose={() => { setMobileDialog(false); setDesktopDialog(false) }} maxWidth={"md"}>
            <DialogContent>
                {mobileDialog ? <TopRowMobile data={brandDetails} /> : <TopRowDesktop data={brandDetails} />}
            </DialogContent>

        </Dialog>
        <Dialog open={displayDialog} onClose={() => { setDesktopDialog(false); setDesktopDialog(false) }} maxWidth={"md"} fullScreen>
            <DialogTitle>
                <IconButton onClick={() => setDisplayDialog(false)}>
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                {
                    <ProductDisplay />
                }
            </DialogContent>

        </Dialog>

    </Container>
}


export default ShopProfileEdit;