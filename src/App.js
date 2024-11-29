import styled from "styled-components";
import "./App.css";
import Placeholder, { PlaceholderItem } from "./Placeholder";

const A = styled(PlaceholderItem)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const B = styled(PlaceholderItem)`
  width: 400px;
`;

const C = styled(PlaceholderItem)`
  width: 200px;
`;

function App() {
  return (
    <div>
      <Placeholder>
        <A />
        <B />
        <C />
      </Placeholder>
    </div>
  );
}

export default App;
