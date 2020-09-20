import { ClickAwayListener } from "@material-ui/core";
import { ExpandLess } from "@material-ui/icons";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";
import styled from "styled-components";


const InputArea = styled("input")`
  width: 100%;
  margin: 0 0;
  height: 40px;
  border: 1px solid #979FAA;
  box-sizing: border-box;
  border-radius: 10px;
  z-index: 10;
  position: relative;
  padding: 0 5px;
`;


const List = styled.ul`
  padding: 8px;
  margin: 0;
  top: -3px;
  width: 100%;
  padding-left: 1em;
  background: #ffffff;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-radius: 10px;
  box-sizing: border-box;
  position:absolute;
  z-index: 100;  
  display: ${p => !p.show ? "none" : ""}
  
`;

const ListItem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 2px;
  &:hover{
      background:#979FAA;
      opacity: 0.5;
  }
`

const DropDownIcon = styled(ExpandMore)`
position: absolute;
z-index: 100;
color: #979FAA;
top: 30px;
right: 5px;
`
const DropUpIcon = styled(ExpandLess)`
position: absolute;
z-index: 100;
color: #979FAA;
top: 30px;
right: 5px;
`

const Container = styled.div`
  position: relative;
  cursor: pointer;
  padding: 20px 0;
`

const Label = styled.label`
    font-size: 13px;
    position:absolute; 
    margin: 15 0px;
    top: -5px;
`

const Asterisk = styled.span`
    color: red;
    font-size: 16px;
    font-weight: 600;
    display: ${props => props.show === true ? "" : "none"}

`

const Select = props => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const chooseOption = value => () => {
        setSelectedOption(value);
        toggleDropDown()
    };

    const onChange = props.onChange ? props.onChange : () => { };
    const handleChange = event => {
        event.stopPropagation();
    }

    const options = props?.options || [];
    const defaultValue = props.placeholder || "Select option..."
    const toggleDropDown = event => setIsOpen(!isOpen)

    const showLabel = props.label && props.required;

    return <ClickAwayListener onClickAway={() => setIsOpen(false)}>
        <Container>
            <>
                <Label for={props.id}>{props.label && props.label} <Asterisk show={showLabel}>*</Asterisk></Label>
                <InputArea placeholder={defaultValue} onChange={onChange} value={selectedOption} onClick={toggleDropDown} />
                {isOpen ? <DropUpIcon onClick={toggleDropDown} /> : <DropDownIcon onClick={toggleDropDown} />}
            </>
            <Container>
                <List show={isOpen} onClick={toggleDropDown}>
                    {
                        options?.map(option => {
                            return <ListItem key={Math.random()} onClick={chooseOption(option)}>
                                {option}
                            </ListItem>
                        })
                    }
                </List>
            </Container>


        </Container>
    </ClickAwayListener>
}

export default Select;