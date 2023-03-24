import { Typography, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import PasswordInput from "../inputs/PasswordInput";

import colors from "../../lib/colors";
import styles from "../../styles/LoginForm.module.css";
import EmailInput from "../inputs/Email";

const LoginForm = () => {
  return (
    <>
      <EmailInput origin="login" />
      <PasswordInput origin="login" />
      <section className={styles.loginActions} sx={{ mb: 4 }}>
        <Link to="/forgot-password" className={styles.forgotBtn}>
          Forgot password?
        </Link>
        <Typography
          variant="body1"
          sx={{ color: colors.common.grey, fontWeight: "bold", fontSize: 13 }}
        >
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
