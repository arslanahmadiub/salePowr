import React from "react"
import Grid from "@material-ui/core/Grid"
import RightSideBar from "./RightSideBar/RightSideBar"
import { profileInfo, } from "../../../DummyData/DummyData"
import { Dialog, DialogTitle, Drawer, Hidden, } from "@material-ui/core"
import Menu from "@material-ui/icons/Menu"
import Styled from "styled-components"
import { ArrowBack, Close, EventNote, } from "@material-ui/icons"
import Button from "../../CustomComponents/Button"
import LeftSideBar from "./LeftSideBar/LeftSideBar"
import CompleteProfile from "../Profile/CompleteProfile"


const DrawerContainer = Styled.div`
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    };
    overflow-x: hidden;
    overflow-y: scroll;
`

const CloseDrawer = Styled(Close)`
position:absolute;
right: 15px;
top: 30px;
cursor: pointer;
`

const FlexContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    position:relative;
    margin: 30px 0px;
    @media (max-width: 960px){
        margin: 10px 0px;
    }
`

const ButtonContainer = Styled.div`
    width: 40px;
    heigth: 30px;
    padding: 0;
    display: flex; 
    justify-content: left;
    margin: 0 5px 0 0;
`

const Title = Styled.div`
    font-size: 16px;
    font-weight: 500;
    margin: 0 0 0 0px;
    line-height: 51px;
`


const Home = props => {
    const [drawerOpen, toggleDrawerOpen] = React.useState(false)
    const [modal, setModal] = React.useState(false)

    const profile = props.profile || profileInfo;


    const toggleModal = event => {
        setModal(!modal)
    }
    const drawer = <div style={{ position: "relative", height: "100vh", padding: "60px 15px" }}>

        <LeftSideBar />
    </div>


    return <Grid container direction="row">

        {/* MOBILE TEMPORARY SIDEBAR */}
        <Drawer
            //container={container}
            variant="temporary"
            anchor={'left'}
            open={drawerOpen}
            onClose={() => toggleDrawerOpen(!drawerOpen)}
            // classes={{
            //     paper: classes.drawerPaper,
            // }}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
        >
            <DrawerContainer onClick={(event) => {
                event.stopPropagation();
                //toggleDrawerOpen(!drawerOpen)
            }}>
                <CloseDrawer />
                {drawer}
            </DrawerContainer>

        </Drawer>




        {/* THE LEFT SIDE BAR */}
        <Hidden smDown>
            <Grid item md={2} style={{ background: "#fff" }}>
                {drawer}
            </Grid>
        </Hidden>
        {/* THE MAIN CONTENT */}
        <Grid item xs={12} md={7} lg={7} style={{ padding: "20px", background: "#F5F8FD" }}>
            {/*    MOBILE TOP ROW */}
            <Hidden mdUp>

                <FlexContainer>
                    <FlexContainer>
                        <ButtonContainer onClick={() => toggleDrawerOpen(!drawerOpen)}>
                            <Button white><Menu /></Button>
                        </ButtonContainer>
                    </FlexContainer>
                    <FlexContainer>
                        <ButtonContainer>
                            <Button white><EventNote style={{ color: "#5A36CC" }} /></Button>
                        </ButtonContainer>
                        <ButtonContainer onClick={toggleModal}>
                            <Button white><img width="100%" height="100%" src={profile.profilePhoto} alt={profile.username} /></Button>
                        </ButtonContainer>
                    </FlexContainer>
                </FlexContainer>

            </Hidden>
            {props.children}
            <CompleteProfile />
        </Grid>

        <Dialog open={modal} fullScreen fullWidth onClose={toggleModal}>
            <DialogTitle>
                <div style={{ display: "flex", lineHeight: "50px" }}>
                    <ButtonContainer onClick={toggleModal}>
                        <ArrowBack />
                    </ButtonContainer>
                    <Title>Profile</Title>
                </div>
            </DialogTitle>
            <RightSideBar />
        </Dialog>

        {/* THE RIGHT HAND MESSAGE AND PROFILE BAR */}
        <Hidden smDown>
            <Grid item md={3}>
                <RightSideBar />
            </Grid>
        </Hidden>
    </Grid>
}

export default Home;