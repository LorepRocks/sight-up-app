import { useState } from "react";
import { Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

import Logo from "./Logo";
import UserAvatar from "./Avatar";
import { SignUpContext } from "../context";
import Button from "./buttons/Button";
import GoogleBtn from "./buttons/GoogleBtn";
import SignUpForm from "./forms/SignUpForm";
import SelectAvatar from "./dialogs/SelectAvatar";
import SelectImage from "./dialogs/SelectImage";
import { auth } from "../firebase/admin";
import { femaleAvatarDefaultURL, maleAvatarDefaultURL } from "../lib/constants";
import styles from "../styles/SignUp.module.css";
import {
  validateEmail,
  validatePassword,
  mappingErrorMessage,
} from "../lib/utils";
import Toast from "./Toast";

const SignUp = () => {
  const navigate = useNavigate();
  const [defaultAvatar, setDefaultAvatar] = useState(femaleAvatarDefaultURL);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: false, password: false });

  const [open, setOpen] = useState(false);
  const [openAvatar, setOpenAvatar] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseAvatar = () => {
    setOpenAvatar(false);
  };

  const handleEmailSignUp = async () => {
    try {
      if (validateEmail(email) && validatePassword(password)) {
        setError({ password: false, email: false });
        const userCreated = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("__image", image);
        console.log("__avatar", defaultAvatar);
        console.log("___credentials", userCreated);
        console.log("___name", name);
        navigate("/home");
      }
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
    <SignUpContext.Provider
      value={{ email, setEmail, password, setPassword, error, name, setName }}
    >
      <Logo />
      <Toast />
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
            <SelectImage
              open={open}
              handleClose={handleClose}
              setOpenAvatar={setOpenAvatar}
              setImage={setImage}
            />
            <SelectAvatar
              open={openAvatar}
              handleClose={handleCloseAvatar}
              setDefaultAvatar={setDefaultAvatar}
              setImage={setImage}
            />
            <Box className={styles.form}>
              <SignUpForm handleGenderChange={handleGenderChange} />
              <Button
                variant="contained"
                color="secondary"
                sx={{ height: 50 }}
                handleClick={handleEmailSignUp}
              >
                Sign Up Now
              </Button>
              <GoogleBtn handleClick={handleGoogleLogin} />
            </Box>
          </Box>
        </section>
      </section>
    </SignUpContext.Provider>
  );
};

export default SignUp;
