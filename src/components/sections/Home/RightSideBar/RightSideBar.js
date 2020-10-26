import React from "react"
import ProfileSection from "./ProfileSection"
import Messages from "./Messages"
import ChatNotifierPanel from "./ChatNotifierPanel"
import Grid from "@material-ui/core/Grid";
import { profileInfo, messages as msg } from "../../../../DummyData/DummyData"
import LogoutButton from "../../../CustomComponents/LogoutButton";

const RigthSideBar = props => {
    const [messages, setMessages] = React.useState(null)

    const profile = props.profile || profileInfo;

    React.useEffect(() => {
        // pull the last x messages here from the api
        // then remove the import from dummy data

        setMessages(msg)

    }, [])

    return <div style={{ background: "#ffffff", padding: "20px" }}>
        <Grid container direction="column" spacing={4}>
            <Grid item>
                <ProfileSection image={profile.profilePhoto} percentage={profile.profilePercent || 0} />
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