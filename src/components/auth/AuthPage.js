import React, { useState, useEffect, createRef, useRef } from "react";
import {
  Grid,
  makeStyles,
  Button as MaterialButton,
  DialogContentText,
} from "@material-ui/core";
import PasswordInput from "../CustomComponents/PasswordInput";
import Input from "../CustomComponents/Input";
import { Redirect } from "react-router-dom";
import TwinInputSelect from "../CustomComponents/TwinInputSelect";
import { ThemeContext } from "../../contexts/ThemeContext";
import { countryCodes } from "../../DummyData/DummyData";
import { Email, Facebook, Phone } from "@material-ui/icons";
import logo from "../../assets/images/logo.png";

import GoogleLogo from "../CustomComponents/GoogleLogo";
import { AuthContext } from "../../contexts/AuthContext";
import snapshot from "./../../assets/images/snapshot.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { createUser } from "../../services/authServices";
import { loginUser } from "../../services/authServices";
import { loginUserWithGoogle } from "../../services/authServices";
import { loginUserWithFacebook } from "../../services/authServices";
import FacebookLogin from "react-facebook-login";
import FacebookIcon from "@material-ui/icons/Facebook";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "25px",
  },
  emptyContainer: {
    color: "#553560",
    backgroundImage: `url(${snapshot})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "100vh",
    width: "100%",
  },
  text: {
    textAlign: "center",
  },
  error: {
    color: "red",
  },
  heading: {
    textAlign: "center",
  },
  signInButton: {
    color: (props) => props.white,
    background: (props) => props.primaryGreen,
    textTransform: "capitalize",
    "&:hover": {
      background: (props) => props.primaryGreen,
    },
  },
  authToggle: {
    color: (props) => props.primaryBlue,
    textTransform: "capitalize",
    "&:hover": {
      background: "none",
    },
  },
  button: {
    textTransform: "capitalize",
  },
}));

export default function AuthenticationPage(props) {
  const history = useHistory();

  const [wantsToSignIn, setWantsToSignIn] = useState(true);
  const [data, setData] = useState({
    email: "",
    password: "",
    password2: "",
  });

  let { email, password, password2 } = data;
  const [usePhoneSignIn, setPhoneSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Hello Message");
  const [RedirectToReferrer, setRedirectToReferrer] = useState(false);

  const [loadingShow, setLoadingShow] = useState(false);

  const theme = React.useContext(ThemeContext);
  const { from } = props.location || { from: { pathname: "/" } };

  const { setUser } = React.useContext(AuthContext);
  const styles = useStyles(theme);

  const toggleAuthType = () => {
    setWantsToSignIn(!wantsToSignIn);
    setData({
      email: "",
      password: "",
      password2: "",
    });
  };

  const toggleAuthMethod = () => {
    setPhoneSignIn(!usePhoneSignIn);
  };

  let widthRef = useRef();

  const handlePhoneInput = (phone) => {};

  const handleEmailInput = (events) => {
    return setData({ ...data, email: events.target.value });
  };

  const handlePasswordInput = (event) => {
    return setData({ ...data, password: event.target.value });
  };
  const handlePassword2Input = (event) => {
    return setData({ ...data, password2: event.target.value });
  };

  let responseFacebook = async (res) => {
    let accessToken = {
      email: res.email,
    };
    try {
      let { data } = await loginUserWithFacebook(accessToken);
      if (data.Success) {
        localStorage.setItem("token", data.Token);
        history.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  let responseGoogle = async (res) => {
    let accessToken = {
      token: res.accessToken,
    };
    try {
      let { data } = await loginUserWithGoogle(accessToken);
      if (data.Success) {
        localStorage.setItem("token", data.Token);
        history.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  let handelLoginClickAfterSignUp = () => {
    setWantsToSignIn(true);
  };

  let handelSignin = async () => {
    let form_data = new FormData();
    form_data.append("email", email);
    form_data.append("password1", password);
    form_data.append("password2", password2);

    if (!wantsToSignIn) {
      if (email === null || password === null || password2 === null) {
        setErrorMessage("Please fill all fields...");
      } else if (password !== password2) {
        setErrorMessage("Password doesn't match");
      } else {
        setErrorMessage("");
        try {
          setLoadingShow(true);
          let { data } = await createUser(form_data);
          setLoadingShow(false);

          if (data.Success) {
            setErrorMessage(
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                Account created successfully..For Login
                <div
                  style={{
                    color: "#1AB4B3",
                    cursor: "pointer",
                    marginLeft: "10px",
                  }}
                  onClick={handelLoginClickAfterSignUp}
                >
                  Click Here
                </div>
              </div>
            );
            setData({
              email: "",
              password: "",
              password2: "",
            });
          }
        } catch (ex) {
          if (ex.response && ex.response.status === 500) {
            setLoadingShow(false);

            let error = ex.response.data.Errors;

            if ("email" in error) {
              setErrorMessage(error.email[0]);
            } else if ("password2" in error) {
              setErrorMessage(error.password2[0]);
            } else if ("__all__" in error) {
              setErrorMessage(error.__all__[0]);
            } else {
            }
          }
        }
      }
    } else {
      let loginData = new FormData();
      loginData.append("email", email);
      loginData.append("password", password);
      try {
        setLoadingShow(true);

        let { data } = await loginUser(loginData);
        setLoadingShow(false);

        if (data.Status) {
          await localStorage.setItem("token", data.Token);
          history.push("/dashboard");
        }
      } catch (ex) {
        setLoadingShow(false);

        if (ex.response && ex.response.status === 401) {
          if (ex.response.data.Status === false) {
            setErrorMessage(ex.response.data.Message);
          }
        }
      }
    }
    setLoadingShow(false);
  };
  const pageHeader = wantsToSignIn
    ? "Sign in to your Powrsale account"
    : "Sign up to Powrsale";

  useEffect(() => {
    setErrorMessage(null);
  }, [usePhoneSignIn, wantsToSignIn]);

  if (RedirectToReferrer === true) {
    return <Redirect to={from} />;
  }

  let containerRef = widthRef;

  return (
    <Grid container spacing={0} ref={widthRef}>
      <div
        style={{
          display: loadingShow ? "flex" : "none",
          background: "rgba(26, 180, 178, 0.32)",
          minWidth: containerRef.current
            ? containerRef.current.scrollWidth.toString() + "px"
            : "",
          minHeight: containerRef.current
            ? containerRef.current.scrollHeight.toString() + "px"
            : "",
          position: "absolute",
          zIndex: "10",
        }}
      ></div>
      <Grid item sm={12} md={4}>
        <div className={styles.container}>
          <div style={styles.logo}>
            <img src={logo} alt="google logo" />
          </div>
          <h1 className={styles.heading}>{pageHeader}</h1>

          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              style={{ display: usePhoneSignIn ? "" : "none" }}
            >
              <TwinInputSelect
                list={countryCodes}
                placeholder="Phone Number"
                onChange={handlePhoneInput}
              />
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: usePhoneSignIn ? "none" : "" }}
            >
              <Input
                placeholder="Email"
                type="email"
                value={email}
                onChange={handleEmailInput}
              />
            </Grid>
            <Grid item xs={12}>
              <PasswordInput
                placeholder="Password"
                onChange={handlePasswordInput}
                value={password}
              />
            </Grid>
            {wantsToSignIn ? null : (
              <Grid item xs={12}>
                <PasswordInput
                  placeholder="Confirm Password"
                  value={password2}
                  onChange={handlePassword2Input}
                />
              </Grid>
            )}

            <Grid item xs={12}>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  color: "red",
                  fontSize: "16px",
                }}
              >
                {errorMessage}
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              style={{
                display: loadingShow ? "flex" : "none",
                width: "100%",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <CircularProgress style={{ color: "#1ab4b3" }} />
            </Grid>

            <Grid item xs={12}>
              <MaterialButton
                className={styles.signInButton}
                fullWidth
                onClick={handelSignin}
              >
                {wantsToSignIn ? "Sign In" : "Create Free Account"}
              </MaterialButton>
            </Grid>
            <Grid item xs={12}>
              <DialogContentText className={styles.text}>Or</DialogContentText>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: usePhoneSignIn ? "" : "none" }}
            >
              <MaterialButton
                onClick={toggleAuthMethod}
                className={styles.button}
                fullWidth
                variant="outlined"
                startIcon={<Email />}
              >
                {wantsToSignIn
                  ? "Sign In with Email"
                  : "Create Account With Email"}
              </MaterialButton>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: usePhoneSignIn ? "none" : "" }}
            >
              <MaterialButton
                onClick={toggleAuthMethod}
                className={styles.button}
                fullWidth
                variant="outlined"
                startIcon={<Phone />}
              >
                {wantsToSignIn
                  ? "Sign In With Phone"
                  : "Create Account With Phone"}
              </MaterialButton>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: usePhoneSignIn ? "none" : "" }}
            ></Grid>

            <Grid item xs={12}>
              <FacebookLogin
                appId="216041560133866"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                id="facebookLoginButton"
                cssClass="makeStyles-button-8 MuiButton-fullWidth MuiButton-outlined MuiButton-root MuiButtonBase-root"
                icon={<FacebookIcon />}
              />
            </Grid>
            <Grid item xs={12}>
              <GoogleLogin
                clientId="524553788869-2ee6gkqnehj1tvlilf8epfe031q2gphh.apps.googleusercontent.com"
                render={(renderProps) => (
                  <MaterialButton
                    className={styles.button}
                    fullWidth
                    variant="outlined"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    startIcon={<GoogleLogo />}
                  >
                    Sign In With Google
                  </MaterialButton>
                )}
                buttonText="Login With Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </Grid>

            <Grid item xs={12}>
              <DialogContentText className={styles.text}>
                * By signing up, I agree to Powrsale{" "}
                <Link to="/terms">Terms</Link> and{" "}
                <Link to="/privacy-policy">Privacy Policy</Link>
              </DialogContentText>
            </Grid>
            <Grid item xs={12}>
              <DialogContentText className={styles.text}>
                {wantsToSignIn ? "Don't have an account?" : "Have an account?"}{" "}
                <MaterialButton
                  onClick={toggleAuthType}
                  className={styles.authToggle}
                >
                  {wantsToSignIn ? "Create" : "Sign In"}
                </MaterialButton>
              </DialogContentText>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid item sm={false} md={8}>
        <div className={styles.emptyContainer} />
      </Grid>
    </Grid>
  );
}
