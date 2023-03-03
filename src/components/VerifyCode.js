import { useState } from "react";
import CTAButton from "./buttons/Button";
import { Typography } from "@mui/material";
import ReactInputVerificationCode from "react-input-verification-code";
import { Box } from "@mui/system";

const VerifyCode = ({ styles, handle, onCancel, onResendCode }) => {
  const [code, setCode] = useState("");
  return (
    <>
      <Typography variant="subtitle1">Please check your email</Typography>
      <Typography className={styles.description} variant="subtitle2">
        We’ve send a code to user@user.com
      </Typography>
      <div className={styles.code}>
        <ReactInputVerificationCode
          onChange={setCode}
          value={code}
          length={5}
          className={styles.more}
        />
      </div>
      <Typography className={styles.description} variant="subtitle3">
        Didn't get a code?{" "}
        <CTAButton
          styles={{
            mt: 0,
            height: "auto",
            p: "0 .3rem .2rem",
            color: "#EF9762",
            fontWeight: "bold",
          }}
          variant="link"
          handleClick={onResendCode}
          className={styles.textBtn}
        >
          {" "}
          Click here to resend
        </CTAButton>
      </Typography>
      <Box sx={{ display: "flex", width: "100%", mt: "1rem" }}>
        <CTAButton styles={{ width: "25%", ml: 4 }} handleClick={handle}>
          Verify
        </CTAButton>
        <CTAButton
          styles={{ width: "25%", ml: 4 }}
          handleClick={onCancel}
          color="secondary"
          variant="outlined"
        >
          Cancel
        </CTAButton>
      </Box>
    </>
  );
};

export default VerifyCode;
