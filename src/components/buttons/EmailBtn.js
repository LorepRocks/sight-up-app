import { Button } from "@mui/material";
const EmailBtn = ({ handleClick }) => {
  return (
    <Button
      sx={{ mb: 1, height: 50 }}
      variant="outlined"
      color="secondary"
      onClick={handleClick}
    >
      Sign up with Email
    </Button>
  );
};

export default EmailBtn;
