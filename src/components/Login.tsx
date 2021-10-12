import { FC, FormEventHandler, useState } from "react";
import { useStore } from "../hooks/useStore";
import { SmallContainer } from "../styles/utils";
import styled from "styled-components";
import { ButtonMain } from "../styles/utils";
import logo from "../assets/favicon.svg";
const Label = styled.label`
  margin-bottom: 1rem;
  display: inline-block;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Form = styled.form`
  width: 100%;
  padding: 1.5rem;
  & h1 {
    margin: 0;
    text-align: center;
    text-transform: uppercase;
  }
`;
const Login: FC = () => {
  const { logUser } = useStore();
  const [id, setId] = useState<string>("");
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (id.trim() === "") return;
    logUser(id);
  };
  return (
    <SmallContainer>
      <Main>
        <Form onSubmit={handleSubmit}>
          <HeaderContainer>
            <Header>
              <img src={logo} alt="youchat" draggable={false} />
              <h1>login</h1>
            </Header>
          </HeaderContainer>
          <div style={{ marginBottom: 20 }}>
            <Label htmlFor="id-user">Tu ID</Label>
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              type="text"
              placeholder="Ingresa tu ID"
            />
          </div>
          <ButtonMain type="submit">Ingresar</ButtonMain>
        </Form>
      </Main>
    </SmallContainer>
  );
};

export default Login;
