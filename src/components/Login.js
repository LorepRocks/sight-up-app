import { ReactSVG } from "react-svg";
import { Divider, Typography } from "@mui/material";

import Logo from "./Logo";
import GoogleBtn from "./buttons/GoogleBtn";
import styles from "../styles/Login.module.css";
import EmailBtn from "./buttons/EmailBtn";
import LoginForm from "./forms/LoginForm";

const Login = () => {
  const handleSignUpEmail = () => {};
  const handleSignUpGoogle = () => {};
  return (
    <>
      <Logo />
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
    </>
  );
};

export default Login;
