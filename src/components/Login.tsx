import { FC, FormEventHandler, useState } from "react";
import { useStore } from "../hooks/useStore";
import { SmallContainer } from "../styles/utils";
import styled from "styled-components";
import { myTheme } from "../styles/my-theme";
import { ButtonBase } from "../styles/utils";
const {
  colors: { purple },
} = myTheme;
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
const Button = styled(ButtonBase)`
  background-color: ${purple};
  margin-top: 2rem;
  color: white;
  transition: background 0.2s ease-out;
  border: 1.5px solid transparent;
  &:hover {
    border: 1.5px solid ${purple};
    background-color: transparent;
    color: ${purple};
  }
`;
const Form = styled.form`
  width: 100%;
  padding: 1.5rem;
  & input {
    border: 1px solid transparent;
  }
  & input:focus {
    border: 1px solid black;
  }
  & h1 {
    margin: 0;
    margin-bottom: 2.5rem;
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
          <h1>login</h1>
          <Label htmlFor="id-user">Tu ID</Label>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="text"
            placeholder="Ingresa tu ID"
          />
          <Button type="submit">Ingresar</Button>
        </Form>
      </Main>
    </SmallContainer>
  );
};

export default Login;
