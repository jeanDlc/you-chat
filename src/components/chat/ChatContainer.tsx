import { FC } from "react";
import ChatList from "./ChatList";
import styled from "styled-components";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import Menu from "../Menu";

interface ChatContainerProps {}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const Panel = styled.div`
  margin-top: 4rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;
`;
const ChatContainer: FC<ChatContainerProps> = () => {
  return (
    <Panel>
      <Grid>
        <MenuContainer style={{ background: "#e1e1e1" }}>
          <Menu />
          <div style={{ flex: 1 }}>
            <input type="text" placeholder="buscador..." />
          </div>
        </MenuContainer>
        <ChatHeader />
      </Grid>
      <div
        style={{
          display: "flex",
          height: "80vh",
        }}
      >
        <div style={{ flexBasis: "25%" }}>
          <ChatList />
        </div>
        <div style={{ flex: 1 }}>
          <ChatBody />
        </div>
      </div>
    </Panel>
  );
};

export default ChatContainer;
