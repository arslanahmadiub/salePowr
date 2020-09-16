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


const TextArea = props => {


    return <TextAreaInput
        required={props.required != null}
        placeholder={props.placeholder || "Type here..."}
        id={props.id}
        name={props.name || props.id || ""}
        rows={props.rows || 5}
        disabled={props.disabled != null}
        maxLength={props.maxLength || null}
        readOnly={props.readOnly != null}
    />
}


export default TextArea;


