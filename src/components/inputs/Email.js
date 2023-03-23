import { TextField } from "@mui/material";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const defaultStyle = { height: 50, mb: 2 };
const EmailInput = ({ styles }) => {
  const loginContext = useContext(LoginContext);

  const stylesApplied = { ...defaultStyle, ...styles };

  console.log("..context login", loginContext);
  console.log(stylesApplied);

  return (
    <TextField
      error={loginContext.error.email}
      value={loginContext.email}
      sx={stylesApplied}
      label="Email"
      variant="outlined"
      onChange={(e) => loginContext.setEmail(e.target.value)}
    />
  );
};

export default EmailInput;
