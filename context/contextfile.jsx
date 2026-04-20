import { createContext, use, useContext, useReducer } from "react";

export const MyContext = createContext();

function Reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "RESET":
      return { ...state, counter: 1 };
      case "THEME_CHANGER":
        return{...state, theme: state.theme === "light" ? "dark" : "light"}
        default:
        return state; 
  }
}
const InitialState  = { counter: 1, theme: "light" };

function ContextFile({ children }) {

  const [state, dispatch] = useReducer(Reducer, InitialState );
  return (
    <MyContext.Provider value={{ state, dispatch}}> 
      {children}
    </MyContext.Provider>
  );
}
export default ContextFile; 
