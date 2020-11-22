import React from "react";
import Styled from "styled-components"
import { Input as AntInput } from 'antd'


const Asterisk = Styled.span`
    color: red;
    font-size: 16px;
    font-weight: 600;
    display: ${props => props.show === true ? "" : "none"}
`
const Label = Styled.label`
    font-size: 13px;
    position:relative; 
    padding: 15 0px;
    top: -5px;
`

const Container = Styled.div`
    position: relative;
    height: 60px;
`
const styles = {
    borderRadius: "10px",
}

export default function Input({ id, placeholder, onChange, label, required, type, ...props }) {

    const showLabel = label && required;


    return <Container>
        <Label htmlFor={id}>{label && label} <Asterisk show={showLabel}>*</Asterisk></Label>
        <AntInput
            size='large'
            style={styles}
            required={required}
            placeholder={placeholder || label || ""}
            type={type || "text"}
            id={props.id || "textbox"}
            name={props.name || props.id || ""}
            onChange={onChange && onChange}
        />
    </Container>
}

