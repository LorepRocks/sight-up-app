import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./admin";

onAuthStateChanged(auth, async (user) => {
  console.log("Auth changed", user);
});
