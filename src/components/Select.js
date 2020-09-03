import React, { useState } from "react";
import styled from "styled-components";

const Main = styled("div")`
  font-family: sans-serif;
  width: 100%;
  position: relative;
  &:after{
    content: "";
    width: 0px;
    height: 0px;
    border-top:18px solid ${props => props.open ? "transparent" : "rgba(0, 0, 0, 0.65)"};
    border-bottom:20px solid ${props => !props.open ? "transparent" : "rgba(0, 0, 0, 0.65)"};
    border-right: 20px solid transparent;
    border-left: 20px solid transparent;
    position: absolute;
    top:${props => props.open ? "-10px" : "10px"};
    //bottom: ${props => !props.open ? "0" : "150px"};
    right: 5px;
    z-index:10;      
    }
`;

const DropDownContainer = styled("div")`
  width: 100%;
  margin: 0 auto;
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
    border: 0px  grey;
    box-sizing: border-box;
    border-radius: 10px;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border-top: 1px solid grey;
  box-sizing: border-box;

  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
  &:hover{
      background:grey;
  }
`;

const options = ["Option 1", "Option 2", "Option 3", 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8'];

const defaultValue = "Select and option..."

const Select = props => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
    };

    return (
        <Main open={isOpen}>
            <DropDownContainer onClick={toggling}>
                <DropDownHeader >
                    {selectedOption || defaultValue}

                </DropDownHeader>
                {isOpen && (
                    <DropDownListContainer>
                        <DropDownList>
                            {options.map(option => (
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