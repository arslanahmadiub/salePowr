import React from "react"
import Grid from "@material-ui/core/Grid"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import styled from "styled-components"


var options = [
    { text: "Item name", icon: DeviceHubIcon },
    { text: "Item name", icon: DeviceHubIcon },
    { text: "Item name", icon: DeviceHubIcon },
    { text: "Item name", icon: DeviceHubIcon },
    { text: "Item name", icon: DeviceHubIcon },
    { text: "Item name", icon: DeviceHubIcon },
    { text: "Item name", icon: DeviceHubIcon },
    { text: "Item name", icon: DeviceHubIcon },
]

const Sidebar = props => {
    return <Grid container direction="column">
        <Grid item xs={12}>
            <img src="https://api.unsplash.com/photos/random" />
        </Grid>
        <Grid item xs={12}>
            Create new transaction
        </Grid>
        <Grid item xs={12}>
            <List>
                {
                    options && options.map(option => {
                        return <ListItem>
                            <ListItemIcon>
                                {option.icon ? <option.icon /> : <DeviceHubIcon />}
                            </ListItemIcon>
                            <ListItemText primary={option.text} secondary={option.maintext} />

                        </ListItem>

                    })

                }
            </List>

        </Grid>


        <Grid item xs={12}>
            selected shop
        </Grid>
    </Grid>

}

export default Sidebar;