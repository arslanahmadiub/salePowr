import React from "react"
import Grid from "@material-ui/core/Grid"
import LeftSideBar from "./LeftSideBar/LeftSideBar"
import RightSideBar from "./RightSideBar/RightSideBar"
import ProfileEdit from "./ProfileEdit"


const Home = props => {

    return <Grid container direction="row">
        <Grid item md={2} >
            <LeftSideBar />
        </Grid>
        <Grid item md={7}>
            <ProfileEdit name="Ebenezer Ghanney" />
        </Grid>
        <Grid item md={3}>
            <RightSideBar />
        </Grid>
    </Grid>
}

export default Home;