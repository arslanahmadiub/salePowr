import React from "react"
import ProfileSection from "./ProfileSection"
import Messages from "./Messages"
import ChatNotifierPanel from "./ChatNotifierPanel"
import Grid from "@material-ui/core/Grid";
import { messages, profilePercent } from "../../../DummyData/DummyData"
import woman from "../../../assets/images/woman-avatar.jpg"
import LogoutButton from "../../CustomComponents/LogoutButton";
const RigthSideBar = props => {

    return <div style={{ background: "#ffffff", padding: "24px" }}>
        <Grid container direction="column" spacing={4}>
            <Grid item>
                <ProfileSection image={woman} percentage={profilePercent} />
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
}

export default RigthSideBar;