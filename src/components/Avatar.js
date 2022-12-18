import { Stack, Badge, Avatar } from "@mui/material";
import { ReactSVG } from "react-svg";
import { Add } from "@mui/icons-material";

import styles from "../styles/Avatar.module.css";

const UserAvatar = ({ handleBadgeClick, defaultAvatar }) => {
  return (
    <Stack>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        color="secondary"
        className={styles.badge}
        onClick={handleBadgeClick}
        badgeContent={
          <Add sx={{ fontSize: 14, color: "#fff", borderRadius: 50 }} />
        }
      >
        <Avatar className={styles.avatar} sx={{ width: 80, height: 80 }}>
          <ReactSVG id="avatar-img" src={defaultAvatar} />
        </Avatar>
      </Badge>
    </Stack>
  );
};

export default UserAvatar;
