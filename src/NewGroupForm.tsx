import {
  ChangeEventHandler,
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useState,
} from "react";
import styled from "styled-components";
import { useUsers } from "./hooks/useUsers";
import { ButtonMain } from "./styles/utils";
import { myTheme } from "./styles/my-theme";
import { createNewGroup } from "./lib/func";
const {
  colors: { purple },
} = myTheme;
const FormContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  padding: 0.5rem;
  background-color: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(5px);
  z-index: 3;
`;
const Box = styled.div`
  background-color: white;
  padding: 1rem;
  padding-bottom: 1.5rem;
  border-radius: 0.3rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: auto;
  overflow-x: unset;
  height: auto;
  max-height: 70vh;
  max-width: 40rem;
  margin: 0 auto;
  margin-top: 5rem;
  position: relative;
`;
const ExitBtn = styled.button`
  position: absolute;
  right: 1rem;
  top: 1rem;
  background-color: transparent;
  color: ${purple};
  content: "";
  font-size: 1rem;
  padding: 0.2rem 0.5rem;
  transition: transform 0.3s ease-out;
  &:hover {
    transform: scale(1.25);
  }
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
    margin: 0 1rem 1rem 0.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
`;
interface NewGroupFormProps {
  show: Dispatch<SetStateAction<boolean>>;
}

const NewGroupForm: FC<NewGroupFormProps> = ({ show }) => {
  const [idUsers, setIdUsers] = useState<string[]>([]);
  const [groupName, setGroupName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const { users } = useUsers();
  const validateForm = (): boolean => {
    let isCorrect: boolean = true;
    if (
      groupName.trim() == "" ||
      setGroupName.length === 0 ||
      category.trim() === ""
    ) {
      isCorrect = false;
    }
    return isCorrect;
  };
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (!isValid) {
      alert("Completa todos los campos");
      return;
    }
    //create new group
    createNewGroup(groupName, category, idUsers)
      .catch((err) => console.log(err))
      .then(() => show(false));
  };
  const handleCheckedEvent: ChangeEventHandler<HTMLInputElement> = (e) => {
    const isChecked: boolean = e.target.checked;
    const idUser: string = e.target.value;
    if (isChecked) {
      setIdUsers([...idUsers, idUser]);
    } else {
      setIdUsers(idUsers.filter((id) => id !== idUser));
    }
  };
  return (
    <FormContainer>
      <Box>
        <ExitBtn onClick={() => show(false)}>&#x2715;</ExitBtn>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Heading>Nombre</Heading>

            <input
              type="text"
              id="name"
              placeholder="Ex: Los Iracundos"
              autoFocus
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Heading>Categoría</Heading>
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option disabled value="">
                -- Elige una categoría --
              </option>
              <option value="peliculas">Películas</option>
              <option value="deporte">Deporte</option>
              <option value="deporte">Deporte</option>
              <option value="programacion">Programación</option>
              <option value="lectura">Lectura</option>
            </select>
          </FormGroup>
          <FormGroup>
            <Heading>Miembros</Heading>
            {users.map((user) => (
              <LabelCheck key={user.id}>
                <input
                  type="checkbox"
                  value={user.id}
                  onChange={handleCheckedEvent}
                />
                {user.nickName}
              </LabelCheck>
            ))}
          </FormGroup>
          <ButtonMain type="submit">Crear grupo</ButtonMain>
        </form>
      </Box>
    </FormContainer>
  );
};

export default NewGroupForm;
