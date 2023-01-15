import { TextField } from "@mui/material";

const defaultStyle = { height: 50, mb: 2 };
const EmailInput = ({ styles }) => {
  const stylesApplied = { ...defaultStyle, ...styles };

  console.log(stylesApplied);

  return <TextField sx={stylesApplied} label="Email" variant="outlined" />;
};

export default EmailInput;
