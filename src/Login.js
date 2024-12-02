import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import logoImg from "./codeit.png";
import Label from "./Label";
import LogInput from "./LogInput";
import LogButton from "./LogButton";
import KakaoButton from "./KakaoButton";
import { useState } from "react";

const THEMES = {
  light: {
    backgroundColor: `#ffffff`,
    color: `#000000`,
  },
  dark: {
    backgroundColor: "#121212",
    color: "#ffffff",
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color}
  }
`;

const Container = styled.div`
  margin: 40px auto;
  width: 400px;

  ${LogInput} {
    width: 100%;
    margin-bottom: 16px;
  }

  ${LogButton} {
    width: 100%;
    margin: 8px 0;
  }
`;

const Logo = styled.img`
  width: 200px;
  display: block;
  margin: 16px auto;
`;

const Description = styled.div`
  color: #848187;
  text-align: center;
`;

const Link = styled.a`
  color: #6500c3;
  font-weight: bold;
`;

function Login() {
  const [theme, setTheme] = useState(THEMES["light"]);
  const [loading, setLoading] = useState(false);

  const handleSelectChange = (e) => {
    const nextThemeName = e.target.value;
    setTheme(THEMES[nextThemeName]);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (loading === true) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <select onChange={handleSelectChange}>
          <option value="light">라이트 버튼</option>
          <option value="dark">다크 버튼</option>
        </select>
        <Container>
          <Logo src={logoImg} alt="logo image" />
          <Description>
            회원이 아니신가요? <Link href="#">회원가입 하기</Link>
          </Description>
          <form>
            <Label htmlFor="email">이메일</Label>
            <LogInput type="email" id="email" name="email" placeholder="styled@codeit.kr" />
            <Label htmlFor="password">비밀번호</Label>
            <LogInput type="password" id="password" name="password" placeholder="***********" />
            <LogButton onClick={handleClick} loading={loading} type="submit">
              로그인 하기
            </LogButton>
          </form>
          <KakaoButton>카카오 로그인</KakaoButton>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Login;
