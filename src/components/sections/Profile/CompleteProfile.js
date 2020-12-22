import React, { useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import "./Profile.css";
import ProfileEdit from "./ProfileEdit";
import { Modal } from "antd";

const CompleteProfile = (props) => {
  // const { user } = React.useContext(AuthContext);

  // React.useEffect(() => {
  //   // Check if user has completed their profile
  //   //setOpen(user && user.profilePercent && user.profilePercent !== 1000)
  // }, [user]);

  let [visiblity, setVisiblity] = useState(true);

  let handelCancel = () => {
    setVisiblity(false);
  };
  return (
    <Modal
      //   visible={!!!(user && user.profilePercent && user.profilePercent !== 100)}
      visible={visiblity}
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
