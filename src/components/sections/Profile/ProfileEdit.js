import { Avatar, Badge, Hidden, IconButton } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import React, { useState } from "react";
import ProfileForm from "../../Forms/ProfileForm";
import { profileInfo } from "../../../DummyData/DummyData";
import profilePhoto from "../../../assets/images/photo.jpg";

const ProfileEdit = (props) => {
  const profile = props.profile || profileInfo;

  let [profileAvatar, setProfileAvatar] = useState(null);
  let [profileAvatarObject, setProfileAvatarObject] = useState(null);

  const pickImage = (event) => {
    document.getElementById("profileimageselector").click();
  };

  const setProfileImage = (event) => {
    let newUrl = URL.createObjectURL(event.target.files[0]);
    setProfileAvatar(newUrl);
    setProfileAvatarObject(event.target.files[0]);
  };
  return (
    <div style={{ background: "#F5F8FD", borderRadius: "25px" }}>
      <Hidden smDown>
        <div style={{ fontSize: "30px", color: "#010101", fontWeight: "bold" }}>
          Edit Profile
        </div>
      </Hidden>
      <div style={{ padding: "15px" }}>
        <div>
          <div
            style={{
              height: "150px",
              width: "150px",
              margin: "auto",
              display: "block",
            }}
          >
            <input
              onChange={setProfileImage}
              type="file"
              style={{ display: "none" }}
              id="profileimageselector"
            />
            <Badge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              badgeContent={
                <IconButton
                  onClick={pickImage}
                  style={{
                    background: "#31BDF4",
                    border: "solid #FFFFFF 2px",
                    height: "20px",
                    width: "20px",
                  }}
                >
                  <Edit style={{ color: "#FFFFFF" }} />
                </IconButton>
              }
            >
              <Avatar
                src={profileAvatar}
                alt={profile.username}
                style={{ height: "150px", width: "150px" }}
              />
            </Badge>
          </div>
          {/* <div
            style={{
              fontSize: "20px",
              fontWeight: "500",
              padding: "30px",
              textAlign: "center",
            }}
          >
            {profile.username}
          </div> */}
          <br />
        </div>
        <div style={{}}>
          <ProfileForm
            data={profileInfo}
            buttonText="SAVE PROFILE"
            profileImage={profileAvatarObject}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
