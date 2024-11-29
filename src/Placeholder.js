import styled, { keyframes } from "styled-components";

const placeholderGlow = keyframes`
  50% {
    opacity: 0.2;
  }
`;

export const PlaceholderItem = styled.div`
  background-color: #888888;
  height: 20px;
  margin: 8px 0;
`;

const Placeholder = styled.div`
  animation: ${placeholderGlow} 2s ease-in-out infinite;
`;

export default Placeholder;
