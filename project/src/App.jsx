import React, { useState } from "react";
import Localstorage from "./components/localstorage";
import Sessionstorage from "./components/sessionstorage";
import "./App.css";

const App = () => {

  const [text, setText] = useState("");
  const [selected, setSelected] = useState("");
  return (
    <>
     <div className="container">
      <h2>Text Storage</h2>

      <input
        type="text"
        placeholder="Enter your text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div>
        <button onClick={() => setSelected("local")}>LocalStorage</button>
        <button onClick={() => setSelected("session")}>SessionStorage</button>
        <button onClick={() => setSelected("cookie")}>Cookie</button>
      </div>

      {selected === "local" && <Localstorage text={text} />}
      {selected === "session" && <Sessionstorage text={text} />}
    </div>
    </>
  )
}

export default App
