import { useReducer, createContext, FC } from "react";
import { db } from "../firebase";
import { IUser } from "../types";
import { doc, getDoc } from "firebase/firestore";
import { TypeChat } from "../types";
type TypeCurrentChat = {
  id: string;
  type: TypeChat;
  name: string;
};
interface State {
  user: IUser;
  currentChat: TypeCurrentChat;

  isUserActive: boolean;
}
enum ActionKind {
  CHANGE_NAME = "CHANGE_NAME",
  SET_USER = "SET_USER",
  SET_CURRENT_CHAT = "SET_CURRENT_CHAT",
}
interface UserAction {
  type: ActionKind;
  payload: any;
}
function reducer(state: State, action: UserAction): State {
  const { type, payload } = action;

  switch (type) {
    case ActionKind.CHANGE_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          nickName: payload,
        },
      };
    case ActionKind.SET_USER:
      return {
        ...state,
        isUserActive: true,

        user: payload,
      };
    case ActionKind.SET_CURRENT_CHAT:
      return {
        ...state,
        currentChat: payload,
      };
    default:
      return state;
  }
}
interface IContextProps {
  state: State;
  setUser: (user: IUser) => void;
  setCurrentChat: (currentChat: TypeCurrentChat) => void;
  logUser: (id: string) => void;
}
export const context = createContext({} as IContextProps);
export const Store: FC = ({ children }) => {
  const initialState: State = {
    currentChat: {
      id: "",
      type: "private",
      name: "",
    },
    isUserActive: false,
    user: {
      id: "",
      nickName: "",
      chats: {},
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const logUser = async (id: string) => {
    const userRef = doc(db, "users", id);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
      const user = docSnap.data() as IUser;
      user.id = docSnap.id;
      setUser(user);
    }
  };
  function setUser(user: IUser) {
    dispatch({ type: ActionKind.SET_USER, payload: user });
  }
  function setCurrentChat(currentChat: TypeCurrentChat) {
    dispatch({
      type: ActionKind.SET_CURRENT_CHAT,
      payload: currentChat,
    });
  }
  return (
    <context.Provider value={{ setUser, state, setCurrentChat, logUser }}>
      {children}
    </context.Provider>
  );
};
