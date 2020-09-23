import React from "react"
import Grid from "@material-ui/core/Grid"
import NavItem from "./NavItem"
import NewTransactionPanel from "./NewTransationPanel"
import logo from "../../../assets/images/logo.png"
import SelectedShop from "./SelectedShop"
import { navItems, shopsData } from "../../../DummyData/DummyData"


const LeftSideBar = prop => {
    const [selected, setSelected] = React.useState(0)
    const changeSelected = index => event => {
        event.stopPropagation();

        setSelected(index)
    }





    return <div style={{ position: "relative", height: "100vh", padding: "60px 15px" }}>
        <Grid container direction="column" spacing={4}>
            <Grid item>
                <img height="40" src={logo} alt="Powrsale logo" />
            </Grid>
            <Grid item>
                <NewTransactionPanel />
            </Grid>
            <Grid item>
                {
                    navItems && navItems.map(item => index => {
                        return <NavItem onClick={changeSelected(index)} key={item.text} text={item.text} icon={item.icon} />
                    })
                }
            </Grid>

        </Grid>
        <SelectedShop shops={shopsData} />
    </div>
}

export default LeftSideBar;