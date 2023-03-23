export const errorsMap = new Map();
errorsMap.set("auth/invalid-password", {
  origin: "password",
  desc: "Password should have minimum 6 characters, at least one number, at least one uppercase characters and at least one special character.",
});
errorsMap.set("auth/invalid-email", {
  origin: "email",
  desc: "Email is incorrect. Be sure you're using a valid email.",
});
errorsMap.set("auth/email-already-in-use", {
  origin: "email",
  desc: "The email provided is already in use. Try with a different one.",
});
errorsMap.set("general", {
  origin: "general",
  desc: "Oops! there was an error.",
});

export const validatePassword = (password) => {
  console.log(password);
  const uppercaseRegExp = /(?=.*?[A-Z])/;
  const lowercaseRegExp = /(?=.*?[a-z])/;
  const digitsRegExp = /(?=.*?[0-9])/;
  const specialCharRegExp = /(?=.*?[#?!@$%^&*-.])/;
  const minLengthRegExp = /.{6,}/;
  const passwordLength = password.length;
  const uppercasePassword = uppercaseRegExp.test(password);
  const lowercasePassword = lowercaseRegExp.test(password);
  const digitsPassword = digitsRegExp.test(password);
  const specialCharPassword = specialCharRegExp.test(password);
  const minLengthPassword = minLengthRegExp.test(password);

  if (
    !passwordLength ||
    !uppercasePassword ||
    !lowercasePassword ||
    !digitsPassword ||
    !specialCharPassword ||
    !minLengthPassword
  ) {
    throw new Error("auth/invalid-password");
  }
  return true;
};

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    throw new Error("auth/invalid-email");
  }
  return true;
};

export const mappingErrorMessage = (error) => {
  console.log(error);
  return errorsMap.get(error) || errorsMap.get("general");
};
