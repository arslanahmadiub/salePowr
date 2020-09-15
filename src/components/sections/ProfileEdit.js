import { Avatar, Badge, IconButton } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import React from "react";
import woman from "../../assets/images/woman-avatar.jpg"
import ProfileForm from "../Forms/ProfileForm"

const ProfileEdit = props => {
    const name = props.name

    const pickImage = event => { }
    return <div style={{ background: "#E7EEFA", borderRadius: "25px", padding: "15px" }}>
        <div style={{ fontSize: "30px", color: "#010101", fontWeight: "bold" }}>
            Edit Profile
        </div>
        <div style={{ padding: "50px" }}>
            <div style={{ display: "flex", padding: "0 0px 20px 0px" }}>
                <div style={{ height: "150px", width: "150px" }}>
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
                <div style={{ fontSize: "40px", fontWeight: '500', lineHeight: "145px", padding: "15px" }}>
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