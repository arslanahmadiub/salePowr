import React from "react";
import styled from "styled-components"

const TextAreaInput = styled.textarea`
border: 1px solid #979FAA;
box-sizing: border-box;
border-radius: 10px;
resize: none;
width: 100%;
padding:10px;
font-size: 16px;
color:#000;
&::placeholder{
    color:#979FAA;
}
`


const Container = styled.div`

`

const Label = styled.label`
    font-size: 13px;
    position:relative; 
    padding: 15 0px;
    top: -5px;
`

const Asterisk = styled.span`
    color: red;
    font-size: 16px;
    font-weight: 600;
    display: ${props => props.show === true ? "" : "none"}
`


const TextArea = props => {

    const showLabel = props.label && props.required;
    return <Container>
        <Label htmFor={props.id}>{props.label && props.label} <Asterisk show={showLabel}>*</Asterisk></Label>

        <TextAreaInput
            required={props.required != null}
            placeholder={props.placeholder || "Type here..."}
            id={props.id}
            name={props.name || props.id || ""}
            rows={props.rows || 5}
            disabled={props.disabled != null}
            maxLength={props.maxLength || null}
            readOnly={props.readOnly != null}
        />
    </Container>
}


export default TextArea;


