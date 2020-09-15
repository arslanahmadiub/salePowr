import ExpandMore from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";
import styled from "styled-components";

const Main = styled("div")`
  font-family: sans-serif;
  width: 100%;
  position: relative;
`;

const DropDownContainer = styled("div")`
  width: 100%;
  margin: 0 0;
  border: 1px solid #979FAA;
  box-sizing: border-box;
  border-radius: 10px;
  z-index: 10;
  position: relative;

`;

const DropDownHeader = styled("div")`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
`;

const DropDownListContainer = styled("div")`
    border: 0px solid grey;
    box-sizing: border-box;
    border-top: 0;
    border-radius: 10px;
    width: 100.5%;
    left: -1px;
    top: 38px;
   
    position: absolute;
    z-index: 100;

`;
const DropDownIcon = styled(ExpandMore)`
position: absolute;
top: 20%;
right: 1%;
`

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  width: 100%;
  padding-left: 1em;
  background: #ffffff;
  border-right: 1px solid grey;
  box-sizing: border-box;
  z-index: 100;  
  
  &:first-child {
    padding-top: 0;
    border: 1px solid grey;
    border-top: 0px solid grey;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    z-index: 100;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
  &:hover{
      background:#979FAA;
      opacity: 0.5;
  }
`;

//const options = ["Option 1", "Option 2", "Option 3", 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8'];

const defaultValue = "Select and option..."

const Select = props => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    const options = props.options ? props.options : [];

    return (
        <Main open={isOpen}>
            <DropDownContainer onClick={toggling}>
                <DropDownHeader >
                    {selectedOption || defaultValue}

                </DropDownHeader>
                <DropDownIcon />
                {isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                            {options?.map(option => (
                                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                                    {option}
                                </ListItem>
                            ))}
                        </DropDownList>
                    </DropDownListContainer>
                )}
            </DropDownContainer>
        </Main>
    );
}

export default Select;