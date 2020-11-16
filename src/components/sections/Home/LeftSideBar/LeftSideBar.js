import React from "react"
import { useHistory, } from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import NavItem from "./NavItem"
import NewTransactionPanel from "./NewTransationPanel"
import logo from "../../../../assets/images/logo.png"
import SelectedShop from "./SelectedShop"
import { navItems } from "../../../../DummyData/DummyData"


export default function LeftSideBar(props) {

    const history = useHistory();


    const changeSelected = item => event => {

        var cleaned = item.text.toLowerCase().trim().replace(" ", "-");
        history.push(`/${cleaned}`);
    }

    return <div style={{ position: "relative", height: "100vh", padding: "0px 0 0 0px" }}>
        <Grid container direction="column" spacing={3}>
            <Grid item style={{ cursor: "pointer" }}>
                <img onClick={() => history.push("/")} height="40" src={logo} alt="Powrsale logo" />
            </Grid>
            <Grid item>
                <NewTransactionPanel />
            </Grid>
            <Grid item>
                {
                    navItems && navItems.map(((item, index) => {
                        return <div onClick={changeSelected(item)} key={item.text}>
                            <NavItem key={item.text} text={item.text} icon={item.icon} />
                        </div>

                    })
                    )
                }
            </Grid>

        </Grid>
        <SelectedShop />
    </div>
}

