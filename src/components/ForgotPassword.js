import { Typography, Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import styles from "../styles/ForgotPassword.module.css";
import EmailInput from "./inputs/Email";
import CTAButton from "./buttons/Button";
import Logo from "./Logo";

const ForgotPassword = () => {
  const handleGetCode = () => {
    console.log("__Get code");
  };
  return (
    <>
      <Logo />
      <Box className={styles.container}>
        <Box>
          <Link to="/" className={styles.backBtn}>
            Home
          </Link>
          <ReactSVG id="svgLogo" src="/splash.svg"></ReactSVG>
        </Box>
        <Box className={styles.resetContainer}>
          <Typography variant="subtitle1">Reset Password</Typography>
          <Typography className={styles.description} variant="subtitle2">
            Do not remember your password? Relax! Enter the email associated
            with your account and we will send a validation code to reset
            password.
          </Typography>
          <EmailInput styles={{ m: 4, width: "50%" }} />
          <CTAButton
            styles={{ width: "25%", ml: 4 }}
            handleClick={handleGetCode}
          >
            Get Code
          </CTAButton>
        </Box>
      </Box>
    </>
  );
};

export default ForgotPassword;
