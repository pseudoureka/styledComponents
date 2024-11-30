import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import logoImg from "./codeit.png";
import Link from "./Link";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";
import KakaoButton from "./KakaoButton";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${({ theme }) => theme.backgroundColor};
    color : ${({ theme }) => theme.color};
  }
`;

const THEMES = {
  light: {
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  dark: {
    backgroundColor: "#03040c",
    color: "#ffffff",
  },
};

const Container = styled.div`
  width: 400px;
  margin: 40px auto;

  ${Input} {
    margin-bottom: 16px;
    background-color: ${({ theme }) => theme.backgroundColor};
  }

  ${Button} {
    width: 100%;
    margin: 8px 0;
  }
`;

const Logo = styled.img`
  display: block;
  width: 200px;
  margin: 16px auto;
`;

const Description = styled.div`
  text-align: center;
  color: #848187;
  margin-bottom: 16px;
`;

function App() {
  const [theme, setTheme] = useState(THEMES["light"]);

  const handleSelectChange = (e) => {
    const nextThemeName = e.target.value;
    setTheme(THEMES[nextThemeName]);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <select onChange={handleSelectChange}>
          <option value="light">라이트 모드</option>
          <option value="dark">다크 모드</option>
        </select>
        <GlobalStyle />
        <Container>
          <Logo src={logoImg} alt="codeit" />
          <Description>
            회원이 아니신가요? <Link href="#">회원가입 하기</Link>
          </Description>
          <form>
            <Label htmlFor="email">이메일</Label>
            <Input type="email" id="email" name="email" placeholder="styled@codeit.kr" />
            <Label htmlFor="password">비밀번호</Label>
            <Input type="password" id="password" name="password" placeholder="******" />
            <Button loading type="submit">
              로그인 하기
            </Button>
          </form>
          <KakaoButton>카카오 로그인</KakaoButton>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
