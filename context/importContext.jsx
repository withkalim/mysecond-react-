import { useContext, useEffect } from "react";
import { MyContext } from "./contextfile";

function ImportContextInCounter() {
  const { state, dispatch } = useContext(MyContext);

  function Increment() {
    dispatch({ type: "INCREMENT" });
  }
  function Decrement() {
    dispatch({ type: "DECREMENT" });
  }
  function Reset() {
    dispatch({ type: "RESET" });
  }
  function handleTheme() {
    dispatch({ type: "THEME_CHANGER" });
  }

  useEffect(()=>{
     document.body.className = state.theme === "light" ? "light-mode" : "dark-mode";
  },[state.theme]);

  return (
    <div>
      <button className="modeSet" onClick={handleTheme}>
        {state.theme === "light" ? "dark mode" : "light mode"}
      </button>

      <h1>Context Counter: {state.counter}</h1>
      <button onClick={Increment} className="btnforContext">
        +
      </button>
      <button onClick={Decrement} className="btnforContext">
        -
      </button>
      <button onClick={Reset} className="btnforContext">
        Reset
      </button>
    </div>
  );
}
export default ImportContextInCounter;
