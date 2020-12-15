import React from "react";
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
  const [wantsToSignIn, setWantsToSignIn] = React.useState(true);
  const [data, setData] = React.useState({
    phone: null,
    email: null,
    password: null,
  });
  const [usePhoneSignIn, setPhoneSignIn] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);
  const [RedirectToReferrer, setRedirectToReferrer] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState(null);

  const theme = React.useContext(ThemeContext);
  const { from } = props.location || { from: { pathname: "/" } };

  // THIS IS WILL GIVE US A WAY TO SET THE USER OBJECT THROUGH THE CONTEXT.
  const { setUser } = React.useContext(AuthContext);
  const styles = useStyles(theme);

  async function authenticateUser(event) {
    event.preventDefault();
    event.stopPropagation();

    // alert("Clicked")

    const { phone, email, password } = data;

    if (usePhoneSignIn && (!phone || !Verifications.verifyPhone(phone))) {
      return setErrorMessage("Type a 10/9-digit number without country code");
    } else if (
      !usePhoneSignIn &&
      (!email || !Verifications.verifyEmail(email))
    ) {
      return setErrorMessage("Please type a valid email address");
    } else if (!password || !Verifications.verifyPassword(password)) {
      return setErrorMessage("Use a secure password of at least 7 characters");
    } else {
      setErrorMessage(null);
    }

    const auth = new Authentication(data);

    if (wantsToSignIn) {
      // they want to sign in
      // PLEASE DO NOT ALTER THE FUNCTION UNLESS YOU ABSOLUTELY NEED TO.
      // To CHANGE THE SIGNIN LOGIC, GO THE AUTHENTICATION CLASS AND MAKE CHAGES.
      // YOUR CHANGES WILL AUTO APPLY HERE IF YOU DON'T ALTER THE FUNCTION NAMES
      // IF YOU ALTER ANY METHOD NAMES, THEN MAKE THE NECESSARY CHANGE

      setUserInfo(await auth.signIn(usePhoneSignIn ? "phone" : "email"));
    } else if (!wantsToSignIn) {
      // they are creating an account

      // SAME COMMENTS AS THOSE ABOVE.
      setUserInfo(await auth.signUp(usePhoneSignIn ? "phone" : "email"));
    }

    if (userInfo) {
      setUser(userInfo);
      setRedirectToReferrer(true);
    }
  }

  const toggleAuthType = () => {
    setWantsToSignIn(!wantsToSignIn);
  };

  const toggleAuthMethod = () => {
    setPhoneSignIn(!usePhoneSignIn);
  };

  const handlePhoneInput = (phone) => {
    if (phone && phone.prefix != null && phone.value != null)
      return setData({ ...data, phone: `${phone.prefix}${phone.value}` });
  };

  const handleEmailInput = (events) => {
    return setData({ ...data, email: events.target.value });
  };

  const handlePasswordInput = (event) => {
    return setData({ ...data, password: event.target.value });
  };

  const pageHeader = wantsToSignIn
    ? "Sign in to your Powrsale account"
    : "Sign up to Powrsale";

  React.useEffect(() => {
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

          <form onSubmit={authenticateUser}>
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
                  onChange={handleEmailInput}
                />
              </Grid>
              <Grid item xs={12}>
                <PasswordInput
                  placeholder="Password"
                  onChange={handlePasswordInput}
                />
              </Grid>
              <Grid item xs={12}>
                <DialogContentText className={`${styles.text} ${styles.error}`}>
                  {errorMessage}
                </DialogContentText>
              </Grid>

              <Grid item xs={12}>
                <MaterialButton
                  type="submit"
                  className={styles.signInButton}
                  fullWidth
                >
                  {wantsToSignIn ? "Sign In" : "Create Free Account"}
                </MaterialButton>
              </Grid>
              <Grid item xs={12}>
                <DialogContentText className={styles.text}>
                  Or
                </DialogContentText>
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
                  Sign In with Email
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
                  {" "}
                  Sign In With Phone
                </MaterialButton>
              </Grid>
              <Grid item xs={12}>
                <MaterialButton
                  onClick={Authentication.signInWithFacebook}
                  className={styles.button}
                  fullWidth
                  variant="outlined"
                  startIcon={<Facebook />}
                >
                  Sign In with Facebook{" "}
                </MaterialButton>
              </Grid>
              <Grid item xs={12}>
                <MaterialButton
                  onClick={Authentication.signInWithGoogle}
                  className={styles.button}
                  fullWidth
                  variant="outlined"
                  startIcon={<GoogleLogo />}
                >
                  Sign In With Google
                </MaterialButton>
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
                  {wantsToSignIn
                    ? "Don't have an account?"
                    : "Have an account?"}{" "}
                  <MaterialButton
                    onClick={toggleAuthType}
                    className={styles.authToggle}
                  >
                    {wantsToSignIn ? "Create" : "Sign In"}
                  </MaterialButton>
                </DialogContentText>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
      <Grid item sm={false} md={8}>
        <div className={styles.emptyContainer} />
      </Grid>
    </Grid>
  );
}
