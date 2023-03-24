import { Box } from "@mui/system";

import Logo from "./Logo";
import Logout from "./buttons/Logout";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Logo />
      <Box className={styles.container}>
        <h1>My Tasks</h1>
        <Logout />
      </Box>
    </>
  );
};

export default Home;
