import { Dispatch, FC, FormEventHandler, SetStateAction } from "react";
import styled from "styled-components";
import { useUsers } from "./hooks/useUsers";
const Box = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: auto;
  overflow-x: unset;
  height: auto;
  max-height: 30rem;
`;
const Form = styled.form`
  & label {
    margin: 1rem;
  }
`;
const Button = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: 0 3px 1px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.2);
`;
const Heading = styled.h1`
  font-size: 1.5rem;
  color: #131111;
`;
const LabelCheck = styled.label`
  display: block;
  cursor: pointer;
  font-size: 1.2rem;
  & input {
    margin-right: 1rem;
  }
`;
interface NewGroupFormProps {
  hideElement: Dispatch<SetStateAction<boolean>>;
}

const NewGroupForm: FC<NewGroupFormProps> = ({ hideElement }) => {
  const { users } = useUsers();
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log("create new group");
    hideElement(false);
  };
  return (
    <Box>
      <Form onSubmit={handleSubmit}>
        <Heading>Nombre</Heading>
        <label htmlFor="name">Nombre del grupo</label>
        <input type="text" id="name" placeholder="Nombre para el grupo" />
        <Heading>Miembros</Heading>
        {users.map((user) => (
          <LabelCheck key={user.id}>
            <input type="checkbox" />
            {user.nickName}
          </LabelCheck>
        ))}
        <Button type="submit">Crear grupo</Button>
      </Form>
    </Box>
  );
};

export default NewGroupForm;
