import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Typography variant="subtitle1">Reset Password</Typography>
      <Link to="/">Home</Link>
    </>
  );
};

export default ForgotPassword;
