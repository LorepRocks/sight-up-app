import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/Toast.module.css";

export const Toast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={10000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      theme="colored"
      limit={1}
      transition={Slide}
      className={styles.toastContainer}
      bodyClassName={styles.body}
    />
  );
};

export default Toast;
