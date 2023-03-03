import { Typography, Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import styles from "../styles/ForgotPassword.module.css";
import EmailInput from "./inputs/Email";
import CTAButton from "./buttons/Button";
import Logo from "./Logo";
import { useState } from "react";
import RequestCode from "./RequestCode";
import VerifyCode from "./VerifyCode";
import ResetPassword from "./ResetPassword";

const ForgotPassword = () => {
  const [state, setState] = useState("REQUEST");

  const handleGetCode = () => {
    setState("CODE");
  };

  const handleCancel = () => {
    setState("FORGOT");
  };

  const onResendCode = () => {
    console.log("__sending code again");
  };

  const handleVerifyCode = () => {
    setState("RESET");
  };

  const handleChangePassword = () => {
    console.log("password has been changed");
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
          {state === "REQUEST" && (
            <RequestCode styles={styles} handle={handleGetCode} />
          )}
          {state === "CODE" && (
            <VerifyCode
              styles={styles}
              handle={handleVerifyCode}
              onCancel={handleCancel}
              onResendCode={onResendCode}
            />
          )}
          {state === "RESET" && (
            <ResetPassword styles={styles} handle={handleChangePassword} />
          )}
        </Box>
      </Box>
    </>
  );
};

export default ForgotPassword;
