import { useState } from "react";
import L from "./L";
import S from "./S";
import C from "./C";

function App() {
  let [state, setState] = useState(" ");

  let handlelocal = () => {
    setState("local");
  };

  let handlesession = () => {
    setState("session");
  };

  let handlecookie = () => {
    setState("cookie");
  };

  return (
    <>
      <button onClick={handlelocal}>ls</button>
      <button onClick={handlesession}>ss</button>
      <button onClick={handlecookie}>cs</button>

      {state === " " && <L />}
      {state === "local" && <L />}
      {state === "session" && <S />}
      {state === "cookie" && <C />}
    </>
  );
}

export default App;