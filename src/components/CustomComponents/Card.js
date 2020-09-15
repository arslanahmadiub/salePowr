import React from "react";
import styled from "styled-components";


const Card = props => {
    return <div style={{ padding: "20px", borderRadius: "25px", background: `${props.background ? props.background : "#FFFFFF"}`, width: "100%", height: "100%" }}>
        <div style={{ height: "100%" }}>
            {props.children}
        </div>
    </div>
};

export default Card;