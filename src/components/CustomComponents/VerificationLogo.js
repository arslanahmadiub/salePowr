import React from "react";
import logo from "../../assets/images/verification.svg";

export default function VerificationLogo(props) {
  const { height, width, color } = props;
  if (color);

  return <img src={logo} height={height || 20} width={width || 20} alt="" />;
}
