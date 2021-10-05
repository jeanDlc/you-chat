import { GlobalStyle } from "./styles/global";
import { Container } from "./styles/utils";
import Navigation from "./components/Navigation";
import { Store } from "./store";
function App() {
  return (
    <Container>
      <GlobalStyle />
      <Store>
        <Navigation />
      </Store>
    </Container>
  );
}

export default App;
