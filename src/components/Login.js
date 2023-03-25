import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Divider, Typography } from "@mui/material";
import { toast } from "react-toastify";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import Logo from "./Logo";
import Toast from "./Toast";
import GoogleBtn from "./buttons/GoogleBtn";
import styles from "../styles/Login.module.css";

import EmailBtn from "./buttons/EmailBtn";
import LoginForm from "./forms/LoginForm";
import { LoginContext } from "../context";
import { auth } from "../firebase/admin";
import { mappingErrorMessage } from "../lib/utils";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: false, password: false });
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      console.log("Auth changed", user);
      if (user) {
        navigate("/home");
      } else {
        navigate("/");
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  const handleSignUpEmail = async () => {
    try {
      const userSignIn = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userSignIn);
    } catch (err) {
      console.log(err.code);
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

      toast.error(desc);
    }
  };
  const handleSignUpGoogle = async () => {
    console.log("___google");
    const credentials = await signInWithPopup(auth, provider);
    console.log("google", credentials);
  };

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
