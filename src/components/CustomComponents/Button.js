import React from "react";
import Button from "@material-ui/core/Button";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function ({
  size,
  outlined,
  color,
  onClick,
  slim,
  faded,
  ...props
}) {
  const theme = React.useContext(ThemeContext);

  const styles = {
    color: faded ? "#31BDF4" : "#fff",
    borderRadius: "5px",
    background:
      theme[color] ||
      (faded && "rgba(49, 189, 244, 0.1)") ||
      (outlined && "#fff") ||
      theme.primaryBlue,
    height: !slim && "50px",
    border: !outlined && "none",
    width: props.width || "",
  };

  return (
    <Button
      style={styles}
      onClick={onClick}
      {...props}
      size={slim ? "middle" : "large"}
    >
      {props.children}
    </Button>
  );
}
