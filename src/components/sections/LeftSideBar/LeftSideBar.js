import React from "react"
import Grid from "@material-ui/core/Grid"
import NavigationItems from "./NavigationItems"
import NewTransactionPanel from "./NewTransationPanel"
import logo from "../../../assets/images/logo.png"
import SelectedShop from "./SelectedShop"
import { navItems } from "../../../DummyData/DummyData"


const LeftSideBar = prop => {
    return <div style={{ position: "relative", height: "100vh", padding: "60px 15px" }}>
        <Grid container direction="column" spacing={4}>
            <Grid item>
                <img height="40" src={logo} alt="Powrsale logo" />
            </Grid>
            <Grid item>
                <NewTransactionPanel />
            </Grid>
            <Grid item>
                <NavigationItems items={navItems} />
            </Grid>

        </Grid>
        <SelectedShop shop={{ name: "Techshop" }} />
    </div>
}

export default LeftSideBar;