import styled from "styled-components"

const height = '50px';

const Button = styled.button`
width: ${props => props.noExpand ? "" : "100%"};
box-shadow: 0;
border-radius: 10px;
border: none;
height:${props => props.slim ? "40px" : height};
background: ${props => props.white ? "#FFFFFF" : props.grey ? "#01010" : props.faded ? "rgba(49, 189, 244, 0.21)" : props.secondary ? "#5A36CC" : "#31BDF4"};
font-family: Inter;
line-height: ${props => props.slim ? "15px" : ""};
font-style: normal;
font-weight: normal;
letter-spacing: -1px;
font-size: 16px;
text-align: center;
text-transform: none;
padding: ${props => props.slim ? "15px" : ""};
color: ${props => props.faded ? "#31BDF4" : props.white ? "#010101" : props.grey ? "#979FAA" : "#FFFFFF"};
border: ${props => props.white ? "1px solid #E7EEFA" : "none"};
border-sizing: border-box;
`



export default Button;