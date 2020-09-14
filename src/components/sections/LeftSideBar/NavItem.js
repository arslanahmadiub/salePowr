import React from "react";


const NavItem = props => {
    const Icon = props.icon;
    const text = props.text;
    const color = props.selected ? "#31BDF4" : "#979FAA";
    return <div style={{ display: "flex", justifyContent: "left", height: "5px", padding: "20px 5px", cursor: "pointer" }}>
        <div style={{ color, }}>
            <Icon />
        </div>
        <div style={{ color, fontWeight: "500", fontSize: "16px", paddingLeft: "15px" }}>
            {text}
        </div>

    </div>
}

export default NavItem;