import React from "react"
import Grid from "@material-ui/core/Grid"
import LeftSideBar from "./LeftSideBar/LeftSideBar"
import RightSideBar from "./RightSideBar/RightSideBar"
import ProfileEdit from "./ProfileEdit"
import ShopProfileEdit from './ShopProfile/ShopProfileEdit'
import NewTransactionPanel from "./LeftSideBar/NewTransationPanel"
import NavItem from "./LeftSideBar/NavItem"
import logo from "../../assets/images/logo.png"
import { navItems } from "../../DummyData/DummyData"
import SelectedShop from "./LeftSideBar/SelectedShop"



const Home = props => {
    const [selectedNav, setSelectedNav] = React.useState(0)

    const changeSelected = index => event => {
        event.stopPropagation();
        setSelectedNav(index)

    }

    console.log(props.children)

    return <Grid container direction="row">

        {/* THE LEFT SIDE BAR */}
        <Grid item md={2} >
            <div style={{ position: "relative", height: "100vh", padding: "60px 15px" }}>
                <Grid container direction="column" spacing={4}>
                    <Grid item>
                        <img height="40" src={logo} alt="Powrsale logo" />
                    </Grid>
                    <Grid item>
                        <div onClick={changeSelected(0)} style={{ cursor: "pointer" }}>
                            <NewTransactionPanel />
                        </div>
                    </Grid>
                    <Grid item>
                        {
                            navItems && navItems.map((item, index) => {
                                return <div key={item.text} onClick={changeSelected(index + 1)}>
                                    <NavItem text={item.text} icon={item.icon} selected={selectedNav === index + 1} />
                                </div>

                            })
                        }
                    </Grid>

                </Grid>
                <SelectedShop shop={{ name: "Techshop" }} />
            </div>
        </Grid>

        {/* THE MAIN CONTENT */}
        <Grid item md={7}>
            {props.children[selectedNav]}
        </Grid>

        {/* THE RIGHT HAND MESSAGE AND PROFILE BAR */}
        <Grid item md={3}>
            <RightSideBar />
        </Grid>
    </Grid>
}

export default Home;