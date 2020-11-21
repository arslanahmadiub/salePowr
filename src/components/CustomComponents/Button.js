import { Button as AntButton, Space } from "antd";
import React from "react";
import { ThemeContext } from "../../contexts/ThemeContext";




export default function Buttton({ size, color, onClick, slim, faded, ...props }) {

    const theme = React.useContext(ThemeContext)


    const styles = {
        color: faded && '#31BDF4',
        borderRadius: '5px',
        background: theme[color] || (faded && 'rgba(49, 189, 244, 0.1)') || theme.primaryBlue,
        height: !slim && '50px',
        border: 'none'
    }

    return (
        <Space>
            <AntButton style={styles} type="primary" onClick={onClick} {...props} size={slim ? "middle" : "large"} >
                {props.children}
            </AntButton>
        </Space>
    )
}
