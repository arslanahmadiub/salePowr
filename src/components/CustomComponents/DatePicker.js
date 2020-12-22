// import { DateRange } from "@material-ui/icons";
// import React from "react";
// import Input from "./Input";

// const DatePicker = (props) => {
//   const openPicker = (event) => {
//     // event.preventDefault();
//     // event.stopPropagation();

//     document.querySelector("input").click();
//   };
//   return (
//     <div
//       style={{
//         position: "relative",
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <label>{props.label}</label>

//       <Input
//         type="date"
//         style={{
//           position: "relative",
//           paddingRight: "75px",
//           marginBottom: "-5px",
//         }}
//       />

//       {/* <DateRange
//         onClick={openPicker}
//         style={{
//           position: "absolute",
//           right: "0px",
//           top: "0%",
//           color: "#000",
//           background: "rgba(151,159,170, 0.4)",
//           padding: "8px",
//           borderRadius: "10px",
//         }}
//       /> */}
//     </div>
//   );
// };

// export default DatePicker;

import React from "react";
import Styled from "styled-components";

const Asterisk = Styled.span`
    color: red;
    font-size: 16px;
    font-weight: 600;
    display: ${(props) => (props.show === true ? "" : "none")}
`;
const Label = Styled.label`
    font-size: 14px;
    position:relative; 
    padding: 15 0px;
    top: -5px;
`;

const Input = Styled.input`
    display: block;
    height: 45px;
    width: 100%;
    font-size: 16px;
    padding: 0 10px;
    font-weight: 400;
    border: 1px solid #ccc;
    border-radius: 10px;
    &:focus {
        border-radius: 10px;
        border: 2px solid lightblue;
        outline-width: 0px;
    }

`;

export default function ({
  value,
  id,
  placeholder,
  onChange,
  label,
  required,
  type,
  ...props
}) {
  return (
    <Label htmlFor={id}>
      {label && label} <Asterisk show={!!required}>*</Asterisk>
      <Input
        value={value}
        required={!!required}
        placeholder={placeholder || label || ""}
        type={type || "date"}
        id={id}
        name={props.name || id || ""}
        onChange={onChange && onChange}
      />
    </Label>
  );
}
