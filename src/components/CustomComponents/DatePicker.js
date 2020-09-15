import { DateRange } from "@material-ui/icons";
import React from "react";
import Input from "./Input"

const DatePicker = props => {

    const openPicker = event => {
        // event.preventDefault();
        // event.stopPropagation();
        //alert();
        document.querySelector("input").click();
    }
    return <div style={{ position: "relative" }}>
        <Input type="date" style={{ position: "relative", paddingRight: "75px" }} />


        <DateRange onClick={openPicker} style={{ position: "absolute", right: "0px", top: "0%", color: "#000", background: "rgba(151,159,170, 0.4)", padding: "8px", borderRadius: "10px" }} />

    </div>

}


export default DatePicker;