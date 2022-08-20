import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  background-color: ${(props) =>
    props.className === "equals" || props.className === "delete"
      ? "rgb(243, 122, 29)"
      : "rgba(218, 215, 237, 0.691)"};
  grid-column: ${(props) => (props.className === "delete" ? "3 / 5" : "")};
  font-size: 24px;
  height: 70%;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  outline: none;

  &:hover {
    background-color: ${(props) =>
    props.className === "equals" || props.className === "delete"
      ? "rgba(228, 114, 15, 0.91)"
      : "rgba(106, 106, 110, 0.786)"};
  }
`;

export const StyledButtonBox = styled.div`
  width: 100%;
  height: calc(100% - 110px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 10px;
`;

export const StyledScreen = styled.div`
  height: 100px;
  width: 100%;
  margin-bottom: 10px;
  padding: 0 10px;
  background-color: #555b66;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  font-weight: bold;
  box-sizing: border-box;
`;

export const StyledWrapper = styled.div`
  width: 340px;
  height: 540px;
  padding: 18px;
  border-radius: 20px;
  background-color: #485461;
  background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
`;
