import React from "react";
import { useLocation } from "react-router-dom";

const NavItem = (props) => {
  const location = useLocation();
  const path = location.pathname;

  const Icon = props.icon;
  const text = props.text;
  const color = path === text.toLowerCase() ? "#31BDF4" : "#979FAA";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        height: "5px",
        padding: "20px 5px",
        cursor: "pointer",
      }}
    >
      <div style={{ color: props.selected ? "#31BDF4" : color }}>
        <Icon />
      </div>
      <div
        style={{
          color: props.selected ? "#31BDF4" : color,
          fontWeight: "500",
          fontSize: "16px",
          paddingLeft: "15px",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default NavItem;
