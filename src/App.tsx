import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/utils";
import ChatContainer from "./components/chat/ChatContainer";
import { Store } from "./store";
function App() {
  return (
    <Container>
      <GlobalStyle />
      <Store>
        <ChatContainer />
      </Store>
    </Container>
  );
}

export default App;
