import { Visibility, VisibilityOff } from "@material-ui/icons";
import React from "react";
import Input from "./Input"

const PasswordInput = props => {
    const [visible, setVisible] = React.useState(false)

    const toggleVisibility = event => {
        event.stopPropagation();
        event.preventDefault();
        setVisible(!visible);
    }

    return <div style={{ position: "relative" }}>
        <Input type={visible ? "text" : "password"} style={{ position: "relative", paddingRight: "75px" }} />

        <Visibility onClick={toggleVisibility} style={{ position: "absolute", right: "0px", top: "0%", color: "#000", background: "rgba(151,159,170, 0.2)", padding: "8px", borderRadius: "10px", display: visible ? "none" : "" }} />
        <VisibilityOff onClick={toggleVisibility} style={{ position: "absolute", right: "0px", top: "0%", color: "#000", background: "rgba(151,159,170, 0.2)", padding: "8px", borderRadius: "10px", display: visible ? "" : "none" }} />

    </div>

}


export default PasswordInput;