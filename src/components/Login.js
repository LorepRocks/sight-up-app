import { useState } from "react";
import { ReactSVG } from "react-svg";
import {
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  Button,
  Divider,
  Typography,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import "../styles/login.css";
import Logo from "./Logo";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignUpEmail = () => {};

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Logo />
      <section className="loginContainer">
        <div className="buttonsGroup">
          <Typography
            sx={{ "font-weight": "bold", "font-size": 20 }}
            variant="subtitle1"
          >
            Welcome to SightUp
          </Typography>
          <Typography
            sx={{ mb: 2 }}
            variant="caption"
            component="h6"
            gutterBottom
          >
            Log in to sync your content
          </Typography>
          <TextField
            sx={{ height: 50 }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <FormControl variant="outlined" sx={{ mt: 3, mb: 3 }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              sx={{ height: 50 }}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                      <VisibilityOff color="primary" />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            sx={{ mb: 1 }}
            variant="outlined"
            color="secondary"
            onClick={handleSignUpEmail}
          >
            Sign up with Email
          </Button>
          <Divider sx={{ mt: 1, mb: 1 }} />
          <Button
            sx={{ mt: 1 }}
            variant="contained"
            onClick={handleSignUpEmail}
          >
            Sign up with Google
          </Button>
        </div>
        <ReactSVG id="svgLogo" src="/splash62.svg"></ReactSVG>
      </section>
    </>
  );
};

export default Login;
