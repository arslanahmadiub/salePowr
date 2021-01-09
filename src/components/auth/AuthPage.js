import React, { useState, useEffect, createRef } from "react";
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
import Verifications from "../../Helpers/Verifications";
import Authentication from "../../Helpers/Authentication";
import GoogleLogo from "../CustomComponents/GoogleLogo";
import { AuthContext } from "../../contexts/AuthContext";
import snapshot from "./../../assets/images/snapshot.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { createUser } from "../../services/authServices";
import { loginUser } from "../../services/authServices";
import FacebookLogin from "react-facebook-login";
import FacebookIcon from "@material-ui/icons/Facebook";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router";

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
  const mobileNumber = useSelector((state) => state.auth.phoneNumber);

  let { email, password, password2 } = data;
  const [usePhoneSignIn, setPhoneSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [RedirectToReferrer, setRedirectToReferrer] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const theme = React.useContext(ThemeContext);
  const { from } = props.location || { from: { pathname: "/" } };

  // THIS IS WILL GIVE US A WAY TO SET THE USER OBJECT THROUGH THE CONTEXT.
  const { setUser } = React.useContext(AuthContext);
  const styles = useStyles(theme);

  // async function authenticateUser(event) {
  //   event.preventDefault();
  //   event.stopPropagation();

  //   // alert("Clicked")

  //   const { phone, email, password } = data;

  //   if (usePhoneSignIn && (!phone || !Verifications.verifyPhone(phone))) {
  //     return setErrorMessage("Type a 10/9-digit number without country code");
  //   } else if (
  //     !usePhoneSignIn &&
  //     (!email || !Verifications.verifyEmail(email))
  //   ) {
  //     return setErrorMessage("Please type a valid email address");
  //   } else if (!password || !Verifications.verifyPassword(password)) {
  //     return setErrorMessage("Use a secure password of at least 7 characters");
  //   } else {
  //     setErrorMessage(null);
  //   }

  //   const auth = new Authentication(data);

  //   if (wantsToSignIn) {
  //     // they want to sign in
  //     // PLEASE DO NOT ALTER THE FUNCTION UNLESS YOU ABSOLUTELY NEED TO.
  //     // To CHANGE THE SIGNIN LOGIC, GO THE AUTHENTICATION CLASS AND MAKE CHAGES.
  //     // YOUR CHANGES WILL AUTO APPLY HERE IF YOU DON'T ALTER THE FUNCTION NAMES
  //     // IF YOU ALTER ANY METHOD NAMES, THEN MAKE THE NECESSARY CHANGE

  //     setUserInfo(await auth.signIn(usePhoneSignIn ? "phone" : "email"));
  //   } else if (!wantsToSignIn) {
  //     // they are creating an account

  //     // SAME COMMENTS AS THOSE ABOVE.
  //     setUserInfo(await auth.signUp(usePhoneSignIn ? "phone" : "email"));
  //   }

  //   if (userInfo) {
  //     setUser(userInfo);
  //     setRedirectToReferrer(true);
  //   }
  // }

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
  let passRef = createRef();
  const handlePhoneInput = (phone) => {
    // if (phone && phone.prefix != null && phone.value != null)
    //   return setData({ ...data, phone: `${phone.prefix}${phone}` });
    // console.log(phone);
  };

  const handleEmailInput = (events) => {
    return setData({ ...data, email: events.target.value });
  };

  const handlePasswordInput = (event) => {
    return setData({ ...data, password: event.target.value });
  };
  const handlePassword2Input = (event) => {
    return setData({ ...data, password2: event.target.value });
  };

  let responseFacebook = (res) => {
    console.log(res);
  };

  let handelFacebookLoginClcik = () => {
    console.log("Clcik");
  };

  let responseGoogle = (res) => {};

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
          let { data } = await createUser(form_data);
          if (data.Success) {
            // setErrorMessage(
            //   `User Registered success fully... for Login ${(
            //     <a href="/overview">Click Here</a>
            //   )}`
            // );
            setErrorMessage(
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                For Login
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
        let { data } = await loginUser(loginData);

        if (data.Status) {
          localStorage.setItem("token", data.Token);
          history.push("/dashboard");
        }
      } catch (ex) {
        if (ex.response && ex.response.status === 401) {
          console.log(ex.response.data);
        }
      }
    }
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

  return (
    <Grid container spacing={0}>
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
              {/* <div className={`${styles.text} ${styles.error}`}>
                {errorMessage}
              </div> */}

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
            {/* <Grid item xs={12}>
              <MaterialButton
                className={styles.button}
                fullWidth
                variant="outlined"
                startIcon={<Facebook />}
              >
                Sign In with Facebook
              </MaterialButton>
            </Grid> */}
            <Grid item xs={12}>
              <FacebookLogin
                appId="216041560133866"
                autoLoad={false}
                fields="name,email,picture"
                callback={responseFacebook}
                id="facebookLoginButton"
                onClick={handelFacebookLoginClcik}
                cssClass="makeStyles-button-8 MuiButton-fullWidth MuiButton-outlined MuiButton-root MuiButtonBase-root"
                icon={<FacebookIcon />}
              />
            </Grid>
            <Grid item xs={12}>
              <GoogleLogin
                clientId="524553788869-24pc3oem8qsoauek5vp86h31h4gm6ioi.apps.googleusercontent.com"
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

let fbButtonStyle = {
  color: "rgba(0, 0, 0, 0.87)",
  padding: "6px 16px",
  fontSize: "0.875rem",
  minWidth: "64px",
};
