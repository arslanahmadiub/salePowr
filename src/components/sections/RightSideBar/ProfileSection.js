import React from "react";
import Grid from "@material-ui/core/Grid"
import Close from "@material-ui/icons/Close"
import Avatar from "@material-ui/core/Avatar"
const ProfileSection = props => {
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
                <div style={{ borderRadius: "70px", border: "solid 7px #31BDF4", height: "130px", width: "130px", }}>
                    <Avatar style={{ border: "solid 10px #ffffff", height: "110px", width: "110px" }} alt="Ebenezer Ghanney" src={props?.image} />

                </div>
            </div>
        </Grid>
        <Grid item>
            <div style={{ textAlign: "center" }}>
                <div style={{ color: "#010101", fontSize: "20px", fontWeight: "500", padding: "10px 0" }}>Ebenezer Ghanney</div>
                <small style={{ color: "#979FAA", fontSize: "14px", }}>Edit Profile</small>
            </div>
        </Grid>
    </Grid>

}

export default ProfileSection;