import React, { useState, useEffect } from "react";
//import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Input from "../CustomComponents/Input";
import Button from "../CustomComponents/Button";
import DatePicker from "../CustomComponents/DatePicker";
import PasswordInput from "../CustomComponents/PasswordInput";
import CustomLink from "../CustomComponents/CustomLink";
import { completeUserProfile } from "../../services/authServices";
const ProfileForm = (props) => {
  let [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    dob: "",
    email: "",
    phone: "",
    newPassword: "",
    confirmPassword: "",
  });

  let [profileAvatar, setProfielAvatar] = useState(props.profileImage);

  useEffect(() => {
    setProfielAvatar(props.profileImage);
  }, [props.profileImage]);

  let {
    firstName,
    lastName,
    otherName,
    dob,
    email,
    phone,
    newPassword,
    confirmPassword,
  } = profileData;

  let handelProfileDataChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const saveProfile = async (event) => {
    event.preventDefault();
    console.log(dob);
    let profileData = new FormData();
    profileData.append("first_name", firstName);
    profileData.append("last_name", lastName);
    profileData.append("other_names", otherName);
    profileData.append("dob", dob);
    profileData.append("email", email);
    profileData.append("phone", phone);
    profileData.append("profile_picture", profileAvatar);
    try {
      let result = await completeUserProfile(profileData);
      console.log(result);
    } catch (ex) {
      if (ex.response) {
        console.log(ex.response.data);
      }
    }
  };
  return (
    <form onSubmit={saveProfile}>
      <Grid container direction="row" spacing={5}>
        <Grid item xs={12} sm={6}>
          <Input
            placeholder="Enter first name"
            label="First name"
            required
            name="firstName"
            value={firstName}
            onChange={handelProfileDataChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            placeholder="Enter last name"
            label="Last Name"
            required
            name="lastName"
            value={lastName}
            onChange={handelProfileDataChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            placeholder="Other name(s)"
            label="Other name(s)"
            name="otherName"
            value={otherName}
            onChange={handelProfileDataChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DatePicker
            placeholder="Dadte of birth"
            label="Date of Birth"
            name="dob"
            value={dob}
            onChange={handelProfileDataChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            type="email"
            placeholder="Enter email address"
            label="Email address"
            required
            name="email"
            value={email}
            onChange={handelProfileDataChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Input
            placeholder="Phone number"
            label="Phone number"
            required
            type="tel"
            name="phone"
            value={phone}
            onChange={handelProfileDataChange}
          />
        </Grid>
        <Grid item xs={12}>
          <h2
            style={{
              fontSize: "22px",
              fontWeight: "500",
              padding: "0",
              margin: "0",
            }}
          >
            Change password
          </h2>
        </Grid>
        <Grid item xs={12} sm={6}>
          <PasswordInput
            placeholder="New password"
            label="New password"
            required
            name="newPassword"
            value={newPassword}
            onChange={handelProfileDataChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PasswordInput
            placeholder="Confirm password"
            label="Confirm password"
            required
            name="confirmPassword"
            value={confirmPassword}
            onChange={handelProfileDataChange}
          />
        </Grid>

        <Grid item xs={12}>
          <span style={{ textAlign: "center" }}>
            * By continuing, you agree to Powrsale's{" "}
            <CustomLink>terms</CustomLink> and{" "}
            <CustomLink>privacy notice</CustomLink>
          </span>
        </Grid>

        <Grid item xs={12}>
          <Button type="submit" width="100%">
            {props.buttonText || "Submit"}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ProfileForm;
