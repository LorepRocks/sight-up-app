import { ReactSVG } from "react-svg";
import styles from "../styles/Logo.module.css";
const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <ReactSVG src="/sightup-logo3.svg"></ReactSVG>
    </div>
  );
};

export default Logo;
