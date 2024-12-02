import styled from "styled-components";

const LogButton = styled.button`
  background-color: #6500c3;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  padding: 16px;
  border-radius: ${({ round }) => (round ? `9999` : `8`)}px;

  &:hover {
    background-color: #7760b4;
  }

  &:active {
    opacity: 0.5;
  }
`;

export default LogButton;
