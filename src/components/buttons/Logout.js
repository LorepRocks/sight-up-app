import { signOut } from "firebase/auth";
import { auth } from "../../firebase/admin";
import Button from "./Button";
const Logout = () => {
  const handleLogout = async () => {
    await signOut(auth);
  };
  return (
    <Button
      variant="text"
      styles={{ position: "fixed", top: "1rem", right: "3rem" }}
      handleClick={handleLogout}
    >
      Logout
    </Button>
  );
};

export default Logout;
