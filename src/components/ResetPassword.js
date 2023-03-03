import { Typography } from "@mui/material";
import CTAButton from "./buttons/Button";
import PasswordInput from "./inputs/PasswordInput";

const ResetPassword = ({ styles, handle }) => {
  return (
    <>
      <Typography variant="subtitle1">Set a new password</Typography>
      <Typography className={styles.description} variant="subtitle2">
        Please set a new password taking in account the following
        considerations:
        <span>-Use at least one capital letter</span>
        <span>- Use at least one number</span>
        <span>- Use at least one special character</span>
      </Typography>
      <PasswordInput styles={{ ml: 4, mt: 2, width: "50%" }} />
      <PasswordInput styles={{ ml: 4, mb: 3, width: "50%" }} />
      <CTAButton styles={{ width: "35%", ml: 4 }} handleClick={handle}>
        Change Password
      </CTAButton>
    </>
  );
};

export default ResetPassword;
