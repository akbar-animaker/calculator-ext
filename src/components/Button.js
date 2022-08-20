import { StyledButton } from "./Styles/CommonStyles";

const Button = ({ className, value, onClick }) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {value}
    </StyledButton>
  );
};

export default Button;
