import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";

const Container = styled.div`
  margin: 40px auto;
  width: 400px;

  ${Input} {
    box-sizing: border-box;
    display: block;
    margin: 8px 0 16px;
    width: 100%;
  }
`;

function App() {
  return (
    <>
      <Container>
        <Button round>Hello Styled!</Button>
        <br />
        <Input />
      </Container>
      <Container>
        <h1>로그인</h1>
        <label htmlFor="email">Email</label>
        <Input type="email" id="email" placeholder="codeit@gmail.com"></Input>
        <label htmlFor="password">Password</label>
        <Input type="password" id="password" placeholder="**********"></Input>
      </Container>
    </>
  );
}

export default App;
