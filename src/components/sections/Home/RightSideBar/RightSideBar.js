import React from "react";
import ProfileSection from "./ProfileSection";
import Messages from "./Messages";
import ChatNotifierPanel from "./ChatNotifierPanel";
import Grid from "@material-ui/core/Grid";
import { messages as msg } from "../../../../DummyData/DummyData";
import LogoutButton from "../../../CustomComponents/LogoutButton";

const RigthSideBar = (props) => {
  const [messages, setMessages] = React.useState(null);

  React.useEffect(() => {
    // pull the last x messages here from the api
    // then remove the import from dummy data

    setMessages(msg);
  }, []);

  return (
    <div style={{ background: "#ffffff", padding: "20px" }}>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <ProfileSection />
        </Grid>
        <Grid item>
          <ChatNotifierPanel />
        </Grid>
        <Grid item>
          <Messages messages={messages} />
        </Grid>

        <LogoutButton />
      </Grid>
    </div>
  );
};

export default RigthSideBar;
