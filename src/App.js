import styled from "styled-components";
import "./App.css";
import { SignIn } from "./Pages/signinsignup/Signin";

function App() {
  return (
    <Container>
      <SignIn />
    </Container>
  );
}

export default App;

const Container = styled.div``;
