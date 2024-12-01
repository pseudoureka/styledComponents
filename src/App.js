import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import SearchInput from "./SearchInput";

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

const Box = styled.div`
  ${Input} {
    margin: 8px;
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
      <h2>SIZE </h2>
      <Box>
        <Input size="small" />
        <Input size="medium" />
        <Input size="large" />
        <h2>ROUND</h2>
        <Input round />
        <h2>ERROR</h2>
        <Input error />
      </Box>
      <h2>Input</h2>
      <SearchInput />
    </>
  );
}

export default App;
