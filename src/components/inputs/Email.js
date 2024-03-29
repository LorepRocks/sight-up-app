import { TextField } from "@mui/material";
import { useContext } from "react";
import { getContextFromOrigin } from "../../lib/utils";

const defaultStyle = { height: 50, mb: 2 };
const EmailInput = ({ styles, origin }) => {
  const context = useContext(getContextFromOrigin(origin));
  //const loginContext = useContext(LoginContext);

  const stylesApplied = { ...defaultStyle, ...styles };

  return (
    <TextField
      error={context.error.email}
      value={context.email}
      sx={stylesApplied}
      label="Email"
      variant="outlined"
      onChange={(e) => context.setEmail(e.target.value)}
    />
  );
};

export default EmailInput;
