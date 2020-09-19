import React from "react";
import Grid from "@material-ui/core/Grid"
import Close from "@material-ui/icons/Close"
import Avatar from "@material-ui/core/Avatar"
import CircularProgress from "../../CustomComponents/CircularProgress";
import { Dialog, DialogTitle } from "@material-ui/core";
import ProfileEdit from "../ProfileEdit";
import Styled from "styled-components"
import { ArrowBack } from "@material-ui/icons";

const Title = Styled.div`
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 0 15px;
    line-height: 51px;    
`

const ButtonContainer = Styled.div`
    width: 50px;
    heigth: 50px;
`



const ProfileSection = props => {
    const [modal, setModal] = React.useState(false)

    const toggleModal = event => {
        event.stopPropagation();
        setModal(!modal);
    }

    const percentage = props.percentage || 100;
    return <Grid container direction="column" spacing={3}>
        <Grid item >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                    <div style={{ color: "#010101", fontSize: "14px", fontWeight: "500" }}>My Profile  </div>
                    <small style={{ color: "#7C7F84", fontSize: "12px", opacity: "0.4" }}>{percentage}% completed  </small>
                </div>
                <div style={{ color: "#979FAA", fontSize: "10px", cursor: "pointer" }}><Close /></div>
            </div>
        </Grid>
        <Grid item>
            <div style={{ width: "137px", margin: "auto" }}>
                <CircularProgress radius={60} thickness={7}>
                    <Avatar style={{ border: "solid 10px #ffffff", height: "110px", width: "110px" }} alt="Ebenezer Ghanney" src={props?.image} />
                </CircularProgress>

            </div>
        </Grid>
        <Grid item>
            <div style={{ textAlign: "center" }}>
                <div style={{ color: "#010101", fontSize: "20px", fontWeight: "500", padding: "10px 0" }}>Ebenezer Ghanney</div>
                <small style={{ color: "#979FAA", fontSize: "14px", cursor: "pointer" }} onClick={toggleModal}>Edit Profile</small>
            </div>
        </Grid>
        <Dialog open={modal} fullScreen fullWidth onClose={toggleModal}>
            <DialogTitle>
                <div style={{ display: "flex", lineHeight: "50px" }}>
                    <ButtonContainer onClick={toggleModal}>
                        <ArrowBack />
                    </ButtonContainer>
                    <Title>Edit Profile</Title>
                </div>
            </DialogTitle>
            <ProfileEdit name="Natasha Glass" />
        </Dialog>
    </Grid>

}

export default ProfileSection;