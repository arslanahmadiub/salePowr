import React, { useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import "./Profile.css";
import ProfileEdit from "./ProfileEdit";
import { Modal } from "antd";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { profileDialogAction } from "../../../action/authAction";
import CircularProgress from "@material-ui/core/CircularProgress";

const CompleteProfile = (props) => {
  // const { user } = React.useContext(AuthContext);

  // React.useEffect(() => {
  //   // Check if user has completed their profile
  //   //setOpen(user && user.profilePercent && user.profilePercent !== 1000)
  // }, [user]);
  const profileDialogValue = useSelector((state) => state.auth.profileDialog);
  const dispatch = useDispatch();

  let handelCancel = () => {
    dispatch(profileDialogAction(false));
  };
  return (
    <Modal
      //   visible={!!!(user && user.profilePercent && user.profilePercent !== 100)}
      visible={profileDialogValue}
      //   onOk={() => null}
      onCancel={handelCancel}
      width={1000}
      footer={null}
    >
      <ProfileEdit />
    </Modal>
  );
};

export default CompleteProfile;
