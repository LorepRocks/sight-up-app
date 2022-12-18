import { Button } from "@mui/material";
const GoogleBtn = ({ handleClick }) => {
  return (
    <Button
      sx={{ mt: 1, height: 50 }}
      variant="contained"
      color="primary"
      onClick={handleClick}
    >
      Sign up with Google
    </Button>
  );
};

export default GoogleBtn;
