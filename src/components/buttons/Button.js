import { Button } from "@mui/material";

const defaultStyle = { mt: 1, height: 50 };
const CTAButton = ({
  styles,
  variant = "contained",
  color = "primary",
  handleClick,
  children,
}) => {
  const appliedStyles = { ...defaultStyle, ...styles };

  return (
    <Button
      sx={appliedStyles}
      variant={variant}
      color={color}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default CTAButton;
