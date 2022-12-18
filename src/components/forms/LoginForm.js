import { Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import PasswordInput from "../inputs/PasswordInput";

import colors from "../../lib/colors";
import styles from "../../styles/LoginForm.module.css";

const LoginForm = () => {
  return (
    <>
      <TextField
        sx={{ height: 50, mb: 2 }}
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <PasswordInput />
      <section className={styles.loginActions} sx={{ mb: 4 }}>
        <Link to="/forgot-password" className={styles.forgotBtn}>
          Forgot password?
        </Link>
        <Typography variant="body1" sx={{ color: colors.common.grey }}>
          Not registered?
          <Link to="/sign-up" className={styles.textBtn}>
            Sign up
          </Link>
        </Typography>
      </section>
    </>
  );
};

export default LoginForm;
