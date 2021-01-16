import React, { useState, useEffect, useRef } from "react";
//import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Input from "../CustomComponents/Input";
import Button from "../CustomComponents/Button";
import DatePicker from "../CustomComponents/DatePicker";
import PasswordInput from "../CustomComponents/PasswordInput";
import CustomLink from "../CustomComponents/CustomLink";
import { completeUserProfile } from "../../services/authServices";
import { getFullUserDetails } from "../../services/authServices";
import { imageEndPoint } from "../../config.json";
import {
  shopProfileFetchLoading,
  userProfileSaveLoading,
} from "../../action/dashboardAction";
import { profileDialogAction } from "../../action/authAction";
import { setProfileImage } from "../../action/authAction";
import { useSelector, useDispatch } from "react-redux";

import CircularProgress from "@material-ui/core/CircularProgress";

const ProfileForm = (props) => {
  let dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  let [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    other_names: "",

    email: "",
    phone: "",
    newPassword: "",
    confirmPassword: "",
  });
  let {
    first_name,
    last_name,
    other_names,

    email,
    phone,
    newPassword,
    confirmPassword,
  } = profileData;
  let [profileAvatar, setProfielAvatar] = useState(props.profileImage);
  let widthRef = useRef();

  const profileLoading = useSelector(
    (state) => state.dashboard.profileDataSaveLoading
  );

  const [userImage, setUserImage] = useState("");

  useEffect(() => {
    setProfielAvatar(props.profileImage);
  }, [props.profileImage]);

  useEffect(() => {
    props.setProfileAvatar(userImage);
  }, [userImage]);
  let userToken = localStorage.getItem("token");

  let getProfileInfo = async () => {
    dispatch(shopProfileFetchLoading(true));
    let { data } = await getFullUserDetails(userToken);
    dispatch(shopProfileFetchLoading(false));

    if (data.Success) {
      let fetchDob = new Date(data.Details[0].dob);
      setStartDate(fetchDob);
      setProfileData(data.Details[0]);
      setUserImage(imageEndPoint + data.Details[0].profile_picture);
      dispatch(
        setProfileImage(imageEndPoint + data.Details[0].profile_picture)
      );
    }
  };
  useEffect(() => {
    getProfileInfo();
  }, []);

  let handelProfileDataChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const saveProfile = async (event) => {
    event.preventDefault();

    let profileDataForm = new FormData();
    profileDataForm.set("first_name", first_name);
    profileDataForm.set("last_name", last_name);
    profileDataForm.set("other_names", other_names);
    profileDataForm.set("dob", startDate);
    profileDataForm.set("email", email);
    profileDataForm.set("phone", phone);
    profileDataForm.set("profile_picture", profileAvatar);
    try {
      dispatch(userProfileSaveLoading(true));
      let result = await completeUserProfile(profileDataForm, userToken);

      dispatch(userProfileSaveLoading(false));
      dispatch(profileDialogAction(false));
    } catch (ex) {
      if (ex.response) {
        console.log(ex.response.data);
      }
    }
  };
  let selector = document.getElementById("dobSelector");
  let containerRef = widthRef;
  if (containerRef.current) {
    if (selector) {
      let width = containerRef.current.scrollWidth - 40;
      document.getElementById("dobSelector").style.width =
        width.toString() + "px";
    }
  }

  return (
    <>
      <form onSubmit={saveProfile}>
        <Grid container direction="row" spacing={5}>
          <Grid item xs={12} sm={6} ref={widthRef}>
            <Input
              placeholder="Enter first name"
              label="First name"
              name="first_name"
              value={first_name}
              onChange={handelProfileDataChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              placeholder="Enter last name"
              label="Last Name"
              name="last_name"
              value={last_name}
              onChange={handelProfileDataChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              placeholder="Other name(s)"
              label="Other name(s)"
              name="other_names"
              value={other_names}
              onChange={handelProfileDataChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePicker
              placeholder="Dadte of birth"
              label="Date of Birth"
              name="dob"
              id="dobSelector"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              style={{ display: "flex", width: "2000px", height: "500px" }}
              widthOfDob={
                widthRef.current
                  ? widthRef.current.scrollWidth.toString() + "px"
                  : "100%"
              }
            />

            {/* <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="datePicker"
            /> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              type="email"
              placeholder="Enter email address"
              label="Email address"
              name="email"
              value={email}
              onChange={handelProfileDataChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              placeholder="Phone number"
              label="Phone number"
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
              name="newPassword"
              value={newPassword}
              onChange={handelProfileDataChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <PasswordInput
              placeholder="Confirm password"
              label="Confirm password"
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
          <Grid
            container
            spacing={0}
            alignItems="center"
            justify="center"
            width="100%"
            style={{}}
          >
            <Grid
              item
              style={{
                display: profileLoading ? "flex" : "none",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <CircularProgress />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" width="100%">
              {props.buttonText || "Submit"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default ProfileForm;
