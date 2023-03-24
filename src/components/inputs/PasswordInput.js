import { useState, useContext } from "react";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { VisibilityRounded, VisibilityOffRounded } from "@mui/icons-material";

import colors from "../../lib/colors";
import { getContextFromOrigin } from "../../lib/utils";

const defaultStyle = { mb: 1 };

const PasswordInput = ({ styles, origin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const stylesApplied = { ...defaultStyle, ...styles };
  const context = useContext(getContextFromOrigin(origin));

  const handleMouseDownPassword = (e) => {};
  return (
    <FormControl variant="outlined" sx={stylesApplied}>
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        sx={{ height: 50 }}
        error={context.error.password}
        id="outlined-adornment-password"
        type={showPassword ? "text" : "password"}
        value={context.password}
        onChange={(e) => context.setPassword(e.target.value)}
        label="Password"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? (
                <VisibilityOffRounded color="primary" sx={{ fontSize: 18 }} />
              ) : (
                <VisibilityRounded
                  fontSize="14"
                  sx={{ color: colors.common.grey, fontSize: 18 }}
                />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default PasswordInput;
