import { Avatar, Badge, Hidden, IconButton } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import React from "react";
import woman from "../../assets/images/woman-avatar.jpg"
import ProfileForm from "../Forms/ProfileForm"
// import Styled from "styled-components"

// const Title = Styled.div`
//     font-size: 18px;
//     font-weight: 600;
//     margin: 0 0 0 15px;
//     line-height: 51px;    
// `

// const ButtonContainer = Styled.div`
//     width: 50px;
//     heigth: 50px;
// `


const ProfileEdit = props => {

    const name = props.name

    const pickImage = event => {
        document.getElementById("profileimageselector").click()
    }


    const setProfileImage = event => {
        event.stopPropagation();
    }
    return <div style={{ background: "#F5F8FD", borderRadius: "25px", }}>

        <Hidden smDown>
            <div style={{ fontSize: "30px", color: "#010101", fontWeight: "bold" }}>
                Edit Profile
        </div>
        </Hidden>
        <div style={{ padding: "15px" }}>
            <div style={{}}>
                <div style={{ height: "150px", width: "150px", margin: "auto", display: "block" }}>
                    <input onChange={setProfileImage} type="file" style={{ display: "none" }} id="profileimageselector" />
                    <Badge
                        overlap="circle"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        badgeContent={<IconButton onClick={pickImage} style={{
                            background: "#31BDF4", border: "solid #FFFFFF 2px", height: "20px", width: "20px",
                        }}>
                            <Edit style={{ color: "#FFFFFF" }} />
                        </IconButton>}
                    >
                        <Avatar src={woman} alt={name} style={{ height: "150px", width: "150px" }} />
                    </Badge>
                </div>
                <div style={{ fontSize: "20px", fontWeight: '500', padding: "30px", textAlign: "center", }}>
                    {name}
                </div>
            </div>
            <div style={{}}>
                <ProfileForm />
            </div>
        </div>



    </div>
}

export default ProfileEdit;