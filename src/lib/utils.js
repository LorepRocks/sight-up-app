export const errorsMap = new Map();
errorsMap.set("auth/invalid-password", {
  origin: "password",
  desc: "Password should have minimum 6 characters, at least one number, at least one uppercase characters and at least one special character.",
});
errorsMap.set("auth/invalid-email", {
  origin: "email",
  desc: "Email is incorrect. Be sure you're using a valid email.",
});
errorsMap.set("auth/email-already-exists", {
  origin: "email",
  desc: "The email provided is already in use. Try with a different one.",
});
errorsMap.set("general", {
  origin: "general",
  desc: "Oops! there was an error.",
});

export const validatePassword = (password) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  if (!regex.test(password)) {
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
  return errorsMap.get(error) || errorsMap.get("general");
};
