import styled from "styled-components";

const SIZES = {
  large: 24,
  medium: 20,
  small: 16,
};

const Input = styled.input`
  border: 2px solid ${({ error }) => (error ? `#ff0000` : `#eeeeee`)};
  border-radius: ${({ round }) => (round ? `9999` : `4`)}px;
  padding: 16px;
  outline: none;
  font-size: ${({ size }) => (size ? SIZES[size] : SIZES["medium"])}px;

  &:focus {
    border-color: ${({ error }) => (error ? `#ff0000` : `#7760b4`)};
  }
`;

export default Input;
