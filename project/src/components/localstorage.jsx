import React, { useEffect, useState } from "react";

const LocalStorage = ({ text }) => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setMsg(localStorage.getItem("myData") || "");
  }, []);

  const set = () => {
    localStorage.setItem("myData", text);
    setMsg(text);
  };

  const get = () => {
    setMsg(localStorage.getItem("myData") || "");
  };

  const remove = () => {
    localStorage.removeItem("myData");
    setMsg("");
  };

  const clearAll = () => {
    localStorage.clear();
    setMsg("");
  };

  return (
    <div className="message-box">
      <p>LOCAL STORAGE: {msg || "No data"}</p>
      <button onClick={get}>Get</button>
      <button onClick={set}>Set</button>
      <button onClick={remove}>Remove</button>
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
};

export default LocalStorage;
