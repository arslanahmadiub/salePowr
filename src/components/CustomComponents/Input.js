import React from "react";
import Styled from "styled-components"

const GeneralInput = Styled.input`
border: 1px solid #979FAA;
box-sizing: border-box;
border-radius: 10px;
line-height: 19px;
height: 40px;
width: 100%;
padding: 5px 15px;
font-size: 16px;
color:#000;
}
&::placeholder{
    color:#979FAA;
}
`

const Label = Styled.label`
font-size: 18px;
margin: 20px 0;
padding: 20px 0;
position: relative; 

`
const Asterisk = Styled.span`
color: red;
font-size: 16px;
font-weight: 600;
display: ${props => props.show === true ? "" : "none"}

`


const Input = props => {

    const showLabel = props.label && props.required;


    return <div>
        <Label for={props.id}>{props.label && props.label} <Asterisk show={showLabel}>*</Asterisk></Label>
        <GeneralInput
            required={props.required != null}
            placeholder={props.placeholder || props.label || ""}
            type={props.type || "text"}
            id={props.id || "textbox"}
            name={props.name || props.id || ""}
        />
    </div>
}



export default Input;

