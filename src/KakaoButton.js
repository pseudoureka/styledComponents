import styled from "styled-components";
import LogButton from "./LogButton";
import kakaoIcon from "./kakao.svg";

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

const StyledButton = styled(LogButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fee500;
  color: rgba(0, 0, 0, 0.8);

  ${Icon} {
    margin-right: 8px;
  }

  &:hover {
    background-color: #fee500;
    opacity: 0.7;
  }
`;

function KakaoButton({ children, ...props }) {
  return (
    <StyledButton {...props}>
      <Icon src={kakaoIcon} alt="kakaoIcon image" />
      {children}
    </StyledButton>
  );
}

export default KakaoButton;
