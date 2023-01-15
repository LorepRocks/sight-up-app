import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

import Logo from "./Logo";
import { femaleAvatarDefaultURL, maleAvatarDefaultURL } from "../lib/constants";
import styles from "../styles/SignUp.module.css";
import { useState } from "react";
import GoogleBtn from "./buttons/GoogleBtn";
import UserAvatar from "./Avatar";
import SignUpForm from "./forms/SignUpForm";
import SelectAvatar from "./dialogs/SelectAvatar";
import SelectImage from "./dialogs/SelectImage";

const SignUp = () => {
  const [defaultAvatar, setDefaultAvatar] = useState(femaleAvatarDefaultURL);
  const [image, setImage] = useState('');

  const [open, setOpen] = useState(false);
  const [openAvatar, setOpenAvatar] = useState(false)


  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAvatar = () => {
    setOpenAvatar(false);
  };

  const handleGenderChange = (e) => {
    const gender = e.target.value;
    const avatarURL =
      gender === "male" ? maleAvatarDefaultURL : femaleAvatarDefaultURL;
    setDefaultAvatar(avatarURL);
  };
  const handleGoogleLogin = () => {};
  const handleBadgeClick = () => {
    console.log("badge clicked");
    setOpen(true);
  };

  return (
    <>
      <Logo />
      <section className={styles.mainSection}>
        <Link to="/">Home</Link>
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
              image={image || false}
            />
            <SelectImage open={open} handleClose={handleClose} setOpenAvatar={setOpenAvatar} setImage={setImage}/>
           <SelectAvatar 
              open={openAvatar} 
              handleClose={handleCloseAvatar} 
              setDefaultAvatar={setDefaultAvatar} 
              setImage={setImage}
            />
            <Box className={styles.form}>
              <SignUpForm handleGenderChange={handleGenderChange} />
              <Button variant="contained" color="secondary" sx={{ height: 50 }}>
                Sign Up Now
              </Button>
              <GoogleBtn handleClick={handleGoogleLogin} />
            </Box>
          </Box>
        </section>
      </section>
    </>
  );
};

export default SignUp;
