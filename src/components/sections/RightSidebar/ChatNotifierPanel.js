import React from "react"
import ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline"
import Button from "../../CustomComponents/Button"
import Grid from "@material-ui/core/Grid"

const ChatNotifierPanel = props => {

    return <div style={{ borderRadius: "10px", background: "#E7EEFA", height: "60px", padding: "10px" }}>
        <div style={{ display: "flex", justifyContent: "space-evenly", lineHeight: "60px" }}>
            <div style={{ width: "50px" }}>
                <Button secondary>
                    <ChatBubbleOutline fontSize="large" />
                </Button>
            </div>
            <div style={{ fontSize: "14px", color: "#01010", float: "left" }}>
                Chat Now
            </div>
            <div style={{ opacity: "0.2", fontSize: "20px", fontWeight: "200" }}>|</div>
            <div style={{ color: "#979FAA", fontSize: "14px" }}>11 new messages</div>
        </div>
    </div>
}

export default ChatNotifierPanel;