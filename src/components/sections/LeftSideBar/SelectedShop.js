import React from "react"
import Avatar from "@material-ui/core/Avatar"
import ExpandMore from "@material-ui/icons/ExpandMore"
const SelectedShop = props => {
    const name = props.shop.name;

    return name ? <div style={{ padding: "0  0 0 0px", position: "absolute", bottom: "0px", width: "80%" }}>
        <div style={{ fontSize: "18px", fontWeight: "500", color: "#010101", padding: "15px 5px" }}>
            Selected shop
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", padding: "5px" }}>
            <div style={{ display: "flex", justifyContent: "normal", heigth: "" }}>
                <div style={{}}>
                    <Avatar alt={name}>{name.toString()[0]}</Avatar>
                </div>
                <div style={{ lineHeight: "40px", paddingLeft: "5px", fontSize: "16px", fontWeight: "500", color: "#979FAA" }}>
                    {name}
                </div>
            </div>
            <div style={{ lineHeight: "55px", color: "#979FAA" }}>
                <ExpandMore />
            </div>
        </div>
    </div>

        :
        <></>
}

export default SelectedShop;