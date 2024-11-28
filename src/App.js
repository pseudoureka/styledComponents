import styled from "styled-components";
import logoImg from "./codeit.png";
import Link from "./Link";
import Label from "./Label";
import Input from "./Input";
import Button from "./Button";

const Container = styled.div`
  width: 400px;
  margin: 40px auto;

  ${Input} {
    margin-bottom: 16px;
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
  return (
    <>
      <Container>
        <Logo src={logoImg} alt="codeit" />
        <Description>
          회원이 아니신가요? <Link href="#">회원가입 하기</Link>
        </Description>
        <form>
          <Label htmlFor="email">이메일</Label>
          <Input type="email" id="email" name="email" placeholder="styled@codeit.kr" />
          <Label htmlFor="password">비밀번호</Label>
          <Input type="password" id="password" name="password" placeholder="비밀번호" />
          <Button>로그인 하기</Button>
        </form>
      </Container>
    </>
  );
}

export default App;
