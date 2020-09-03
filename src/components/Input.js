import React from "react";
import styled from "styled-components"

const GeneralInput = styled.input`
border: 1px solid #979FAA;
box-sizing: border-box;
border-radius: 10px;
line-height: 19px;
height: 50px;
width: 100%;
padding:5px;
font-size: 16px;
color:#000;
&::placeholder{
    color:#979FAA;
}
`
const Input = props => {


    return <GeneralInput
        required={props.required != null}
        placeholder={props.placeholder || ""}
        type={props.type || "text"}
        id={props.id}
        name={props.name || props.id || ""}
    />
}



export default Input;

