import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/utils";
import ChatContainer from "./components/chat/ChatContainer";
function App() {
  return (
    <Container>
      <GlobalStyle />
      <ChatContainer />
    </Container>
  );
}

export default App;
