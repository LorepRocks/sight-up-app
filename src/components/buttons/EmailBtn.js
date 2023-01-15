import CTAButton from "./Button";
const EmailBtn = ({ handleClick }) => {
  return (
    <CTAButton variant="outlined" color="secondary" handleClick={handleClick}>
      Sign up with Email
    </CTAButton>
  );
};

export default EmailBtn;
