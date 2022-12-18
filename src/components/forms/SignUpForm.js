import { useState } from "react";
import { TextField } from "@mui/material";
import PasswordInput from "../inputs/PasswordInput";
import GenderRadio from "../inputs/GenderRadio";

const SignUpForm = ({ handleGenderChange }) => {
  return (
    <>
      <TextField
        sx={{ height: 50, mb: 2 }}
        id="outlined-basic"
        label="Name & Lastname"
        variant="outlined"
      />
      <TextField
        sx={{ height: 50, mb: 2 }}
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <PasswordInput />
      <GenderRadio handleChange={handleGenderChange} />
    </>
  );
};

export default SignUpForm;
