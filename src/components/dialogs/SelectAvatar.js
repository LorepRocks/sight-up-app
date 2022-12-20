import { Modal, Typography, Box, Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReactSVG } from "react-svg";

import styles from "../../styles/Dialog.module.css";
import { defaultAvatars } from "../../lib/constants";

const SelectAvatar = ({ open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-55%, -3%)",
    width: 200,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 18,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      hideBackdrop
    >
      <Box sx={style}>
        <CloseIcon
          fontSize="14"
          className={styles.closeIcon}
          onClick={handleClose}
        />
        <Box className={styles.avatarGrid}>
          {defaultAvatars.map((avatar) => (
            <Avatar
              className={styles.avatar}
              key={avatar.id}
              sx={{ width: 50, height: 50 }}
            >
              <ReactSVG src={avatar.url} />
            </Avatar>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default SelectAvatar;
