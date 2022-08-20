import { StyledButtonBox } from "./Styles/CommonStyles";

const ButtonBox = ({ children }) => {
  return <StyledButtonBox className="buttonBox">{children}</StyledButtonBox>;
};

export default ButtonBox;
