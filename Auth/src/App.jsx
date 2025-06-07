import React, { useState } from "react";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import "./App.css";

export default function App() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-sm p-4">
        <div className="flex justify-between mb-6 text-lg font-medium">
          <button
            onClick={() => setIsSignIn(true)}
            className={`pb-1 ${isSignIn ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-400"}`}
          >
            Log in
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`pb-1 ${!isSignIn ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-400"}`}
          >
            Sign up
          </button>
        </div>
 
        {isSignIn ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
}
