import { useReducer, useEffect, createContext, FC } from "react";
import { db } from "../firebase";
import { IUser } from "../types";
import { doc, getDoc } from "firebase/firestore";
interface State {
  user: IUser;
  currentChatId?: string;
  isUserActive: boolean;
}
enum ActionKind {
  CHANGE_NAME = "CHANGE_NAME",
  SET_USER = "SET_USER",
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
    default:
      return state;
  }
}
interface IContextProps {
  state: State;
  setUser: (user: IUser) => void;
}
export const context = createContext({} as IContextProps);
export const Store: FC = ({ children }) => {
  const initialState: State = {
    isUserActive: false,
    user: {
      id: "",
      nickName: "",
      chats: {},
    },
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const getUser = async () => {
      const id = "noob-master";
      const userRef = doc(db, "users", id);
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        const user = docSnap.data() as IUser;
        user.id = docSnap.id;
        setUser(user);
      }
    };
    getUser();
  }, []);
  function setUser(user: IUser) {
    dispatch({ type: ActionKind.SET_USER, payload: user });
  }
  return (
    <context.Provider value={{ setUser, state }}>{children}</context.Provider>
  );
};
