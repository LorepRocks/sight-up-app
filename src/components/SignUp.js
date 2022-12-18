import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import Logo from "./Logo";
import { constants } from "../lib/constants";
import styles from "../styles/SignUp.module.css";
import { useState } from "react";
import GoogleBtn from "./buttons/GoogleBtn";
import UserAvatar from "./Avatar";
import SignUpForm from "./forms/SignUpForm";

const SignUp = () => {
  const [defaultAvatar, setDefaultAvatar] = useState(
    constants.femaleAvatarDefaultURL
  );

  const handleGenderChange = (e) => {
    const gender = e.target.value;
    const avatarURL =
      gender === "male"
        ? constants.maleAvatarDefaultURL
        : constants.femaleAvatarDefaultURL;
    setDefaultAvatar(avatarURL);
  };
  const handleGoogleLogin = () => {};
  const handleBadgeClick = () => {
    console.log("badge clicked");
  };

  return (
    <>
      <Logo />
      <section className={styles.mainSection}>
        <ReactSVG id="splash" src="/splash4.svg" />
        <section className={styles.formSection}>
          <Typography variant="subtitle1">Create new Account</Typography>
          <Typography variant="subtitle2" sx={{ mb: 6 }}>
            Be productive in organizing all your task from today.
          </Typography>
          <Box className={styles.formContainer}>
            <UserAvatar
              handleBadgeClick={handleBadgeClick}
              defaultAvatar={defaultAvatar}
            />
            <Box className={styles.form}>
              <SignUpForm handleGenderChange={handleGenderChange} />
              <Button variant="contained" color="secondary" sx={{ height: 50 }}>
                Sign Up Now
              </Button>
              <GoogleBtn handleClick={handleGoogleLogin} />
            </Box>
          </Box>
          <Link to="/">Home</Link>
        </section>
      </section>
    </>
  );
};

export default SignUp;
