import { ReactSVG } from "react-svg";
import { Divider, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";

import Logo from "./Logo";
import GoogleBtn from "./buttons/GoogleBtn";
import styles from "../styles/Login.module.css";
import toastStyles from "../styles/Toast.module.css";

import { toast } from "react-toastify";
import EmailBtn from "./buttons/EmailBtn";
import LoginForm from "./forms/LoginForm";
import { LoginContext } from "./context/LoginContext";
import { auth } from "../firebase/admin";
import {
  validateEmail,
  validatePassword,
  mappingErrorMessage,
} from "../lib/utils";
import Toast from "./Toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: false, password: false });
  const handleSignUpEmail = async () => {
    try {
      if (validatePassword(password) && validateEmail(email)) {
        setError({
          password: false,
          email: false,
        });
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("___credentials", userCredentials);
      }
    } catch (err) {
      const error = err.code ? err.code : err.message;
      const { desc, origin } = mappingErrorMessage(error);
      if (origin === "email") {
        setError({
          password: false,
          email: true,
        });
      }
      if (origin === "password") {
        setError({
          password: true,
          email: false,
        });
      }
      console.log(desc);
      toast.error(desc);
    }
  };
  const handleSignUpGoogle = () => {};

  return (
    <LoginContext.Provider
      value={{ email, setEmail, password, setPassword, error }}
    >
      <Logo />
      <Toast />
      <section className={styles.loginContainer}>
        <div className={styles.buttonsGroup}>
          <Typography variant="subtitle1">
            Welcome to
            <span className={styles.logoText}> Sightup</span>
          </Typography>
          <Typography sx={{ mb: 4 }} variant="subtitle2" gutterBottom>
            Log in to sync your content
          </Typography>
          <LoginForm />
          <Divider sx={{ mt: 1, mb: 2 }} />
          <EmailBtn handleClick={handleSignUpEmail} />
          <GoogleBtn handleClick={handleSignUpGoogle} />
        </div>
        <ReactSVG id="svgLogo" src="/splash62.svg"></ReactSVG>
      </section>
    </LoginContext.Provider>
  );
};

export default Login;
