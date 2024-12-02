import styled from "styled-components";

const LogInput = styled.input`
  border: none;
  display: block;
  outline: none;
  padding: 8px 0;
  border-bottom: 2px solid ${({ error }) => (error ? `#ff0000` : `#eeeeee`)};
  background-color: ${({ theme }) => theme.backgroundColor};

  &:focus {
    border-bottom: 2px solid #7760b4;
  }

  &::placeholder {
    color: #c4c5cd;
  }
`;

export default LogInput;
