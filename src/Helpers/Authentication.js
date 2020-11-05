import authConfig from "../contexts/authConfig"

export default class Authentication {

    static signUpWithEmailAndPassword = function (email, password) {
        // PERFORM YOUR SIGN UP LOGIC HERE
        // THEN RETURN THE USER OBJECT
        return authConfig();

    }

    static signUpWithPhoneAndPassword = function (phone, password) {

        // PERFORM YOUR SIGN UP LOGIC HERE
        // THEN RETURN THE USER OBJECT
        return authConfig();
    }

    static signInWithEmailAndPassword = function (email, password) {
        // PERFORM YOUR SIGN IN HERE AND RETURN
        // THE USER OBJECT

        return authConfig();
    }


    static signInWitPhoneAndPassword = function (phone, password) {
        // PERFORM YOUR SIGN IN HERE AND RETURN
        // THE USER OBJECT

        return authConfig();
    }

    static updatePassword = function (password, payload) {
        // PAYLOAD REPRESENTS ANY EXTRA DATA NEEDED BY YOU BACKEND
        // YOU MAY RESTRUCTURE THIS
        // BACKEND REQUIREMENTS
        return true; // whaatever your backend returns
    }

    static signInWithGoogle = function () {
        // use the google sdk here
        // return the user object

        return authConfig();
    }

    static signInWithFacebook = function () {
        // use the facebook sdk here
        // return the user object
        return authConfig();
    }
}