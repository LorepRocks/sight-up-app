import { useState } from "react";
import { TextField } from "@mui/material";
import PasswordInput from "../inputs/PasswordInput";
import GenderRadio from "../inputs/GenderRadio";
import EmailInput from "../inputs/Email";
import TextInput from "../inputs/TextInput";

const SignUpForm = ({ handleGenderChange }) => {
  return (
    <>
      <TextInput label="Name & Lastname" origin="signUp" />
      <EmailInput origin="signUp" />
      <PasswordInput origin="signUp" />
      <GenderRadio handleChange={handleGenderChange} />
    </>
  );
};

export default SignUpForm;
