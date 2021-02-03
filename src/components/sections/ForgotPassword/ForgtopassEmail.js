import React from "react";
import {
  makeStyles,
  Button as MaterialButton,
  Hidden,
} from "@material-ui/core";
import Input from "../../CustomComponents/Input";

const ForgtopassEmail = () => {
  return (
    <>
      <Hidden smDown>
        <div
          style={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ marginBottom: "5%" }}>
            <h1>Enter Email addres to reset your password...</h1>
          </div>
          <div style={{ widht: "40vw" }}>
            <Input placeholder="Enter Email Address" width="40vw" />
          </div>
          <div>
            <MaterialButton
              fullWidth
              style={{
                background: "#1AB4B3",
                width: "40vw",
                color: "white",
                marginTop: "20px",
                height: "45px",
              }}
            >
              Send
            </MaterialButton>
          </div>
        </div>
      </Hidden>

      <Hidden mdUp>
        <div
          style={{
            display: "flex",
            width: "100vw",
            height: "100vh",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10%",
          }}
        >
          <div style={{ marginBottom: "5%" }}>
            <h1 style={{ textAlign: "center" }}>
              Enter Email addres to reset your password...
            </h1>
          </div>
          <div>
            <Input placeholder="Enter Email Address" width="90vw" />
          </div>
          <div>
            <MaterialButton
              fullWidth
              style={{
                background: "#1AB4B3",
                width: "90vw",
                color: "white",
                marginTop: "20px",
                height: "45px",
              }}
            >
              Send
            </MaterialButton>
          </div>
        </div>
      </Hidden>
    </>
  );
};

export default ForgtopassEmail;
