import React from "react"


const VerticalBar = props => {
    const percentage = props.percentage || 10;
    const label = props.label;
    return <div style={{ height: "100%", position: "relative" }}>
        <div style={{ position: `${"relative"}`, bottom: "25px", background: "#F5F8FD", borderRadius: "3px", height: `${label ? "95%" : "100%"}`, width: "30px" }}>
            <div style={{ position: "absolute", background: "#5A36CC", borderRadius: "3px", height: `${label ? percentage * 0.95 : percentage}%`, width: "30px", bottom: 0 }}>        </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, color: "#979FAA", fontSize: "12px", }}>
            {label}
        </div>
    </div>
}

export default VerticalBar;