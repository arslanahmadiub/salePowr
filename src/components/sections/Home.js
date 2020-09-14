import React from "react"
import Grid from "@material-ui/core/Grid"
import styled from "styled-components"
import Sidebar from "./Sidebar"



const Home = props => {

    return <>
        <Grid container direction="row">
            <Grid item md={2} >
                <Sidebar />
            </Grid>
            <Grid item md={8}>
                main content
            </Grid>
            <Grid item md={2}>
                menu bar
            </Grid>
        </Grid>

    </>
}

export default Home;