import { Button as AntButton, Space } from "antd";
import React from "react";
import { ThemeContext } from "../../contexts/ThemeContext";




export default function Buttton({ size, outlined, color, onClick, slim, faded, ...props }) {

    const theme = React.useContext(ThemeContext)


    const styles = {
        color: faded && '#31BDF4',
        borderRadius: '5px',
        background: theme[color] || (faded && 'rgba(49, 189, 244, 0.1)') || (outlined && '#fff') || theme.primaryBlue,
        height: !slim && '50px',
        border: !outlined && 'none'
    }

    return (
        <Space>
            <AntButton style={styles} type={!outlined && "primary"} onClick={onClick} {...props} size={slim ? "middle" : "large"} >
                {props.children}
            </AntButton>
        </Space>
    )
}
