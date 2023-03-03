import CTAButton from "./buttons/Button";
import { Typography } from "@mui/material";
import EmailInput from "./inputs/Email";

const RequestCode = ({ styles, handle }) => {
  return (
    <>
      <Typography variant="subtitle1">Reset Password</Typography>
      <Typography className={styles.description} variant="subtitle2">
        Do not remember your password? Relax! Enter the email associated with
        your account and we will send a validation code to reset password.
      </Typography>
      <EmailInput styles={{ m: 4, width: "50%" }} />
      <CTAButton styles={{ width: "25%", ml: 4 }} handleClick={handle}>
        Get Code
      </CTAButton>
    </>
  );
};

export default RequestCode;
