import styled from "styled-components";
import nailImg from "./nail.png";

export const Nail = styled.img`
  width: 16px;
  height: 16px;
`;

const StyledButton = styled.button`
  background-color: #6750a4;
  border: none;
  color: #ffffff;
  padding: 16px;
  border-radius: ${({ round }) => (round ? `9999px` : `5px`)};
  cursor: pointer;

  ${Nail} {
    margin-right: 5px;
  }

  &:hover {
    opacity: 0.5;
  }

  &:active {
    background-color: #37234d;
  }
`;

function Button({ children, ...props }) {
  return (
    <StyledButton {...props}>
      <Nail src={nailImg} alt="nail image" />
      {children}
    </StyledButton>
  );
}

export default Button;
