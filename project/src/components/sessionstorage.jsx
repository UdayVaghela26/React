import React, { useEffect, useState } from "react";

const SessionStorage = ({ text }) => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setMsg(sessionStorage.getItem("myData") || "");
  }, []);

  const set = () => {
    sessionStorage.setItem("myData", text);
    setMsg(text);
  };

  const get = () => {
    setMsg(sessionStorage.getItem("myData") || "");
  };

  const remove = () => {
    sessionStorage.removeItem("myData");
    setMsg("");
  };

  const clearAll = () => {
    sessionStorage.clear();
    setMsg("");
  };

  return (
    <div className="message-box">
      <p>SESSION STORAGE:{msg || "No data"}</p>
      <button onClick={get}>Get</button>
      <button onClick={set}>Set</button>
      <button onClick={remove}>Remove</button>
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
};

export default SessionStorage;
