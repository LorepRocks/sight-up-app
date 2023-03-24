import { TextField } from "@mui/material";
import { useContext } from "react";
import { getContextFromOrigin } from "../../lib/utils";

const defaultStyle = { height: 50, mb: 2 };
const TextInput = ({ styles, label, origin }) => {
  const context = useContext(getContextFromOrigin(origin));
  const stylesApplied = { ...defaultStyle, ...styles };
  return (
    <TextField
      value={context.name}
      sx={stylesApplied}
      id="outlined-basic"
      label={label}
      variant="outlined"
      onChange={(e) => context.setName(e.target.value)}
    />
  );
};

export default TextInput;
