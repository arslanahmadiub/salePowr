import React from 'react'
import { Grid, makeStyles, Button as MaterialButton, DialogContentText } from '@material-ui/core';
import PasswordInput from '../CustomComponents/PasswordInput';
import Input from '../CustomComponents/Input';
import TwinInputSelect from '../CustomComponents/TwinInputSelect';
import { ThemeContext } from '../../contexts/ThemeContext';
import { countryCodes } from '../../DummyData/DummyData';
import { Email, Facebook, Phone } from '@material-ui/icons';
import logo from '../../assets/images/logo.png'
import Verifications from '../../Helpers/Verifications'
import Authentication from '../../Helpers/Authentication'
import GoogleLogo from '../CustomComponents/GoogleLogo';
import { AuthContext } from '../../contexts/AuthContext';



const useStyles = makeStyles((theme) => ({
    container: {

    },
    text: {
        textAlign: 'center',

    },
    error: {
        color: "red"
    },
    signInButton: {
        color: props => props.white,
        background: props => props.primaryGreen,
        textTransform: 'capitalize',
        '&:hover': {
            background: props => props.primaryGreen,
        }
    },
    authToggle: {
        color: props => props.primaryBlue,
        textTransform: 'capitalize',
        '&:hover': {
            background: "none",
        }

    },
    button: {
        textTransform: 'capitalize'
    }
}))


export default function AuthenticationPage(props) {
    const [wantsToSignIn, setWantsToSignIn] = React.useState(true)
    const [data, setData] = React.useState({ phone: null, email: null, password: null });
    const [usePhoneSignIn, setPhoneSignIn] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(null);

    const theme = React.useContext(ThemeContext);

    // THIS IS WILL GIVE US A WAY TO SET THE USER OBJECT THROUGH THE CONTEXT.
    const { setUser } = React.useContext(AuthContext);

    const styles = useStyles(theme);

    function authenticateUser(event) {
        event.preventDefault();
        event.stopPropagation();

        const { phone, email, password } = data;

        if (usePhoneSignIn && (!phone || !Verifications.verifyPhone(phone))) {
            return setErrorMessage('Type a valid 10 or 9 digit number no additional country code')
        } else if (!usePhoneSignIn && (!email || !Verifications.verifyEmail(email))) {
            return setErrorMessage('Please type a valid email address')
        } else if (!password || !Verifications.verifyPassword(password)) {
            return setErrorMessage("Use secure password at least 7 characters long")
        }
        else {
            setErrorMessage(null);
        }

        if (wantsToSignIn && usePhoneSignIn) {
            // PLEASE DO NOT ALTER THE FUNCTION UNLESS YOU ABSOLUTELY NEED TO.
            // THE CHANGE THE LOGIC OF SIGN IN, GO THE AUTHENTICATION CLASS
            // AND MAKE CHAGES WILL AUTO APPLY HERE IF YOU DON'T ALTER THE FUNCTION
            // FUNCTION NAME

            return setUser(Authentication.signInWitPhoneAndPassword(phone, password))

        } else if (wantsToSignIn && !usePhoneSignIn) { // they are using email and

            // SAME COMMENTS AS THOSE ABOVE.
            return setUser(Authentication.signInWithEmailAndPassword(email, password))

        } else if (!wantsToSignIn && usePhoneSignIn) { // they are signing up with phone

            // SAME COMMENTS AS THOSE ABOVE.
            return setUser(Authentication.signUpWithPhoneAndPassword(phone, password))

        } else if (!wantsToSignIn && !usePhoneSignIn) { // they are signing up with email

            // SAME COMMENTS AS THOSE ABOVE.
            return setUser(Authentication.signUpWithEmailAndPassword(email, password))

        }
    }

    const toggleAuthType = () => {
        setWantsToSignIn(!wantsToSignIn);
    }

    const toggleAuthMethod = () => {
        setPhoneSignIn(!usePhoneSignIn);
    }

    const handlePhoneInput = (phone) => {
        if (phone && phone.prefix != null && phone.value != null) return setData({ ...data, phone: `${phone.prefix}${phone.value}` })
    }

    const handleEmailInput = (events) => {

        return setData({ ...data, email: events.target.value })
    }

    const handlePasswordInput = (event) => { return setData({ ...data, password: event.target.value }) }



    const pageHeader = wantsToSignIn ? "Sign in to your Powrsale account" : "Sign up to Powrsale";

    React.useEffect(() => {
        setErrorMessage(null)
    }, [usePhoneSignIn, wantsToSignIn])
    return (
        <div className={styles.container}>
            <div style={styles.logo}>
                <img src={logo} />
            </div>
            <h1 className={styles.heading}>
                {pageHeader}
            </h1>

            <form onSubmit={authenticateUser}>
                <Grid container spacing={3}>
                    <Grid item xs={12} style={{ display: usePhoneSignIn ? '' : 'none' }}>
                        <TwinInputSelect list={countryCodes} placeholder="Phone Number" onChange={handlePhoneInput} />
                    </Grid>
                    <Grid item xs={12} style={{ display: usePhoneSignIn ? 'none' : '' }}>
                        <Input placeholder="Email" type="email" onChange={handleEmailInput} />
                    </Grid>
                    <Grid item xs={12}>
                        <PasswordInput placeholder="Password" onChange={handlePasswordInput} />
                    </Grid>
                    <Grid item xs={12}>
                        <DialogContentText className={`${styles.text} ${styles.error}`}>
                            {errorMessage}
                        </DialogContentText>
                    </Grid>

                    <Grid item xs={12}>
                        <MaterialButton type="submit" className={styles.signInButton} fullWidth>Sign In</MaterialButton>
                    </Grid>
                    <Grid item xs={12}>
                        <DialogContentText className={styles.text}>Or</DialogContentText>
                    </Grid>
                    <Grid item xs={12} style={{ display: usePhoneSignIn ? '' : 'none' }}>
                        <MaterialButton onClick={toggleAuthMethod} className={styles.button} fullWidth variant='outlined' startIcon={<Email />}>Sign In with Email</MaterialButton>
                    </Grid>
                    <Grid item xs={12} style={{ display: usePhoneSignIn ? 'none' : '' }}>
                        <MaterialButton onClick={toggleAuthMethod} className={styles.button} fullWidth variant='outlined' startIcon={<Phone />}> Sign In With Phone</MaterialButton>
                    </Grid>
                    <Grid item xs={12}>
                        <MaterialButton onClick={Authentication.signInWithFacebook} className={styles.button} fullWidth variant='outlined' startIcon={<Facebook />}>Sign In with Facebook </MaterialButton>
                    </Grid>
                    <Grid item xs={12}>
                        <MaterialButton onClick={Authentication.signInWithGoogle} className={styles.button} fullWidth variant='outlined' startIcon={<GoogleLogo />}>Sign In With Google</MaterialButton>
                    </Grid>
                    <Grid item xs={12}>
                        <DialogContentText className={styles.text}>
                            * By signing up, I agree to Powrsale <a href="#">Terms</a> and <a href="#">Privacy Policy</a>
                        </DialogContentText>
                    </Grid>
                    <Grid item xs={12}>
                        <DialogContentText className={styles.text}>
                            {wantsToSignIn ? "Don't have an account?" : 'Have an account?'} <MaterialButton onClick={toggleAuthType} className={styles.authToggle}>{wantsToSignIn ? 'Create' : "Sign In"}</MaterialButton>
                        </DialogContentText>
                    </Grid>

                </Grid>
            </form>
        </div>
    )
}