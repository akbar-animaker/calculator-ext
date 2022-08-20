import { Textfit } from "react-textfit";
import React from "react";
import { StyledScreen } from "./Styles/CommonStyles";

const Screen = ({ value }) => {
  return (
    <Textfit mode="single" max={70}>
      <StyledScreen>{value}</StyledScreen>
    </Textfit>
  );
};

export default Screen;
