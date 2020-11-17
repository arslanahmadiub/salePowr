import { Button as AntButton, Space } from "antd";
import React from "react";
import { ThemeContext } from "../../contexts/ThemeContext";




export default function Buttton({ size, color, onClick, slim, ...props }) {

    const theme = React.useContext(ThemeContext)


    const styles = {
        color: '',
        borderRadius: '5px',
        background: theme[color] || theme.primaryBlue,
        height: !slim && '50px',
        border: 'none'
    }

    return (
        <Space>
            <AntButton style={styles} type="primary" onClick={onClick} props size={slim ? "middle" : "large"} >
                {props.children}
            </AntButton>
        </Space>
    )
}
