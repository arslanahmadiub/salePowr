import { Select as AntSelect } from 'antd'
import React from "react";
import styled from "styled-components";


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

const { Option } = Select;

export default function Select({ label, id, required, placeholder, list, onChange, ...props }) {

    const showLabel = label && required;

    console.log(list)

    return <>
        <Label style={{ borderRadius: '10px', }} htmlFor={id}>{label && label} <Asterisk show={showLabel}>*</Asterisk></Label>
        <AntSelect placeholder={placeholder || ''} onChange={onChange} size="large">
            {
                list && list.map(item => {
                    return <Option key={item}>{item}</Option>
                })
            }
        </AntSelect>
    </>
}